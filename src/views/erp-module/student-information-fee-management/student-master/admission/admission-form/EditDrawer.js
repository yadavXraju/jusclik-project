import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Mainform1 from './MainForm1';


const EditDrawer = ({currEditItem,handleClick}) => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();

  const handleEditClick=(event)=>{
    toggleDrawer('top', true)(event);
    handleClick();
  }

  return (
    <>
      <EditTwoToneIcon onClick={()=>handleEditClick(event)}/>
      <Drawer anchor={'top'} open={anchor.top} onClose={toggleDrawer('top', false)}>
        <Box sx={{ width: '100%', height:'100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Edit Student</Typography>
            <Button onClick={toggleDrawer('top', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box pt={3}>
            {/* ========== Render Drawer Contant ============ */}
            <Mainform1 currEditItem={currEditItem}/>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default EditDrawer;