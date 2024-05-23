import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box  } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParameterizedAutoComplete from 'component/ParamAutoComplete';
import {groups } from './CountryData';




const OnBoardDrawer = () => {


//    ============================================ call custom hook for toggle drawer ============================================
const { anchor, toggleDrawer } = useDrawer();

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
     InitiateOnBoard
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: '30vw', height:'100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Initiate On Board</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box pt={3}>
{/*     ================================================= Render Drawer Contant ================================================ */}
           <ParameterizedAutoComplete   option={groups} customStyle={{width:"60vh !important"}} label={'Select Group Name'} />           
           <Button variant='contained' sx={{position:'fixed',bottom:'10px',right:'10px' }} >Initiate</Button>
          </Box> 
        </Box>
      </Drawer>    
    </>

  );
};

export default OnBoardDrawer;