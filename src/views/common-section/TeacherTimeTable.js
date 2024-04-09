

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MainCard from 'ui-component/cards/MainCard';
import { Grid , Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss';
import { getCurrentDate } from 'utils/timeUtils';


export default function TeacherTimeTable( { TeacherTimeTableDetails }) {
     // getting current date
     const currentDate = getCurrentDate(); // Use getCurrentDate function

  return (
    <>

        <MainCard>
           <Grid container spacing={gridSpacing}>
               <Grid item xs={12} sx={{ mb: 0, padding: '10px 40px !important', paddingTop: '24px !important' }}>
                    <Grid alignContent="center" justifyContent="space-between" sx={{ marginBottom: '1rem' }}>
                        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="h2" style={HeadingCss}>
                              Time Table
                            </Typography>

                            <Typography variant="h2" style={HeadingCss}>
                            {currentDate}
                            </Typography>
                        </Grid>
                    </Grid>

                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '25%' }}>Period</TableCell>
                            <TableCell align="left" style={{ width: '25%' }}>Class</TableCell>
                            <TableCell align="left" style={{ width: '25%' }}>Subject</TableCell>
                            <TableCell align="left" style={{ width: '25%' }}>Time</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {TeacherTimeTableDetails.map((item , index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
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
                </Grid>
            </Grid>
        </MainCard>
    </>
  );
}
