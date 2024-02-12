// CoScholaistic.js

import React, { useRef, useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid, Typography} from '@mui/material';
import { makeStyles, useTheme, ThemeProvider } from '@mui/styles';
import { FeildData } from './Data/feild'; // Corrected import
import { StudentData, StudentData2, StudentData3 } from '../marks-entry-panel/dropdown data/StudentData';
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
}));

export default function CoScholaistic() {
  const [selectedClass, setSelectedClass] = useState('1');
  const [students, setStudents] = useState([]);
  const [isVerticalSwitchOn, setIsVerticalSwitchOn] = useState(true);
  const [selectedTerm, setSelectedTerm] = useState('1');

  const theme = useTheme();
  const classes = useStyles(theme);

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
    const nextRowIndex = rowIndex < students.length - 1 ? rowIndex + 1 : 0;
    const nextInputRef = inputRefs.current[nextRowIndex]?.[nextColumnIndex];
    if (nextInputRef) {
      const inputElement = nextInputRef.querySelector('input');
      if (inputElement) {
        inputElement.focus();
      }
    }
  };

  const handleSwitchChange = (isVertical) => {
    setIsVerticalSwitchOn(isVertical);
  };

  const handleKeyDown = (event, rowIndex, columnIndex) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (isVerticalSwitchOn) {
        handleVerticalKeyPress(event, rowIndex, columnIndex);
      } else {
        handleHorizontalKeyPress(event, rowIndex, columnIndex);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <UpperTab
        onClassChange={handleClassChange}
        selectedClass={selectedClass}
        onTermChange={handleTermChange}
        selectedTerm={selectedTerm}
      />
      <MiddleBox
        isVerticalSwitchOn={isVerticalSwitchOn}
        onSwitchChange={handleSwitchChange}
        rows={rows}
        inputRefs={inputRefs}
      />
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 640 }} className='scrollbar-2'>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ fontSize: "16px", fontWeight: "800" }}>
              <TableRow>
                <TableCell className={classes.fixedIstColumn} sx={{ top: '0', width: "250px", textAlign: "left", fontWeight: "800", paddingLeft: "40px" }}>
                  FieldName
                </TableCell>
                {students.map((student, index) => (
                  <TableCell key={`student-${index}`} sx={{ textAlign: "center", margin: "2px 10px", padding: "0px", fontWeight: "800" }}>
                    {student.name}<br />
                    <Typography sx={{ textAlign: "center" }}> [{student.admissionNo}]</Typography>
                  </TableCell>
                ))}
                <TableCell className={classes.fixedIstColumn2} sx={{ top: '0', textAlign: "center", fontWeight: "800" }}>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={`row-${rowIndex}`}>
                  <TableCell className={classes.fixedColumn} sx={{ top: '0', textAlign: "left", fontWeight: "800", paddingLeft: "40px" }}>
                    {row.field}
                  </TableCell>
                  {students.map((_, columnIndex) => (
                    <TableCell key={`cell-${rowIndex}-${columnIndex}`} sx={{ textAlign: "center" }}>
                     <CustomTextField
                        rowIndex={rowIndex}
                        columnIndex={columnIndex}
                        inputRefs={inputRefs}
                        handleKeyDown={handleKeyDown}
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
