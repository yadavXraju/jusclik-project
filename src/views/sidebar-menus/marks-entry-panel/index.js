import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { makeStyles, useTheme, ThemeProvider } from '@mui/styles';
import UpperTab from './UpperTab';
import '../../dashboard/Default/dashboard-css/Overflow.css';
import { subject } from './dropdown data/SubjectData';
import StudentData from './dropdown data/StudentData';

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
  fixedIstColumn: {
    left: 0,
    position: 'sticky',
    zIndex: 9,
    backgroundColor: theme.palette.background.default,
  },
}));

// Function to create data
function createData(name, admissionNo) {
  return { name, admissionNo };
}

// Mapping StudentData to create rows
const rows = StudentData.map((student) => createData(student.name, student.admissionNo));

// Main component
export default function MarksEntryPanel() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      {/* Upper Tab component */}
      <UpperTab />
      {/* Main Paper container */}
      <Paper sx={{ width: '100%' }}>
        {/* Table container with scrollbar */}
        <TableContainer className="scrollbar" sx={{ maxHeight: 640 }}>
          {/* Sticky header table */}
          <Table stickyHeader aria-label="sticky table">
            {/* Table Head */}
            <TableHead>
              {/* Table Head Row */}
              <TableRow>
                {/* Sticky first column */}
                <TableCell className={classes.fixedIstColumn} sx={{ top: '0' }}>
                  Student ID
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
                  <TableCell className={classes.fixedColumn}>{`${row.name} (${row.admissionNo})`}</TableCell>
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
