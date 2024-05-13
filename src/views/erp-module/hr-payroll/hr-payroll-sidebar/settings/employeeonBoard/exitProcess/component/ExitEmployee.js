import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'views/common-section/WarningDialog';
import EmployeeExitForm from './EmployeeExitForm';

const ExitEmployee = ({ DrawerBtn = false, editIcon = false, handleClick }) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { anchor, toggleDrawer } = useDrawer();

  const handleEditClick = () => {
    if (confirm) {
      setmodalOpen(false);
    } else {
      setmodalOpen(true);
    }
    if (!confirm && typeof handleClick === 'function') {
      handleClick();
    }
  };

  const confirmDelete = () => {
    setConfirm(!confirm);
    setmodalOpen(false);
    if (!confirm) {
      toggleDrawer('right', true)();
    }
  };

  const handleModalClose = () => {
    setmodalOpen(false);
  };

  return (
    <>
      {DrawerBtn && (
        <Button variant="outlined" onClick={() => handleEditClick()}>
          Initiate Exit Process
        </Button>
      )}

      {editIcon && <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} onClick={() => handleEditClick()} />}

      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: '30vw', height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Start Exit Process</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box pt={3}>
            <EmployeeExitForm/>
         </Box>
        </Box>
      </Drawer>
      <WarningDialog open={modalOpen} onClose={handleModalClose} contentText="Are you sure you want to delete?" onConfirm={confirmDelete} />
    </>
  );
};

export default ExitEmployee;
