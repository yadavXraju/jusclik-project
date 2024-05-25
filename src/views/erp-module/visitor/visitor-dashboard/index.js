// sangeeta

import React from 'react';
import DashboardContent from './Dashboard';
import DashboardPayRoll from 'pages/getting-started';
import SetupTabs from 'components/Stepper';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { useMediaQuery } from '@mui/material';
import { DashboardTab } from 'components/dashboard/CommonCss';

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
        customtabSytle = {DashboardTab.customtabSytle}

        customtabPanelStyle={DashboardTab.customtabPanelStyle}
        customIconStyle={DashboardTab.customIconStyle}
        customStyleTabs={DashboardTab.customStyleTabs}
        customtabWrapper={DashboardTab.customtabWrapper}
     />
      
    </>
  );
};

export default Dashboard;
