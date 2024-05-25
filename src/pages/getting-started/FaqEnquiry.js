import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';

const FaqEnquiry = () => {
    

  const handleFaqClick = () => {
    window.location.href = '/faq'; // Navigate to FAQ page
  };

  const handleGuidesClick = () => {
    window.location.href = '/guides'; // Navigate to Guides page
  };

  const handleHelpClick = () => {
    window.location.href = '/help'; // Navigate to Help page
  };

  return (
    <Box sx={{ paddingTop: '45px' }}>
          <Typography fontSize={18} sx={{ paddingBottom: '15px' }}>
            Find help & resources
          </Typography>
          <Paper elevation={1} sx={{ padding: '50px' }}>
          
          <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Typography fontSize={16} sx={{paddingBottom:'12px', color:'#8C91AA'}}>LEARN HOW TO USE PAYROLL</Typography>
              <Box>
            {/* Your iframe content */}
            <iframe
              width="90%"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              title="Payroll overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} sx={{borderLeft:'1px solid #ccc'}} >
              <Typography fontSize={16} sx={{paddingBottom:'15px', color:'#8C91AA', paddingTop:'7px', paddingLeft:'20px'}}>HELP & SUPPORT</Typography>
            <Box    onClick={handleFaqClick}
                role="button"
                tabIndex={0}
             sx={{display:'flex', margin:'40px', cursor: 'pointer'}}>
              {/* FAQ Section */}
              <Box
                sx={{
                  display: 'flex',
                  backgroundColor: '#DCF7EC',
                  borderRadius: '10px',
                  padding: '10px',
                  width: '50px',
                  height: '50px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <QuizRoundedIcon sx={{ color: 'rgb(30, 136, 229)' }} />
                </Box>
                <Typography sx={{ paddingTop: '13px', marginLeft: '16px' }}>FAQ</Typography>
             
              </Box>
              {/* Guides Section */}
              <Box  onClick={handleGuidesClick}
                role="button"
                tabIndex={0}
               sx={{display:'flex', margin:'40px',  cursor: 'pointer'}}>
              <Box
                sx={{
                  backgroundColor: '#DCF7EC',
                  borderRadius: '10px',
                  padding: '10px',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <EventNoteRoundedIcon sx={{ color: 'rgb(30, 136, 229)' }} />
                </Box>
                <Typography sx={{ paddingTop: '13px', marginLeft: '16px' }}>Guides</Typography>
               
              </Box>
              {/* Help Section */}
              <Box  onClick={handleHelpClick}
                role="button"
                tabIndex={0}
               sx={{display:'flex', margin:'40px',  cursor: 'pointer'}}>
              <Box
                sx={{
                  backgroundColor: '#DCF7EC',
                  borderRadius: '10px',
                  padding: '10px',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <LiveHelpRoundedIcon sx={{ color: 'rgb(30, 136, 229)' }} />
                </Box>
                <Typography sx={{ paddingTop: '13px', marginLeft: '16px' }}>Help</Typography>
             
              </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FaqEnquiry;
