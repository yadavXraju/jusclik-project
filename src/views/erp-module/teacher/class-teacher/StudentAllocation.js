// owner ruby
import React from 'react';
import { Paper, TableCell, TableRow, TableContainer, Table, TableHead, TableBody, Typography, Grid } from '@mui/material';

// sample data
const studentDataList = [
  {
    srNo: 1,admNo: 'D00158', admDate: '01/05/2024', studentName: 'Aarav Joshi', class: 'V-A', gender: 'Male', rollNo: 1, category: 'Staff Ward', birthDate: '05/02/2020', mobile: '0123456789', phone: '0123456789',email: 'support@shauryasoft.com',address: 'Delhi',fatherName: 'Deepak Joshi',fatherMobile: '9999999999',fatherEmail: 'Father@gmail.com',motherName: 'Mrs Joshi',motherMobile: '9897969594',motherEmail: 'Mother@gmail.com',bloodGroup: 'O+',house: 'Red house',religion: 'Hinduism',pickRoute: 'Station 1',dropRoute: 'Station 2'
  },
  {
      srNo: 2,admNo: 'D00158', admDate: '01/05/2024', studentName: 'Aarav Joshi', class: 'V-A', gender: 'Male', rollNo: 1, category: 'Staff Ward', birthDate: '05/02/2020', mobile: '0123456789', phone: '0123456789',email: 'support@shauryasoft.com',address: 'Delhi',fatherName: 'Deepak Joshi',fatherMobile: '9999999999',fatherEmail: 'Father@gmail.com',motherName: 'Mrs Joshi',motherMobile: '9897969594',motherEmail: 'Mother@gmail.com',bloodGroup: 'O+',house: 'Red house',religion: 'Hinduism',pickRoute: 'Station 1',dropRoute: 'Station 2'
    },
    {
      srNo: 3,admNo: 'D00158', admDate: '01/05/2024', studentName: 'Aarav Joshi', class: 'V-A', gender: 'Male', rollNo: 1, category: 'Staff Ward', birthDate: '05/02/2020', mobile: '0123456789', phone: '0123456789',email: 'support@shauryasoft.com',address: 'Delhi',fatherName: 'Deepak Joshi',fatherMobile: '9999999999',fatherEmail: 'Father@gmail.com',motherName: 'Mrs Joshi',motherMobile: '9897969594',motherEmail: 'Mother@gmail.com',bloodGroup: 'O+',house: 'Red house',religion: 'Hinduism',pickRoute: 'Station 1',dropRoute: 'Station 2'
    },
    {
      srNo: 4,admNo: 'D00158', admDate: '01/05/2024', studentName: 'Aarav Joshi', class: 'V-A', gender: 'Male', rollNo: 1, category: 'Staff Ward', birthDate: '05/02/2020', mobile: '0123456789', phone: '0123456789',email: 'support@shauryasoft.com',address: 'Delhi',fatherName: 'Deepak Joshi',fatherMobile: '9999999999',fatherEmail: 'Father@gmail.com',motherName: 'Mrs Joshi',motherMobile: '9897969594',motherEmail: 'Mother@gmail.com',bloodGroup: 'O+',house: 'Red house',religion: 'Hinduism',pickRoute: 'Station 1',dropRoute: 'Station 2'
    }, 
     {
      srNo: 5,admNo: 'D00158', admDate: '01/05/2024', studentName: 'Aarav Joshi', class: 'V-A', gender: 'Male', rollNo: 1, category: 'Staff Ward', birthDate: '05/02/2020', mobile: '0123456789', phone: '0123456789',email: 'support@shauryasoft.com',address: 'Delhi',fatherName: 'Deepak Joshi',fatherMobile: '9999999999',fatherEmail: 'Father@gmail.com',motherName: 'Mrs Joshi',motherMobile: '9897969594',motherEmail: 'Mother@gmail.com',bloodGroup: 'O+',house: 'Red house',religion: 'Hinduism',pickRoute: 'Station 1',dropRoute: 'Station 2'
    }, 
     {
      srNo: 6,admNo: 'D00158', admDate: '01/05/2024', studentName: 'Aarav Joshi', class: 'V-A', gender: 'Male', rollNo: 1, category: 'Staff Ward', birthDate: '05/02/2020', mobile: '0123456789', phone: '0123456789',email: 'support@shauryasoft.com',address: 'Delhi',fatherName: 'Deepak Joshi',fatherMobile: '9999999999',fatherEmail: 'Father@gmail.com',motherName: 'Mrs Joshi',motherMobile: '9897969594',motherEmail: 'Mother@gmail.com',bloodGroup: 'O+',house: 'Red house',religion: 'Hinduism',pickRoute: 'Station 1',dropRoute: 'Station 2'
    }
  // Add more student data objects as needed
];


export default function StudentAllocation() {

  return (
    <>
      <Paper elevation={1} sx={{ marginBottom: '16px', marginTop: '30px' }}>
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
              {/* Render each student's data dynamically */}
              {studentDataList.map(student => (
                <TableRow key={student.srNo}>
                  <TableCell>{student.srNo}</TableCell>
                  <TableCell>{student.admNo}</TableCell>
                  <TableCell>{student.admDate}</TableCell>
                  <TableCell>{student.studentName}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.rollNo}</TableCell>
                  <TableCell>{student.category}</TableCell>
                  <TableCell>{student.birthDate}</TableCell>
                  <TableCell>{student.mobile}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.address}</TableCell>
                  <TableCell>{student.fatherName}</TableCell>
                  <TableCell>{student.fatherMobile}</TableCell>
                  <TableCell>{student.fatherEmail}</TableCell>
                  <TableCell>{student.motherName}</TableCell>
                  <TableCell>{student.motherMobile}</TableCell>
                  <TableCell>{student.motherEmail}</TableCell>
                  <TableCell>{student.bloodGroup}</TableCell>
                  <TableCell>{student.house}</TableCell>
                  <TableCell>{student.religion}</TableCell>
                  <TableCell>{student.pickRoute}</TableCell>
                  <TableCell>{student.dropRoute}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
