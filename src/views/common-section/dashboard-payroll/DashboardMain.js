import React from 'react';
import { Typography, Paper, Box, Button, useTheme, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MainCard from 'ui-component/cards/MainCard';
import ProgressBar from './ProgressBar';
import FaqEnquiry from './FaqEnquiry';
import { useState } from 'react';

const stepsData = [
  { title: 'Add Organisation Details', completed: true, path: '/organisation-details' },
  { title: 'Upload Student Data', completed: false, path: '/upload-student-data' },
  { title: 'Create Class and Section', completed: false, path: '/create-class-and-section' },
  { title: 'Configure Fee Structure', completed: false, path: '/configure-fee-structure' },
  { title: 'Add Concession Category', completed: false, path: '/add-concession-category' },
  { title: 'Create Transport roots & Slabs', completed: true, path: '/createtransport-roots-&-Slabs' },
  // { title: 'Configure Prior Payroll', completed: true, path: '/prior-payroll' },
];

const featuresData = [
  { icon: <AccountBalanceRoundedIcon />, text: 'Activate Payment Category', path:'/activate-payment-category' },
  { icon: <ContactMailRoundedIcon />, text: 'Communication Template', path:'/communication-templates' },
  { icon: <NotificationsRoundedIcon />, text: 'Customize Fee Invoices', path:'/customize-fee-invoices' },
  { icon: <PersonRoundedIcon />, text: 'Student Custom Field', path:'student-custom-field' },
];

const DashboardMain = () => {
  const theme = useTheme();

  const [steps, setSteps] = useState(stepsData);
  const [hoveredStep, setHoveredStep] = useState(null);

  const markAsComplete = (index) => {
    const updatedSteps = [...steps];
    updatedSteps[index].completed = true;
    setSteps(updatedSteps);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 'auto' }}>
      <Typography variant="h2" sx={{ paddingBottom: '10px', marginTop: '5px', color: '#333' }}>
        Welcome Abhishek Negi!
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', paddingBottom: '50px' }}>
        <Typography variant="subtitle1" sx={{ color: '#6c757d' }}>
          Set up your organisation before you run your first payroll.
        </Typography>
      </Box>
      <MainCard
        sx={{
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: 'calc(65% - 20px)',
            margin: 'auto'
          },
          backgroundColor: 'rgb(30, 136, 229)'
        }}
      >
        <Typography variant="h3" sx={{ color: 'white' }}>
          Get started with Jusklik Student Info & Fee
        </Typography>
        <Grid container justifyContent="flex-end">
          <ProgressBar sx={{}} />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Typography variant="h6" sx={{ color: 'white' }}>
            3/7 completed
          </Typography>
        </Grid>
        <Typography variant="body1" sx={{ color: 'white', paddingTop: '10px' }}>
          Complete the following steps to have a hassle-free payroll experience
        </Typography>
      </MainCard>
{/* getting started titles */}

      <Paper elevation={1} sx={{ padding: '50px',
          marginTop: '-16px',
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: 'calc(65% - 20px)'
          } }}>
      {stepsData.map((step, index) => (
        <Box
        key={index}
        onMouseEnter={() => setHoveredStep(index)}
        onMouseLeave={() => setHoveredStep(null)}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #ccc',
            paddingBottom: '20px',
            color: step.completed ? '#35AB91' : '#627282',
            paddingTop: '25px',
          }}
        >
            <Link to={step.completed ? step.path : '/'} style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckOutlinedIcon sx={{ backgroundColor: step.completed ? '#14B474' : '#D4DADD', borderRadius: '50%', color: 'white', padding: '2px' }} />
            <Typography variant="h4" sx={{ paddingLeft: '15px' }}>
              {step.title}
            </Typography>
          </Box>
          </Link>
          {step.completed ? (
            <Typography variant="h5" sx={{ color: '#35AB91' }}>
              Completed
            </Typography>
          ) : (
            <Box sx={{display:'flex', alignItems:'center'}}>
                {!step.completed && hoveredStep === index && (
            <Button
            
              onClick={() => markAsComplete(index)}
              sx={{
                color: '#2b76d2',
                backgroundColor:'#cedae98a',
              marginRight:'19rem',
                '&:hover': { color: '#000', cursor: 'pointer' },
                
              }}
            >
              Mark as Complete
            </Button>
          )}
              <Link to={step.path} style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#408DFB1F',
                    color: '#2b76d2',
                    '&:hover': { backgroundColor: 'rgb(64, 141, 251)', color: 'white' },
                  }}
                >
                  Complete Now
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      ))}
    </Paper>
      <Paper
        elevation={1}
        sx={{
          padding: '50px',
          marginTop: '-19px',
          backgroundColor: '#FCFBFF',
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: 'calc(65% - 20px)'
          }
        }}
      >
        <Typography variant="h5">ADDITIONAL NOTABLE FEATURES</Typography>
        <Grid container spacing={1} sx={{ paddingTop: '30px' }}>
          {featuresData.map((feature, index) => (
            <Grid item key={index} xs={6} sm={3} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to={feature.path} style={{ textDecoration: 'none', }}>
              <Box
                sx={{
                  backgroundColor: '#DCF7EC',
                  borderRadius: '10px',
                  padding: '5px', // Adjust padding to control the size of the background
                  width: '60px', // Define the width of the background
                  height: '60px', // Define the height of the background
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'rgb(30, 136, 229)'
                }}
              >
                {feature.icon}
              </Box>
              <Typography sx={{ paddingTop: '8px' , color:'#000'}}>{feature.text}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Box
      sx={{
        paddingTop: '45px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 'calc(65% - 20px)'
        }
      }}
    >
    <FaqEnquiry  />
   </Box>
    </Box>
  );
};

export default DashboardMain;
