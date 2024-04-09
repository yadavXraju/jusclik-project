import * as React from 'react';
import { Box, Drawer, Button, Grid, Typography, TextField, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ClassDropDown, ExamDropDown, StudentDropDown } from './Dropdown';
import { ClassData } from 'views/erp-module/teacher/class-teacher/class-teacher-sidebar/marks-entry-panel/dropdown data/ClassData';
import { EXAM } from 'views/erp-module/teacher/class-teacher/class-teacher-sidebar/marks-entry-panel/dropdown data/ExamData'
import { StudentData, StudentData2, StudentData3 } from 'views/erp-module/teacher/class-teacher/class-teacher-sidebar/marks-entry-panel/dropdown data/StudentData';
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
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isSettingOpen, setIsSettingOpen] = useState(false); // State to manage setting dialog
  const [newTemplate, setNewTemplate] = useState('');
  const [templateSubmitted, setTemplateSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState([]); // State to hold submitted data

  let templateOptions = ["Excellent", "Good", "Average", "Needs Improvement", "Poor"];

  const handleRemarkInputChange = (event) => {
    setRemarkValue(event.target.value);
  };

  const handleTemplateSelect = (event) => {
    setSelectedTemplate(event.target.value);
    setRemarkValue(event.target.value);
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
    setTemplateSubmitted(false); // Reset template submission status when student changes
  };
  
  const handleNextStudent = () => {

    setTemplateSubmitted(false);
    if (!templateSubmitted) {
      // Display message if template is not submitted
      alert("Please submit template data before going to next student.");
    } else {
      const nextIndex = (selectedStudentIndex + 1) % students.length;
      const selectedStudentData = students[nextIndex];
      setSelectedStudent(selectedStudentData);
      setSelectedStudentIndex(nextIndex);
      setTemplateSubmitted(true);// Reset template submission status for the next student
      if(selectedStudentData==students[nextIndex]){
        setTemplateSubmitted(false);
      } 
      else{
        setTemplateSubmitted(true);
      }
    }
  };

  const handleExamChange = (selectedExam) => {
    setSelectedExam(selectedExam);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const openSettingDialog = () => {
    setIsSettingOpen(true);
  };

  const closeSettingDialog = () => {
    setIsSettingOpen(false);
  };

  const handleAddTemplate = () => {
    if (newTemplate.trim() !== '') {
      setTemplateOptions([...templateOptions, newTemplate.trim()]);
      setNewTemplate('');
      setIsSettingOpen(false); // Close the dialog after adding the new template
      setTemplateSubmitted(true); // Set template submission status to true
    }
    console.log(templateOptions)
  };

  const setTemplateOptions = (newOptions) => {
    setSelectedTemplate(''); // Clear selected template
    templateOptions = newOptions; // Update the template options array
  };

  const handleSubmit = () => {
    console.log("Submitting data...");
    console.log("Selected Class:", selectedClass);
    console.log("Selected Student:", selectedStudent);
    console.log("Selected Exam:", selectedExam);
    console.log("Selected Template:", selectedTemplate);
    setTemplateSubmitted((templateSubmitted)=> !templateSubmitted)
    setSelectedTemplate('');
    setRemarkValue('')
    setSelectedStudent('')
    const data = {
      class: selectedClass,
      studentName: selectedStudent?.name, // Ensure selectedStudent is not null
      term: selectedExam,
      template: selectedTemplate
    };
    console.log("Submitting Data:", data);
  
    setSubmittedData([...submittedData, data]);

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
      <Grid>
        <Grid item sx={{ paddingTop: '10px' }} xs={12}>
          <ClassDropDown data={ClassData} onClassChange={handleClassChange} selectedClass={selectedClass} />
        </Grid>
        <Grid item xs={12}>
          <ExamDropDown data={EXAM} onExamChange={handleExamChange} selectedExam={selectedExam} />
        </Grid>
        <Grid item xs={12}>
          <StudentDropDown data={students} onStudentChange={handleStudentChange} selectedStudent={selectedStudent} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Template"
            select
            sx={{ margin: '10px 0' }}
            value={selectedTemplate}
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
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="contained" color="primary" sx={{ margin: "0px 0px 0px 10px" }} onClick={handleNextStudent}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      <Button variant="outlined" startIcon={<SettingsOutlinedIcon />} onClick={openSettingDialog} sx={{marginRight:'10px'}} >Setting</Button>
      <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>Add Remark</Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {form}
      </Drawer>
      {/* Setting Dialog */}
      <Dialog open={isSettingOpen} onClose={closeSettingDialog}>
        <DialogTitle><Typography variant='h3'>Template Heading</Typography></DialogTitle>
        <DialogContent>
          
          <TextField label="Template Heading" fullWidth margin="normal" />
          <TextField label="Add Text"  fullWidth
            value={newTemplate}
            onChange={(e) => setNewTemplate(e.target.value)} 
             margin="normal" />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleAddTemplate}>Submit</Button>
          <Button onClick={closeSettingDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
