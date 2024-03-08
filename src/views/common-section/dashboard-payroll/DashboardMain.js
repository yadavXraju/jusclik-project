import { Typography, Grid, Paper, Box, Button } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ProgressBar from './ProgressBar';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
const DashboardMain = () => {
  return (
    <>
      <Box sx={{ width: '65%', display: 'flex', justifyContent: 'center', alignItem: 'center', flexDirection: 'column', margin: 'auto' }}>
        <Box sx={{display:'flex', flexDirection:'column', textAlign:'center', paddingBottom:'50px'}}>
          <Typography variant='h2' sx={{paddingBottom:'10px', marginTop:'5px', color:' #333'}}>Welcome Abhishek Negi!</Typography>
          <Typography sx={{color:'#6c757d'}}>Set up your organisation before you run your first payroll.</Typography>
        </Box>
        <MainCard sx={{ backgroundColor: 'rgb(30, 136, 229)' }}>
          <Typography variant="h3" sx={{ color: 'white' }}>
            Get started with Jusklik Payroll
          </Typography>
          <Grid sx={{ display: 'flex', justifyContent: 'end' }}>
            <ProgressBar sx={{}} />
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'end' }}>
            <Typography variant="h6" sx={{ color: 'white' }}>
              3/7 completed
            </Typography>
          </Grid>
          <Typography variant="h6" sx={{ color: 'white' }}>
            Complete the following steps to have a hassle-free payroll experience
          </Typography>
        </MainCard>
        <Paper elevation={1} sx={{ padding: '55px', marginTop: '-17px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '35px' }}>
            <Box sx={{ display: 'flex' }}>
              <CheckOutlinedIcon sx={{ backgroundColor: '#14B474', borderRadius: '50%', color: 'white', padding: '2px' }} />
              <Typography variant="h4" sx={{ paddingLeft: '15px', paddingTop: '3px' }}>
                1. Add Organisation Details{' '}
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ color: '#35AB91', paddingTop: '3px' }}>
              COMPLETED
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '30px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '30px'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckOutlinedIcon sx={{ backgroundColor: '#D4DADD', borderRadius: '50%', color: '#627282', padding: '2px' }} />
              <Typography variant="h4" sx={{ paddingLeft: '15px' }}>
                2. Provide your Tax Details{' '}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#DCF7EC', color: '#22b378', '&:hover': { backgroundColor: '#22b378', color: 'white' } }}
            >
              Complete Now
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '30px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '30px'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckOutlinedIcon sx={{ backgroundColor: '#D4DADD', borderRadius: '50%', color: '#627282', padding: '2px' }} />
              <Typography variant="h4" sx={{ paddingLeft: '15px' }}>
                3. Configure your Pay Schedule{' '}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#DCF7EC', color: '#22b378', '&:hover': { backgroundColor: '#22b378', color: 'white' } }}
            >
              Complete Now
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '30px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '30px'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckOutlinedIcon sx={{ backgroundColor: '#D4DADD', borderRadius: '50%', color: '#627282', padding: '2px' }} />
              <Typography variant="h4" sx={{ paddingLeft: '15px' }}>
                4. Set up Statutory Component{' '}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#DCF7EC', color: '#22b378', '&:hover': { backgroundColor: '#22b378', color: 'white' } }}
            >
              Complete Now
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '30px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '30px'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckOutlinedIcon sx={{ backgroundColor: '#D4DADD', borderRadius: '50%', color: '#627282', padding: '2px' }} />
              <Typography variant="h4" sx={{ paddingLeft: '15px' }}>
                5. Set up Salary Components{' '}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#DCF7EC', color: '#22b378', '&:hover': { backgroundColor: '#22b378', color: 'white' } }}
            >
              Complete Now
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '30px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '30px'
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <CheckOutlinedIcon sx={{ backgroundColor: '#14B474', borderRadius: '50%', color: 'white', padding: '2px' }} />
              <Typography variant="h4" sx={{ paddingLeft: '15px', paddingTop: '3px' }}>
                6. Add Employees
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ color: '#35AB91', paddingTop: '3px' }}>
              COMPLETED
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '30px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '30px'
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <CheckOutlinedIcon sx={{ backgroundColor: '#14B474', borderRadius: '50%', color: 'white', padding: '2px' }} />
              <Typography variant="h4" sx={{ paddingLeft: '15px', paddingTop: '3px' }}>
                7.Configure Prior Payroll
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ color: '#35AB91', paddingTop: '3px' }}>
              COMPLETED
            </Typography>
          </Box>
        </Paper>
        <Paper elevation={1} sx={{ padding: '50px', backgroundColor: '#FCFBFF', marginTop: '-54px' }}>
          <Typography variant="h5">ADDITIONAL NOTABLE FEATURES</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}>
            <Box>
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
                <AccountBalanceRoundedIcon sx={{ color: 'rgb(30, 136, 229)' }} />
              </Box>
              <Typography sx={{ paddingTop: '8px', marginLeft: '-13px' }}>Direct Deposit</Typography>
            </Box>
            <Box>
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
                <ContactMailRoundedIcon sx={{ color: 'rgb(30, 136, 229)' }} />
              </Box>
              <Typography sx={{ paddingTop: '8px', marginLeft: '-13px' }}>Salary Templates</Typography>
            </Box>
            <Box>
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
                <NotificationsRoundedIcon sx={{ color: 'rgb(30, 136, 229)' }} />
              </Box>
              <Typography sx={{ paddingTop: '8px', marginLeft: '-13px' }}>
                Auto Reminder for IT <br />& POI Declaration
              </Typography>
            </Box>
            <Box>
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
                <PersonRoundedIcon sx={{ color: 'rgb(30, 136, 229)' }} />
              </Box>
              <Typography sx={{ paddingTop: '8px', marginLeft: '-13px' }}>
                Employee <br />
                Custom Field
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Box sx={{ paddingTop: '45px' }}>
          <Typography fontSize={18} sx={{ paddingBottom: '15px' }}>
            Find help & resources
          </Typography>
          <Paper elevation={1} sx={{ padding: '50px' }}>
          
          <Grid container spacing={2} >
           
            <Grid item xs={7}>
            <Typography fontSize={16} sx={{paddingBottom:'12px', color:'#8C91AA'}}>LEARN HOW TO USE PAYROLL</Typography>
              <Box>
              <iframe
                width="90%"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="Payroll overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              </Box>
            </Grid>
            <Grid item xs={5} sx={{borderLeft:'1px solid #ccc'}} >
              <Typography fontSize={16} sx={{paddingBottom:'15px', color:'#8C91AA', paddingTop:'7px', paddingLeft:'20px'}}>HELP & SUPPORT</Typography>
            <Box sx={{display:'flex', margin:'40px'}}>
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
                <QuizRoundedIcon sx={{ color: 'rgb(30, 136, 229)' }} />
              </Box>
              <Typography sx={{ paddingTop: '13px', marginLeft:'16px'}}>FAQ</Typography>
            </Box>
            <Box sx={{display:'flex', margin:'40px'}}>
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
              <Typography sx={{ paddingTop: '13px', marginLeft:'16px'}}>Guides</Typography>
            </Box>
            <Box sx={{display:'flex', margin:'40px'}}>
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
              <Box sx={{ paddingTop: '13px', marginLeft:'16px'}}>Help</Box>
            </Box>
            </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
};
export default DashboardMain;
