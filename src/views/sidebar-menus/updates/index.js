import * as React from 'react';
import {Grid,Paper,Typography,Container,Box } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
<<<<<<< HEAD
import AttachmentIcon from '@mui/icons-material/Attachment';
=======
import Container from '@mui/material/Container'; // Correct import
import Box from '@mui/material/Box';
import { UpdatesData } from './UpdatesData';
>>>>>>> 76460615b066c07e8d639647e34af67adc6aaccd

export default function Update() {
  // const currentDate = new Date(); 

  return (
    <Container maxWidth="xl" style={{ marginTop: 20 }}>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
<<<<<<< HEAD
        {/* Repeat the Paper and Grid sections as needed */}
        <Paper sx={{ p: 2, flexGrow: 1, my: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm container direction="column">
              <Typography gutterBottom variant="h3" component="div">
                St. Xavier School Gurugram
=======
      {UpdatesData.map((data,index)=>{
           return (
            <Paper sx={{ p: 2, flexGrow: 1, my: 2 }} key={index}>
            <Grid container spacing={2} alignItems="center">
          
            <Grid item xs={12} sm container direction="column">
            <Typography gutterBottom variant="h3" component="div">
              {data.title}
            </Typography>
            <Grid item sx={{ display: 'flex', direction: "row", alignItems: "center", justifyContent: "flex-start" }}>
              <EventIcon sx={{ color: '#364152a3' }} />
              <Typography variant="body2" sx={{ mt: 0, color: '#364152e0' }}>
               {data.day} {data.date}
>>>>>>> 76460615b066c07e8d639647e34af67adc6aaccd
              </Typography>
              <Grid
                item
                sx={{
                  display: 'flex',
                  direction: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
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
              <AttachmentIcon sx={{ ml: 1, color: '#364152e0' }} />
            </Grid>
<<<<<<< HEAD
          </Grid>
        </Paper>
        <Paper sx={{ p: 2, flexGrow: 1, my: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm container direction="column">
              <Typography gutterBottom variant="h3" component="div">
                St. Xavier School Gurugram
              </Typography>
              <Grid
                item
                sx={{
                  display: 'flex',
                  direction: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
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
              <AttachmentIcon sx={{ ml: 1, color: '#364152e0' }} />
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 2, flexGrow: 1, my: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm container direction="column">
              <Typography gutterBottom variant="h3" component="div">
                St. Xavier School Gurugram
              </Typography>
              <Grid
                item
                sx={{
                  display: 'flex',
                  direction: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
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
                <AttachmentIcon sx={{ ml: 1, color: '#364152e0' }} />
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 2, flexGrow: 1, my: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm container direction="column">
              <Typography gutterBottom variant="h3" component="div">
                St. Xavier School Gurugram
              </Typography>
              <Grid
                item
                sx={{
                  display: 'flex',
                  direction: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
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
                <AttachmentIcon sx={{ ml: 1, color: '#364152e0' }} />
            </Grid>
          </Grid>
        </Paper>
=======
            </Grid>
    
    


              <Grid item xs={12}>
                <Typography variant="body2" color={'#364152ad'}>
                       {data.description}
                </Typography>
              </Grid>

            </Grid>
          </Paper>
           )
               })}

>>>>>>> 76460615b066c07e8d639647e34af67adc6aaccd
      </Box>
    </Container>
  );
}
