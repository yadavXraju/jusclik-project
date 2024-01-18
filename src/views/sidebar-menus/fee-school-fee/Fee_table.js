import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { alpha, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Toolbar, Typography, Checkbox, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import PrintTwoToneIcon from '@mui/icons-material/PrintTwoTone';



function createData(id, name, date, ldate, netpay, amtpay, bal, receiptno, receiptdate, paymode, status) {
  return {
    id,
    name,
    date,
    ldate,
    netpay,
    amtpay,
    bal,
    receiptno,
    receiptdate,
    paymode,
    status,
  };
}

const rows = [
  createData(1, 'Regular', '01/May/2024', '28/Feb/2024', 305, 4000, 40000, '1', '28/Jan/2024', 'Adj Entry', 'Overdue'),
  createData(2, 'Tution', '01/Mar/2024', '22/Dec/2024', 30, 45000, 45000, '2', '28/Feb/2024', 'Demand Draft', 'paid'),
  createData(3, 'Practical', '01/Jul/2024', '23/Jan/2024', 3067, 9000, 43000, '3', '28/Mar/2024', 'Adj Entry', 'Overdue'),
  createData(4, 'Tution', '01/Jun/2024', '22/Sep/2024', 3088, 5000, 35000, '4', '28/Apr/2024', 'Credit/Debit Card', 'paid'),
  createData(5, 'Regular', '01/Aug/2024', '21/Nov/2024', 3043, 8000, 54000, '5', '28/May/2024', 'Unpaid', 'paid'),
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
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Invoice Details',
  },
  {
    id: 'lastdate',
    numeric: true,
    disablePadding: false,
    label: 'Last Date',
  },
  {
    id: 'netpayable',
    numeric: true,
    disablePadding: false,
    label: 'Net Payable',
  },
  {
    id: 'amtpay',
    numeric: true,
    disablePadding: false,
    label: 'Amount Paid',
  },
  {
    id: 'balance',
    numeric: true,
    disablePadding: false,
    label: 'Balance',
  },
  {
    id: 'receipt',
    numeric: true,
    disablePadding: false,
    label: 'Receipt',
  },
  {
    id: 'paymode',
    numeric: true,
    disablePadding: false,
    label: 'Pay Mode',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'print',
    numeric: true,
    disablePadding: false,
    label: 'Print',
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
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
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
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {/* Nutrition */}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          {/* Add the icons inside the Tooltip component */}
          {/* <Tooltip title="Copy">
            <IconButton>
              <ContentCopyTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Print">
            <IconButton>
              <PrintTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip> */}
        </>
      )}
    </Toolbar>
  );
}

export default function FeeDataTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const visibleRows = useMemo(
    () => stableSort(rows.filter(row => row.name.toLowerCase().includes(searchText.toLowerCase())), getComparator(order, orderBy)),
    [order, orderBy, rows, searchText],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} onSearchChange={(e) => setSearchText(e.target.value)} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750, border: '1px solid rgba(224, 224, 224, 1)' }}
            aria-labelledby="tableTitle"
            size="medium"

          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    //onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    //aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    //selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) => handleClick(event, row.id)}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                    >
                      <div>
                        <span style={{ fontWeight: 'bold' }}>{row.name}</span><br />
                        {row.date}
                      </div>
                      {/* {`${row.name}`}<br />
                       {`${row.date}`} */}
                    </TableCell>
                    <TableCell align="right">{row.ldate}</TableCell>
                    <TableCell align="right">{row.netpay}</TableCell>
                    <TableCell align="right">{row.amtpay}</TableCell>
                    <TableCell align="right">{row.bal}</TableCell>
                    <TableCell align="right">
                      <div>
                        <span style={{ fontWeight: 'bold' }}>{`#${row.receiptno}`}</span><br />
                        {`${row.receiptdate}`}
                      </div>
                      {/* {`#${row.receiptno}`}<br />{`${row.receiptdate}`} */}
                    </TableCell>
                    <TableCell align="right">{row.paymode}</TableCell>
                    <TableCell sx={{
                      //color: row.paymode === 'paid' ? '#00cc5d' : (row.paymode === 'Demand Draft' ? '#00ffd0' : '#f5403c'),
                    }}>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                        <Box sx={{
                          color: row.status === 'paid' ? 'rgb(0, 200, 83)' : 'rgb(216, 67, 21)',
                          borderRadius: '16px',
                          background: row.status === 'paid' ? 'rgba(147, 213, 166, 0.38)' : 'rgb(251, 233, 231)',
                          '&:hover': {
                            background: row.status === 'paid' ? 'rgb(0, 200, 83)' : 'rgb(216, 67, 21)',
                            color: 'white',
                          },
                          padding: '2px',
                          paddingRight: '8px',
                          paddingLeft: '8px',
                          textAlign: 'center'
                        }}>
                          {row.status}
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="right"><IconButton onClick={() => handlePrint(id)}><PrintTwoToneIcon /></IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

