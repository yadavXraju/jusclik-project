import React from 'react';
import DashboardContent from './dashboard';
import DashboardPayRoll from 'views/common-section/dashboard-payroll';
import SetupTabs from 'views/common-section/param-stepper';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { useMediaQuery } from '@mui/material';
const Dashboard = () => {

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
        minHeight:'50px',
      }}

    customtabPanelStyle={{
      height:"auto",
      background:"transparent",
      padding:"24px 0px"
    }}
    customIconStyle={{
      marginRight:"10px",
      color:'#000'
    }}
    customStyleTabs={{
      borderBottom:'2px solid red',
      borderColor:'rgb(227, 232, 239) rgb(227, 232, 239) rgba(183, 183, 183, 0.26)',
      mx:'24px'
    }}
      customtabWrapper={{marginTop:'0'}}
   />
      
    </>
  );
};

export default Dashboard;
