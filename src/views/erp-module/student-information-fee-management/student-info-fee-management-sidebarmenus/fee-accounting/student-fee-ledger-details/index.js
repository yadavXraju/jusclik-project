import React, { useState, useMemo } from 'react';
import {  Box, Paper, Table, TableBody, TableCell, TableContainer,  TableRow, Checkbox, } from '@mui/material';
import EnhancedTableHead from './TableHead';
import rows from './StudentFeeLedgerData';
import EnhancedTableToolbar from './Toolbar';

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
    
      // Calculate total net pay of selected rows
      let totalNetPay = 0;
      newSelected.forEach(selectedId => {
        const selectedRow = rows.find(row => row.id === selectedId);
        if (selectedRow) {
          totalNetPay += selectedRow.netpay;
        }
      });
      console.log(totalNetPay);
    };

  
   const isSelected = (id) => selected.indexOf(id) !== -1;


  const visibleRows = useMemo(
    () => stableSort(rows.filter(row => row.name.toLowerCase().includes(searchText.toLowerCase())), getComparator(order, orderBy)),
    [order, orderBy, rows, searchText],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>

        {/* ======================= toolbar ======================== */}
          <EnhancedTableToolbar
            numSelected={selected.length}
            selectedRows={selected.map(id => rows.find(row => row.id === id))}
            onSearchChange={(e) => setSearchText(e.target.value)}
            // totalNetPay={totalNetPay} // Pass totalNetPay as a prop
          />

        <TableContainer className='scrollbar'>
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
                    {/* checkbox */}
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

                    {/* fee period */}
                    <TableCell align="left">{row.feePeriod}</TableCell>

                    {/* inve no , inv type , inv date */}

                  <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                    >
                      <Box>
                        <span style={{ fontWeight: 'bold' }}>{row.invNo} {row.name}</span><br />
                        {row.date}
                      </Box>
                    </TableCell>

                    <TableCell align="right">{row.ldate}</TableCell>
                    <TableCell align="right">{row.netpay}</TableCell>
                    <TableCell align="right">{row.amtpay}</TableCell>
                    <TableCell align="right">{row.bal}</TableCell>

                      {/* status */}
                      <TableCell>
                          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                            <Box
                              sx={{
                                color:
                                  row.status === 'Paid'
                                    ? 'rgb(0, 200, 83)'
                                    : row.status === 'overdue'
                                    ? '#433e1a'
                                    : 'rgb(216, 67, 21)',
                                borderRadius: '16px',
                                background:
                                  row.status === 'Paid'
                                    ? 'rgba(147, 213, 166, 0.38)'
                                    : row.status === 'overdue'
                                    ? 'rgba(255, 255, 0, 0.23)' // Updated background color for Overdue status
                                    : 'rgb(251, 233, 231)',
                                '&:hover': {
                                  background:
                                    row.status === 'Paid'
                                      ? 'rgb(0, 200, 83)'
                                      : row.status === 'overdue'
                                      ? '#b4aa10'
                                      : 'rgb(216, 67, 21)',
                                  color: 'white',
                                },
                                padding: '2px',
                                paddingRight: '8px',
                                paddingLeft: '8px',
                                textAlign: 'center',
                              }}
                            >
                              {/* Render Overdue only when status is Pending and date is overdue */}
                              {row.status === 'Pending' && new Date(row.ldate) < new Date() ? 'Overdue' : row.status}
                            </Box>
                          </Box>
                      </TableCell>

                    {/* method of payment */}
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


                    {/* chq details */}
                      {/* <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        <Box>
                          <span style={{ fontWeight: '600' }}>{row.chqNo}</span><br />
                          {row.chqDate}
                        </Box>
                      </TableCell> */}


                      {/* bank details */}

                      {/* <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        <Box sx={{textTransform:'lowercase'}}>
                          <span style={{ fontWeight: '600' , textTransform:'uppercase' }}>{row.bank}</span><br />
                          {row.branch}
                        </Box>
                      </TableCell> */}


                    {/* Ref details */}
                    
                    {/* <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        <Box>
                          <span style={{ fontWeight: '600' }}>{row.refNo}</span><br />
                          {row.refDate}
                        </Box>
                    </TableCell> */}


                    {/* payment details */}

                    <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        <Box sx={{width:'200px'}}>
                          {/* chq details */}
                          <span style={{fontWeight:'600'}}>Chq Details:</span><span> {row.chqNo}  {row.chqDate}  </span>
                           <br/>
                           {/* bank details */}
                           <span style={{fontWeight:'600'}}>Bank Details:</span><span> {row.bank} {row.branch}</span>
                           <br/>
                            {/* ref details */}
                           <span style={{fontWeight:'600'}}>Ref Details :</span><span> {row.refNo} {row.refDate} </span>
                        </Box>
                    </TableCell> 


                    <TableCell align="left" sx={{textTransform:'uppercase'}}>{row.settlementAc}</TableCell>   
  
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

