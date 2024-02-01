import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, Divider, Typography, ListItem, Avatar, ListItemAvatar, ListItemText, Stack, Button, Paper } from '@mui/material';
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


  const handleChange = (event) => {
    setSelectClass(event.target.value);
    setSelectSection(event.target.value);
  };

  return (
    <Box>
      <Paper sx={{ borderRadius: '30px' }}>
        <Box sx={{ minWidth: 250, display: 'flex', alignItems: 'baseline', p: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select Date" slots={{
                openPickerIcon: CalendarMonthTwoToneIcon
              }} />
            </DemoContainer>
          </LocalizationProvider>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="class-select-label">Select Class</InputLabel>
            <Select
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

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="section-select-label">Status</InputLabel>
            <Select
              labelId="section-select-label"
              id="Status"
              value={selectSection}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem >
                <ListItemText primary="Live" />
              </MenuItem>
              <MenuItem >
                <ListItemText primary="Left" />
              </MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" size="large" sx={{ width: '250px', padding: '10px', margin: '0 0 6px 8px' }}>
            Actions
          </Button>
        </Box>
      </Paper>
      {/* Student List */}
      <Box sx={{ mt: 2 }}>
        <Paper>
          {StudentList.map((student) => (
            <React.Fragment key={student.id}>
              <ListItem>
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
                  <Avatar sx={{ bgcolor: '#63d5a3' }}>P</Avatar>
                  <Avatar sx={{ bgcolor: '#e2526b' }}>A</Avatar>
                  <Avatar sx={{ bgcolor: '#eeb058' }}>L</Avatar>
                </Stack>
              </ListItem>
              <Divider variant="middle" component="li" />
            </React.Fragment>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
