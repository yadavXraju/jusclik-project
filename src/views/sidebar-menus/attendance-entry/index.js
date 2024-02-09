import React, { useState, useEffect } from 'react';
import {Box,InputLabel,MenuItem,FormControl,Select,Divider,Typography,ListItem,Avatar,ListItemAvatar,ListItemText,Stack,Paper,Button,Grid,Badge} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AvtarImg from '../../../assets/images/avatar.png';
import { ClassList } from './ClassList';
import { SectionList } from './SectionList';
import { StudentList } from './StudentList';
import TakeAttendance from './TakeAttendance';
import WarningBox from './WarningBox';
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
    opacity:'0.7'
  },
}));

export default function AttendanceEntry() {
  const [selectClass, setSelectClass] = useState('');
  const [selectSection, setSelectSection] = useState('');
  const [selectedAvatars, setSelectedAvatars] = useState({});
  const [filteredStudentList, setFilteredStudentList] = useState([]);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [globalAttendanceAction, setGlobalAttendanceAction] = useState('');
  const [showWarningBox, setShowWarningBox] = useState(false);

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
    setShowWarningBox(absentPercentage > 50);
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
    } else if (selectedAction === 'mark all present') {
      updateAvatars('P');
    } else if (selectedAction === 'mark all absent') {
      updateAvatars('A');
    } else {
      // Handle any other actions or provide a default behavior
    }

    // Reset the global action
    setGlobalAttendanceAction('');
    // Close the confirmation dialog
    setConfirmationDialogOpen(false);
  };

  return (
    <Box>
      {/* Search filter box */}
      <Paper sx={{ borderRadius: '30px' }}>
        <Box sx={{ minWidth: 250, display: 'flex', alignItems: 'baseline', p: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select Date" slots={{ openPickerIcon: CalendarMonthTwoToneIcon }} />
            </DemoContainer>
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
                  {classItem.label}
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
              {SectionList.map((sectionItem) => (
                <MenuItem key={sectionItem.value} value={sectionItem.value}>
                  {sectionItem.label}
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

      {/* Student List */}
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
                  <StyledBadge color="primary" overlap="circular"  badgeContent={countSelectedStatus('H')}>
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
              <TakeAttendance
                onConfirm={handleActionsConfirm}
                open={isConfirmationDialogOpen}
                onClose={() => setConfirmationDialogOpen(false)}
                action={globalAttendanceAction}
              />
            </Item>
          </Grid>
        </Paper>
        <WarningBox
        showWarning={showWarningBox}
        onClose={() => setShowWarningBox(false)}
        totalStudents={filteredStudentList.length}
        absentCount={countSelectedStatus('A')}
      />
      
        <Paper sx={{ listStyleType: 'none', p: 0 }}>
          <ListItem sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <ListItemText sx={{ flex: '0 0 15%' }}>
              <Typography variant="h4" color="text.primary">
                Admn No.
              </Typography>
            </ListItemText>
            <ListItemText sx={{ flex: '0 0 50%' }}>
              <Typography variant="h4">Student Name</Typography>
            </ListItemText>
            <ListItemText sx={{ flex: '0 0 20%', justifyContent: 'center' }}>
              <Typography variant="h4" color="text.primary">
                Status
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />

          {filteredStudentList.map((student) => (
            <React.Fragment key={student.id}>
              <ListItem sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <ListItemText sx={{ flex: '0 0 15%' }}>
                  <Typography variant="h4" color="text.primary">
                    {student.admnNo}
                  </Typography>
                </ListItemText>

                <ListItemAvatar sx={{ flex: '0 0 3%' }}>
                  <Avatar src={AvtarImg} sx={{ width: 50, height: 50 }} />
                </ListItemAvatar>

                <ListItemText sx={{ paddingLeft: '10px', flex: '0 0 32%' }}>
                  <Typography variant="h4">{student.name}</Typography>
                </ListItemText>

                <ListItemText sx={{ flex: '0 0 40%' }}>
                  <Typography variant="h4" color="text.secondary">
                    <Stack direction="row" spacing={2} sx={{ flex: '0 0 20%', justifyContent: 'center' }}>
                      <Avatar
                        sx={{
                          bgcolor: selectedAvatars[student.id] === 'H' ? '#7dceeb' : '#f1f1f1',
                          cursor: 'pointer',
                          color: '#000000'
                        }}
                        onClick={() => handleAvatarClick('H', student.id)}
                      >
                        H
                      </Avatar>
                      <Avatar
                        sx={{
                          bgcolor: selectedAvatars[student.id] === 'P' ? '#7bc67b' : '#f1f1f1',
                          cursor: 'pointer',
                          color: '#000000'
                        }}
                        onClick={() => handleAvatarClick('P', student.id)}
                      >
                        P
                      </Avatar>
                      <Avatar
                        sx={{
                          bgcolor: selectedAvatars[student.id] === 'A' ? '#e2526b' : '#f1f1f1',
                          cursor: 'pointer',
                          color: '#000000'
                        }}
                        onClick={() => handleAvatarClick('A', student.id)}
                      >
                        A
                      </Avatar>
                      <Avatar
                        sx={{
                          bgcolor: selectedAvatars[student.id] === 'L' ? '#eeb058' : '#f1f1f1',
                          cursor: 'pointer',
                          color: '#000000'
                        }}
                        onClick={() => handleAvatarClick('L', student.id)}
                      >
                        L
                      </Avatar>
                    </Stack>
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
