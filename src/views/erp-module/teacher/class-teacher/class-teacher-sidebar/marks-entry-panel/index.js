// owned by  sangeeta

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid, Typography } from '@mui/material';
import { makeStyles, useTheme, ThemeProvider } from '@mui/styles';
import UpperTab from './UpperTab';
import MiddleBox from './MiddleBox';
import { StudentData, StudentData2, StudentData3 } from './dropdown-data/StudentData';
import NumericTextField from './TextFeild';
import { subject} from './dropdown-data/SubjectData';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginBottom: theme.spacing(2),
  },
  tableHead: {
    background: theme.palette.background.default,
  },
  tableHeadCell: {
    fontWeight: 'bold',
    fontSize: "20px",
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
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [students, setStudents] = useState([]);
  const [isVerticalSwitchOn, setIsVerticalSwitchOn] = useState(true);
  const [selectedTerm, setSelectedTerm] = useState('1');
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
    } else if (selectedClass === '1') {
      selectedStudentData = StudentData;
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
      const nextCellIndex = cellIndex + 1;
      if (nextRowIndex >= rows.length) {
        const nextInput = document.getElementById(`textfield-0-${nextCellIndex}-${rows[0].admissionNo}`);
        if (nextInput) {
          nextInput.focus();
        }
      } else {
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
      <UpperTab
        onClassChange={handleClassChange}
        selectedClass={selectedClass}
        onSubjectChange={handleSubjectChange}
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
            <TableHead sx={{ fontSize: "16px", fontWeight: "800" }}>
              <TableRow>
                <TableCell className={classes.fixedIstColumn} sx={{ top: '0', width: "100px", textAlign: "center", fontWeight: "800", paddingLeft: "40px" }}>
                  Student
                </TableCell>
                <TableCell className={classes.fixedIstColumn2} sx={{ top: '0', textAlign: "center", fontWeight: "800",paddingLeft: "40px" }}>
                  Adm.no
                </TableCell>
                {selectedSubject && (
                  <TableCell sx={{ textAlign: "center", fontWeight: "800" }}>
                    {selectedSubject.label}<br />
                    <Typography sx={{ textAlign: "center" }}>({selectedSubject.tm})</Typography>
                  </TableCell>
                )}
                {selectedSubject === null && subject.slice(1).map((subjectData, index) => (
                  <TableCell sx={{ textAlign: "center", margin: "2px 10px", padding: "0px", fontWeight: "800" }} key={`subject-${index}`} >
                    {subjectData.label}<br />
                    <Typography sx={{ textAlign: "center" }}> ({subjectData.tm})</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={`row-${rowIndex}`}>
                  <TableCell className={classes.fixedColumn} sx={{ top: '0', textAlign: "left", fontWeight: "800", paddingLeft: "40px" }}>{row.name}</TableCell>
                  <TableCell className={classes.fixedColumn2} sx={{ top: '0', textAlign: "center", fontWeight: "800", paddingLeft: "40px"
                  }}>{row.admissionNo}</TableCell>
                  {selectedSubject ? (
                    <TableCell key={`cell-${rowIndex}`} sx={{ textAlign: "center", padding: "8px" }}>
                      <NumericTextField
                        rowIndex={rowIndex}
                        cellIndex={0}
                        admissionNo={row.admissionNo}
                        handleTextFieldKeyPress={handleTextFieldKeyPress}
                        
                      />
                    </TableCell>
                  ) : (
                    subject.slice(1).map((_, cellIndex) => (
                      <TableCell key={`cell-${rowIndex}-${cellIndex}`} sx={{ textAlign: "center", padding: "8px" }}>
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
        <Grid container sx={{ textAlign: "left" }} spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" sx={{ textAlign: "center", margin: "10px 0" }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
