import React from 'react';
import {  Paper,TableCell,TableRow,TableContainer,Table,TableHead,TableBody,  Typography,  Grid } from '@mui/material';
import "../../dashboard/Default/dashboard-css/Overflow.css";

export default function StudentData() {

  return (
    <>
      <Paper elevation={1} sx={{ marginBottom: '16px', marginTop: '30px'}}>
      <Grid container spacing={2} p={2} alignItems="end">
          <Grid item xs={12} sm={8} lg={8}>
            <div>
              <Typography variant="h3">Student Details</Typography>
            </div>
          </Grid>
        </Grid>
        <TableContainer className='scrollbar-2'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No</TableCell>
                <TableCell>Adm No</TableCell>
                <TableCell>Adm Date</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Roll No</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Birth Date</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Father Name</TableCell>
                <TableCell>Father Mobile</TableCell>
                <TableCell>Father Email</TableCell>
                <TableCell>Mother Name</TableCell>
                <TableCell>Mother Mobile</TableCell>
                <TableCell>Mother Email</TableCell>
                <TableCell>Blood Group</TableCell>
                <TableCell>House</TableCell>
                <TableCell>Religion</TableCell>
                <TableCell>Pick Route</TableCell>
                <TableCell>Drop Route</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* First list for upload circular */}
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>D00158</TableCell>
                <TableCell>01/05/2024</TableCell>
                <TableCell>Aarav Joshi</TableCell>
                <TableCell>V-A</TableCell>
                <TableCell>Male</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Staff Ward</TableCell>
                <TableCell>05/02/2020</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>support@shauryasoft.com </TableCell>
                <TableCell>Delhi</TableCell>
                <TableCell>Deepak joshi</TableCell>
                <TableCell>9999999999</TableCell>
                <TableCell>Father@gmail.com</TableCell>
                <TableCell>Mrs Joshi</TableCell>
                <TableCell>9897969594</TableCell>
                <TableCell>Father@gmail.com</TableCell>
                <TableCell>O+</TableCell>
                <TableCell>Red house</TableCell>
                <TableCell>Hinduism</TableCell>
                <TableCell>Station 1</TableCell>
                <TableCell>Station 2</TableCell>
                
              </TableRow>
              {/* Second list for upload circular */}
              <TableRow>
              <TableCell>1</TableCell>
                <TableCell>D00158</TableCell>
                <TableCell>01/05/2024</TableCell>
                <TableCell>Aarav Joshi</TableCell>
                <TableCell>V-A</TableCell>
                <TableCell>Male</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Staff Ward</TableCell>
                <TableCell>05/02/2020</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>support@shauryasoft.com </TableCell>
                <TableCell>Delhi</TableCell>
                <TableCell>Deepak joshi</TableCell>
                <TableCell>9999999999</TableCell>
                <TableCell>Father@gmail.com</TableCell>
                <TableCell>Mrs Joshi</TableCell>
                <TableCell>9897969594</TableCell>
                <TableCell>Father@gmail.com</TableCell>
                <TableCell>O+</TableCell>
                <TableCell>Red house</TableCell>
                <TableCell>Hinduism</TableCell>
                <TableCell>Station 1</TableCell>
                <TableCell>Station 2</TableCell>
                
              </TableRow>
              {/* Third list for upload circular */}
              <TableRow>
              <TableCell>1</TableCell>
                <TableCell>D00158</TableCell>
                <TableCell>01/05/2024</TableCell>
                <TableCell>Aarav Joshi</TableCell>
                <TableCell>V-A</TableCell>
                <TableCell>Male</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Staff Ward</TableCell>
                <TableCell>05/02/2020</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>support@shauryasoft.com </TableCell>
                <TableCell>Delhi</TableCell>
                <TableCell>Deepak joshi</TableCell>
                <TableCell>9999999999</TableCell>
                <TableCell>Father@gmail.com</TableCell>
                <TableCell>Mrs Joshi</TableCell>
                <TableCell>9897969594</TableCell>
                <TableCell>Father@gmail.com</TableCell>
                <TableCell>O+</TableCell>
                <TableCell>Red house</TableCell>
                <TableCell>Hinduism</TableCell>
                <TableCell>Station 1</TableCell>
                <TableCell>Station 2</TableCell>
                
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
