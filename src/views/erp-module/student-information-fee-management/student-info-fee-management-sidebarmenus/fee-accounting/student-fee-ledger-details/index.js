import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { alpha, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Toolbar, Typography, Checkbox, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import PrintTwoToneIcon from '@mui/icons-material/PrintTwoTone';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import rows from './StudentFeeLedgerData';


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

// ============= Table Head cell ============
const headCells = [
  {
    id: 'invoice-details',
    numeric: false,
    disablePadding: false,
    label: 'Invoice Details',
  },
  // {
  //   id: 'inv-type',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Inv Type',
  // },
  // {
  //   id: 'inv-no',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Inv No	',
  // },
  // {
  //   id: 'inv-date',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Inv Date',
  // },
  {
    id: 'last-date',
    numeric: true,
    disablePadding: false,
    label: 'Last Date',
  },
  {
    id: 'net-payable',
    numeric: true,
    disablePadding: false,
    label: 'Net Payable',
  },
  
  {
    id: 'amount-received',
    numeric: true,
    disablePadding: false,
    label: 'Amount Received',
  },
  {
    id: 'balance-fee',
    numeric: true,
    disablePadding: false,
    label: 'Balance Fee',
  },
  {
    id: 'mop',
    numeric: true,
    disablePadding: false,
    label: 'MOP',
  },

  {
    id: 'entry-no',
    numeric: true,
    disablePadding: false,
    label: 'Entry No',
  },

  {
    id: 'entry-date',
    numeric: true,
    disablePadding: false,
    label: 'Entry Date',
  },


  {
    id: 'chq-no',
    numeric: true,
    disablePadding: false,
    label: 'Chq No',
  },


  {
    id: 'chq-date',
    numeric: true,
    disablePadding: false,
    label: 'Chq Date',
  },


  {
    id: 'bank',
    numeric: true,
    disablePadding: false,
    label: 'Bank',
  },

  {
    id: 'branch',
    numeric: true,
    disablePadding: false,
    label: 'Branch	',
  },


  {
    id: 'remarks',
    numeric: true,
    disablePadding: false,
    label: 'Remarks',
  },

  {
    id: 'ref-no',
    numeric: true,
    disablePadding: false,
    label: 'Ref No',
  },

  {
    id: 'ref-date',
    numeric: true,
    disablePadding: false,
    label: 'Ref Date',
  },


  {
    id: 'payment-cat',
    numeric: true,
    disablePadding: false,
    label: 'Payment Cat',
  },

];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    // ============ Table head ==========
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
              sx={{width:'max-content'}}
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

export default function StudentFeeLedgerDetails() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [searchText, setSearchText] = useState('');


  const [anchorEl, setAnchorEl] = useState(null);

  const handlePrintClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePrintClose = () => {
    setAnchorEl(null);
  };

  const handlePrintReceipt = () => {
    // Logic for printing receipt
    // ...
    handlePrintClose();
  };

  const handlePrintInvoice = () => {
    // Logic for printing invoice
    // ...
    handlePrintClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'print-popover' : undefined;


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

                // ============= set status overdue if date is over =============
                {new Date(row.ldate) < new Date() ? row.status = 'overdue' : row.status}

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
                    <TableCell align="right">{row.mop}</TableCell>
                    <TableCell align="right">{row.entryNo}</TableCell>
                    <TableCell align="right">{row.entryDate}</TableCell>

              
                    <TableCell align="right">{row.paymode}</TableCell>

                    <TableCell align="right">
                      <IconButton onClick={handlePrintClick}><PrintTwoToneIcon /></IconButton>
                    </TableCell>

                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handlePrintClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Typography sx={{ p: 2 , display:'Grid'}}>
                        <Button sx={{color:'black', borderBottom:'1px dotted #ccc'}} onClick={handlePrintReceipt}>Print Receipt</Button>
                        <Button sx={{color:'black'}} onClick={handlePrintInvoice}>Print Invoice</Button>
                      </Typography>
                    </Popover>

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

