// sangeeta

import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Leave from './requestcomponent/Leave';
import Transportation from './requestcomponent/Transportation';
import PersonalDetail from './requestcomponent/Personal';
import ChangeSection from './requestcomponent/ChangeSection';
import InterBranchTransfer from './requestcomponent/InterBranchTransfer';
import Widthrawal from './requestcomponent/Widthrawal';
import BookReservation from './requestcomponent/BookReservation';
import SetupTabs from 'components/tabs/Stepper';
import { useMediaQuery } from '@mui/material';
import { DashboardTab } from 'components/dashboard/CommonCss';


function Request() {

  const [value,setValue]=useState(0);
  const isTab = useMediaQuery('(max-width:991px)')
  const handleChange=(event,newValue)=>{
      setValue(newValue)
  }
  const tabPage = [
    {
      id: 1,
      name: 'Leave',
      value: '1',
      component:Leave,
     
    },
    {
      id: 2,
      name: 'Transport',
      value: '2',
      component: Transportation ,

    },

  
    {
      id: 3,
      name: 'Personal Details',
      value: '3',
      component:PersonalDetail,
    
    },

    {
      id: 4,
      name: 'Change Section',
      value: '4',
      component:ChangeSection,
    
    },
    {
      id: 5,
      name: 'Widthrawal',
      value: '5',
      component:Widthrawal ,
    
    },
  
    {
      id: 6,
      name: 'Book Reservation',
      value: '6',
      component: BookReservation,
    
    },
  
    {
      id: 7,
      name: 'Inter Branch Transfer',
      value: '7',
      component:InterBranchTransfer,
    
    },
  
  
  
  ];

  
  return (
   
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <Paper>

    <SetupTabs  
        variant={"scrollable"}
        tabPage={tabPage}
        orientation={ isTab ? "horizontal" :"horizontal"}
        value={value}
        handleChange={handleChange}
        showBottomNav={false}
        numberShow ={false}
        iconShow={false}
        customtabSytle = {{
          display:"flex-inline",
          flexDirection:"row",
          alignItems:"center",
          marginRight:"0px !important",
          marginLeft:"0px !important",
          minHeight:'50px',
        }}
        customtabPanelStyle={{
          height:"auto",
          background:"transparent",
          padding:"24px 0px"
        }}

        // customtabPanelStyle={DashboardTab.customtabPanelStyle}
        customIconStyle={DashboardTab.customIconStyle}
        customStyleTabs={DashboardTab.customStyleTabs}
        customtabWrapper={DashboardTab.customtabWrapper}
     />
      


    </Paper>
  </Box>
  )
}

export default Request
