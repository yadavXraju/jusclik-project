// ======= Page Owner Vikash =========
// ======= Render Slab Drawer =========
import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, Tab, Tabs } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BottomNavbar from 'views/common-section/BottomNavbar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SlabForm from './SlabForm';
import Test from './SlabStructure';


const SlabFormDrawer = () => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();
  const [tabValue, setTabValue] = useState(0);

  const tabs = ['Basic Info', 'Slab Structure'];
  const tabLength = tabs.length; 

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
      Add Slab
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{width: { xs: '100vw', sm: 650 }, height:'100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Slab</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* ========== Render Drawer Contant ============ */}
            <Box>
            {/* Tabs for switching between TransportRoutes and Stoppage */}
            <Tabs value={tabValue} onChange={handleTabChange} sx={{borderBottom:'1px solid #ccc'}} variant="scrollable" aria-label="Route tabs">
              {tabs.map((label, index) => (
                // <Tab key={index} label={label} />
                <Tab
                  sx={{padding:'12px 8px', margin:'0px 10px 0px 0px'}}
                  key={index}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{padding:'5px', border: `1px solid ${tabValue === index ? '#2196f3' : '#ccc'}`, borderRadius:'50%', width:'29px', marginRight:'5px'}}>{index + 1}</span>
                      {label}
                      { <KeyboardArrowRightIcon />}
                    </Box>
                  }
                />
              ))}
            </Tabs>
            {/* Tab panels based on selected tab */}
            <Box sx={{ mt: 1 }}>
              {tabValue === 0 && <SlabForm/>}
              {tabValue === 1 && <Test/>}
            </Box>
          </Box>
          </Box>
        </Box>
        <BottomNavbar
          tabPageLength={tabLength}
          value={tabValue}
          setValue={setTabValue}
          customStyle={{width: { sm: '100vw', md: '42%' }, bottom: '0', borderRadius: '1px' }}
        />
      </Drawer>
    </>
  );
};  

export default SlabFormDrawer;