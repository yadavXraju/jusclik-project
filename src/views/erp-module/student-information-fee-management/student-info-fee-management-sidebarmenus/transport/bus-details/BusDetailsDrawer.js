// ======= Page Owner Vikash =========
// ======= Add Bus Details Drawer =========
import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, Tab, Tabs } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BottomNavbar from 'component/BottomNavbar';
import BusDetailForm from './BusDetailForm';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import OwnerDetails from './OwnerDetails';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';
import DriveFolderUploadTwoToneIcon from '@mui/icons-material/DriveFolderUploadTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import CommonDocuments from 'views/erp-common-component/commonDocuments';
import documentData from './Sample-DocumentData';

const BusDetailsDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const [tabValue, setTabValue] = useState(0);

  const tabs = [
    {name : 'Vehicle Details', icon: <DirectionsBusTwoToneIcon/>},
    {name : 'Owner Details', icon: <AccountBoxTwoToneIcon/>},
    {name : 'Documents', icon: <DriveFolderUploadTwoToneIcon/>},
  ]
  const tabLength = tabs.length;
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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
            {/* Tabs for switching between TransportRoutes and Stoppage */}
            <Tabs value={tabValue} onChange={handleTabChange} sx={{borderBottom:'1px solid #ccc', marginBottom:'15px'}} variant="scrollable" aria-label="Route tabs">
              {tabs.map((label, index) => (
                <Tab
                  sx={{padding:'12px 2px', margin:'0px 10px 0px 0px'}}
                  key={index}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{marginRight:'5px'}}>{label.icon}</span>
                      {label.name}
                      { <KeyboardArrowRightIcon />}
                    </Box>
                  }
                />
              ))}
            </Tabs>
            {/* Tab panels based on selected tab */}
            <Box sx={{ mt: 1 }}>
              {tabValue === 0 && <BusDetailForm />}
              {tabValue === 1 &&  <OwnerDetails />}
              {tabValue === 2 &&  <CommonDocuments documentData={documentData} />}
            </Box>
          </Box>
        </Box>
        
        <BottomNavbar
          tabPageLength={tabLength}
          value={tabValue}
          setValue={setTabValue}
          customStyle={{ width:'100%', bottom: '0', borderRadius: '1px' }}
        />
      </Drawer>
    </>
  );
};

export default BusDetailsDrawer;