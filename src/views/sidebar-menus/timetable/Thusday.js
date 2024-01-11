import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

function createData(key, sub, teacher, time) {
  return { key, sub, teacher, time };
}


export const timetableRows = [
  createData(1, 'thusday', 'Mr. kavin', '8:15am to 9:15am'),
  createData(2, 'Mathemathusday', 'Mr. Suraj', '9:15am to 10:15am'),
  createData(3, 'this is thusday', 'Mr. Abhishek', '10:15am to 11:00am'),
  createData(null, 'Bthusday', null, '11:00am to 11:15am'),
  createData(4, 'Hthusday', 'Mr. Pawan', '11:15am to 12:00am'),
  createData(5, 'Phythusday', 'Mr. Rakesh', '12:00am to 12:45pm'),
  createData(null, 'Lunch Break', null, '12:45am to 01:45pm'),
  createData(6, 'Chemithusday', 'Mrs. Sobha', '12:45am to 01:45pm'),
  createData(7, 'Compthusday', 'Mr. kavintest', '12:45am to 01:45pm'),
  // Add more rows as needed
];

export default function Thusday() {
  return (
    <Grid container spacing={0.5} style={{marginTop: '10px'}}>
      {timetableRows.map((row) => (
        <Grid item xs={12} key={row.key}>
          <Paper elevation={3} style={{ padding: row.key === null ? '5px' : '10px', display: 'flex',lineHeight: '10px',
          color: row.key === null ? 'green' : '#00000' }}>
              <Typography variant="h6" sx={{  display: 'flex',alignItems: 'center' }}>
              <Box sx={{ p: 1 , background: row.key === null ? '#fffff' : '#ede7f6'}}>{row.key}</Box>
              </Typography>
              <Typography variant="body1">
              <Box sx={{ p: 1 }}>
              <Box>{row.sub}</Box>
              <Box sx={{fontSize: '.600rem', color: 'gray'}}>{row.teacher}</Box>
              </Box>
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: 'auto', display: 'flex',alignItems: 'center' }}>
              <Box sx={{ p: 1 }}>{row.time}</Box>
              </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}