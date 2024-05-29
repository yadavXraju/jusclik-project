// ======= Page Owner Vikash =========
// ======= Add Bus Details Drawer =========

import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import { Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BottomNavbar from 'components/BottomNavbar';
import BusDetailForm from './BusDetailForm';
import OwnerDetails from './OwnerDetails';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';
import DriveFolderUploadTwoToneIcon from '@mui/icons-material/DriveFolderUploadTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import CommonDocuments from 'components/table-data-grid/Documents';
import documentData from './Sample-DocumentData';
import ParamStepper from 'components/tabs/Stepper';
import DrawerLayOut from 'layout/drawer-layout';


const BusDetailsDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const [value, setValue] = useState(0);

  const tabPage = [
    {
      id: 1,
      name: 'Vehicle Details',
      value: '1',
      component: BusDetailForm,
      icon: <DirectionsBusTwoToneIcon/>
    },
    {
      id: 2,
      name: 'Owner Details',
      value: '2',
      component: OwnerDetails,
      icon: <AccountBoxTwoToneIcon/>
    },
    {
      id: 2,
      name: 'Documents',
      value: '2',
      component: CommonDocuments,
      props:{documentData:documentData},
      icon: <DriveFolderUploadTwoToneIcon/>
    }
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

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
        numberShow={false}
        value={value}
        handleChange={handleChange}
        customTabsStyle={{'& .MuiButtonBase-root':{minHeight:'49px'}, height:'50px'}}
        customtabPanelStyle={{ padding: '0px', marginTop: '4px' }}
        customtabWrapper={{ marginTop: '0px' }}
      />
    )
  }

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
      Add Bus Details
      </Button>
      <DrawerLayOut anchor={anchor} direction={'right'} toggleDrawer={toggleDrawer}
        Title={'Add Bus Details'} Body={<DrawerBody />} Bottom={<DrawerBottom />} 
      />
    </>
  );
};

export default BusDetailsDrawer;