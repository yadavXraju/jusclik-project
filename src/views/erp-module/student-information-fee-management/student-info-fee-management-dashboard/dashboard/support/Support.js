import React from 'react'
import {  Grid , Typography , Paper , Box } from '@mui/material'
import { HeadingCss,} from 'views/dashboard/Default/dashboard-css/CommonCss'
import { gridSpacing } from 'store/constant';
import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from './tabs/TabLabel';
import QuickTips from './quick-tips';
import MakeInvoiceVideo from './make-invoice-video';


const NeedSupport = () => {

      // for active first item when page load
  const [value, setValue] = useState('1')


  // for change the setvalue into newvalue
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <>
       <Paper  elevation={0} sx={{
        p:'24px',
        paddingRight:'0',
        border:'1px solid rgb(227, 227, 227)',
        boxShadow:'4px 4px 9px 2px #ddddddc2'
        }}> 
          <Grid container spacing={gridSpacing}>
            {/* heading */}
             <Grid item xs={12} sx={{padding: '0 ' , background:'#f9f9fb' , borderBottom:'1px solid rgba(128, 128, 128, 0.25)' , mb:0 , borderRadius:'12px 12px 0px 0'}} >
                <Grid  alignContent="center" justifyContent="space-between">
                    <Grid item sx={{  mb:'0'}} >
                        <Typography variant='h2' style={{...HeadingCss , border:'none'}}> Help  & Support </Typography> 
                    </Grid>
                </Grid>
             </Grid>


               {/* tabs */}
               <Box sx={{ width: '100%', typography: 'body1' , }}>

                    <TabContext value={value}>
                        <Paper sx={{mx:'24px'}}>
                            <Box sx={{
                                borderBottom: 0, borderColor: '#e3e8efad' ,
                                //  background:'rgb(30, 136, 229)' , 
                                borderRadius:'10px' , padding:'10px'}}>
                                  
                                <TabLabel handleChange={handleChange}/>
                            </Box>
                        </Paper>
                        <TabPanel  value="1" sx={{padding:'24px 24px 0px 24px'}}> <QuickTips /> </TabPanel>
                        <TabPanel value="2"></TabPanel>
                        <TabPanel value="3"> <MakeInvoiceVideo />  </TabPanel>
                        <TabPanel value="4"></TabPanel>
                    </TabContext>

                </Box>
           </Grid>
       </Paper> 

   </>
  )
}

export default NeedSupport;





