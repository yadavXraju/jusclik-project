// import React from 'react'

// function ExpensesTravel() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ExpensesTravel






import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Table,  TableCell, TableContainer, TableHead, TableRow, Typography, TableBody, Button, Popover } from '@mui/material';
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Pagination from '../../common-section/Pagination';


const ExpensesTraveldata = [
  { date: '05-Mar-2024', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 1' },
  { date: '12-Mar-2024', attendanceVisual: 'Absent', effectiveHours: '7h 0m', grossHours: '7h 30m', arrival: '8:00 AM', log: 'Entry 2' },
  { date: '19-Mar-2024', attendanceVisual: 'Present', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 3' },
  { date: '26-Mar-2024', attendanceVisual: 'Present', effectiveHours: '8h 30m', grossHours: '9h 0m', arrival: '8:30 AM', log: 'Entry 4' },
  { date: '02-Apr-2024', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 5' },
  { date: '09-Apr-2024', attendanceVisual: 'Present', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 6' },
  { date: '16-Apr-2024', attendanceVisual: 'Present', effectiveHours: '8h 30m', grossHours: '9h 0m', arrival: '8:30 AM', log: 'Entry 7' },
  { date: '23-Apr-2024', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 8' },
  { date: '30-Apr-2024', attendanceVisual: 'Absent', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 9' },
  { date: '05-Mar-2023', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 1' },
  { date: '12-Aug-2023', attendanceVisual: 'Absent', effectiveHours: '7h 0m', grossHours: '7h 30m', arrival: '8:00 AM', log: 'Entry 2' },
  { date: '19-July-2023', attendanceVisual: 'Present', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 3' },
  { date: '26-Mar-2023', attendanceVisual: 'Present', effectiveHours: '8h 30m', grossHours: '9h 0m', arrival: '8:30 AM', log: 'Entry 4' },
  { date: '02-Jun-2023', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 5' },
  { date: '09-Apr-2023', attendanceVisual: 'Present', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 6' },
  { date: '16-May-2023', attendanceVisual: 'Present', effectiveHours: '8h 30m', grossHours: '9h 0m', arrival: '8:30 AM', log: 'Entry 7' },
  { date: '23-Apr-2023', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 8' },
  { date: '30-Dec-2023', attendanceVisual: 'Absent', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 9' },
];



export default function ExpensesTravel() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);



  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 2 }}>
      <TableContainer sx={{border:'1px solid #ccc'}}>
        <Table >
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
                  <Typography variant="h5">{item.date}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.attendanceVisual}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.effectiveHours}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.grossHours}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.arrival}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.log}</Typography>
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
  );
}
