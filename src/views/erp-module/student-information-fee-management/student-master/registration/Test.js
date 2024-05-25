import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'

function createData(adm_no, adm_date, name, class_name, birth_day, category, house, status) {
  return {
    adm_no,
    adm_date,
    name,
    class_name,
    birth_day,
    category,
    house,
    status,
  };
}

const rows = [
  createData(123, '01-03-2024', 'John Doe', '10th A', '15-05-2005', 'General', 'Green', 'Active'),
  createData(124, '02-03-2024', 'Jane Smith', '11th A', '15-05-2005', 'Sports', 'Blue', 'Active'),
  createData(125, '03-2024-03', 'Michael Johnson', '9th A', '15-05-2005', 'Academic', 'Red', 'Inactive'),
  createData(126, '03-2024-03', 'Emily Brown', '12th A', '15-05-2005', 'Music', 'Yellow', 'Active'),
  createData(127, '03-2024-03', 'David Wilson', '10th Grade', '15-05-2005', 'General', 'Green', 'Inactive'),
  createData(128, '03-2024-03', 'Emma Taylor', '11th Grade', '15-05-2005', 'Sports', 'Blue', 'Active'),
  createData(129, '03-2024-03', 'Christopher Lee', '9th Grade', '15-05-2005', 'Academic', 'Red', 'Active'),
  createData(130, '03-2024-03', 'Olivia Martinez', '12th Grade', '15-05-2005', 'Music', 'Yellow', 'Inactive'),
  createData(131, '03-2024-03', 'William Davis', '10th Grade', '15-05-2005', 'General', 'Green', 'Active'),
  createData(132, '03-2024-03', 'Sophia Rodriguez', '11th Grade', '15-05-2005', 'Sports', 'Blue', 'Inactive'),
];

const headCells = [
  {
    id: 'adm_no',
    numeric: true,
    label: 'Adm. No',
  },
  {
    id: 'adm_date',
    numeric: true,
    disablePadding: false,
    label: 'Adm. Date',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Student Name',
  },
  {
    id: 'class_name',
    numeric: true,
    label: 'Class',
  },
  {
    id: 'birth_day',
    numeric: true,
    label: 'D.O.B',
  },
  {
    id: 'category',
    numeric: true,
    label: 'Student Category',
  },
  {
    id: 'house',
    numeric:false,
    label: 'House',
  },
  {
    id: 'status',
    numeric:false,
    label: 'Status',
  },
];

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function MasterStudentTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate(); // Import useNavigate hook

  const handleClick = () => {
    // Navigate to the student details page
    navigate('../registration');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    const Click=()=>{
      navigate('../admission-form');
    }
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="subtitle1" id="tableTitle" component="div" sx={{display:"flex", alignItems:"center"}}>
           <WidgetsIcon/> Students List
          </Typography>
          <Button onClick={Click} variant="contained" color="primary">
            Add
          </Button>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead />
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    //onChange={(event) => handleClick(event, row.adm_no)}
                    //onClick={(event) => event.stopPropagation()}
                    onClick={(event) => handleClick(event, row.adm_no)} // Navigate on click
                    role="checkbox"
                    tabIndex={-1}
                    key={row.adm_no}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        onClick={(event) => event.stopPropagation()}
                        color="primary"
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row">
                      {row.adm_no}
                    </TableCell>
                    <TableCell align="left">{row.adm_date}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.class_name}</TableCell>
                    <TableCell align="left">{row.birth_day}</TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    <TableCell align="left">{row.house}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={9} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}