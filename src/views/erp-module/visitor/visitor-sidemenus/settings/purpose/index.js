import React from 'react';
import {Typography, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Systemdata from 'views/common-section/ParamSearchTabs';
import useDrawer from 'hooks/useDrawer';
import {
  Meeting,
  Submission,
  ParentsDiscussion,
  Admission,
  Interview,
  Conference
} from './Tabpages';




const SystemDataPages=()=>{
  const {anchor,toggleDrawer}=useDrawer();
  const tabPage = [
    {
      id: 1,
      name: "Meeting",
      component: Meeting,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 2,
      name: "Submission",
      component: Submission,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    }, {
      id: 3,
      name: "Parents Discussion",
      component: ParentsDiscussion,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 4,
      name: "Admission Orientation",
      component: Admission,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 5,
      name: "Interview",
      component: Interview,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 6,
      name: "Conference",
      component: Conference,
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
         Purpose
        </Typography>
        <Button onClick={toggleDrawer('right', true)} sx={{ margin: "0px 0px 20px 60px", height: "40px", color: '#fff' }} variant="contained" startIcon={<AddIcon />}>Add Field</Button>
      </Box>
      <Systemdata tabPage={tabPage} />
      </>
     )
}

export default SystemDataPages;