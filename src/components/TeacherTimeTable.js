// ======= Page Owner Vikash =========
// ======= Common Layout For Timetable ===========

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { HeadingCss } from 'components/dashboard/CommonCss';
import { getCurrentDate } from 'utils/timeUtils';

export default function TeacherTimeTable({ TeacherTimeTableDetails }) {
  // ====== Getting current date ===========
  const currentDate = getCurrentDate(); // Use getCurrentDate function

  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
          border: '1px solid rgba(128, 128, 128, 0.25)',
          boxShadow: '4px 4px 9px 2px #ddddddc2',
          marginBottom: '20px'
        }}
      >
        <Grid
          sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h2" style={HeadingCss}>
            Time Table
          </Typography>

          <Typography variant="h2" style={HeadingCss}>
            {currentDate}
          </Typography>
        </Grid>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: '25%' }}>Period</TableCell>
                <TableCell align="left" style={{ width: '25%' }}>
                  Class
                </TableCell>
                <TableCell align="left" style={{ width: '25%' }}>
                  Subject
                </TableCell>
                <TableCell align="left" style={{ width: '25%' }}>
                  Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TeacherTimeTableDetails.map((item, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {item.period}
                  </TableCell>
                  <TableCell align="left">{item.class}</TableCell>
                  <TableCell align="left">{item.subject}</TableCell>
                  <TableCell align="left">{item.Time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
