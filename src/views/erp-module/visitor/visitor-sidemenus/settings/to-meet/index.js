import React from 'react';
import {Typography, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Systemdata from 'views/common-section/ParamSearchTabs';
import useDrawer from 'hooks/useDrawer';
import {
  HeadMaster,
  Principal,
  VicePrincipal,
 ClassTeacher,
 HrDepartment,
 HeadMistress,
 SportsTeacher,
 Librarian,
 ComputerTeacher
} from './TabPages';




const ToMeet=()=>{
  const {anchor,toggleDrawer}=useDrawer();
  const tabPage = [
    {
      id: 1,
      name: "Head Master",
      component: HeadMaster,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 2,
      name: "Principal",
      component: Principal,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 3,
      name: "Vice Principal",
      component: VicePrincipal,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 4,
      name: "Class Teacher",
      component: ClassTeacher,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 5,
      name: "HR Department",
      component: HrDepartment,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 6,
      name: "Head Mistress",
      component: HeadMistress,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 7,
      name: "Sports Teacher",
      component: SportsTeacher,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 7,
      name: "Librarian",
      component: Librarian,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 8,
      name: "Computer Teacher",
      component: ComputerTeacher,
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

export default ToMeet;