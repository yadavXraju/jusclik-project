import React, { useRef, useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid, Typography } from '@mui/material';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { FeildData } from './Data/feild';
import { StudentData, StudentData2, StudentData3 } from './Data/studentData';
import UpperTab from './UpperTab';
import MiddleBox from './MiddleBox';
import CustomTextField from './TextField';


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
  dialogTitle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  dialogContent: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  dialogButton: {
    color: theme.palette.primary.main,
  },
}));

export default function CoScholaistic() {
  const [selectedClass, setSelectedClass] = useState('1');
  const [students, setStudents] = useState(StudentData);
  const [isVerticalSwitchOn, setIsVerticalSwitchOn] = useState(true);
  const [selectedTerm, setSelectedTerm] = useState('1');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');

  const classes = useStyles();

  const handleClassChange = (selectedClass) => {
    setSelectedClass(selectedClass);
  };

  const handleTermChange = (selectedTerm) => {
    setSelectedTerm(selectedTerm);
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
    setSelectedStudent(selectedStudentData);
  };

   const rows = FeildData.map((field) => createData(field.name));

  const inputRefs = useRef([]);

  function createData(field) {
    return { field };
  }


  const handleVerticalKeyPress = (event, rowIndex, columnIndex) => {
    const nextRowIndex = rowIndex + 1;
    if (nextRowIndex < rows.length) {
      const nextInputRef = inputRefs.current[nextRowIndex]?.[columnIndex];
      if (nextInputRef) {
        const inputElement = nextInputRef.querySelector('input');
        if (inputElement) {
          inputElement.focus();
        }
      }
    }
  };

  const handleHorizontalKeyPress = (event, rowIndex, columnIndex) => {
    const nextColumnIndex = columnIndex + 1;

    // Check if there are more columns to move to in the current row
    if (nextColumnIndex < students.length) {
      const nextInputRef = inputRefs.current[rowIndex]?.[nextColumnIndex];
      if (nextInputRef) {
        const inputElement = nextInputRef.querySelector('input');
        if (inputElement) {
          inputElement.focus();
          return; // Exit the function early if successful
        }
      }
    }

    // If no more columns in the current row, move to the next row
    const nextRowIndex = rowIndex + 1;
    if (nextRowIndex < rows.length) {
      const nextInputRef = inputRefs.current[nextRowIndex]?.[0]; // Move to the first column of the next row
      if (nextInputRef) {
        const inputElement = nextInputRef.querySelector('input');
        if (inputElement) {
          inputElement.focus();
        }
      }
    }
  };

  const handleSwitchChange = (isVertical) => {
    setIsVerticalSwitchOn(isVertical);
  };

  const handleConfirm = (action) => {
    let newText = '';
    if (action === 'A') {
      newText = 'A';
    } else if (action === 'B') {
      newText = 'B';
    } else if (action === 'C') {
      newText = 'C';
    }
    else if (action === 'Clear All') {
      newText = ' ' ;
    }
    setSelectedAction(action);
    setSelectedText(newText); // Update selectedText state with the appropriate text
    setConfirmationDialogOpen(true);
  };

  return (
    <ThemeProvider>
      {/* Upper Tab Component */}
      <UpperTab
        onClassChange={handleClassChange}
        selectedClass={selectedClass}
        onTermChange={handleTermChange}
        selectedTerm={selectedTerm}
        data={students}
        onStudentChange={handleStudentChange}
        selectedStudent={selectedStudent}
      />

      {/* MiddleBox Component */}
      <MiddleBox
        isVerticalSwitchOn={isVerticalSwitchOn}
        onSwitchChange={handleSwitchChange}
        rows={FeildData.map(field => createData(field.name))}
        inputRefs={inputRefs}
        selectedText={selectedText}
        onConfirm={handleConfirm}
        open={isConfirmationDialogOpen}
        action={selectedAction}
      />

      {/* Table Component */}
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 640 }}  className='scrollbar-2'>
          <Table stickyHeader aria-label="sticky table">
            {/* Table Head */}
            <TableHead sx={{ fontSize: "16px", fontWeight: "800" }}>
              <TableRow>
                <TableCell className={classes.fixedIstColumn} sx={{ top: '0', textAlign: "left", fontWeight: "800", paddingLeft: "40px" }}>
                  FieldName
                </TableCell>
                {/* Render selected student's cell */}
                {selectedStudent && (
                  <TableCell sx={{ textAlign: "center", fontWeight: "800" }}>
                    {selectedStudent.name}<br />
                    <Typography sx={{ textAlign: "center" }}>({selectedStudent.admissionNo})</Typography>
                  </TableCell>
                )}
                {/* Render cells for other students */}
                {selectedStudent === null && students.slice(1).map((student, index) => (
                  <TableCell sx={{ textAlign: "center", margin: "2px 10px", padding: "0px", fontWeight: "800" }} key={`student-${index}`} >
                    {student.name}<br />
                    <Typography sx={{ textAlign: "center" }}> [{student.admissionNo}]</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {FeildData.map((field, rowIndex) => (
                <TableRow key={`row-${rowIndex}`}>
                  <TableCell className={classes.fixedColumn} sx={{ top: '0', textAlign: "left", fontWeight: "800", paddingLeft: "40px" }}>
                    {field.name}
                  </TableCell>

                  {/* Render input cells */}
                  {selectedStudent ? (
                    <TableCell sx={{ textAlign: "center" }}>
                      <CustomTextField
                        rowIndex={rowIndex}
                        columnIndex={0}
                        inputRefs={inputRefs}
                        handleVerticalKeyDown={handleVerticalKeyPress}
                        handleHorizontalKeyDown={handleHorizontalKeyPress}
                        isVerticalSwitchOn={isVerticalSwitchOn}
                        value={selectedText}
                        selectedText={selectedText}
                      />
                    </TableCell>
                  ) : (
                    students.slice(1).map((_, columnIndex) => (
                      <TableCell key={`cell-${rowIndex}-${columnIndex}`} sx={{ textAlign: "center" }}>
                        <CustomTextField
                          rowIndex={rowIndex}
                          columnIndex={columnIndex}
                          inputRefs={inputRefs}
                          handleVerticalKeyDown={handleVerticalKeyPress}
                          handleHorizontalKeyDown={handleHorizontalKeyPress}
                          isVerticalSwitchOn={isVerticalSwitchOn}
                          value={selectedText}
                        />
                      </TableCell>
                    ))
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Submit Button */}
        <Grid sx={{ textAlign: "left" }}>
          <Button variant="contained" color="primary" sx={{ textAlign: "center", margin: "10px 20px" }}>
            Submit
          </Button>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
