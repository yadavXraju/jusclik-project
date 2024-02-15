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
  ListItemAvatar,
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    opacity: '0.7'
  }
}));

export default function AttendanceEntry() {
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


  const handleMonthChange = (date) => {
    setSelectedMonth(date);
  };

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

  useEffect(() => {
    generateDateList();
  }, [selectedMonth]);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'class') {
      setSelectClass(value);
    } else if (name === 'section') {
      setSelectSection(value);
    }
  };

  const handleAvatarClick = (currentAvatar, studentId, date) => {
    // Define the possible avatar states
    const avatarStates = ['P', 'A', 'L', 'H'];

    // Find the index of the current avatar state
    const currentIndex = avatarStates.indexOf(currentAvatar);

    // Calculate the index of the next avatar state, looping back to the beginning if necessary
    const nextIndex = (currentIndex + 1) % avatarStates.length;

    // Get the next avatar state
    const nextAvatar = avatarStates[nextIndex];

    // Ensure that the selectedAvatars object is initialized for the selected date
    const selectedDateKey = date.format('DD-MM-YYYY');
    const updatedAvatars = {
      ...selectedAvatars,
      [selectedDateKey]: {
        ...(selectedAvatars[selectedDateKey] || {})
      }
    };

    // Update the avatar state for the clicked student and date
    updatedAvatars[selectedDateKey][studentId] = nextAvatar;

    // Update the state with the new avatar selection
    setSelectedAvatars(updatedAvatars);

  };

  const calculateWorkingDays = (student) => {
    const presentCount = Object.values(selectedAvatars[student.id] || {}).filter((avatar) => avatar === 'P').length;
    const absentCount = Object.values(selectedAvatars[student.id] || {}).filter((avatar) => avatar === 'A').length;
    const totalDays = presentCount + absentCount;
    const presentString = presentCount > 0 ? `${presentCount}P` : '0P';
    const absentString = absentCount > 0 ? `+${absentCount}A` : '+0A';
    return `${presentString}${absentString}=${totalDays} Day${totalDays === 1 ? '' : 's'}`;
  };

  const countSelectedStatus = (status) => {
    const count = Object.values(selectedAvatars).filter((avatar) => avatar === status).length;
    return count;
  };

  const filterStudentList = (classValue, sectionValue) => {
    const filteredStudents = StudentList.filter((student) => student.class === classValue && student.section === sectionValue);
    setFilteredStudentList(filteredStudents);
  };

  const handleSearchClick = () => {
    console.log('Search button clicked');
    filterStudentList(selectClass, selectSection);
  };

  const updateAvatars = (action, date) => {
    const updatedAvatars = {};

    filteredStudentList.forEach((student) => {
      updatedAvatars[student.id] = action.charAt(0).toUpperCase();
    });
    setSelectedAvatars((prevAvatars) => ({
      ...prevAvatars,
      [date.format('DD-MM-YYYY')]: updatedAvatars
    }));
    setGlobalAttendanceAction(action);
  };

  const handleActionsConfirm = (selectedAction, date) => {
    if (selectedAction === 'mark all holiday') {
      updateAvatars('H', date);
    } else if (selectedAction === 'mark all present') {
      updateAvatars('P', date);
    } else if (selectedAction === 'mark all absent') {
      updateAvatars('A', date);
    }
    setConfirmationDialogOpen(false);
  };

  useEffect(() => {
    const filteredSections = SectionList.filter((section) => section.class === selectClass);
    setFilteredSections(filteredSections);
    setSelectSection('');
  }, [selectClass]);

  return (
    <Box>
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
        <WarningBox
          showWarning={showWarningBox}
          onClose={() => setShowWarningBox(false)}
          totalStudents={filteredStudentList.length}
          absentCount={countSelectedStatus('A')}
        />
      </Box>

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

            <Grid item xs={8}>
              <Box sx={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                <Box sx={{ flex: '0 0 70%', display: 'flex' }}>
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
                            onConfirm={handleActionsConfirm}
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
                                  selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] === 'P'
                                    ? '#7bc67b'
                                    : selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] === 'A'
                                    ? '#e2526b'
                                    : selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] === 'L'
                                    ? '#eeb058'
                                    : '#7dceeb80',
                                '&:hover': {
                                  bgcolor:
                                    selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] === 'P'
                                      ? '#7bc67b'
                                      : selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] === 'A'
                                      ? '#e2526b'
                                      : selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] === 'L'
                                      ? '#eeb058'
                                      : '#7dceeb'
                                },
                                width: 40,
                                height: 40,
                                cursor: 'pointer',
                                color: '#000000',
                                fontWeight: 500
                              }}
                              onClick={() =>
                                handleAvatarClick(selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] || 'H', student.id, date)
                              } // Select Present avatar
                            >
                              {selectedAvatars[date.format('DD-MM-YYYY')]?.[student.id] || 'H'} {/* Display selected avatar or "H" */}
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
