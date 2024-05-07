import React from 'react';
import CloudLogo from '../../../assets/images/Untitled-2.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, Typography, Box, Paper } from '@mui/material';
import StudentDetails from './StudentDetails';
import { useState } from 'react';
import Upload_Document_Photos from './Upload_Document_Photos';
import SignUpRegisteration from './SignUpRegisteration';
import OtherDetails from './OtherDetails';
import SiblingDetails from './SiblingDetails';
import PermanentAddress from './PermanentAddress';
import FatherDetails from './FatherDetails';
import MotherDetails from './MotherDetails';
import Additional_Information from './Additional_Information';
import Declaration from './Declaration';
import PreviewAndSubmit from './PreviewAndSubmit';
import TabNumber from './TabNumber';
// import TabsName from 'views/common-section/ParamTabStep';

const OnlineRegistration = () => {
  //  Tab Changer for Details Form Stepper
  const [TabChange, setTabChange] = React.useState('one');
  const [showSignUp, setShowSignUp] = useState(true);

  const continueHandler = () => {
    setShowSignUp(false);
  };

  const handleClick = (tab) => {
    setTabChange(tab);
  };

  // Render the appropriate component based on TabChange state
  const renderComponent = () => {
    switch (TabChange) {
      case 'one':
        return <StudentDetails handleClick={handleClick} />;
      case 'two':
        return <OtherDetails handleClick={handleClick} />;
      case 'three':
        return <SiblingDetails handleClick={handleClick} />;
      case 'five':
        return <PermanentAddress handleClick={handleClick} />;
      case 'six':
        return <FatherDetails handleClick={handleClick} />;

      case 'seven':
        return <MotherDetails handleClick={handleClick} />;

      case 'eight':
        return <Additional_Information handleClick={handleClick} />;
      case 'nine':
        return <Declaration handleClick={handleClick} />;
      case 'ten':
        return <Upload_Document_Photos handleClick={handleClick} />;
      case 'eleven':
        return <PreviewAndSubmit />;
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
            <Grid container spacing={3} sx={{ paddingLeft: '6rem', paddingTop: '6rem', paddingBottom: '3.9rem' }}>
              <Grid item xs={2} component={Paper} sx={{ height: '86vh' }}>
                <Grid sx={{ paddingLeft: '', paddingRight: '1rem' }}>
                  <Box sx={{ paddingLeft: '1rem' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                      <img src={CloudLogo} alt="Logo" style={{ marginRight: '8px' }} /> REGISTRATION FORM{' '}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      paddingTop: '1.5rem',
                      '& .number-bg': {
                        background: '#2196f3',
                        color: 'white'
                      }
                    }}
                  >
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
                        label={<TabNumber number={1} text="STUDENT'S DETAILS" />}
                      />
                      <Tab
                        value="two"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={2} text="OTHER DETAILS" />}
                      />

                      <Tab
                        value="three"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={3} text="SIBLING DETAILS (IF ANY)" />}
                      />
                      <Tab
                        disabled
                        value="four"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={4} text="EMPLOYEE DETAILS" />}
                      />
                      <Tab
                        value="five"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={5} text="PERMANENT ADDRESS" />}
                      />
                      <Tab
                        value="six"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={6} text="FATHER'S DETAILS" />}
                      />

                      <Tab
                        value="seven"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={7} text="MOTHER'S DETAILS" />}
                      />

                      <Tab
                        value="eight"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={8} text="ADDITIONAL INFORMATION" />}
                      />

                      <Tab
                        value="nine"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={9} text="DECLARATION" />}
                      />

                      <Tab
                        value="ten"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={10} text="UPLOAD DOCUMENTS" />}
                      />

                      <Tab
                        value="eleven"
                        sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
                        label={<TabNumber number={11} text="PREVIEW AND SUBMIT" />}
                      />
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
