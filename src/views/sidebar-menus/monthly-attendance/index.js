import React, { useState, useEffect } from 'react';
import { Box, Divider, Typography, ListItem, ListItemText, Paper, Grid, Avatar, ListItemAvatar, useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
// import AvtarImg from '../../../assets/images/avatar.png';
import { useTheme } from '@emotion/react';
import { ClassList } from '../attendance-entry/ClassList';
import { SectionList } from '../attendance-entry/SectionList';
import { StudentList } from '../attendance-entry/StudentList';
import AttendanceActions from './AttendanceActions';
import WarningBox from '../attendance-entry/WarningBox';
import { styled } from '@mui/material/styles';
import AvatarLegend from '../attendance-entry/AvatarLegend';
import SearchFilterBox from '../attendance-entry/SeachFilter';

// Styled Paper component for custom styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export default function AttendanceEntry() {
  // State variables declaration
  const [selectClass, setSelectClass] = useState('');
  const [selectSection, setSelectSection] = useState('');
  const [selectedAvatars, setSelectedAvatars] = useState({});
  const [filteredStudentList, setFilteredStudentList] = useState([]);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [globalAttendanceAction, setGlobalAttendanceAction] = useState('');
  const [showWarningBox, setShowWarningBox] = useState(false);
  const [filteredSections, setFilteredSections] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(dayjs());
  const [dates, setDates] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Function to handle month change
  const handleMonthChange = (date) => {
    setSelectedMonth(date);
  };

  // Function to generate date list for the selected month
  const generateDateList = () => {
    const startDate = selectedMonth.clone().startOf('month');
    const endDate = selectedMonth.clone().endOf('month');
    const datesArray = [];
    let currentDate = startDate;
    while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
      datesArray.push(dayjs(currentDate));
      currentDate = currentDate.add(1, 'day');
    }
    setDates(datesArray);
  };

  // Effect hook to generate date list when selected month changes
  useEffect(() => {
    generateDateList();
  }, [selectedMonth]);

  // Effect hook to initialize student list and avatar selection
  useEffect(() => {
    const sortedStudentList = [...StudentList].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredStudentList(sortedStudentList);

    const defaultAvatars = {};
    sortedStudentList.forEach((student) => {
      defaultAvatars[student.id] = 'H';
    });
    setSelectedAvatars(defaultAvatars);

    const absentCount = sortedStudentList.filter((student) => student.countSelectedStatus === 'Absent').length;
    const totalStudents = sortedStudentList.length;
    const absentPercentage = (absentCount / totalStudents) * 100;
    setShowWarningBox(absentPercentage > 50);
  }, []);

  // Function to handle class and section change
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'class') {
      setSelectClass(value);
    } else if (name === 'section') {
      setSelectSection(value);
    }
  };

  // Function to handle click on avatar
  const handleAvatarClick = (currentAvatar, studentId, date) => {
    const avatarStates = ['P', 'A', 'L', 'H'];
    const currentIndex = avatarStates.indexOf(currentAvatar);
    const nextIndex = (currentIndex + 1) % avatarStates.length;
    const nextAvatar = avatarStates[nextIndex];

    // Ensure selectedAvatars for the date is properly initialized
    const selectedDateKey = date.format('DD-MM-YYYY');
    const updatedAvatars = {
      ...selectedAvatars,
      [selectedDateKey]: {
        ...(selectedAvatars[selectedDateKey] || {}) // Preserve existing avatars for the date
      }
    };

    // Update the avatar state for the clicked student and date
    updatedAvatars[selectedDateKey][studentId] = nextAvatar;

    // Update the state with the new avatar selection
    setSelectedAvatars(updatedAvatars);
  };

  const calculateWorkingDays = (student) => {
    let presentCount = 0;
    let absentCount = 0;

    // Iterate over dates and count 'P' and 'A' avatars for the student
    dates.forEach((date) => {
      const avatar = selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id];
      if (avatar === 'P') {
        presentCount++;
      } else if (avatar === 'A') {
        absentCount++;
      }
    });

    // Calculate total days and format the result
    const totalDays = presentCount + absentCount;
    const presentString = presentCount > 0 ? `${presentCount}P` : '0P';
    const absentString = absentCount > 0 ? `+${absentCount}A` : '+0A';
    return `${presentString}${absentString}=${totalDays} Day${totalDays === 1 ? '' : 's'}`;
  };

  // Function to count selected status
  const countSelectedStatus = (status) => {
    const count = Object.values(selectedAvatars).filter((avatar) => avatar === status).length;
    return count;
  };

  // Function to filter student list based on class and section
  const filterStudentList = (classValue, sectionValue) => {
    const filteredStudents = StudentList.filter((student) => student.class === classValue && student.section === sectionValue);
    setFilteredStudentList(filteredStudents);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    console.log('Search button clicked');
    filterStudentList(selectClass, selectSection);
  };

  const handleActionsConfirm = (selectedAction, date) => {
    // Ensure date is a valid dayjs object
    const formattedDate = dayjs(date); // Assuming date is already in the correct format

    // Define a mapping of actions to avatar states
    const actionToAvatar = {
      'mark all holiday': 'H',
      'mark all present': 'P',
      'mark all absent': 'A'
    };

    // Get the corresponding avatar state for the selected action
    const avatarState = actionToAvatar[selectedAction];

    // Update the state with the new avatar selection for each student on the specified date
    const updatedAvatars = {};
    filteredStudentList.forEach((student) => {
      updatedAvatars[student.id] = avatarState;
    });

    // Update the avatar state only for the selected date
    setSelectedAvatars((prevAvatars) => ({
      ...prevAvatars,
      [formattedDate.format('DD-MM-YYYY')]: updatedAvatars
    }));

    // Set the global attendance action
    setGlobalAttendanceAction(selectedAction);

    // Close the confirmation dialog
    setConfirmationDialogOpen(false);
  };

  // Effect hook to filter sections when class changes
  useEffect(() => {
    const filteredSections = SectionList.filter((section) => section.class === selectClass);
    setFilteredSections(filteredSections);
    setSelectSection('');
  }, [selectClass]);

  return (
    <Box>
      {/* Month selection */}
      <Box>
        <Paper sx={{ borderRadius: '30px' }}>
          <SearchFilterBox
            selectClass={selectClass}
            selectSection={selectSection}
            filteredSections={filteredSections}
            ClassList={ClassList}
            SectionList={SectionList}
            handleChange={handleChange}
            handleSearchClick={handleSearchClick}
            datePickerLabel={'Select-Month'}
            datePickerValue={selectedMonth}
            datePickerOpenTo={'month'}
            datePickerViews={['month', 'year']}
            handleMonthChange={handleMonthChange}
          />
        </Paper>
      </Box>

      {/* Avatars legend */}
      <Box sx={{ mt: 1 }}>
        <Paper sx={{ mb: 1, display: 'flex' }}>
          {/* Avatar Legend */}
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Item>
                <AvatarLegend
                  legendItems={[
                    { avatar: 'H', label: 'Holiday', avatarColor: '#7dceeb', badgeContent: countSelectedStatus('H') },
                    { avatar: 'P', label: 'Present', avatarColor: '#7bc67b', badgeContent: countSelectedStatus('P') },
                    { avatar: 'A', label: 'Absent', avatarColor: '#e2526b', badgeContent: countSelectedStatus('A') },
                    { avatar: 'L', label: 'Leave', avatarColor: '#eeb058', badgeContent: countSelectedStatus('L') }
                  ]}
                />
              </Item>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box sx={{ mt: 1 }}>
        {/* Warning box for high absent percentage */}
        <WarningBox
          showWarning={showWarningBox}
          onClose={() => setShowWarningBox(false)}
          totalStudents={filteredStudentList.length}
          absentCount={countSelectedStatus('A')}
        />
      </Box>

      {/* Student list */}
      <Box>
        <Paper sx={{ listStyleType: 'none', overflow:isMobile?'auto':'none' }}>
          <Grid container>
            <Grid item xs={11} md={6} sm={8} lg={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', marginTop: isMobile ? '12px' : '32px' }}>
                  <ListItem>
                    <ListItemText sx={{ flex: '0 0 30%' }}>
                      <Typography variant="h4" color="text.primary">
                        Adm No.
                      </Typography>
                    </ListItemText>
                    <ListItemText sx={{ flex:isMobile?'0 0 48%': '0 0 42%' }}>
                      <Typography variant="h4">Student Name</Typography>
                    </ListItemText>
                    <ListItemText sx={{ flex: '0 0 28%', justifyContent: 'center' }}>
                      <Typography variant="h4" color="text.primary">
                        Working Days
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </Box>
                <Divider />
                {/* Render filtered student list */}
                {filteredStudentList.map((student) => (
                  <React.Fragment key={student.id}>
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                      <Typography sx={{ flex: '0 0 20%' }} variant="h5" color="text.primary">
                        {student.admnNo}
                      </Typography>
                      <ListItemAvatar>
                        <Avatar src={student.avatar} sx={{ width: 40, height: 40, background:'none' }} />
                      </ListItemAvatar>
                      <Typography sx={{ flex: '0 0 40%' }} variant="h5">
                        {student.name}
                      </Typography>
                      <Typography variant="h5" sx={{ flex: '0 0 25%' }}>
                        {calculateWorkingDays(student)}
                      </Typography>
                    </Box>
                    <Divider />
                  </React.Fragment>
                ))}
              </Box>
            </Grid>

            {/* Right section for avatar selection */}
            <Grid item xs={1} md={6} sm={4} lg={8}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: isMobile? 'none': 'auto',
                  '&::-webkit-scrollbar': {
                    height: 7 // Set the height of the scrollbar to 0 to hide it
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#90caf9', // Set the height of the scrollbar to 0 to hide it
                    borderRadius: '10px'
                  }
                }}
              >
                <Box sx={{ flex: '0 0 70%', display: 'flex' }}>
                  {/* Render date headers */}
                  {dates.map((date) => (
                    <ListItem
                      key={date.format('DD-MM-YYYY')}
                      sx={{
                        display: 'block',
                        textAlign: 'center',
                        borderLeft: '1px solid #eef2f6',
                        borderBottom: '1px solid #eef2f6',
                        py: 0,
                        pl: '22px',
                        pr: '50px',
                        width: '60px',
                        '&:hover': {
                          backgroundColor: '#F5F5F5' // Change background color on hover to grey
                        }
                      }}
                    >
                      <ListItemText>
                        <Typography variant="h4" color="text.primary" sx={{ cursor: 'pointer' }}>
                          <AttendanceActions
                            open={isConfirmationDialogOpen}
                            action={globalAttendanceAction}
                            onConfirm={(action) => handleActionsConfirm(action, date)} // Pass the selected date to the handleActionsConfirm function
                            date={date}
                          />
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </Box>

                {/* Render "H" avatars with border */}
                {filteredStudentList.map((student) => (
                  <React.Fragment key={student.id}>
                    <ListItem sx={{ display: 'flex', m: 0, p: 0 }}>
                      {dates.map((date) => (
                        <React.Fragment key={date.format('DD-MM-YYYY')}>
                          {/* Wrap avatar with div for border */}
                          <div
                            style={{
                              borderLeft: '1px solid #eef2f6',
                              borderBottom: '1px solid #eef2f6',
                              padding: '16px'
                            }}
                          >
                            <Avatar
                              sx={{
                                bgcolor:
                                  {
                                    P: '#7bc67b80',
                                    A: '#e2526b80',
                                    L: '#eeb05880'
                                  }[selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id]] || '#7dceeb80',
                                '&:hover': {
                                  bgcolor:
                                    {
                                      P: '#7bc67b',
                                      A: '#e2526b',
                                      L: '#eeb058'
                                    }[selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id]] || '#7dceeb'
                                },
                                width: 40,
                                height: 40,
                                cursor: 'pointer',
                                color: '#000',
                                fontWeight: 500
                              }}
                              onClick={() =>
                                handleAvatarClick(selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] || 'H', student.id, date)
                              }
                            >
                              {selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] || 'H'}
                            </Avatar>
                          </div>
                        </React.Fragment>
                      ))}
                    </ListItem>
                  </React.Fragment>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
