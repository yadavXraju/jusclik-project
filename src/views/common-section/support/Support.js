import React from 'react'
import {  Grid , Typography , Paper , Box } from '@mui/material'
import { HeadingCss,} from 'views/dashboard/Default/dashboard-css/CommonCss'
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from './tabs/TabLabel';
import QuickTips from './quick-tips';


const NeedSupport = () => {

      // for active first item when page load
  const [value, setValue] = useState('1')


  // for change the setvalue into newvalue
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <>
       <MainCard> 
          <Grid container spacing={gridSpacing}>
            {/* heading */}
             <Grid item xs={12} sx={{mb:0}}>
                <Grid  alignContent="center" justifyContent="space-between">
                    <Grid item sx={{mb:0}}>
                        <Typography variant='h2' style={HeadingCss}>Support & Help </Typography> 
                    </Grid>
                </Grid>
             </Grid>


               {/* tabs */}
               <Box sx={{ width: '100%', typography: 'body1' }}>

                    <TabContext value={value}>
                        <Paper sx={{mx:'24px'}}>
                            <Box sx={{
                                borderBottom: 0, borderColor: '#e3e8efad' ,
                                //  background:'rgb(30, 136, 229)' , 
                                borderRadius:'10px' , padding:'10px'}}>
                                <TabLabel handleChange={handleChange}/>
                            </Box>
                        </Paper>
                        <TabPanel  value="1"> <QuickTips /> </TabPanel>
                        <TabPanel value="2"></TabPanel>
                        <TabPanel value="3"></TabPanel>
                        <TabPanel value="4"></TabPanel>
                    </TabContext>

                </Box>
           </Grid>
       </MainCard> 

   </>
  )
}

export default NeedSupport;





