import React from 'react';
import { 
  // Box, Paper,
  useMediaQuery } from '@mui/material';
// import TabContext from '@mui/lab/TabContext';
// import TabPanel from '@mui/lab/TabPanel';
// import TabLabel from 'views/erp-module/erp-common-item/tab/TabLabel';
import DashboardContent from './dashboard';
import DashboardPayRoll from 'views/common-section/dashboard-payroll';
// import PhoneIcon from '@mui/icons-material/Phone';
// import useTabValue from 'views/common-section/ParamTab';
import SetupTabs from 'views/common-section/param-stepper';

// You can add more label in the tab here 
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';




const Dashboard = () => {
  // const { value, handleChange } = useTabValue('1');

  const isTab = useMediaQuery('(max-width:991px)')

  const tabPage = [
    {
      id: 1,
      name: 'Dashboard',
      value: '1',
      component:DashboardContent,
      icon: <HomeTwoToneIcon sx={{mb:'0 !important'}} />
    },
    {
      id: 2,
      name: 'Getting Started',
      value: '2',
      component: DashboardPayRoll ,
      icon: <SettingsSuggestTwoToneIcon sx={{mb:'0 !important'}}  /> // Include your icon component here
    },

  
    {
      id: 3,
      name: 'Recent Updates',
      value: '3',
      component:"test",
      icon: <NotificationsActiveTwoToneIcon sx={{mb:'0 !important'}}  /> 
    },
  
  ];
  return (
    <>
   <SetupTabs  
   variant={"scrollable"}
   tabPage={tabPage}
   orientation={ isTab ? "horizontal" :"horizontal"}
   showBottomNav={false}
   numberShow ={false}
   iconShow={false}
   customtabSytle = {{
    display:"flex-inline",
    flexDirection:"row",
    alignItems:"center",
    marginRight:"0px",
    // borderBottom:"1px solid #ccc",
    
   }}
customtabPanelStyle={{
  height:"auto",
  background:"transparent",
  padding:"24px 0px"
}}
customIconStyle={{
  marginRight:"10px",
}}
customStyleTabs={{
  borderBottom:'2px solid red',
  borderColor:'rgb(227, 232, 239) rgb(227, 232, 239) rgba(183, 183, 183, 0.26)',
}}

customtabWrapper={{marginTop:'0'}}

   />
      {/* <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Paper sx={{ mx: '24px', background: 'none' }}>
            <Box sx={{ 
              borderBottom: 0,
              borderColor: '#e3e8efad',
              borderRadius: '10px',
              padding: '10px',
              '& .MuiBox-root': {
                marginBottom: '10px'
              }
            }}>
              <TabLabel handleChange={handleChange} />
            </Box>
          </Paper>
          <TabPanel icon={<PhoneIcon />} value="1"><DashboardContent/></TabPanel>
          <TabPanel value="2"><DashboardPayRoll /></TabPanel>
          <TabPanel value="3"></TabPanel>
          <TabPanel value="4"></TabPanel>
        </TabContext>
      </Box> */}
    </>
  );
};

export default Dashboard;
