
// Page owner - Kulwinder Singh
// Description -  Online Registration Form 

import React, { useState } from 'react';
import SchoolLogo from 'assets/images/school-logos/ArwachinLogo2.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, Box, Paper, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
import BottomNavbar from 'components/BottomNavbar';
import SchoolLogo2 from 'assets/images/school-logos/ArwachinLogo3.png';
import CloseIcon from '@mui/icons-material/Close';

const OnlineRegistration = () => {
  const [TabChange, setTabChange] = useState(0);
  const [showSignUp, setShowSignUp] = useState(true) ;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const continueHandler = () => {
    setShowSignUp(false);
  };

  const handleClick = (tab) => {
    setTabChange(tab);
    setDrawerOpen(false); // Close drawer when a tab is clicked
  };

  const tabsData = [
    { id: 1, value: 0, component: <StudentDetails handleClick={handleClick} />, label: "STUDENT'S DETAILS" },
    { id: 2, value: 1, component: <OtherDetails handleClick={handleClick} />, label: 'OTHER DETAILS' },
    { id: 3, value: 2, component: <SiblingDetails handleClick={handleClick} />, label: 'SIBLING DETAILS (IF ANY)' },
    { id: 4, label: 'EMPLOYEE DETAILS', disabled: true },
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

  const XXL = useMediaQuery('(min-width:1920px)');
  const Res1680 = useMediaQuery('(max-width:1680px)');
  const Res1536 = useMediaQuery('(max-width:1536px)');
  const Res1280 = useMediaQuery('(max-width:1280px)');
  const Res1440 = useMediaQuery('(max-width:1440px)');
  const Res1024 = useMediaQuery('(max-width:1024px)');
  const ReshamBurger = useMediaQuery('(max-width:990px)');
  const Res2560 = useMediaQuery('(min-width:2560px)');
  const Res821 = useMediaQuery('(max-width:821px)');
  const Res575 = useMediaQuery('(max-width:575px)');
  const Res500 = useMediaQuery('(max-width:500px)');
  const Res430 = useMediaQuery('(max-width:430px)');
  const Res400 = useMediaQuery('(max-width:400px)');

  let ResNavbar = {
    bottom: '4rem',
    width: '75%',
    paddingLeft: '2.8rem'
  };

  let ResNavbarBtn = {
    fontsize: '14px',
    width: '144px'
  };

  if (Res2560) {
    ResNavbar = {
      bottom: '6rem',
      width: '77.5%',
      paddingLeft: '3.1rem'
    };
  }

  if (Res1680) {
    ResNavbar = {
      bottom: '3rem',
      width: '66%',
      paddingLeft: '3.2rem'
    };
  }

  if (Res1536) {
    ResNavbar = {
      bottom: '3rem',
      width: '65%',
      paddingLeft: '3rem'
    };
  }

  if (Res1440) {
    ResNavbar = {
      bottom: '3rem',
      width: '64%',
      paddingLeft: '2.8rem'
    };
  }

  if (Res1280) {
    ResNavbar = {
      bottom: '3rem',
      width: '55.5%',
      paddingLeft: '3.1rem'
    };
  }

  if (Res1024) {
    ResNavbar = {
      bottom: '3rem',
      width: '52%',
      paddingLeft: '3.1rem'
    };
  }

  if (Res821) {
    ResNavbar = {
      bottom: '3rem',
      width: '94%',
      paddingLeft: TabChange == 0 ? '13.9rem' : '11.1rem'
    };
  }

  if (Res575) {
    (ResNavbar = {
      bottom: '3rem',
      width: '91%',
      paddingLeft: TabChange == 0 ? '10.5rem' : '7.5rem'
    }),
      (ResNavbarBtn = {
        fontSize: '10px',
        width: '80px'
      });
  }

  if (Res500) {
    (ResNavbar = {
      bottom: '3rem',
      width: '91%',
      paddingLeft: TabChange == 0 ? '7.6rem' : '5.5rem'
    }),
      (ResNavbarBtn = {
        fontSize: '10px',
        width: '80px'
      });
  }

  if (Res430) {
    (ResNavbar = {
      bottom: '3rem',
      width: '88%',
      paddingLeft: TabChange == 0 ? '6.2rem' : '3.8rem'
    }),
      (ResNavbarBtn = {
        fontSize: '10px',
        width: '80px'
      });
  }

  if (Res400) {
    (ResNavbar = {
      bottom: '3rem',
      width: '88%',
      paddingLeft: TabChange == 0 ? '4.2rem' : '2.7rem'
    }),
      (ResNavbarBtn = {
        fontSize: '10px',
        width: '80px'
      });
  }

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };



  return (
    <>
      {showSignUp ? (
        <Grid >
          <SignUpRegisteration continueHandler={continueHandler} />
        </Grid>
      ) : (
        <Grid sx={{ background: '#ffecec', minHeight: '100vh' }}>
          <Grid container spacing={3} sx={{ paddingLeft: ReshamBurger ? '1rem' : '5rem', paddingTop: ReshamBurger ? '1rem' : '4rem' }}>
            {!ReshamBurger && (
              <Grid
                item
                xl={XXL ? 2 : 3}
                lg={Res1280 ? 4 : 3}
                md={4}
                sm={12}
                component={Paper}
                elevation={2}
                sx={{ minHeight: '87vh', marginTop: '1.5rem' }}
              >
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
                            alignItems: 'start',
                            color: TabChange === tab.value ? 'inherit !important' : 'inherit',
                            marginLeft: '7px'
                          }}
                          label={<TabNumber number={tab.id} text={tab.label} isActive={TabChange === tab.value} />}
                        />
                      ))}
                    </Tabs>
                  </Box>
                </Grid>
              </Grid>
            )}
            <Grid item xl={XXL ? 10 : 9} lg={Res1280 ? 8 : 9} md={8} sm={12}>
              <Box sx={{ paddingRight: ReshamBurger ? '1rem' : '4rem' }}>
                <Paper elevation={2} sx={{ minHeight: ReshamBurger ? '94vh' : '87vh' }}>
                  {ReshamBurger && (
                    <>
                      <IconButton
                        edge="start"
                        color="yellow"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                        sx={{ position: '', top: 20, left: 20 }}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={handleDrawerClose}
                        sx={{
                          '& .MuiPaper-root': {
                            borderTopRightRadius: '10px',
                            borderBottomRightRadius: '10px',
                            background: '#ffecec'
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
                          <IconButton onClick={handleDrawerClose}>
                            <CloseIcon />
                          </IconButton>
                        </Box>

                        <Box sx={{ width: '275px !important' }} role="presentation">
                          <Box sx={{ marginLeft: '2.4rem' }}>
                            <img src={SchoolLogo2} alt="Logo" width="75%" />
                          </Box>
                          <List>
                            {tabsData.map((tab) => (
                              <ListItem button key={tab.id} onClick={() => handleClick(tab.value)} disabled={tab.disabled}>
                                <ListItemText primary={<TabNumber number={tab.id} text={tab.label} isActive={TabChange === tab.value} />} />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </Drawer>
                    </>
                  )}

                  {tabsData.map((tab) => TabChange === tab.value && tab.component)}

                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '0.3rem' }}>
                    <BottomNavbar
                      tabPageLength={tabsData.length - 1}
                      value={TabChange}
                      setValue={setTabChange}
                      cancelCustomStyle={{ ...ResNavbarBtn }}
                      SaveNnextCustomStyle={{ ...ResNavbarBtn }}
                      SubmitCustomStyle={{ ...ResNavbarBtn }}
                      customStyle={{
                        ...ResNavbar,
                        backgroundColor: 'white',
                        borderBottom: 'none',
                        borderTop: '1px solid #ccc',
                        borderRadius: '0px',
                        height: '5rem'
                      }}
                    />
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}

      <Box style={{ position: 'fixed', textAlign: 'center', width: '100%', background: showSignUp ? '' : '#ffecec', bottom: '0' }}>
        <Typography variant="h5" sx={{ paddingBottom: '0.5rem' }}>
          Powered by Jusklik
        </Typography>
      </Box>
    </>
  );
};

export default OnlineRegistration;

// Without hamburger

// import React, { useState } from 'react';
// import SchoolLogo from '../../../assets/images/Arwachin School (Test Logo) (2).png';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { Grid, Box, Paper, Typography ,useMediaQuery} from '@mui/material';
// import StudentDetails from './StudentDetails';
// import Upload_Document_Photos from './Upload_Document_Photos';
// import SignUpRegisteration from './SignUpRegisteration';
// import OtherDetails from './OtherDetails';
// import SiblingDetails from './SiblingDetails';
// import PermanentAddress from './PermanentAddress';
// import FatherDetails from './FatherDetails';
// import MotherDetails from './MotherDetails';
// import Additional_Information from './Additional_Information';
// import PreviewAndSubmit from './PreviewAndSubmit';
// import TabNumber from './TabNumber';
// import BottomNavbar from 'components/BottomNavbar';

// const OnlineRegistration = () => {
//   const [TabChange, setTabChange] = useState(0);
//   const [showSignUp, setShowSignUp] = useState(false);

//   const continueHandler = () => {
//     setShowSignUp(false);
//   };

//   const handleClick = (tab) => {
//     setTabChange(tab);
//   };

//   // Array containing information about each tab

//   const tabsData = [
//     { id: 1, value: 0, component: <StudentDetails handleClick={handleClick} />, label: "STUDENT'S DETAILS" },
//     { id: 2, value: 1, component: <OtherDetails handleClick={handleClick} />, label: 'OTHER DETAILS' },
//     { id: 3, value: 2, component: <SiblingDetails handleClick={handleClick} />, label: 'SIBLING DETAILS (IF ANY)' },
//     { id: 4, label: 'EMPLOYEE DETAILS', disabled: true }, // No component specified for this tab
//     { id: 5, value: 3, component: <PermanentAddress handleClick={handleClick} />, label: 'PERMANENT ADDRESS' },
//     { id: 6, value: 4, component: <FatherDetails handleClick={handleClick} />, label: "FATHER'S DETAILS" },
//     { id: 7, value: 5, component: <MotherDetails handleClick={handleClick} />, label: "MOTHER'S DETAILS" },
//     { id: 8, value: 6, component: <Additional_Information handleClick={handleClick} />, label: 'ADDITIONAL INFORMATION' },
//     { id: 9, value: 7, component: <Upload_Document_Photos handleClick={handleClick} />, label: 'UPLOAD DOCUMENTS' },
//     { id: 10, value: 8, component: <PreviewAndSubmit />, label: 'PREVIEW AND SUBMIT' }
//   ];

//   const handleChange = (event, newValue) => {
//     setTabChange(newValue);
//   };

//   //Responsive
//   const XXL = useMediaQuery('(min-width:1920px)')
//   const Res1680 =useMediaQuery('(max-width:1680px)')
//   const Res1536 = useMediaQuery('(max-width:1536px)')
//   const Res1280 = useMediaQuery('(max-width:1280px)')
//   const Res1440 = useMediaQuery('(max-width:1440px)')
//   const Res1024 = useMediaQuery('(max-width:1024px)')

//    let ResNavbar = {
//     bottom:'4rem',
//     width:'75%',
//     paddingLeft:'2.8rem'
//    }

//   const Res2560 = useMediaQuery('(min-width:2560px)');

//   if (Res2560) {
//     ResNavbar = {
//       bottom: '6rem',
//       width: '77.5%',
//       paddingLeft:'3.1rem'
//     };
//   }

//   if (Res1680) {
//     ResNavbar = {
//       bottom: '3rem',
//       width: '66%',
//       paddingLeft:'3.2rem'
//     };
//   }

//   if (Res1536) {
//     ResNavbar = {
//       bottom: '3rem',
//       width: '65%',
//       paddingLeft:'3rem'
//     };
//   }

//   if (Res1440) {
//     ResNavbar = {
//       bottom: '3rem',
//       width: '64%',
//       paddingLeft:'2.8rem'
//     };
//   }

//   if (Res1280) {
//     ResNavbar = {
//       bottom: '3rem',
//       width: '55.5%',
//       paddingLeft:'10rem'
//     };
//   }

//   if (Res1024) {
//     ResNavbar = {
//       bottom: '3rem',
//       width: '52%',
//       paddingLeft:'4.2rem'
//     };
//   }

//   return (
//     <>

//       {showSignUp ? (
//         <Grid>
//           <SignUpRegisteration continueHandler={continueHandler} />
//         </Grid>
//       ) : (
//         <Grid>
//           {/* background color  = #EEF2F6 */}
//           <Grid sx={{ background: '#ffecec', height: '102.5vh' }}>
//             <Grid container spacing={3} sx={{ paddingLeft: '5rem', paddingTop: '4rem' }}>
//               <Grid item xl={XXL ? 2 : 3} lg={Res1280 ? 4 : 3} md={4} sm={12} component={Paper} elevation={2} sx={{ height: '87vh', marginTop: '1.5rem'}}>
//                 <Grid sx={{ paddingRight: '1rem', marginTop: '-5px'  }}>
//                   <Box sx={{ marginRight: '53px' }}>
//                     <img src={SchoolLogo} alt="Logo" width="250px" style={{ marginRight: '8px' }} />
//                   </Box>

//                   <Box
//                     sx={{
//                       width: '100%',
//                       paddingTop: '1.5rem',
//                       '& .number-bg': {
//                         background: '#2196f3',
//                         color: 'white'
//                       }
//                     }}
//                   >
//                     {/* <Tabs
//                       value={TabChange}
//                       onChange={handleChange}
//                       centered
//                       orientation="vertical"
//                       sx={{ '& .MuiTabs-indicator': { left: 0, right: 'auto' } }}
//                       TabIndicatorProps={{ style: { backgroundColor: '#ffe71b' } }}
//                     >
//                        {tabsData.map(tab => (
//   <Tab
//     key={tab.value}
//     value={tab.value}
//     disabled={tab.disabled}
//     sx={{ fontSize: '14px', fontWeight: 'bold', alignItems: 'start' }}
//     label={<TabNumber number={tab.id} text={tab.label} isActive={TabChange === tab.value} />}
//   />
// ))}
//                     </Tabs> */}

//                     <Tabs
//                       value={TabChange}
//                       onChange={handleChange}
//                       centered
//                       orientation="vertical"
//                       sx={{ '& .MuiTabs-indicator': { left: 0, right: 'auto' } }}
//                       TabIndicatorProps={{ style: { backgroundColor: '#ffe71b', width: '3px' } }}
//                     >
//                       {tabsData.map((tab) => (
//                         <Tab
//                           key={tab.id}
//                           value={tab.value}
//                           disabled={tab.disabled}
//                           sx={{
//                             fontSize: '14px',
//                             fontWeight: 'bold',
//                             alignItems: 'start', //#ffe71b
//                             color: TabChange === tab.value ? 'inherit !important' : 'inherit', // Change color to pink if tab is active
//                             marginLeft: '7px'
//                           }}
//                           label={<TabNumber number={tab.id} text={tab.label} isActive={TabChange === tab.value} />}
//                         />
//                       ))}
//                     </Tabs>
//                   </Box>
//                 </Grid>
//               </Grid>

//               {/* Render the selected component */}
//               <Grid item xl={XXL ? 10 : 9} lg={Res1280 ? 8 : 9} md={8} sm={12} >
//                 <Box sx={{ paddingRight: '4rem' }}>
//                   <Paper elevation={2} sx={{ height: '87vh' }}>
//                     {tabsData.map((tab) => TabChange === tab.value && tab.component)}

//                     <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', paddingLeft: '0.3rem' }}>
//                       <BottomNavbar
//                         tabPageLength={tabsData.length - 1}
//                         value={TabChange}
//                         setValue={setTabChange}
//                         customStyle={{ ...ResNavbar,backgroundColor: 'white', borderBottom: 'none', borderTop:'1px solid #ccc', borderRadius:'0px' , height:'5rem'  }}
//                       />
//                     </Box>

//                     {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '0.3rem' }}>
//                       <BottomNavbar
//                         tabPageLength={tabsData.length - 1}
//                         value={TabChange}
//                         setValue={setTabChange}
//                         customStyle={{ width: '71%', backgroundColor: 'white', bottom: '3.8rem', borderBottom: 'none', borderTop: 'none' }}
//                       />
//                     </Box> */}
//                   </Paper>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       )}

// <Box style={{ position: "fixed", bottom: 0, textAlign: "center", width: "100%" }}>

//     <Typography variant='h5' sx={{marginBottom:'0.5rem'}}>Powered by Jusklik</Typography>

// </Box>

// {/* <Box style={{ position: "fixed", bottom: 0, textAlign: "center", width: "100%" }}>
//   <Paper elevation={2} sx={{width:'100%' , borderRadius:'0px !important', backgroundColor:'#FFECEC'}}>
//     <Typography variant='h5'>Powered by Jusklik</Typography>
//   </Paper>
// </Box> */}

//     </>
//   );
// };

// export default OnlineRegistration;

// Same Copy Reuseable
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
//                 customTabsStyle={{
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
