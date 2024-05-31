// ======= Page Owner Vikash =========
// ======= Add Contact Drawer And Tabs =========
import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import { Button, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BottomNavbar from 'components/BottomNavbar';
import documentData from './contact-preview/Sample-DocumentData';
import AddLeadForm from './AddLeadForm';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import DriveFolderUploadTwoToneIcon from '@mui/icons-material/DriveFolderUploadTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DocumentTest from './DocumentUpload';
import ParamStepper from 'components/tabs/Stepper';
import DrawerLayOut from 'layout/drawer-layout';

const AddContactDrawer = ({ DrawerBtn = false, editIcon = false, currEditItem, handleClick }) => {
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
      props: { currEditItem: currEditItem },
      icon: <PersonAddAltTwoToneIcon />
    },
    {
      id: 2,
      name: 'Other Details',
      value: '2',
      component: OtherDetail,
      icon: <DescriptionTwoToneIcon />
    },
    {
      id: 2,
      name: 'Documents',
      value: '2',
      component: DocumentTest,
      props: { documentData: documentData, onFileChange: handleFileChange, onRemoveFile: handleRemoveFile },
      icon: <DriveFolderUploadTwoToneIcon />
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
      <Box>
        <ParamStepper
          variant={'scrollable'}
          tabPage={tabPage}
          numberShow={false}
          showBottomNav={false}
          value={value}
          handleChange={handleChange}
          customTabsStyle={{ '& .MuiButtonBase-root': { minHeight: '49px' }, height: '50px' }}
          customtabPanelStyle={{ padding: '0px', marginTop: '4px' }}
          customtabWrapper={{ marginTop: '0px' }}
        />
      </Box>
    );
  };

  return (
    <>
      {DrawerBtn && (
        <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
          Add Contact
        </Button>
      )}

      {editIcon && <EditTwoToneIcon onClick={() => handleEditClick(event)} />}

      <DrawerLayOut anchor={anchor} direction={'right'} toggleDrawer={toggleDrawer} Title={'Add Contact'} Body={<DrawerBody />} Bottom={<DrawerBottom />} />
    </>
  );
};

export default AddContactDrawer;
