import React from 'react';
import { Typography, Box, Button, Grid, Container, Card } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LinearProgress from '@mui/material/LinearProgress';
import FaqEnquiry from './FaqEnquiry';
import { useState } from 'react';

const stepsData = [
  { title: 'Add Organisation Details', completed: true, path: '/organisation-details' },
  { title: 'Upload Student Data', completed: false, path: '/upload-student-data' },
  { title: 'Create Class and Section', completed: false, path: '/create-class-and-section' },
  { title: 'Configure Fee Structure', completed: false, path: '/configure-fee-structure' },
  { title: 'Add Concession Category', completed: false, path: '/add-concession-category' },
  { title: 'Create Transport roots & Slabs', completed: true, path: '/createtransport-roots-&-Slabs' }
];

const featuresData = [
  { icon: <AccountBalanceRoundedIcon />, text: 'Activate Payment Category', path: '/activate-payment-category' },
  { icon: <ContactMailRoundedIcon />, text: 'Communication Template', path: '/communication-templates' },
  { icon: <NotificationsRoundedIcon />, text: 'Customize Fee Invoices', path: '/customize-fee-invoices' },
  { icon: <PersonRoundedIcon />, text: 'Student Custom Field', path: 'student-custom-field' }
];

const DashboardPayRoll = () => {
  const [steps, setSteps] = useState(stepsData);
  const [hoveredStep, setHoveredStep] = useState(null);

  const markAsComplete = (index) => {
    const updatedSteps = [...steps];
    updatedSteps[index].completed = true;
    setSteps(updatedSteps);
  };

  return (
    <Box>
      <Typography variant="h2" sx={{ paddingBottom: '10px', marginTop: '5px', color: '#333' }}>
        Welcome Abhishek Negi!
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', paddingBottom: '50px' }}>
        <Typography variant="subtitle1" sx={{ color: '#6c757d' }}>
          Set up your Organization before you run your first payroll.
        </Typography>
      </Box>

      <Container>
      <Card sx={{ backgroundColor: 'rgb(30, 136, 229)', padding: { xs: '24px', md: '32px' }  }}>
        <Box sx={{display:{xs:'block', md:'flex'}, justifyContent:'space-between' }}>
          <Box>
          <Typography variant="h3" sx={{ color: 'white' }}> Get started with Jusklik Student Info & Fee </Typography>
          <Typography variant="body1" sx={{ color: 'white' }}>Complete the following steps to Simplify your payroll process</Typography>
          </Box>
          <Box mt={1}>
          <LinearProgress
            variant="determinate"
            value={70}
            sx={{height:'4px', width:'140px'}}
          />
          <Typography mt={1} variant="h6" sx={{ color: 'white' }}>
            3/7 completed
          </Typography>
          </Box>
        </Box>
      </Card>
      {/* getting started titles */}

      <Card sx={{padding:'16px'}} >
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
              paddingTop: '25px'
            }}
          >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckOutlinedIcon sx={{ backgroundColor: step.completed ? '#14B474' : '#D4DADD', borderRadius: '50%', color: 'white', padding: '2px' }} />
                <Typography variant='h5' sx={{ paddingLeft: '15px' }}>
                  {step.title}
                </Typography>
              </Box>
            {step.completed ? (
              <Typography variant='h5' sx={{ color: '#35AB91' }}>
                Completed
              </Typography>
            ) : (
              <Box >
                {!step.completed && hoveredStep === index && (
                  <Button
                    onClick={() => markAsComplete(index)}
                    sx={{ color: '#2b76d2', backgroundColor: '#cedae98a', mr:'8px', '&:hover': { color: '#000' } }}
                  >
                    Mark as Complete
                  </Button>
                )}
                  <Button variant="contained"
                    sx={{ backgroundColor: '#408DFB1F', color: '#2b76d2', '&:hover': { backgroundColor: 'rgb(64, 141, 251)', color: 'white' } }}
                    onClick={() => markAsComplete(index)}
                  >
                    Complete Now 
                  </Button>
              </Box>
            )}
          </Box>
        ))}
      </Card>

      <Card sx={{ padding:'50px', backgroundColor: '#FCFBFF', }}>
        <Typography variant="h5">ADDITIONAL NOTABLE FEATURES</Typography>
        <Grid container spacing={1} sx={{ paddingTop: '30px' }}>
          {featuresData.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={6} lg={3} sx={{ alignItems: 'center' }}>
                <Box p={2} sx={{ backgroundColor: '#DCF7EC', borderRadius: '10px', color: 'rgb(30, 136, 229)' }}>
                  <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>{feature.icon}</Box>
                  <Typography sx={{ paddingTop: '8px', color: '#000', textAlign: 'center' }}>{feature.text}</Typography>
                </Box>
            </Grid>
          ))}
        </Grid>
      </Card>


      <Box>
        <FaqEnquiry  />
      </Box>

      </Container>


    </Box>
  );
};

export default DashboardPayRoll;
