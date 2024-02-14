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
        label="class"
        select
        value={selectedClass || (data.length > 0 ? data[0].value : '')}
        sx={{margin:"0px 10px"}}
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


export function SubjectDropDown({ data, selectedSubject, onSubjectChange }) {
  // Check if data is not an array or is empty
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const handleChange = (event) => {
    const selectedSubject = event.target.value;
    onSubjectChange(selectedSubject);
  };

  return (
    <TextField
      id="outlined-select-currency"
      label="Subject"
      select
      value={selectedSubject ? selectedSubject.value : '0'} // Use selectedSubject.value instead of data[0].value
      sx={{ margin: "0px 10px" }}
      onChange={handleChange}
    >
      {data.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
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
      value={selectedExam || (data.length > 0 ? data[0].value : '')}
      sx={{margin:"0px 10px"}}
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



export function TermDropDown({ data,  onTermChange, selectedTerm }) {
  // Check if data is not an array or is empty
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const handleChange = (event) => {
    const selectedTerm = event.target.value;

    // Call the onClassChange function with the selected class
    onTermChange(selectedTerm);
  };

  return (
    <>
      <TextField
        id="outlined-select-term"
        select
        label="Term"
        value={selectedTerm || (data.length > 0 ? data[0].value : '')}
        sx={{ margin: "0px 10px" }}
        onChange={handleChange}
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}


export function StudentDropDown({ data, onStudentChange, selectedStudent}) {
  // Check if students is undefined or not an array
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const handleChange = (event) => {
    const selectedStudent = event.target.value;

    // Call the onClassChange function with the selected class
    onStudentChange(selectedStudent);
  };

  console.log("Data:", data);
  return (
    <TextField
      id="outlined-select-student"
      select
      label="Student Name"
      value={ selectedStudent|| (data.length > 0 ? data[0].value : '')}
      sx={{ margin: "0px 10px" }}
      onChange={handleChange}
    >
      {data.map((student) => (
        <MenuItem key={student.id} value={student.id}>
          {student.name}
        </MenuItem>
      ))}
    </TextField>
  );
}