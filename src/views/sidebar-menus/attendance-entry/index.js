import React, { useEffect } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Divider,
  Typography,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Stack,
  Paper,
  Button,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import AvtarImg from '../../../assets/images/avatar.png';
import { ClassList } from './ClassList';
import { SectionList } from './SectionList';
import { StudentList } from './StudentList';

export default function AttendanceEntry() {
  const [selectClass, setSelectClass] = React.useState('');
  const [selectSection, setSelectSection] = React.useState('');
  const [selectedAvatars, setSelectedAvatars] = React.useState({});
  const [filteredStudentList, setFilteredStudentList] = React.useState([]);

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
      [studentId]: avatar,
    }));
  };

  const handleActionsClick = () => {
    console.log('Selected Class:', selectClass);
    console.log('Selected Section:', selectSection);

    // Filter the student list based on the selected class and section
    const filteredList = StudentList.filter(
      (student) =>
        student.class.trim().toLowerCase() === selectClass.trim().toLowerCase() &&
        student.section.trim().toLowerCase() === selectSection.trim().toLowerCase()
    );

    console.log('Filtered List:', filteredList);

    // Update the state directly with the filtered list
    setFilteredStudentList(filteredList);
    console.log('Filtered Student List:', filteredStudentList);
  };

  useEffect(() => {
    console.log('Student List on Mount:', StudentList);
  }, []);





  return (
    <Box>
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

          <FormControl sx={{ m: 1, minWidth: 250 }}>
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
            size="large"
            sx={{ width: '250px', padding: '10px', margin: '0 0 6px 8px' }}
            onClick={handleActionsClick}
          >
            Actions
          </Button>
        </Box>
      </Paper>
      {/* Student List */}
      <Box sx={{ mt: 2 }}>
        <Paper sx={{ listStyleType: 'none', p: 0 }}>
          {(filteredStudentList.length > 0 ? filteredStudentList : StudentList).map((student) => (
            <React.Fragment key={student.id}>
              <ListItem sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <ListItemAvatar>
                  <Avatar src={AvtarImg} sx={{ width: 50, height: 50 }} />
                </ListItemAvatar>
                <ListItemText sx={{ paddingLeft: '10px' }}>
                  <Typography variant="h4">{student.name}</Typography>
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      {student.role}
                    </Typography>
                  </React.Fragment>
                </ListItemText>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    sx={{
                      bgcolor: selectedAvatars[student.id] === 'P' ? '#7bc67b' : '#ccc',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleAvatarClick('P', student.id)}
                  >
                    P
                  </Avatar>
                  <Avatar
                    sx={{
                      bgcolor: selectedAvatars[student.id] === 'A' ? '#e2526b' : '#ccc',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleAvatarClick('A', student.id)}
                  >
                    A
                  </Avatar>
                  <Avatar
                    sx={{
                      bgcolor: selectedAvatars[student.id] === 'L' ? '#eeb058' : '#ccc',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleAvatarClick('L', student.id)}
                  >
                    L
                  </Avatar>
                </Stack>
              </ListItem>
              <Divider variant="middle" sx={{ width: '100%' }} component="li" />
            </React.Fragment>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
