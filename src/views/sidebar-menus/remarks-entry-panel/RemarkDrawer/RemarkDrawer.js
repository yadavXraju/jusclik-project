// RemarkDrawer.js
import * as React from 'react';
import { Box, Drawer, Button, Grid, Typography, TextField, MenuItem } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import { ClassDropDown, ExamDropDown, StudentDropDown } from './Dropdown';
import { ClassData } from 'views/sidebar-menus/marks-entry-panel/dropdown data/ClassData';
import { EXAM } from 'views/sidebar-menus/marks-entry-panel/dropdown data/ExamData'
import { StudentData, StudentData2, StudentData3 } from 'views/sidebar-menus/marks-entry-panel/dropdown data/StudentData';
import { useState, useEffect } from 'react';
import RemarkEditor from './RemarkEditor';

export default function RemarkDrawer() {
  const [selectedClass, setSelectedClass] = useState('1');
  const [students, setStudents] = useState(StudentData);
  const [state, setState] = useState({ right: false });
  const [remarkValue, setRemarkValue] = useState('');
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(''); // State to hold the selected template


  const templateOptions = ["Excellent", "Good", "Average", "Needs Improvement", "Poor"];

  const handleRemarkInputChange = (event) => {
    setRemarkValue(event.target.value);
  };

  const handleTemplateSelect = (event) => {
    setSelectedTemplate(event.target.value); // Update selected template state
    setRemarkValue(event.target.value); // Also update remark value
  };

  const handleClassChange = (selectedClass) => {
    setSelectedClass(selectedClass);
  };

  useEffect(() => {
    let selectedStudentData = [];
    if (selectedClass === '4') {
      selectedStudentData = StudentData;
    } else if (selectedClass === '2') {
      selectedStudentData = StudentData2;
    } else if (selectedClass === '3') {
      selectedStudentData = StudentData3;
    } else if (selectedClass === '1') {
      selectedStudentData = StudentData;
    }
    setStudents(selectedStudentData);
  }, [selectedClass]);
  

  const handleStudentChange = (selectedStudentId) => {
    const selectedStudentData = students.find(student => student.id === selectedStudentId);
    const selectedIndex = students.findIndex(student => student.id === selectedStudentId);
    setSelectedStudent(selectedStudentData);
    setSelectedStudentIndex(selectedIndex);
  };
  
  const handleNextStudent = () => {
    const nextIndex = (selectedStudentIndex + 1) % students.length;
    const selectedStudentData = students[nextIndex];
    setSelectedStudent(selectedStudentData);
    setSelectedStudentIndex(nextIndex);
  };
  
  
    

  const handleExamChange = (selectedExam) => {
    setSelectedExam(selectedExam); // Update selectedExam state
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const isMobile = window.innerWidth < 600;

  const form = (
    <Box
      sx={{ width: isMobile ? '100%' : 650, padding: 2 }}
      role="presentation"
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <Typography variant='h4'>Remark Entry</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          <CancelTwoToneIcon />
          Close
        </Button>
      </Box>
      <Grid  >
        <Grid item sx={{ paddingTop: '10px' }} xs={12}>
          <ClassDropDown data={ClassData} onClassChange={handleClassChange} selectedClass={selectedClass} />
        </Grid>
        <Grid item xs={12}  >
          <ExamDropDown  data={EXAM} onExamChange={handleExamChange} selectedExam={selectedExam}/>
        </Grid>
        <Grid item xs={12}>
       <StudentDropDown data={students} onStudentChange={handleStudentChange} selectedStudent={selectedStudent} />

        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="TEMPLATE"
            select
            sx={{ margin: '10px 0' }}
            value={selectedTemplate} // Use selectedTemplate instead of remarkValue
            onChange={handleTemplateSelect}
            
          >
            {templateOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      

        <Grid item xs={12}>
          <RemarkEditor remarkValue={remarkValue} handleRemarkInputChange={handleRemarkInputChange} />
        </Grid>

        <Grid item xs={12}>
          <Box mt={9} display="flex" justifyContent="left" alignItems="center">
            <Button variant="contained" color="primary" >
              Submit
            </Button>
            <Button variant="contained" color="primary" sx={{margin:"0px 0px 0px 10px"}}  onClick={handleNextStudent} >
              Next
            </Button>
          </Box>
        </Grid>

      </Grid>

    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>Add Remark</Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {form}
      </Drawer>
    </div>
  );
}
