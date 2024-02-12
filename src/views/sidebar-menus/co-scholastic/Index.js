import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid, Typography, TextField } from '@mui/material';
import { makeStyles, useTheme, ThemeProvider } from '@mui/styles';
import { StudentData } from '../marks-entry-panel/dropdown data/StudentData';
import { FeildData } from './Data/feild'; // Corrected import

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
  const theme = useTheme();
  const classes = useStyles(theme);

  const rows = FeildData.map((field) => createData(field.name));

  function createData(field) {
    return { field };
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 640 }} className='scrollbar-2'>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ fontSize: "16px", fontWeight: "800" }}>
              <TableRow>
                <TableCell className={classes.fixedIstColumn} sx={{ top: '0', width: "250px", textAlign: "left", fontWeight: "800", paddingLeft: "40px" }}>
                  FieldName
                </TableCell>
                {StudentData.map((student, index) => (
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
                  {StudentData.map((_, columnIndex) => (
                    <TableCell key={`cell-${rowIndex}-${columnIndex}`}>
                      <TextField sx={{ width: "50px" }} />
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
