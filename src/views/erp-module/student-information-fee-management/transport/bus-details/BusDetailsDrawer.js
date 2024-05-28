// ======= Page Owner Vikash =========
// ======= Add Bus Details Drawer =========
import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BottomNavbar from 'components/BottomNavbar';
import BusDetailForm from './BusDetailForm';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import OwnerDetails from './OwnerDetails';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';
import DriveFolderUploadTwoToneIcon from '@mui/icons-material/DriveFolderUploadTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import CommonDocuments from 'components/table-data-grid/Documents';
import documentData from './Sample-DocumentData';
import ParamStepper from 'components/tabs/Stepper';

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
  const tabLength = tabPage.length;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Add Bus Details
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 750 }, height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Bus Details</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
          <ParamStepper
              variant={'scrollable'}
              tabPage={tabPage}
              showBottomNav={false}
              numberShow={false}
              value={value}
              customTabsStyle={{'& .MuiButtonBase-root':{minHeight:'50px'}, height:'50px'}}
              handleChange={handleChange}
              customtabPanelStyle={{ padding: '0px', marginTop: '4px' }}
              customtabWrapper={{ marginTop: '0px' }}
            />
          </Box>
        </Box>
        
        <BottomNavbar
          tabPageLength={tabLength}
          value={value}
          setValue={setValue}
          customStyle={{ width:'100%', bottom: '0', borderRadius: '1px' }}
        />
      </Drawer>
    </>
  );
};

export default BusDetailsDrawer;