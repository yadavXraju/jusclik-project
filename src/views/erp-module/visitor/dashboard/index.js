// sangeeta

import React,{useState} from 'react';
import Dashboard from 'views/erp-module/visitor/dashboard/Dashboard';
import DashboardPayRoll from 'pages/getting-started';
import SetupTabs from 'components/tabs/Stepper';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { useMediaQuery } from '@mui/material';
import { DashboardTab } from 'components/dashboard/CommonCss';

const DashboardTabs = () => {
  const [value, setValue] = useState(0);
  const isTab = useMediaQuery('(max-width:991px)')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabPage = [
    {
      id: 1,
      name: 'Dashboard',
      value: '1',
      component:Dashboard,
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
        value={value}
        handleChange={handleChange}
        customtabPanelStyle={DashboardTab.customtabPanelStyle}
        customIconStyle={DashboardTab.customIconStyle}
        customTabsStyle={DashboardTab.customTabsStyle}
        customtabWrapper={DashboardTab.customtabWrapper}
     />
      
    </>
  );
};

export default DashboardTabs;
