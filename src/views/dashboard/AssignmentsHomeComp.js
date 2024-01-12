import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { data } from 'views/sidebar-menus/assignments/AssignmentData';

const AssignmentsHomeComp = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item component={Paper} lg={12} md={12} sm={12} xs={12} sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant='h2' sx={{ textAlign: 'left', color: '#99a1b7', letterSpacing: '.5px' }}>HOMEWORK & ASSIGNMENTS</Typography>

        {data.map((item) => (
          <Grid container key={item.id} lg={8}>
            <Grid item col={3}>
              <input type='checkbox' />
            </Grid>

            <Grid item col={9}>
              <Typography variant='body1' sx={{ marginTop: '5px' }}>
                {item.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default AssignmentsHomeComp;
