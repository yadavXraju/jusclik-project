// ======= Page Owner Vikash =========
// ======= Return Routes Form Drawer =========

import React, { useState } from 'react';
import { Button } from '@mui/material';
import useDrawer from 'hooks/useDrawer';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TransportRoutes from './TransportRoutes';
import Stoppage from './Stoppage';
import BottomNavbar from 'components/BottomNavbar';
import ParamStepper from 'components/tabs/Stepper';
import DrawerLayOut from 'layout/drawer-layout';

const RoutesFormDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const [value, setValue] = useState(0);

  const tabPage = [
    {
      id: 1,
      name: 'Transport Routes',
      value: '1',
      component: TransportRoutes
    },
    {
      id: 2,
      name: 'Stoppage',
      value: '2',
      component: Stoppage
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePrev = () => {
    setValue(Math.max(0, value - 1));
  };

  const handleNext = () => {
    setValue(Math.min(tabPage.length - 1, value + 1));
  };

  const handleCancelClick=(e)=>{
   toggleDrawer('right',false)(e);
  }

  const handleSubmitClick=()=>{

  }

  const DrawerBottom = () => {
    return (
      <>
        <BottomNavbar handlePrev={handlePrev} handleNext={handleNext}  
          handleCancelClick={handleCancelClick} handleSubmitClick={handleSubmitClick} 
          tabPageLength={tabPage.length} value={value} setValue={setValue}
          customStyle={{ width: { sm: '100vw', md: '42%' }, bottom: '0', 
          borderRadius: '1px' }}
        />
      </>
    )
  }

  const DrawerBody = () => {
    return (
      <ParamStepper
        variant={'scrollable'}
        tabPage={tabPage}
        showBottomNav={false}
        value={value}
        handleChange={handleChange}
        customtabPanelStyle={{ padding: '0px', marginTop: '4px' }}
        customtabWrapper={{ marginTop: '0px' }}
      />
    )
  }

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Add Route
      </Button>
      <DrawerLayOut anchor={anchor} direction={'right'} toggleDrawer={toggleDrawer}
        Title={'Add Route & Stoppage'} Body={<DrawerBody />} Bottom={<DrawerBottom />} 
      />
    </>
  );
};

export default RoutesFormDrawer;
