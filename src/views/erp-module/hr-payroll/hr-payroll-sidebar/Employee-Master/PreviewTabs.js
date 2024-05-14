import React, { useState } from 'react';
import { Box, Tab, Tabs, Grid, Typography, Divider } from '@mui/material';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import LeaderboardTwoToneIcon from '@mui/icons-material/LeaderboardTwoTone';
// import Experience from './Experience';


const PreviewTabs = () => {
  const [tabValue, setTabValue] = useState(0); // State for controlling tabs

  const tabs = [
    { name: 'Other Details', icon: <DescriptionTwoToneIcon /> },
    { name: 'Education', icon: <SchoolTwoToneIcon /> },
    { name: 'Experience', icon: <LeaderboardTwoToneIcon /> },
    { name: 'Address', icon: <HomeWorkTwoToneIcon /> },
    { name: 'Contact Person', icon: <PeopleAltTwoToneIcon /> }
  ];
  //const tabLength = tabs.length;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      {/* Tabs for switching between tabs */}
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: '1px solid #ccc' }} variant="scrollable" aria-label="Tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '5px' }}>{tab.icon}</span>
                {tab.name}
              </Box>
            }
          />
        ))}
      </Tabs>
      {/* Tab panels based on selected tab */}
      <Box>
        {tabValue === 0 && (
          <>
            {/* ================ Render Basic Info tab content ============== */}
            <Box>
              <Box p={2}>
                <Typography p={0.7} variant="h4">
                  Other Details
                </Typography>
                <Divider />

                <Box p={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        Leave Type
                      </Box>
                      <Box fontSize={16}> Nov-25 </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                      Contract From
                      </Box>
                      <Box fontSize={16}>12 May 2023</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                       Contract To
                      </Box>
                      <Box fontSize={16}>09 May 2025</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        Probation From
                      </Box>
                      <Box fontSize={16}>05 Jan 2024</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                        Probation To
                      </Box>
                      <Box fontSize={16}>05 Jan 2027</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                      Confirmation Date
                      </Box>
                      <Box fontSize={16}>08 March 2022</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                      PF Joining Date
                      </Box>
                      <Box fontSize={16}>11 July 2023</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                       PF Nominee Name
                      </Box>
                      <Box fontSize={16}>Abc</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                       PF Nominee Relation
                      </Box>
                      <Box fontSize={16}>Father</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                      Joining Designation
                      </Box>
                      <Box fontSize={16}>Software Developer</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pb={0.5} color={'#8b8989'}>
                      Payroll Reminder
                      </Box>
                      <Box fontSize={16}>Payroll Reminder</Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </>
        )}
        {tabValue === 1 && 1}
        {tabValue === 2 && <Box mt={2}>
          {/* <Experience disabled='true' /> */}
          </Box>}
        {tabValue === 3 && 
         <>
         {/* ================ Render Address tab content ============== */}
         <Box p={2}>
           <Typography pb={1} variant="h4" gutterBottom>
             Current Address
           </Typography>
           <Divider />

           <Box p={2}>
             <Grid container spacing={3}>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   ADDRESS
                 </Box>
                 <Box fontSize={16}>Dwarka, Delhi</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   COUNTRY/REGION
                 </Box>
                 <Box fontSize={16}>India</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   CITY
                 </Box>
                 <Box fontSize={16}>Delhi</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   STATE
                 </Box>
                 <Box fontSize={16}>Delhi</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   ZIP CODE
                 </Box>
                 <Box fontSize={16}>857473</Box>
               </Grid>
             </Grid>
           </Box>

         </Box>

         <Box p={2}>
           <Typography pb={1} variant="h4" gutterBottom>
           Permanent Address
           </Typography>
           <Divider />

           <Box p={2}>
             <Grid container spacing={3}>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   ADDRESS
                 </Box>
                 <Box fontSize={16}>Dwarka, Delhi</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   COUNTRY/REGION
                 </Box>
                 <Box fontSize={16}>India</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   CITY
                 </Box>
                 <Box fontSize={16}>Delhi</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   STATE
                 </Box>
                 <Box fontSize={16}>Delhi</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   ZIP CODE
                 </Box>
                 <Box fontSize={16}>857473</Box>
               </Grid>
             </Grid>
           </Box>

         </Box>
       </>
        }
        {tabValue === 4 && 
         <>
         {/* ================ Render Contact Person tab content ============== */}
         <Box p={2}>
           <Typography pb={1} variant="h4" gutterBottom>
             Contact Person (Father)
           </Typography>
           <Divider />

           <Box p={2}>
             <Grid container spacing={3}>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   NAME
                 </Box>
                 <Box fontSize={16}>Mr. Subash</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   RELATION
                 </Box>
                 <Box fontSize={16}>Father</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   MOBILE
                 </Box>
                 <Box fontSize={16}>8484937348</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   EMAIL
                 </Box>
                 <Box fontSize={16}>abc@gmail.com</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   EDUCATION
                 </Box>
                 <Box fontSize={16}>B.Sc</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   COMPANY
                 </Box>
                 <Box fontSize={16}>abc Company</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   DESIGNATION
                 </Box>
                 <Box fontSize={16}>Manager</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   ADDRESS
                 </Box>
                 <Box fontSize={16}>Delhi</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   AADHAAR NO.
                 </Box>
                 <Box fontSize={16}>12456789345</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   PEN
                 </Box>
                 <Box fontSize={16}>AZCIV89345</Box>
               </Grid>
             </Grid>
           </Box>

         </Box>

         <Box p={2}>
           <Typography pb={1} variant="h4" gutterBottom>
             Contact Person (Mother)
           </Typography>
           <Divider />

           <Box p={2}>
             <Grid container spacing={3}>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   NAME
                 </Box>
                 <Box fontSize={16}>Ms. Suman</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   RELATION
                 </Box>
                 <Box fontSize={16}>Mother</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   MOBILE
                 </Box>
                 <Box fontSize={16}>5469354098</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   EMAIL
                 </Box>
                 <Box fontSize={16}>abc@gmail.com</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   EDUCATION
                 </Box>
                 <Box fontSize={16}>B.Sc</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   COMPANY
                 </Box>
                 <Box fontSize={16}>abc Company</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   DESIGNATION
                 </Box>
                 <Box fontSize={16}>Manager</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   ADDRESS
                 </Box>
                 <Box fontSize={16}>Delhi</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   AADHAAR NO.
                 </Box>
                 <Box fontSize={16}>12456789345</Box>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Box pb={0.5} color={'#8b8989'}>
                   PEN
                 </Box>
                 <Box fontSize={16}>AZCIV89345</Box>
               </Grid>
             </Grid>
           </Box>
         </Box>
       </>
        }
      </Box>
    </Box>
  );
};

export default PreviewTabs;
