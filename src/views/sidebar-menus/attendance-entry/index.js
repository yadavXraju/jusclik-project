import React from 'react';
import {Box,InputLabel,MenuItem,FormControl,Select,Divider,Typography,ListItem,Avatar,ListItemAvatar,ListItemText,Stack,Paper,Button,} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import AvtarImg from '../../../assets/images/avatar.png';
import { ClassList } from './ClassList';
import { SectionList } from './SectionList';
import { StudentList } from './StudentList';
import TakeAttendance from './TakeAttendance'

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
    // Sort the entire student list alphabetically by student name
    const StudentSortedList = [...StudentList].sort((a, b) => a.name.localeCompare(b.name));
  
    // Update the state directly with the sorted list
    setFilteredStudentList(StudentSortedList);
  };

  return (
    <Box>
      <Paper sx={{ borderRadius: '30px' }}>
        <Box sx={{ minWidth: 250, display: 'flex', alignItems: 'baseline', p: 3, justifyContent:'space-between' }}>
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
            Search
          </Button>
          <TakeAttendance/>
        </Box>
      </Paper>
      {/* Student List */}
      <Box sx={{ mt: 2 }}>
        <Paper sx={{ listStyleType: 'none', p: 0 }}>
          <ListItem sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <ListItemText sx={{ flex: '0 0 15%' }}>
              <Typography variant="h4" color="text.primary">
                Admn No.
              </Typography>
            </ListItemText>
            <ListItemText sx={{flex: '0 0 50%' }}>
              <Typography variant="h4">Student Name</Typography>
            </ListItemText>
            <ListItemText sx={{ flex: '0 0 20%', justifyContent:'center' }}>
              <Typography variant="h4" color="text.primary">
                Status
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider  />

          {(filteredStudentList.length > 0 ? filteredStudentList : StudentList).map((student) => (
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
                  <Typography variant="h4" color="text.secondary" >
                   <Stack direction="row" spacing={2} sx={{ flex: '0 0 20%', justifyContent:'center' }}>
                  <Avatar
                    sx={{
                      bgcolor: selectedAvatars[student.id] === 'H' ? '#7dceeb' : '#f1f1f1',
                      cursor: 'pointer',
                      color:'#000000'
                    }}
                    onClick={() => handleAvatarClick('H', student.id)}
                  >H</Avatar>
                  <Avatar
                    sx={{
                      bgcolor: selectedAvatars[student.id] === 'P' ? '#7bc67b' : '#f1f1f1',
                      cursor: 'pointer',
                      color:'#000000'
                    }}
                    onClick={() => handleAvatarClick('P', student.id)}
                  >P</Avatar>
                  <Avatar
                    sx={{
                      bgcolor: selectedAvatars[student.id] === 'A' ? '#e2526b' : '#f1f1f1',
                      cursor: 'pointer',
                      color:'#000000'
                    }}
                    onClick={() => handleAvatarClick('A', student.id)}
                  >A</Avatar>
                  <Avatar
                    sx={{
                      bgcolor: selectedAvatars[student.id] === 'L' ? '#eeb058' : '#f1f1f1',
                      cursor: 'pointer',
                      color:'#000000'
                    }}
                    onClick={() => handleAvatarClick('L', student.id)}
                  >L</Avatar>
                </Stack>
                  </Typography>
                </ListItemText>

              </ListItem>
              <Divider/>
            </React.Fragment>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
