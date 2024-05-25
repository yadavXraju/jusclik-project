// ======= Page Owner Vikash =========
// ======= Add Contact Drawer And Tabs =========
import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, Tab, Tabs } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BottomNavbar from 'components/BottomNavbar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import documentData from './Sample-DocumentData';
import AddLeadForm from './AddLeadForm';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import DriveFolderUploadTwoToneIcon from '@mui/icons-material/DriveFolderUploadTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CommonDocuments from 'components/table-data-grid/Documents';

const AddContactDrawer = ({ DrawerBtn = false, editIcon = false, currEditItem , handleClick }) => {
  const { anchor, toggleDrawer } = useDrawer();
  const [tabValue, setTabValue] = useState(0);

  const tabs = [
    { name: 'Primary Details', icon: <PersonAddAltTwoToneIcon /> },
    { name: 'Other Details', icon: <DescriptionTwoToneIcon /> },
    { name: 'Documents', icon: <DriveFolderUploadTwoToneIcon /> }
  ];
  
  const tabLength = tabs.length;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEditClick = (event) => {
    toggleDrawer('right', true)(event);
    if (typeof handleClick === 'function') {
      handleClick();
    }
  };

  return (
    <>
      {DrawerBtn && (
        <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
          Add Contact
        </Button>
      )}

      {editIcon && (
          <EditTwoToneIcon onClick={() => handleEditClick(event)}/>
      )}

      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 750 }, height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Contact</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* Tabs for switching between TransportRoutes and Stoppage */}
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{ borderBottom: '1px solid #ccc', marginBottom: '15px' }}
              variant="scrollable"
              aria-label="Route tabs"
            >
              {tabs.map((label, index) => (
                <Tab
                  sx={{ padding: '12px 2px', margin: '0px 10px 0px 0px' }}
                  key={index}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '5px' }}>{label.icon}</span>
                      {label.name}
                      {<KeyboardArrowRightIcon />}
                    </Box>
                  }
                />
              ))}
            </Tabs>
            {/* Tab panels based on selected tab */}
            <Box sx={{ mt: 1, height: 'calc(100vh - 188px)' , overflowY:'auto' }}>
              {tabValue === 0 && <AddLeadForm currEditItem={currEditItem} />}
              {tabValue === 1 && <Box>Other Details</Box>}
              {tabValue === 2 && (
                <>
                  <CommonDocuments documentData={documentData} customStyle={{ height: '100%' }} />
                </>
              )}
            </Box>
          </Box>
        </Box>

        <BottomNavbar
          tabPageLength={tabLength}
          value={tabValue}
          setValue={setTabValue}
          customStyle={{ width: '100%', bottom: '0', borderRadius: '1px' }}
        />
        
      </Drawer>
    </>
  );
};

export default AddContactDrawer;
