import React from 'react';
import {Typography, Box, Button , Drawer} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Systemdata from 'views/common-section/ParamSearchTabs';
import useDrawer from 'hooks/useDrawer';

import {
  BlackListed,
 VisitorPurpose,
 ToMeet,

} from './TabPages';




const  SystemDataPages=()=>{
  const {anchor,toggleDrawer}=useDrawer();
  const tabPage = [
    {
      id: 1,
      name: "Black Listed Visitor",
      component: BlackListed,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },

    {
      id: 2,
      name: "ToMeet",
      component: ToMeet,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 3,
      name: "Visitor Purpose",
      component: VisitorPurpose,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
   

  ]
     return(
      <>
       <Box sx={{ display: "flex", justifyContent: "space-between", width: "97%", alignItems: "center" }}>
        <Typography variant="p" sx={{ marginTop: "-20px", marginLeft: "20px" }}>
         ToMeet
        </Typography>
        <Button onClick={toggleDrawer('right', true)} sx={{ margin: "0px 0px 20px 60px", height: "40px", color: '#fff' }} variant="contained" startIcon={<AddIcon />}>Add Field</Button>
      </Box>
      <Systemdata tabPage={tabPage} />

      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box  sx={{ width:{xs : '100vw' , sm: 650} , padding: '1rem' }} role='presentation'>
          <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom:'1rem', }}>
            <Typography>  </Typography>


            <Button sx={{marginTop:"-6px"}} onClick={toggleDrawer('right', false)}>Close</Button>
          </Box>
          


        </Box>
      </Drawer>
      </>
     )
}

export default SystemDataPages;