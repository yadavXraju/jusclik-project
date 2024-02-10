import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid, Typography } from '@mui/material';
import { makeStyles, useTheme, ThemeProvider } from '@mui/styles';
import UpperTab from './UpperTab';
import MiddleBox from './MiddleBox';
import { StudentData, StudentData2, StudentData3 } from './dropdown data/StudentData';
import "../../dashboard/Default/dashboard-css/Overflow.css"
import NumericTextField from './TextFeild';
import { subject } from './dropdown data/SubjectData';


const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginBottom: theme.spacing(2),
  },
  tableHead: {
    background: theme.palette.background.default,
  },
  tableHeadCell: {
    fontWeight: 'bold',
    position: 'sticky',
    top: 0,
    background: theme.palette.background.default,
  },
  rowHover: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  fixedColumn: {
    left: 0,
    position: 'sticky',
    zIndex: 8,
    backgroundColor: theme.palette.background.default,
  },
  fixedColumn2: {
    left: "102px",
    position: 'sticky',
    zIndex: 8,
    backgroundColor: theme.palette.background.default,
  },
  fixedIstColumn: {
    left: 0,
    position: 'sticky',
    zIndex: 9,
    backgroundColor: theme.palette.background.default,
  },
  fixedIstColumn2: {
    left: "102px",
    position: 'sticky',
    zIndex: 9,
    backgroundColor: theme.palette.background.default,
  },
}));




export default function MarksEntryPanel() {
  const [selectedClass, setSelectedClass] = useState('1');
  const [selectedSubject, setSelectedSubject] = useState(null); // State to keep track of selected subject
  const [students, setStudents] = useState([]);
  const [isVerticalSwitchOn, setIsVerticalSwitchOn] = useState(true);
  const [selectedTerm, setSelectedTerm] = useState('1'); // State to keep track of selected term
  const [selectedExam, setSelectedExam] = useState('1'); 
  
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClassChange = (selectedClass) => {
    setSelectedClass(selectedClass);
  };

  const handleSwitchChange = (isVertical) => {
    setIsVerticalSwitchOn(isVertical);
  };

  const handleSubjectChange = (selectedSubjectId) => {
    // Find the subject object corresponding to the selected ID
    const selectedSubjectData = subject.find(subjectData => subjectData.value === selectedSubjectId);
    setSelectedSubject(selectedSubjectData);
  };
  
  const handleTermChange = (selectedTerm) => {
    setSelectedTerm(selectedTerm);
   
  };

  const handleExamChange = (selectedExam) => {
    setSelectedExam(selectedExam);
   
  };

  useEffect(() => {
    let selectedStudentData = [];
    if (selectedClass === '4') {
      selectedStudentData = StudentData;
    } else if (selectedClass === '2') {
      selectedStudentData = StudentData2;
    } else if (selectedClass === '3') {
      selectedStudentData = StudentData3;
    }else if (selectedClass === '1') { // Add condition for class '1'
      selectedStudentData = StudentData; // Set selectedStudentData to StudentData
    }

  
    setStudents(selectedStudentData);
  }, [selectedClass]);

  const rows = students.map((student) => createData(student.name, student.admissionNo));

  function createData(name, admissionNo) {
    return { name, admissionNo };
  }

  const handleVerticalKeyPress = (event, rowIndex, cellIndex) => {
    if (event.key === 'Enter') {
      const nextRowIndex = rowIndex + 1;
      const nextCellIndex = cellIndex + 1; // Move to next column
  
      // Check if it's the last row of the current column
      if (nextRowIndex >= rows.length) {
        const nextInput = document.getElementById(`textfield-0-${nextCellIndex}-${rows[0].admissionNo}`); // Move to next column's first row
        if (nextInput) {
          nextInput.focus();
        }
      } else {
        // Move to next row of the current column
        const nextInput = document.getElementById(`textfield-${nextRowIndex}-${cellIndex}-${rows[nextRowIndex].admissionNo}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };
  
  const handleHorizontalKeyPress = (event, rowIndex, cellIndex) => {
    if (event.key === 'Enter') {
      const nextCellIndex = cellIndex + 1;
      const nextInput = document.getElementById(`textfield-${rowIndex}-${nextCellIndex}-${rows[rowIndex].admissionNo}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleTextFieldKeyPress = (event, rowIndex, cellIndex) => {
    if (isVerticalSwitchOn) {
      handleVerticalKeyPress(event, rowIndex, cellIndex);
    } else {
      handleHorizontalKeyPress(event, rowIndex, cellIndex);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <UpperTab onClassChange={handleClassChange}
        selectedClass={selectedClass}
        onSubjectChange={handleSubjectChange} // Pass the handleSubjectChange function
        selectedSubject={selectedSubject}
        onTermChange={handleTermChange} 
        selectedTerm={selectedTerm}
        onExamChange={handleExamChange} 
        selectedExam={selectedExam}
        />
      <MiddleBox
        isVerticalSwitchOn={isVerticalSwitchOn}
        onSwitchChange={handleSwitchChange}
      />
      <Paper sx={{ width: '100%' }}>

        <TableContainer sx={{ maxHeight: 640 }} className='scrollbar-2'>
          <Table stickyHeader aria-label="sticky table">
          <TableHead>
  <TableRow>
    <TableCell className={classes.fixedIstColumn} sx={{ top: '0', width: "100px",textAlign:"center" }}>
      Student
    </TableCell>
    <TableCell className={classes.fixedIstColumn2} sx={{ top: '0',textAlign:"center"  }}>
      Adm.no
    </TableCell>
    {selectedSubject && (
    <React.Fragment>
      <TableCell sx={{textAlign:"center"}}>
      {selectedSubject.label}<br/>
      <Typography sx={{textAlign:"center"}}>({selectedSubject.tm})</Typography>
      </TableCell>
    </React.Fragment>
  )}
   {selectedSubject === null && subject.slice(1).map((subjectData, index) => (
  // Skip rendering the first subject
  
    <TableCell  sx={{textAlign:"center" ,margin:"2px 10px",padding:"0px"}} key={`subject-${index}`} >
      {subjectData.label}<br/>
      <Typography sx={{textAlign:"center"}}> ({subjectData.tm})</Typography>
    </TableCell>
  
))}
  </TableRow>
</TableHead>

<TableBody>
  {rows.map((row, rowIndex) => (
    <TableRow key={`row-${rowIndex}`}>
      <TableCell className={classes.fixedColumn} sx={{ top: '0',textAlign:"center"  }}>{row.name}</TableCell>
      <TableCell className={classes.fixedColumn2} sx={{ top: '0',textAlign:"center"  }}>{row.admissionNo}</TableCell>
      {selectedSubject ? ( 
        // Conditionally render selected subject
        <TableCell key={`cell-${rowIndex}`}  sx={{textAlign:"center",padding:"8px"}}>
          <NumericTextField
            rowIndex={rowIndex}
            cellIndex={0}
            admissionNo={row.admissionNo}
            handleTextFieldKeyPress={handleTextFieldKeyPress}

          />
        </TableCell>
      ) : (
        subject.slice(1).map((_, cellIndex) => (
    
          <TableCell key={`cell-${rowIndex}-${cellIndex}`} sx={{textAlign:"center",padding:"8px"}}>
            <NumericTextField
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              admissionNo={row.admissionNo}
              handleTextFieldKeyPress={handleTextFieldKeyPress}
           
            />
          </TableCell>
        ))
      )}
    </TableRow>
  ))}
</TableBody>
          </Table>
        </TableContainer>
        <Grid sx={{ textAlign: "left" }}>
          <Button variant="contained" color="primary" sx={{ textAlign: "center", margin: "10px 20px" }}>
            Submit
          </Button>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
