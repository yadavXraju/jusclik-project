import React, { useState, useEffect } from 'react';
import {
  Box,
  Divider,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Paper,
  Grid,
  Avatar,
  useMediaQuery
} from '@mui/material';
import AvtarImg from '../../../assets/images/avatar.png';
import { ClassList } from './ClassList';
import { SectionList } from './SectionList';
import { StudentList } from './StudentList';
import TakeAttendance from './TakeAttendance';
import WarningBox from './WarningBox';
import { styled } from '@mui/material/styles';
import AvatarLegend from './AvatarLegend'; 
import SearchFilterBox from './SeachFilter';
import { useTheme } from '@emotion/react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  return (
    <Box>
      {/* Search filter box */}
      <Paper sx={{ borderRadius: '30px' }}>
      <SearchFilterBox
        selectClass={selectClass}
        selectSection={selectSection}
        filteredSections={filteredSections}
        ClassList={ClassList}
        SectionList={SectionList}
        handleChange={handleChange}
        handleSearchClick={handleSearchClick}
      />
      </Paper>

      {/* Student List */}
      <Box sx={{ mt: 1 }}>
        <Paper sx={{ mb: 1, display: 'flex' }}>
            {/* Avatar Legend */}
            <Grid container justifyContent="center" alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
            <Grid item sx={{marginRight: isMobile ? '0px' : '40px',display:'flex', alignItems:'center' }}>
              <Item>
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

        <Paper sx={{ listStyleType: 'none', p: 0, overflow: isMobile?'auto':'none' }}>
          <ListItem sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <ListItemText sx={{ flex: isMobile?'0 0 25%' : '0 0 15%' }}>
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
                <ListItemText sx={{ flex: isMobile?'0 0 25%' : '0 0 15%' }}>
                  <Typography variant="h4" color="text.primary">
                    {student.admnNo}
                  </Typography>
                </ListItemText>

                <ListItemAvatar sx={{ flex: '0 0 3%' }}>
                  <Avatar src={AvtarImg} sx={{ width: 50, height: 50 }} />
                </ListItemAvatar>

                <ListItemText sx={{ paddingLeft: '10px', flex: isMobile?'0 0 60%' : '0 0 32%' }}>
                  <Typography variant="h4">{student.name}</Typography>
                </ListItemText>

                <ListItemText sx={{ flex: '0 0 37%' }}>
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
