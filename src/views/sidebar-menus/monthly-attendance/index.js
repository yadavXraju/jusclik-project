import React, { useState, useEffect } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Divider,
  Typography,
  ListItem,
  ListItemText,
  Paper,
  Button,
  Grid,
  Badge,
  Avatar,
  ListItemAvatar
} from '@mui/material';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AvtarImg from '../../../assets/images/avatar.png';
import { ClassList } from '../attendance-entry/ClassList';
import { SectionList } from '../attendance-entry/SectionList';
import { StudentList } from '../attendance-entry/StudentList';
import AttendanceActions from './AttendanceActions';
import WarningBox from '../attendance-entry/WarningBox';
import { styled } from '@mui/material/styles';

// Styled Paper component for custom styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

// Styled Badge component for custom styling
const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    opacity: '0.7'
  }
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
          <Box sx={{ minWidth: 250, display: 'flex', alignItems: 'baseline', p: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select Month"
                openTo="month"
                views={['month', 'year']}
                value={selectedMonth}
                onChange={handleMonthChange}
                slots={{ openPickerIcon: CalendarMonthTwoToneIcon }}
              />
            </LocalizationProvider>

            {/* Class selection */}
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="class-select-label">Select Class</InputLabel>
              <Select
                name="class"
                labelId="class-select-label"
                id="class-select"
                value={selectClass}
                label="Select Class"
                onChange={handleChange}
              >
                {ClassList.map((classItem) => (
                  <MenuItem key={classItem.value} value={classItem.value}>
                    {classItem.class}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Section selection */}
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel id="section-select-label">Select Section</InputLabel>
              <Select
                name="section"
                labelId="section-select-label"
                id="section-select"
                value={selectSection}
                label="Select Section"
                onChange={handleChange}
              >
                {(selectClass && filteredSections.length > 0 ? filteredSections : SectionList).map((sectionItem) => (
                  <MenuItem key={sectionItem.value} value={sectionItem.value}>
                    {sectionItem.section}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Search button */}
            <Button
              variant="contained"
              startIcon={<SearchTwoToneIcon />}
              sx={{ height: '50px', borderRadius: '12px', margin: '8px' }}
              onClick={handleSearchClick}
            >
              Search
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Avatars legend */}
      <Box sx={{ mt: 1 }}>
        <Paper sx={{ mb: 1, display: 'flex' }}>
          <Grid
            container
            fullwidth
            direction="row"
            justifyContent="Center"
            marginRight="-150px"
            alignItems="Center"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* Render avatars legend */}
            {/* H */}
            <Grid item>
              <Item>
                <Typography variant="h4" color="#364152" display="flex" alignItems="center">
                  <StyledBadge color="primary" overlap="circular" badgeContent={countSelectedStatus('H')}>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#7dceeb',
                        color: '#000000',
                        marginRight: '6px',
                        fontSize: '16px'
                      }}
                    >
                      H
                    </Avatar>
                  </StyledBadge>
                  -Holiday
                </Typography>
              </Item>
            </Grid>
            {/* P */}
            <Grid item>
              <Item>
                <Typography variant="h4" color="#364152" display="flex" alignItems="center">
                  <StyledBadge color="primary" overlap="circular" badgeContent={countSelectedStatus('P')}>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#7bc67b',
                        color: '#000000',
                        marginRight: '6px',
                        fontSize: '16px'
                      }}
                    >
                      P
                    </Avatar>
                  </StyledBadge>
                  -Present
                </Typography>
              </Item>
            </Grid>
            {/* A */}
            <Grid item>
              <Item>
                <Typography variant="h4" color="#364152" display="flex" alignItems="center">
                  <StyledBadge color="primary" overlap="circular" badgeContent={countSelectedStatus('A')}>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#e2526b',
                        color: '#000000',
                        marginRight: '6px',
                        fontSize: '16px'
                      }}
                    >
                      A
                    </Avatar>
                  </StyledBadge>
                  -Absent
                </Typography>
              </Item>
            </Grid>
            {/* L */}
            <Grid item>
              <Item>
                <Typography variant="h4" color="#364152" display="flex" alignItems="center">
                  <StyledBadge color="primary" overlap="circular" badgeContent={countSelectedStatus('L')}>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#eeb058',
                        color: '#000000',
                        marginRight: '6px',
                        fontSize: '16px'
                      }}
                    >
                      L
                    </Avatar>
                  </StyledBadge>
                  -Leave
                </Typography>
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
        <Paper sx={{ listStyleType: 'none' }}>
          <Grid container>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', mt: 4 }}>
                  <ListItem>
                    <ListItemText sx={{ flex: '0 0 30%' }}>
                      <Typography variant="h4" color="text.primary">
                        Adm No.
                      </Typography>
                    </ListItemText>
                    <ListItemText sx={{ flex: '0 0 42%' }}>
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
                        <Avatar src={AvtarImg} sx={{ width: 40, height: 40 }} />
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
            <Grid item xs={8}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'auto',
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
                                    P: '#7bc67b',
                                    A: '#e2526b',
                                    L: '#eeb058'
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
