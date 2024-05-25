import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DrawerAddTransaction from './DrawerAddTransaction';

const AddTransactionDrawer = ({ DrawerBtn = false, editIcon = false, currEditItem , handleClick }) => {
  const { anchor, toggleDrawer } = useDrawer();

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
          Add Transaction Series
        </Button>
      )}

      {editIcon && (
          <EditTwoToneIcon onClick={() => handleEditClick(event)}/>
      )}

      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 650 }, height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Transaction Number Series</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* Tabs for switching between TransportRoutes and Stoppage */}
           <DrawerAddTransaction currEditItem={currEditItem}/>
          </Box>
        </Box>

        
      </Drawer>
    </>
  );
};

export default AddTransactionDrawer;
