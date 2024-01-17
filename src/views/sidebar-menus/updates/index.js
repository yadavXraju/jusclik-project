import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/Event';
import Container from '@mui/material/Container'; // Correct import
import Box from '@mui/material/Box';
import { UpdatesData } from './UpdatesData';

export default function Update() {
  // const currentDate = new Date(); 

  return (
    <Container maxWidth="xl" style={{ marginTop: 20 }}>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
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
              </Typography>
            </Grid>
            </Grid>
<<<<<<< HEAD
    
    


=======
>>>>>>> 8bf4b09fb45a56e087e3faaa55906fcb8f90f7f6
              <Grid item xs={12}>
                <Typography variant="body2" color={'#364152ad'}>
                       {data.description}
                </Typography>
              </Grid>

            </Grid>
          </Paper>
           )
               })}

      </Box>
    </Container>
  );
}