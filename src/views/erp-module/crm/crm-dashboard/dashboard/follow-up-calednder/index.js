// owned by ----------- sangeeta

import React from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';
import { HeadingCss } from 'components/dashboard/CommonCss';

import EventUpCalendar from './FollowUpCalender';

const FollowUpCalendar = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid rgb(227, 227, 227)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
      }}
    >
      {/* Heading */}
      <Grid
        sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
        }}
      >
        <Typography  variant="h2" sx={HeadingCss}>
         Follow Up Calender
        </Typography>
      </Grid>

      {/* Content */}
      <Grid>


        {/* Calendar */}
        <Box sx={{padding:"10px"}} >
         <EventUpCalendar/>
        </Box>
      </Grid>
    </Paper>
  );
};

export default FollowUpCalendar;
