import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  Button, Grid, Typography } from '@mui/material';
import { makeStyles, useTheme, ThemeProvider } from '@mui/styles';
import UpperTab from './UpperTab';
import MiddleBox from './MiddleBox';
import { subject } from './dropdown data/SubjectData';
import { StudentData, StudentData2, StudentData3 } from './dropdown data/StudentData'; // Import StudentData2 and StudentData3
import "../../dashboard/Default/dashboard-css/Overflow.css"
import NumericTextField from './TextFeild';
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
  const [selectedClass, setSelectedClass] = useState('');
  const [students, setStudents] = useState([]);
  const [isVerticalSwitchOn, setIsVerticalSwitchOn] = useState(true); // Default to true
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClassChange = (selectedClass) => {
    setSelectedClass(selectedClass);
  };

  const handleSwitchChange = (isVertical) => {
    setIsVerticalSwitchOn(isVertical);
  };

  useEffect(() => {
    let selectedStudentData = [];
    if (selectedClass === '4') {
      selectedStudentData = StudentData;
    } else if (selectedClass === '2') {
      selectedStudentData = StudentData2;
    } else if (selectedClass === '3') {
      selectedStudentData = StudentData3;
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
      const nextInput = document.getElementById(`textfield-${nextRowIndex}-${cellIndex}-${rows[nextRowIndex].admissionNo}`);
      if (nextInput) {
        nextInput.focus();
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
      <UpperTab onClassChange={handleClassChange} selectedClass={selectedClass} />
      <MiddleBox 
        isVerticalSwitchOn={isVerticalSwitchOn} 
        onSwitchChange={handleSwitchChange} 
      />
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 640 }} className='scrollbar-2'>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.fixedIstColumn} sx={{ top: '0', width: "100px" }}>
                  Student
                </TableCell>
                <TableCell className={classes.fixedIstColumn2} sx={{ top: '0' }}>
                  Adm.no
                </TableCell>
                {subject.map((subjectData, index) => (
                  <TableCell key={`subject-${index}`} align="left">
                    {subjectData.label}<br/>
                    <Typography sx={{textAlign:"center"}}> {subjectData.tm}</Typography>
                   
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={`row-${rowIndex}`}>
                  <TableCell className={classes.fixedColumn}>{row.name}</TableCell>
                  <TableCell className={classes.fixedColumn2}>{row.admissionNo}</TableCell>
                  {subject.map((_, cellIndex) => (
                    <TableCell key={`cell-${rowIndex}-${cellIndex}`} align="left">
                       <NumericTextField
      rowIndex={rowIndex}
      cellIndex={cellIndex}
      admissionNo={row.admissionNo}
      handleTextFieldKeyPress={handleTextFieldKeyPress}
    />
                    </TableCell>
                  ))}
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
