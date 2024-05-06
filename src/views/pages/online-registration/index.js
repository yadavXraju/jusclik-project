import React from 'react';
import CloudLogo from '../../../assets/images/Untitled-2.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, Typography, Box, Paper } from '@mui/material';
import StudentDetails from './StudentDetails';
import { useState } from 'react';

import SignUpRegisteration from './SignUpRegisteration';
import OtherDetails from './OtherDetails';
import SiblingDetails from './SiblingDetails';
import PermanentAddress from './PermanentAddress';

const OnlineRegistration = () => {
  //  Tab Changer for Details Form Stepper
  const [TabChange, setTabChange] = React.useState('three');
  const [showSignUp, setShowSignUp] = useState(true);

  const continueHandler = () => {
    setShowSignUp(false);
  };

  const handleClick = (tab) => {
    setTabChange(tab);
  };

  const backToLogin =()=>{
    setShowSignUp(true)
  }

  // Render the appropriate component based on TabChange state
  const renderComponent = () => {
    switch (TabChange) {
      case 'one':
        return <StudentDetails handleClick={handleClick}  backToLogin={backToLogin} />;
      case 'two':
        return <OtherDetails handleClick={handleClick} />;
        case 'three':
          return <SiblingDetails handleClick={handleClick}/>;  
          case 'five':
            return <PermanentAddress/>;    
          

    }
  };

  
  // Onclick function to used on Save and Next Button in Student details



  // Use to handle Tab
  const handleChange = (event, newValue) => {
    setTabChange(newValue);
  };

  //  Tab Changer for Details Form Stepper End

  return (
    <>
      {showSignUp ? (
        <Grid>
          <SignUpRegisteration continueHandler={continueHandler} />
        </Grid>
      ) : (
        //StudentDetails Start
        <Grid>
          <Grid sx={{ background: '#EEF2F6', height: '103.5vh' }}>
            <Grid container spacing={4} sx={{ paddingLeft: '6rem', paddingTop: '6rem', paddingBottom: '3.9rem' }}>
              <Grid item xs={2} component={Paper}>
                <Grid sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                      <img src={CloudLogo} alt="Logo" style={{ marginRight: '8px' }} /> REGISTRATION FORM{' '}
                    </Typography>
                  </Box>

                  <Box sx={{ width: '100%', paddingTop: '2rem' }}>
                    <Tabs
                      value={TabChange}
                      onChange={handleChange}
                      centered
                      orientation="vertical"
                      sx={{ '& .MuiTabs-indicator': { left: 0, right: 'auto' } }}
                    >
                      <Tab
                        value="one"
                        className="findcomp"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label="1. STUDENT'S DETAILS"
                      />
                      <Tab value="two" sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }} label="2. OTHER DETAILS" />
                      <Tab value="three" sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }} label="3. SIBLING DETAILS (IF ANY)" />
                      <Tab disabled value="four" sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }} label="4. EMPLOYEE DETAILS" />
                      <Tab  value="five" sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }} label="5. PERMANENT ADDRESS" />
                    </Tabs>
                  </Box>
                </Grid>
              </Grid>

              {/* Render your component here  Start */}

              {renderComponent()}

              {/* Render your component here END  */}
            </Grid>
          </Grid>
        </Grid>
      )}
      {/* StudentDetails End*/}
    </>
  );
};

export default OnlineRegistration;

//Other Component 
