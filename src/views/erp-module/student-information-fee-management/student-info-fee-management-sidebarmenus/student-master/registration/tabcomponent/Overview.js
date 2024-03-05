import { Paper, Grid, Box, Avatar, Typography, Divider, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';




const Overview = () => {
  return (

      <Grid container spacing={2}   sx={{margin:"20px 0"}}>
        {/* Left section */}
        <Grid item xs={12} sm={5} sx={{ background: '#F0F0F0', borderRadius: '10px', gap: "10px" }}>
          <Paper elevation={2}>
          <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', background: '#F0F0F0', borderRadius: '10px', p: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <Avatar sx={{ width: 100, height: 100, bgcolor: 'primary.main' }}>
              SR {/* Initials */}
            </Avatar>
            <Typography variant="h6" sx={{ mt: 1, color: 'primary.main' }}>
              Student
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, color: 'primary.main' }}>
              Sangeeta Rani
            </Typography>
            <Divider  sx={{background:"black" , height:"2px"}} />
            <Box sx={{ textAlign: 'left', width:"100%" }}>
              <Typography variant="body2" color="textSecondary">
                Basic Info
              </Typography>
              <Box sx={{ my: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Class">
                      <IconButton>
                        <MenuBookIcon />
                      </IconButton>
                    </Tooltip>
                    <Typography variant="body1">V-B</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Joining Date">
                      <IconButton>
                        <CalendarTodayIcon />
                      </IconButton>
                    </Tooltip>
                    <Typography variant="body1">12-7-2012 (Joining Date)</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Gender">
                      <IconButton>
                        <PersonOutlineIcon />
                      </IconButton>
                    </Tooltip>
                    <Typography variant="body1">Female</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Flag Color">
                      <IconButton>
                        <EmojiFlagsIcon />
                      </IconButton>
                    </Tooltip>
                    <Typography variant="body1">Red</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
           </Grid>

          </Paper>

        </Grid>
        




        {/* Right section (Empty for now) */}
        <Grid item xs={12} sm={6} sx={{ margin:"0px 20px" }}>
          <Paper elevation={2}>
          <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', background: '#F0F0F0', borderRadius: '10px', p: 2 }}>
            <Grid item xs={12}>
              <Typography variant="body1" color="initial">Personal Information</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-"}}>
              <Typography>D.O.B:</Typography> <Typography variant="body1" color="initial">14-July-2000</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Father  s Name:</Typography> <Typography variant="body1" color="initial">John Doe</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Mother  s Name:</Typography> <Typography variant="body1" color="initial">Jane Doe</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="initial">Additional Information</Typography>
            </Grid>
            {/* Add more items for additional information */}
          </Grid>
          </Paper>
        </Grid>
      </Grid>
  );
};

export default Overview;
