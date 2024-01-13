import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/Event';
import Container from '@mui/material/Container'; // Correct import
import Box from '@mui/material/Box';

export default function Update() {
  const currentDate = new Date(); // Replace this with your actual date logic

  return (
    <Container maxWidth="xl" style={{ marginTop: 20 }}>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Paper sx={{ p: 2, flexGrow: 1, my: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container direction="column">
            <Typography gutterBottom variant="h3" component="div">
              St. Xavier School Gurugram
            </Typography>
            <Grid item sx={{ display: 'flex', direction: "row", alignItems: "center", justifyContent: "flex-start" }}>
              <EventIcon sx={{ color: '#364152a3' }} />
              <Typography variant="body2" sx={{ mt: 0, color: '#364152e0' }}>
                {currentDate.toDateString()}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color={'#364152ad'}>
               Your content here A single core framework and long term tool built
on top of Bootstrap 5 for delivering limitless highly
customized projects  Your content here A single core framework and long term tool built
on top of Bootstrap 5 for delivering limitless highly
customized projects
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2, flexGrow: 1, my: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container direction="column">
            <Typography gutterBottom variant="h3" component="div">
              St. Xavier School Gurugram
            </Typography>
            <Grid item sx={{ display: 'flex', direction: "row", alignItems: "center", justifyContent: "flex-start" }}>
              <EventIcon sx={{ color: '#364152a3' }} />
              <Typography variant="body2" sx={{ mt: 0, color: '#364152e0' }}>
                {currentDate.toDateString()}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color={'#364152ad'}>
               Your content here A single core framework and long term tool built
on top of Bootstrap 5 for delivering limitless highly
customized projects  Your content here A single core framework and long term tool built
on top of Bootstrap 5 for delivering limitless highly
customized projects
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2, flexGrow: 1, my: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container direction="column">
            <Typography gutterBottom variant="h3" component="div">
              St. Xavier School Gurugram
            </Typography>
            <Grid item sx={{ display: 'flex', direction: "row", alignItems: "center", justifyContent: "flex-start" }}>
              <EventIcon sx={{ color: '#364152a3' }} />
              <Typography variant="body2" sx={{ mt: 0, color: '#364152e0' }}>
                {currentDate.toDateString()}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color={'#364152ad'}>
               Your content here A single core framework and long term tool built
on top of Bootstrap 5 for delivering limitless highly
customized projects
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2, flexGrow: 1, my: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container direction="column">
            <Typography gutterBottom variant="h3" component="div">
              St. Xavier School Gurugram
            </Typography>
            <Grid item sx={{ display: 'flex', direction: "row", alignItems: "center", justifyContent: "flex-start" }}>
              <EventIcon sx={{ color: '#364152a3' }} />
              <Typography variant="body2" sx={{ mt: 0, color: '#364152e0' }}>
                {currentDate.toDateString()}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color={'#364152ad'}>
               Your content here A single core framework and long term tool built
on top of Bootstrap 5 for delivering limitless highly
customized projects
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      </Box>
    </Container>
  );
}
