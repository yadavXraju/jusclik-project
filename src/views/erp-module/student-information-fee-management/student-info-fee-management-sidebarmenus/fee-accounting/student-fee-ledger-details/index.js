import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { alpha, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Toolbar, Typography, Checkbox, IconButton, Tooltip } from '@mui/material';

import { visuallyHidden } from '@mui/utils';
import rows from './StudentFeeLedgerData';

// icons
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';

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
    id: 'entry-no-date',
    numeric: true,
    disablePadding: false,
    label: 'Entry Details',
  },

  // {
  //   id: 'entry-date',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Entry Date',
  // },


  {
    id: 'chq-no-date',
    numeric: true,
    disablePadding: false,
    label: 'Chq Details',
  },


  // {
  //   id: 'chq-date',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Chq Date',
  // },


  {
    id: 'bank-detail',
    numeric: false,
    disablePadding: false,
    label: 'Bank Details',
  },

  // {
  //   id: 'branch',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Branch	',
  // },


  {
    id: 'remarks',
    numeric: false,
    disablePadding: false,
    label: 'Remarks',
  },

  {
    id: 'ref-details',
    numeric: true,
    disablePadding: false,
    label: 'Ref Details',
  },

  // {
  //   id: 'ref-date',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Ref Date',
  // },


  {
    id: 'payment-cat',
    numeric: false,
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
    // tool bar for select and delete number
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

       {/* actions */}
      {numSelected > 0 ? (
        <>

        {/* delete */}
              <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>

            {/* fee payment */}
              <Tooltip title="Fee Payment">
              <IconButton>
                <PaymentTwoToneIcon />
              </IconButton>
              </Tooltip>

         {/* Transfer Entry */}

          <Tooltip title="Transfer Entry">
                <IconButton>
                  <ArticleTwoToneIcon />
                </IconButton>
            </Tooltip>
        </>

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

              {/* mapping table rows data */}
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (

                  // table data
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
                      <Box>
                        <span style={{ fontWeight: 'bold' }}>{row.name}</span><br />
                        {row.date}
                      </Box>
                    </TableCell>
                    <TableCell align="right">{row.ldate}</TableCell>
                    <TableCell align="right">{row.netpay}</TableCell>
                    <TableCell align="right">{row.amtpay}</TableCell>
                    <TableCell align="right">{row.bal}</TableCell>
                    <TableCell align="right">{row.mop}</TableCell>

                    {/* entry number and entry date */}
                   <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      align="right"
                    >
                      <Box>
                        <span style={{ fontWeight: '600' }}>#{row.entryNo}</span><br />
                        {row.entryDate}
                      </Box>
                    </TableCell>


                    {/* chq number and chq date */}
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        <Box>
                          <span style={{ fontWeight: '600' }}>{row.chqNo}</span><br />
                          {row.chqDate}
                        </Box>
                      </TableCell>


                      {/* bank details */}

                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        <Box>
                          <span style={{ fontWeight: '600' }}>{row.bank}</span><br />
                          {row.branch}
                        </Box>
                      </TableCell>

                    <TableCell align="left"   className='find-comp'>{row.remarks}</TableCell>  

                    {/* Ref details */}
                    
                    <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        <Box>
                          <span style={{ fontWeight: '600' }}>{row.refNo}</span><br />
                          {row.refDate}
                        </Box>
                    </TableCell>

                    <TableCell align="left" sx={{textTransform:'uppercase'}}>{row.paymentCat}</TableCell>   
  
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

