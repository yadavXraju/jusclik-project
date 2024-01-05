import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

function createData(key, sub, time) {
  return { key, sub, time };
}

const rows = [
  createData(1, 'English', '8:15am to 9:15am'),
  createData(2, 'Mathematics', '9:15am to 10:15am'),
  createData(3, 'Science', '10:15am to 11:00am'),
  createData(null, 'Break', '11:00am to 11:15am'),
  createData(4, 'Hindi', '11:15am to 12:00am'),
  createData(5, 'Physics', '12:00am to 12:45pm'),
  createData(null, 'Lunch Brack', '12:45am to 01:45pm'),
  createData(6, 'Chemistry', '12:45am to 01:45pm'),
  createData(7, 'Computer', '12:45am to 01:45pm'),
  // Add more rows as needed
];

export default function BasicList() {
  return (

    <Grid container spacing={2} style={{marginTop: '10px'}}>
      {rows.map((row) => (
        <Grid item xs={12} key={row.key}>
          <Paper elevation={3} style={{ padding: '15px', textAlign: 'center', display: 'flex',lineHeight: '10px',
          color: row.key === null ? 'green' : '#00000' }}>
              <Typography variant="h6" sx={{ background: row.key === null ? '#fffff' : '#ede7f6' }}>
              <Box sx={{ m: 1 }}>{row.key}</Box>
              </Typography>
              <Typography variant="body1">
              <Box sx={{ m: 1 }}>{row.sub}</Box>
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: 'auto' }}>
              <Box sx={{ m: 1 }}>{row.time}</Box>
              </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}