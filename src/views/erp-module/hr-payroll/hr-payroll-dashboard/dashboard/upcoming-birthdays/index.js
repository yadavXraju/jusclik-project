// owned by sangeeta

import React from 'react';
import { Paper, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Avatar, Grid } from '@mui/material';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss';

const UpcomingBirthdays = () => {
  // Dummy data for upcoming birthdays
  const birthdaysData = [
    { img: "employee1.jpg", id: "001", name: "John Doe", department: "IT", dob: "24-04-2024", position: "Software Engineer" },
    { img: "employee1.jpg", id: "003", name: "Abhishek", department: "Finance", dob: "21-04-2024", position: "Software Engineer" },
    { img: "employee1.jpg", id: "004", name: "Ruby ", department: "HR", dob: "20-04-2024", position: "Software Engineer" },
    { img: "employee2.jpg", id: "002", name: "Jane Smith", department: "HR", dob: "16-04-2024", position: "HR Manager" },
    { img: "employee2.jpg", id: "005", name: "Jane Smith", department: "HR", dob: "18-04-2024", position: "HR Manager" },
    { img: "employee2.jpg", id: "006", name: "Jane Smith", department: "HR", dob: "20-04-2024", position: "HR Manager" },
    // Add more birthdays data
  ];

  // Function to check if a date is within the next 7 days
  const isWithinNext7Days = (dateString) => {
    const today = new Date();
    const [day, month, year] = dateString.split('-').map(Number);
    const birthdayDate = new Date(year, month - 1, day);
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const within7Days = birthdayDate <= nextWeek && birthdayDate >= today;
    const isToday = birthdayDate.toDateString() === today.toDateString(); // Check if the birthday is today
    return within7Days || isToday;
  };

  // Filter birthdays that are within the next 7 days
  const upcomingBirthdays = birthdaysData.filter(birthday => isWithinNext7Days(birthday.dob));

  // Sort upcoming birthdays by date
  upcomingBirthdays.sort((a, b) => {
    const [dayA, monthA, yearA] = a.dob.split('-').map(Number);
    const [dayB, monthB, yearB] = b.dob.split('-').map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateA - dateB;
  });

  return (
    <Paper>
      <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
        <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Upcoming Birthdays</Typography>
      </Grid>
      <TableContainer className='scrollbar-2' sx={{height:"371px"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {upcomingBirthdays.map((birthday, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <Avatar alt={birthday.name} src={birthday.img} />
                    </Grid>
                    <Grid item>
                      <div>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{birthday.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{`ID: ${birthday.id}`}</Typography>
                      </div>
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <div>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{birthday.department}</Typography>
                        <Typography variant="body2" color="textSecondary">{birthday.position}</Typography>
                      </div>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>{birthday.dob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default UpcomingBirthdays;
