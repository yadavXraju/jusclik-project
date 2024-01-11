import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { timetableRows } from 'views/sidebar-menus/timetable/Timetablelist';
import { gridSpacing } from 'store/constant';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';

const TimeTableHome = () => {
  
  const periodsToShow = 4;
  const navigate = useNavigate();

  return (
    <Grid spacing={gridSpacing}>
      <Grid item component={Paper} lg={8} md={12} sm={12} xs={12} sx={{ textAlign: 'right', p: 3, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {timetableRows.slice(0, periodsToShow).map((row, index) => (
          <Grid container key={index} sx={{ textAlign: 'left', display: 'flex' }}>

            <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' }}>
              <Typography variant='span' sx={{ color: '#99a1b7', fontWeight: '500' }}>Time:</Typography>
              <Typography variant='h5'>{row.time}</Typography>
            </Grid>

            {row.key !== null ? (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' }}>
                <Typography variant='body2' sx={{ color: '#99a1b7', fontWeight: '500' }}>Period {row.key}</Typography>
                <Typography variant='h5'>
                  <span>{row.sub}</span>
                </Typography>
              </Grid>
            ) : (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' }}>
                <Typography variant='h5'>
                  <span>{row.sub}</span>
                </Typography>
              </Grid>
            )}

            {row.key !== null && (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' }}>
                <Typography variant='body2' sx={{ color: '#99a1b7', fontWeight: '500' }}>Teacher:</Typography>
                <Typography variant='h5'>{row.teacher}</Typography>
              </Grid>
            )}

          </Grid>
        ))}

        <Box sx={{ pt: 3 }}>
          {periodsToShow < timetableRows.length && (
            <Button variant="contained" onClick={() => navigate('/timetable')}>
              View More
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default TimeTableHome;
