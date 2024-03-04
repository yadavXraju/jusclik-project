import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import { visuallyHidden } from '@mui/utils';
import { useNavigate } from 'react-router-dom';

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
    createData(123, '2024-03-01', 'John Doe', '10th A', '2005-05-15', 'General', 'Green', 'Active'),
    createData(124, '2024-03-02', 'Jane Smith', '11th A', '2004-08-20', 'Sports', 'Blue', 'Active'),
    createData(125, '2024-03-03', 'Michael Johnson', '9th A', '2006-01-10', 'Academic', 'Red', 'Inactive'),
    createData(126, '2024-03-04', 'Emily Brown', '12th A', '2003-11-30', 'Music', 'Yellow', 'Active'),
    createData(127, '2024-03-05', 'David Wilson', '10th Grade', '2005-04-25', 'General', 'Green', 'Inactive'),
    createData(128, '2024-03-06', 'Emma Taylor', '11th Grade', '2004-09-05', 'Sports', 'Blue', 'Active'),
    createData(129, '2024-03-07', 'Christopher Lee', '9th Grade', '2006-02-20', 'Academic', 'Red', 'Active'),
    createData(130, '2024-03-08', 'Olivia Martinez', '12th Grade', '2003-12-10', 'Music', 'Yellow', 'Inactive'),
    createData(131, '2024-03-09', 'William Davis', '10th Grade', '2005-05-05', 'General', 'Green', 'Active'),
    createData(132, '2024-03-10', 'Sophia Rodriguez', '11th Grade', '2004-08-15', 'Sports', 'Blue', 'Inactive'),
  ];
  
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

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

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}

            
          >
            <TableSortLabel
              active={orderBy === headCell.id}
             
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="subtitle1"
          id="tableTitle"
          component="div"
        >
        Students List
        </Typography>
      )}

    
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function MasterStudentTable() {
  const [order, setOrder] = React.useState('');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate=useNavigate();


  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.adm_no);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, adm_no) => {
    const selectedIndex = selected.indexOf(adm_no);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, adm_no);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);

    // If a checkbox is selected, navigate to the new page
    if (selectedIndex === -1) {
      navigateToNewPage(adm_no);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (adm_no) => selected.indexOf(adm_no) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );


  const navigateToNewPage = () => {
    navigate("../registration-data"); // Change the path as per your route setup
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.adm_no);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.adm_no)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.adm_no}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
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
                <TableRow
                >
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
