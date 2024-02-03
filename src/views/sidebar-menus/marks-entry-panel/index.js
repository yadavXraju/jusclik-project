import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { makeStyles, useTheme, ThemeProvider } from '@mui/styles';
import SearchFilter from '../updates/SearchFilter';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginBottom: theme.spacing(2),
  },
  tableHead: {
    background: theme.palette.background.default,
    zIndex: 1000,
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
    zIndex:999,
    backgroundColor: theme.palette.background.default,
  },
  fixedIstColumn: {
    left: 0,
    position: 'sticky',
    zIndex:9999,
    backgroundColor: theme.palette.background.default,
  },
}));


function createData(name, admissionNo, english, hindi, math, science, socialScience, physics) {
  return { name, admissionNo, english, hindi, math, science, socialScience, physics };
}

const rows = [
  createData('Sangeeta', "1323", 159, 6.0, 24, 4.0, 8.0, 5.0),
  createData('Anjali', "123", 237, 9.0, 37, 4.3, 6.0, 7.0),
  createData('Aman', "2434", 262, 16.0, 24, 6.0, 9.0, 8.0),
  createData('Jivesh', "24222", 305, 3.7, 67, 4.3, 5.0, 6.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0), createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0), createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0), createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
];

export default function MarksEntryPanel() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <SearchFilter />
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 640 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
              <TableCell  className={classes.fixedIstColumn} sx={{top:'0'}} >Student ID</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>

             
              </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} >
                <TableCell className={classes.fixedColumn} >{`${row.name} (${row.admissionNo})`}</TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </ThemeProvider>
  );
}



