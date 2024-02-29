import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Table, TableCell, TableContainer, TableHead, TableRow, Typography, TableBody, Button, Popover } from '@mui/material';
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Pagination from '../../common-section/Pagination';

const ExpensesTraveldata = [
  {
    claimNo: '001',
    claim: 'Travel to Conference',
    expenses: 'Flight, Hotel',
    approvedAmount: '500',
    claimStatus: 'Approved',
    actionTakenby: 'Manager A',
    waitingOn: ''
  },
  {
    claimNo: '002',
    claim: 'Business Trip',
    expenses: 'Train, Meals',
    approvedAmount: '800',
    claimStatus: 'Pending',
    actionTakenby: '',
    waitingOn: 'Finance Department'
  },
  {
    claimNo: '003',
    claim: 'Client Meeting',
    expenses: 'Taxi, Dinner',
    approvedAmount: '300',
    claimStatus: 'Rejected',
    actionTakenby: 'Manager B',
    waitingOn: ''
  },
  {
    claimNo: '004',
    claim: 'Site Visit',
    expenses: 'Fuel, Accommodation',
    approvedAmount: '600',
    claimStatus: 'Approved',
    actionTakenby: 'Manager C',
    waitingOn: ''
  },
  {
    claimNo: '005',
    claim: 'Training Session',
    expenses: 'Workshop Fee, Lunch',
    approvedAmount: '400',
    claimStatus: 'Pending',
    actionTakenby: '',
    waitingOn: 'HR Department'
  },
  {
    claimNo: '006',
    claim: 'Business Trip',
    expenses: 'Train, Meals',
    approvedAmount: '800',
    claimStatus: 'Pending',
    actionTakenby: '',
    waitingOn: 'Finance Department'
  },
  {
    claimNo: '007',
    claim: 'Client Meeting',
    expenses: 'Taxi, Dinner',
    approvedAmount: '300',
    claimStatus: 'Rejected',
    actionTakenby: 'Manager B',
    waitingOn: ''
  },
  {
    claimNo: '008',
    claim: 'Site Visit',
    expenses: 'Fuel, Accommodation',
    approvedAmount: '600',
    claimStatus: 'Approved',
    actionTakenby: 'Manager C',
    waitingOn: ''
  },
  {
    claimNo: '009',
    claim: 'Training Session',
    expenses: 'Workshop Fee, Lunch',
    approvedAmount: '400',
    claimStatus: 'Pending',
    actionTakenby: '',
    waitingOn: 'HR Department'
  }
];

function Expense() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 2 }}>
        <TableContainer sx={{ border: '1px solid #ccc' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h4">Claim Number</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4">Claim</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4">Expenses</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4">Approved Amount</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4">Claim Status</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4">Action Taken By</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4">Waiting On</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ExpensesTraveldata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="h5">{item.claimNo}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">{item.claim}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">{item.expenses}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">{item.approvedAmount}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">{item.claimStatus}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">{item.actionTakenby}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">{item.waitingOn}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                      <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                          <div>
                            <IconButton {...bindTrigger(popupState)}>
                              <MoreHorizIcon />
                            </IconButton>
                            <Popover
                              {...bindPopover(popupState)}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                              }}
                            >
                              <Typography sx={{ p: 1, display: 'Grid' }}>
                                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                                <Button sx={{ color: 'black' }}>Cancel</Button>
                              </Typography>
                            </Popover>
                          </div>
                        )}
                      </PopupState>
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={ExpensesTraveldata.length}
          page={page}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          setPage={setPage}
        />
      </Box>
    </>
  )
}

export default Expense





