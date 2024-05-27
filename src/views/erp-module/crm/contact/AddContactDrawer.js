// ======= Page Owner Vikash =========
// ======= Add Contact Drawer And Tabs =========
import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BottomNavbar from 'components/BottomNavbar';
import documentData from './Sample-DocumentData';
import AddLeadForm from './AddLeadForm';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import DriveFolderUploadTwoToneIcon from '@mui/icons-material/DriveFolderUploadTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DocumentTest from './DocumentUpload';
import ParamStepper from 'components/tabs/Stepper';

const AddContactDrawer = ({ DrawerBtn = false, editIcon = false, currEditItem , handleClick }) => {
  const { anchor, toggleDrawer } = useDrawer();
  const [value, setValue] = useState(0);

   const OtherDetail = () => {
    return <>Other Detail</>;
  };

  const handleEditClick = (event) => {
    toggleDrawer('right', true)(event);
    if (typeof handleClick === 'function') {
      handleClick();
    }
  };

  const handleFileChange = (file, documentId) => {
    // Handle file change
    console.log(`File ${file.name} selected for document ID ${documentId}`);
  };

  const handleRemoveFile = (documentId) => {
    // Handle file removal
    console.log(`File removed for document ID ${documentId}`);
  };

  const tabPage = [
    {
      id: 1,
      name: 'Primary Details',
      value: '1',
      component: AddLeadForm,
      props:{currEditItem:currEditItem},
      icon: <PersonAddAltTwoToneIcon />,
    },
    {
      id: 2,
      name: 'Other Details',
      value: '2',
      component: OtherDetail,
      icon: <DescriptionTwoToneIcon />,
    },
    {
      id: 2,
      name: 'Documents',
      value: '2',
      component: DocumentTest,
      props:{documentData:documentData, onFileChange:handleFileChange, onRemoveFile:handleRemoveFile},
      icon: <DriveFolderUploadTwoToneIcon />,
    }
  ];
  const tabLength = tabPage.length;
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            {/* Tab panels based on selected tab */}
            {/* <Box sx={{ mt: 1, height: 'calc(100vh - 188px)' , overflowY:'auto' }}>
              {tabValue === 0 && <AddLeadForm currEditItem={currEditItem} />}
              {tabValue === 1 && <Box>Other Details</Box>}
              {tabValue === 2 && (
                <>
                  <DocumentTest documentData={documentData}  onFileChange={handleFileChange} onRemoveFile={handleRemoveFile}/>
                </>
              )}
            </Box> */}
            <ParamStepper
              variant={'scrollable'}
              tabPage={tabPage}
              numberShow={false}
              showBottomNav={false}
              value={value}
              handleChange={handleChange}
              customTabsStyle={{'& .MuiButtonBase-root':{minHeight:'50px'}, height:'50px'}}
              customtabPanelStyle={{ padding: '0px', marginTop: '4px' }}
              customtabWrapper={{ marginTop: '0px' }}
            />

          </Box>
        </Box>

        <BottomNavbar
          tabPageLength={tabLength}
          value={value}
          setValue={setValue}
          customStyle={{ width: '100%', bottom: '0', borderRadius: '1px' }}
        />
        
      </Drawer>
    </>
  );
};

export default AddContactDrawer;
