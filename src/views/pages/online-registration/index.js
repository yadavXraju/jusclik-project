import React, { useState } from 'react';
import SchoolLogo from '../../../assets/images/Arwachin School (Test Logo) (2).png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, Box, Paper } from '@mui/material';
import StudentDetails from './StudentDetails';
import Upload_Document_Photos from './Upload_Document_Photos';
import SignUpRegisteration from './SignUpRegisteration';
import OtherDetails from './OtherDetails';
import SiblingDetails from './SiblingDetails';
import PermanentAddress from './PermanentAddress';
import FatherDetails from './FatherDetails';
import MotherDetails from './MotherDetails';
import Additional_Information from './Additional_Information';
import PreviewAndSubmit from './PreviewAndSubmit';
import TabNumber from './TabNumber';
import BottomNavbar from 'views/common-section/BottomNavbar';

const OnlineRegistration = () => {
  const [TabChange, setTabChange] = useState(0);
  const [showSignUp, setShowSignUp] = useState(false);

  const continueHandler = () => {
    setShowSignUp(false);
  };

  const handleClick = (tab) => {
    setTabChange(tab);
  };

  // Array containing information about each tab

  const tabsData = [
    { id: 1, value: 0, component: <StudentDetails handleClick={handleClick} />, label: "STUDENT'S DETAILS" },
    { id: 2, value: 1, component: <OtherDetails handleClick={handleClick} />, label: 'OTHER DETAILS' },
    { id: 3, value: 2, component: <SiblingDetails handleClick={handleClick} />, label: 'SIBLING DETAILS (IF ANY)' },
    { id: 4, label: 'EMPLOYEE DETAILS', disabled: true }, // No component specified for this tab
    { id: 5, value: 3, component: <PermanentAddress handleClick={handleClick} />, label: 'PERMANENT ADDRESS' },
    { id: 6, value: 4, component: <FatherDetails handleClick={handleClick} />, label: "FATHER'S DETAILS" },
    { id: 7, value: 5, component: <MotherDetails handleClick={handleClick} />, label: "MOTHER'S DETAILS" },
    { id: 8, value: 6, component: <Additional_Information handleClick={handleClick} />, label: 'ADDITIONAL INFORMATION' },
    { id: 9, value: 7, component: <Upload_Document_Photos handleClick={handleClick} />, label: 'UPLOAD DOCUMENTS' },
    { id: 10, value: 8, component: <PreviewAndSubmit />, label: 'PREVIEW AND SUBMIT' }
  ];

  const handleChange = (event, newValue) => {
    setTabChange(newValue);
  };

  return (
    <>
      {showSignUp ? (
        <Grid>
          <SignUpRegisteration continueHandler={continueHandler} />
        </Grid>
      ) : (
        <Grid>
          {/* background color  = #EEF2F6 */}
          <Grid sx={{ background: '#ffecec', height: '102.5vh' }}>
            <Grid container spacing={3} sx={{ paddingLeft: '5rem', paddingTop: '4rem' }}>
              <Grid item xs={2} component={Paper} elevation={2} sx={{ height: '87vh', marginTop: '1.5rem'}}>
                <Grid sx={{ paddingRight: '1rem', marginTop: '-5px' }}>
                  <Box sx={{ marginRight: '53px' }}>
                    <img src={SchoolLogo} alt="Logo" width="250px" style={{ marginRight: '8px' }} />
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
                    {/* <Tabs
                      value={TabChange}
                      onChange={handleChange}
                      centered
                      orientation="vertical"
                      sx={{ '& .MuiTabs-indicator': { left: 0, right: 'auto' } }}
                      TabIndicatorProps={{ style: { backgroundColor: '#ffe71b' } }}
                    >
                       {tabsData.map(tab => (
  <Tab
    key={tab.value}
    value={tab.value}
    disabled={tab.disabled}
    sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
    label={<TabNumber number={tab.id} text={tab.label} isActive={TabChange === tab.value} />}
  />
))}
                    </Tabs> */}

                    <Tabs
                      value={TabChange}
                      onChange={handleChange}
                      centered
                      orientation="vertical"
                      sx={{ '& .MuiTabs-indicator': { left: 0, right: 'auto' } }}
                      TabIndicatorProps={{ style: { backgroundColor: '#ffe71b', width: '3px' } }}
                    >
                      {tabsData.map((tab) => (
                        <Tab
                          key={tab.id}
                          value={tab.value}
                          disabled={tab.disabled}
                          sx={{
                            fontSize: '14px',
                            fontWeight: 'bold',
                            alignItems: 'start', //#ffe71b
                            color: TabChange === tab.value ? 'inherit !important' : 'inherit', // Change color to pink if tab is active
                            marginLeft: '7px'
                          }}
                          label={<TabNumber number={tab.id} text={tab.label} isActive={TabChange === tab.value} />}
                        />
                      ))}
                    </Tabs>
                  </Box>
                </Grid>
              </Grid>

              {/* Render the selected component */}
              <Grid item xs={10}>
                <Box sx={{ paddingRight: '4rem' }}>
                  <Paper elevation={2} sx={{ height: '87vh' }}>
                    {tabsData.map((tab) => TabChange === tab.value && tab.component)}

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '0.3rem' }}>
                      <BottomNavbar
                        tabPageLength={tabsData.length - 1}
                        value={TabChange}
                        setValue={setTabChange}
                        customStyle={{ width: '71%', backgroundColor: 'white', bottom: '3.8rem', borderBottom: 'none', borderTop: 'none' }}
                      />
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default OnlineRegistration;

// Same Copy
// import React, { useState } from 'react';
// import CloudLogo from '../../../assets/images/Untitled-2.png';
// import { Grid, Typography, Box } from '@mui/material';
// import SignUpRegisteration from './SignUpRegisteration';
// import ParamStepper from '../../common-section/param-stepper';
// import StudentDetails from './StudentDetails';
// import OtherDetails from './OtherDetails';
// import SiblingDetails from './SiblingDetails';
// import PermanentAddress from './PermanentAddress';
// import FatherDetails from './FatherDetails';
// import MotherDetails from './MotherDetails';
// import Additional_Information from './Additional_Information';
// import Declaration from './Declaration';
// import Upload_Document_Photos from './Upload_Document_Photos';
// import PreviewAndSubmit from './PreviewAndSubmit';

// const OnlineRegistration = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [showSignUp, setShowSignUp] = useState(false);

//   const continueHandler = () => {
//     setShowSignUp(false);
//   };

//   // Define the steps array
//   const steps = [
//     "STUDENT'S DETAILS",
//     'OTHER DETAILS',
//     'SIBLING DETAILS (IF ANY)',
//     'PERMANENT ADDRESS',
//     "FATHER'S DETAILS",
//     "MOTHER'S DETAILS",
//     'ADDITIONAL INFORMATION',
//     'DECLARATION',
//     'UPLOAD DOCUMENTS',
//     'PREVIEW AND SUBMIT'
//   ];

//   // Define the tabPage array
//   const tabPage = [
//     { id: 0, name: 'Student Details', component: StudentDetails },
//     { id: 1, name: 'Other Details', component: OtherDetails },
//     { id: 2, name: 'Sibling Details', component: SiblingDetails },
//     { id: 3, name: 'Permanent Address', component: PermanentAddress },
//     { id: 4, name: "Father's Details", component: FatherDetails },
//     { id: 5, name: "Mother's Details", component: MotherDetails },
//     { id: 6, name: 'Additional Information', component: Additional_Information },
//     { id: 7, name: 'Declaration', component: Declaration },
//     { id: 8, name: 'Upload Documents', component: Upload_Document_Photos },
//     { id: 9, name: 'Preview and Submit', component: PreviewAndSubmit }
//   ];

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <>
//       {showSignUp ? (
//         <Grid>
//           <SignUpRegisteration continueHandler={continueHandler} />
//         </Grid>
//       ) : (
//         <Grid
//           spacing={3}
//           sx={{ background: '#EEF2F6', height: '103.5vh', paddingLeft: '6rem', paddingTop: '6rem', paddingBottom: '3.9rem' }}
//         >
//           <Grid item xs={12}  sx={{ height: '86vh' }}>
//             <Grid sx={{ paddingLeft: '', paddingRight: '1rem' }}>
//               <Box sx={{ paddingLeft: '1rem' }}>
//                 <Typography variant="h3" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
//                   <img src={CloudLogo} alt="Logo" style={{ marginRight: '8px' }} /> REGISTRATION FORM{' '}
//                 </Typography>
//               </Box>

//               {/* Pass the steps and tabPage arrays to ParamStepper */}
//               <ParamStepper
//                 customtabWrapper={{ display: 'flex', flexDirection: 'row',}}
//                 orientation="vertical"
//                 steps={steps}
//                 tabPage={tabPage}
//                 activeStep={activeStep}
//                 handleStepChange={handleStepChange}
//                 customStyleTabs={{
//                   width: '20%',
//                   paddingTop: '1.5rem',
//                   alignItems:"center",
//                   justifyContent:"center",
//                   background:"white",
//                   '& .Mui-selected .number-bg': {
//                     background: '#2196f3',
//                     color: 'white'
//                   }
//                 }}
//               customtabSytle={{

//               }}
//               customtabPanelStyle={{
//                        marginLeft:"10px",
//                        background:"background.paper",
//               }}
//               iconShow={false}
//               />
//             </Grid>
//           </Grid>
//           {/*
//           <Grid item xs={10}>
//             {renderComponent()}
//           </Grid> */}
//         </Grid>
//       )}
//     </>
//   );
// };

// export default OnlineRegistration;
