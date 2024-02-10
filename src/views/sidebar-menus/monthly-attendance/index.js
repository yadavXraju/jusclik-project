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
  Stack
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
  const [dates, setDates] = useState([]); // Declare the dates state variable

  const handleMonthChange = (date) => {
    setSelectedMonth(date);
  };

  const formatDate = (date) => {
    return dayjs(date).format('DD');
  };

  // Update generateDateList function to set the dates state
  const generateDateList = () => {
    const startDate = selectedMonth.clone().startOf('month');
    const endDate = selectedMonth.clone().endOf('month');
    const datesArray = [];
    let currentDate = startDate;
    while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
      datesArray.push(dayjs(currentDate)); // Convert currentDate to dayjs object before pushing
      currentDate = currentDate.add(1, 'day');
    }
    setDates(datesArray); // Set the state with the array of dates
  };

  // Call generateDateList function whenever the selectedMonth changes
  useEffect(() => {
    generateDateList();
  }, [selectedMonth]);

  // Initialize filteredStudentList with the original StudentList when the component mounts, sorted alphabetically by student name
  useEffect(() => {
    const sortedStudentList = [...StudentList].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredStudentList(sortedStudentList);

    // Set default avatar selection to 'H' (holiday) for all students
    const defaultAvatars = {};
    sortedStudentList.forEach((student) => {
      defaultAvatars[student.id] = 'H';
    });
    setSelectedAvatars(defaultAvatars);

    // Calculate absence percentage and show warning box if necessary
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

  const handleAvatarClick = (avatar, studentId) => {
    setSelectedAvatars((prevAvatars) => ({
      ...prevAvatars,
      [studentId]: prevAvatars[studentId] === avatar ? prevAvatars[studentId] : avatar
    }));

    const absentCount = countSelectedStatus('A');
    const totalStudents = filteredStudentList.length;
    const absentPercentage = Math.floor((absentCount / totalStudents) * 100);
    setShowWarningBox(absentPercentage >= 50);
  };

  const countSelectedStatus = (status) => {
    const count = Object.values(selectedAvatars).filter((avatar) => avatar === status).length;
    console.log(`Count of ${status}:`, count);
    return count;
  };

  const filterStudentList = (classValue, sectionValue) => {
    console.log('Filtering student list:', classValue, sectionValue);
    const filteredStudents = StudentList.filter((student) => student.class === classValue && student.section === sectionValue);
    console.log('Filtered students:', filteredStudents);
    setFilteredStudentList(filteredStudents);
  };

  const handleSearchClick = () => {
    console.log('Search button clicked');
    filterStudentList(selectClass, selectSection);
  };

  const updateAvatars = (action) => {
    const updatedAvatars = {};
    // Set the background color based on the selected action
    filteredStudentList.forEach((student) => {
      updatedAvatars[student.id] = action.charAt(0).toUpperCase();
    });
    // Update the state with the new avatar colors
    setSelectedAvatars(updatedAvatars);
    // Set the global action
    setGlobalAttendanceAction(action);
  };

  const handleActionsConfirm = (selectedAction) => {
    if (selectedAction === 'mark all holiday') {
      updateAvatars('H');
      setShowWarningBox(false); // Hide warning box when marking all holidays
    } else if (selectedAction === 'mark all present') {
      updateAvatars('P');
      setShowWarningBox(false); // Hide warning box when marking all presents
    } else if (selectedAction === 'mark all absent') {
      updateAvatars('A');
      setShowWarningBox(true); // Show warning box when marking all absents
    } else {
      // Handle any other actions or provide a default behavior
    }

    // Reset the global action
    setGlobalAttendanceAction('');
    // Close the confirmation dialog
    setConfirmationDialogOpen(false);
  };

  useEffect(() => {
    const filteredSections = SectionList.filter((section) => section.class === selectClass);
    setFilteredSections(filteredSections);
    setSelectSection(''); // Reset the selected section when the class changes
  }, [selectClass]);

  const calculateHolidayCount = () => {
    // Return the total number of days in the selected month
    return dates.length;
  };

  return (
    <Box>
      <Box>
        {/* Search filter box */}
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
                {/* Display sections based on the selected class */}
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

      {/* Legends */}
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
          <Grid>
            <Item sx={{ marginRight: '40px' }}>
              <AttendanceActions
                onConfirm={handleActionsConfirm}
                open={isConfirmationDialogOpen}
                onClose={() => setConfirmationDialogOpen(false)}
                action={globalAttendanceAction}
              />
            </Item>
          </Grid>
        </Paper>
      </Box>

      {/* Warning Box */}
      <Box sx={{ mt: 1 }}>
        <WarningBox
          showWarning={showWarningBox}
          onClose={() => setShowWarningBox(false)}
          totalStudents={filteredStudentList.length}
          absentCount={countSelectedStatus('A')}
        />
      </Box>

      {/* Student List */}
      <Box>
        <Paper sx={{ listStyleType: 'none' }}>
          <Box sx={{ display: 'inlineFlex', flexDirection: 'column', gap: 1 }}>
            {/* Box for Admn No., Student Name, and Working Days */}
            <Box sx={{ display: 'flex', flex: '0 0 30%' }}>
              <ListItem sx={{ display: 'flex', p: 2 }}>
                <ListItemText>
                  <Typography variant="h4" color="text.primary">
                    Admn No.
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography variant="h4">Student Name</Typography>
                </ListItemText>
                <ListItemText>
                  <Typography variant="h4" color="text.primary">
                    Working Days
                  </Typography>
                </ListItemText>
              </ListItem>
            </Box>
            {/* Box for Dates with horizontal overflow */}
            <Box sx={{ flex: '0 0 70%', display: 'flex', overflowX: 'auto' }}>
              {dates.map((date) => (
                <ListItem key={date.format('DD-MM-YYYY')} sx={{ display: 'block' }}>
                  <ListItemText>
                    <Typography variant="h4" color="text.primary">
                      {formatDate(date)}
                    </Typography>
                  </ListItemText>
                  <ListItemText>
                    <Typography variant="h4" color="text.primary">
                      {date.format('ddd')}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </Box>
          </Box>

          <Divider />

          {filteredStudentList.map((student) => (
            <React.Fragment key={student.id}>
              <ListItem sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <Box sx={{ display: 'flex', flex: '0 0 30%' }}>
                  <ListItemText sx={{flex: '0 0 20%' }}>
                    <Typography variant="h4" color="text.primary">
                      {student.admnNo}
                    </Typography>
                  </ListItemText>

                  <ListItemAvatar >
                    <Avatar src={AvtarImg} sx={{ width: 40, height: 40 }} />
                  </ListItemAvatar>

                  <ListItemText sx={{flex: '0 0 30%' }}>
                    <Typography variant="h4">{student.name}</Typography>
                  </ListItemText>

                  <ListItemText>
                    <Typography variant="h4">0P+3A</Typography>
                  </ListItemText>
                </Box>
                <Box >
                  <ListItemText sx={{ overflowX: 'auto' }}>
                    <Typography variant="h4" color="text.secondary">
                      <Stack direction="row" spacing={2}>
                        {[...Array(calculateHolidayCount(student.id))].map((_, index) => (
                          <Avatar
                            key={index}
                            sx={{
                              bgcolor: '#7dceeb',
                              width: 30,
                              height: 30,
                              cursor: 'pointer',
                              color: '#000000'
                            }}
                            onClick={() => handleAvatarClick('H', student.id)}
                          >
                            H
                          </Avatar>
                        ))}
                      </Stack>
                    </Typography>
                  </ListItemText>
                </Box>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
