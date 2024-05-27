import * as React from 'react';
import Leaves from './Leaves';
import { Box, Grid, Card, CardContent, LinearProgress, List, ListItem, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import CalendarMonthly from './NewCal';
import TotalGrowthBarChart from './AttendanceGraph';

const CardStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.primary.dark,
  marginBottom: '22px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '157px',
    height: '157px',
    background: theme.palette.primary[200],
    borderRadius: '50%',
    top: '-105px',
    right: '-96px'
  }
}));

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
  const theme = useTheme();

  return (
    <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
      <Grid item>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" sx={{ color: theme.palette.primary.light }}>
              Total Days
            </Typography>
            <Typography variant="h6" sx={{ color: theme.palette.primary.light }}>
              250
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="inherit">
              <span style={{ color: 'white' }}>{`${Math.round(value)}%`}</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* progress bar */}
      <Grid item>
        <LinearProgress variant="determinate" value={value} {...others} />
      </Grid>

      <Grid item>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" sx={{ color: theme.palette.primary.light }}>
              Days Attended
            </Typography>
            <Typography variant="h6" sx={{ color: theme.palette.primary.light }}>
              110
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ color: theme.palette.primary.light }}>
              Days Absent
            </Typography>
            <Typography variant="h6" sx={{ color: theme.palette.primary.light }}>
              10
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number
};

export default function BasicDateCalendar() {
  const theme = useTheme();

  return (
    <>
      <Grid>
        <CardStyle>
          <CardContent sx={{ p: 2 }}>
            <List sx={{ p: 0, m: 0 }}>
              <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
                <Typography variant="h3" sx={{ color: theme.palette.primary.light }}>
                  Attendance Summary
                </Typography>
              </ListItem>
            </List>
            <LinearProgressWithLabel value={80} />
          </CardContent>
        </CardStyle>

        <Box>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <CalendarMonthly />
            <Grid item xs={12} sm={6} md={7} lg={8}>
              <TotalGrowthBarChart />
            </Grid>
          </Grid>
        </Box>
        <Leaves />
      </Grid>
    </>
  );
}
