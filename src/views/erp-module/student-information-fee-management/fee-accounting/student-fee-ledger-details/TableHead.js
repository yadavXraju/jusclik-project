// Page owner : abhishek negi
// description : Table Head of Fee ledger

import PropTypes from 'prop-types';
import {  Box, TableCell, TableHead, TableRow, TableSortLabel, Checkbox, } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// ============= Table Head cell ============
export const headCells = [

  {
    id: 'fee-period',
    numeric: false,
    disablePadding: false,
    label: 'Fee Period',
  },
    {
      id: 'invoice-details',
      numeric: false,
      disablePadding: false,
      label: 'Invoice Details',
    },
  
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
      label: 'Amt Received',
    },
    {
      id: 'balance-fee',
      numeric: true,
      disablePadding: false,
      label: 'Balance Fee',
    },
      
  
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Status',
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

     {
      id: 'payment-details',
      numeric: true,
      disablePadding: false,
      label: 'Payment Details',
    },
  
  
    {
      id: 'settlement-ac',
      numeric: false,
      disablePadding: false,
      label: 'Settlement Ac',
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

  export default EnhancedTableHead;
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  