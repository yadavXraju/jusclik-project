import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Typography, ListItemText, Button, Stack } from '@mui/material';
import axios from 'axios';
import config from 'config';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const LeaveItem = ({ title, date, duration }) => (
  <StyledPaper sx={{ my: 1, mx: 'auto', p: 2 }}>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item xs zeroMinWidth>
        <Typography noWrap>{title}</Typography>
        <ListItemText secondary={date} />
      </Grid>
      <Grid item>
        <Typography variant="body2" color="text.secondary">{duration}</Typography>
      </Grid>
    </Grid>
  </StyledPaper>
);

export default function Leaves() {
  const fetchLeaveData = async () => {
    try {
      const response = await axios.get('https://uat.shauryasoft.com/api/student/attendance', {
        params: {
          SCode: 6,
          Session: '2023-2024',
          Class: 'IX',
          Section: 'A',
          EnrollCode: 'D00023',
          Month: 'Nov-2023',
          Date: ''
        },
        headers: { ApiKey: config.ApiKey },
      });
      console.log(response.data);
      alert(response.data.EnrollNo);
      if (response.data.EnrollNo === 'D00023') {
        alert('Successfull');
        console.log(response.data);
      } else {
        alert('Login unsuccessful');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data');
    }
  };

  const leaveItems = [
    { title: 'Marriage', date: 'Jan 9, 2023', duration: 'Half Day' },
    { title: 'Fever', date: 'Jan 9, 2023', duration: '3 Day' },
    { title: 'Fever', date: 'Jan 9, 2023', duration: '4 Day' },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <Typography variant="h3">Recent Leaves</Typography>
        {leaveItems.map((leave, index) => (
          <LeaveItem key={index} {...leave} />
        ))}
      </Box>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end", alignItems: "flex-end", m: 2 }}>
        <Button variant="contained" onClick={fetchLeaveData}>Apply Leave +</Button>
      </Stack>
    </>
  );
}
