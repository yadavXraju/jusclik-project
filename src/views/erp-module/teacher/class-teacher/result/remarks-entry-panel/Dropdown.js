// sangeeta

import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export function ClassDropDown({ data, onClassChange,selectedClass}) {
    // Check if data is not an array or is empty
    if (!Array.isArray(data) || data.length === 0) {
      return <div>No data available</div>;
    }
    const handleChange = (event) => {
      const selectedClass = event.target.value;
  
      // Call the onClassChange function with the selected class
      onClassChange(selectedClass);
    };

    
  return (
    <>
      <TextField
        id="outlined-select-currency"
        fullWidth
        label="Class"
        select
        value={selectedClass || (data.length > 0 ? data[0].value : '')}
         sx={{margin:"10px 0"}}
        onChange={handleChange} 
      >
        {data.map((option) => (
          <MenuItem  sx={{position:"relative",zIndex:"222"}}key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}


export function ExamDropDown({ data, onExamChange,selectedExam}) {
    // Check if data is not an array or is empty
    if (!Array.isArray(data) || data.length === 0) {
      return <div>No data available</div>;
    }
    const handleChange = (event) => {
      const selectedExam = event.target.value;
  
      // Call the onClassChange function with the selected class
      onExamChange(selectedExam);
    };
  
    
  return (
    <>
      <TextField
        id="outlined-select-currency"
        select
        label="Exam"
        fullWidth
        value={selectedExam || (data.length > 0 ? data[0].value : '')}
        onChange={handleChange} 
        sx={{margin:"10px 0"}}
      >
        {data.map((option) => (
          <MenuItem  sx={{position:"relative",zIndex:"222"}}key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
  }


  
  export const StudentDropDown = ({ data, onStudentChange, selectedStudent }) => {
    const handleChange = (event) => {
      const selectedStudentId = event.target.value;
      onStudentChange(selectedStudentId);
    };
  
    return (
      <TextField
        id="outlined-select-student"
        fullWidth
        label="Student"
        select
        onChange={handleChange}
        sx={{margin:"10px 0"}}
        value={selectedStudent ? selectedStudent.id : ''}
      >
        {data.map((student) => (
          <MenuItem key={student.id} value={student.id}>
            {student.name}
          </MenuItem>
        ))}
      </TextField>
    );
  };