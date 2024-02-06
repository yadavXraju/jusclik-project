import React,{ useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { makeStyles, useTheme, ThemeProvider } from '@mui/styles';
import UpperTab from './UpperTab';
import '../../dashboard/Default/dashboard-css/Overflow.css';
import { subject } from './dropdown data/SubjectData';
import { StudentData2, StudentData3,StudentData } from './dropdown data/StudentData'; // Import StudentData2 and StudentData3
import MiddleBox from './MiddleBox';



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

// Function to create data
function createData(name, admissionNo) {
  return { name, admissionNo };
}



// Main component
export default function MarksEntryPanel() {
  const [selectedClass, setSelectedClass] = useState('');
  
  const [students, setStudents] = useState([]);

  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClassChange = (selectedClass) => {
    setSelectedClass(selectedClass);
  };

   // Fetch student data when the selected class changes

   useEffect(() => {
    // Choose the appropriate student data based on the selected class

    console.log('StudentData:', StudentData);
    let selectedStudentData = [];

    if (selectedClass === '4') {
      
      selectedStudentData = StudentData;
    } else if (selectedClass === '2') {
      selectedStudentData = StudentData2;
    } else if (selectedClass === '3') {
      selectedStudentData = StudentData3;
    }

    // Update the state with the selected student data
    setStudents(selectedStudentData);
  }, [selectedClass]);




// Mapping StudentData to create rows
const rows = students.map((student) => createData(student.name, student.admissionNo));

  return (
<ThemeProvider theme={theme}>
 {/* Pass the handleClassChange function and selectedClass state to UpperTab */}
 <UpperTab onClassChange={handleClassChange} selectedClass={selectedClass} />
 <MiddleBox/>
      {/* Main Paper container */}
      <Paper sx={{ width: '100%' }}>
        {/* Table container with scrollbar */}
        <TableContainer  sx={{ maxHeight: 640 }} className='scrollbar-2'>
          {/* Sticky header table */}
          <Table stickyHeader aria-label="sticky table">
            {/* Table Head */}
            <TableHead>
              {/* Table Head Row */}
              <TableRow>
                {/* Sticky first column */}
                <TableCell className={classes.fixedIstColumn} sx={{ top: '0',width:"100px" }}>
                  Student
                </TableCell>
                <TableCell className={classes.fixedIstColumn2} sx={{ top: '0' }}>
                  Admission
                </TableCell>
                {/* Mapping subject data to create table header cells */}
                {subject.map((subjectData, index) => (
                  <TableCell key={index} align="left">
                    {subjectData.label} {/* Assuming 'value' is the key containing the subject name */}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {/* Table Body */}
            <TableBody>
              {/* Mapping rows to create table rows */}
              {rows.map((row) => (
                <TableRow key={row.name} className={classes.rowHover}>
                  {/* Fixed first column with student name and admission number */}
                  <TableCell className={classes.fixedColumn}>{`${row.name} `}</TableCell>
                  <TableCell className={classes.fixedColumn2}>{`(${row.admissionNo})`}</TableCell>
                  {/* Mapping subject data to create table cells with TextField */}
                  {subject.map(( index) => (
                    <TableCell key={index} align="left">
                      <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </ThemeProvider>
  );
}
