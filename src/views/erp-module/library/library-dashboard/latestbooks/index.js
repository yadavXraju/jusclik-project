import React from 'react'
import{Paper,Grid,Typography,Box,Tab}  from '@mui/material'
// import { gridSpacing } from 'store/constant';
import {TabContext,TabList,TabPanel } from '@mui/lab';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import NewArrivals from './NewArrivals';


const LastestUpdatesOfBooks = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    const newArrivalsData = [
        { id: 1, name: 'The New Story 1', date: '15-03-2024', author: 'John Doe' },
        { id: 2, name: 'The New Story 2', date: '16-03-2024', author: 'Jane Smith' },
        { id: 3, name: 'The New Story 3', date: '17-03-2024', author: 'Alex Johnson' },
        { id: 4, name: 'The New Story 4', date: '18-03-2024', author: 'Emily Davis' },
        { id: 5, name: 'The New Story 5', date: '19-03-2024', author: 'Michael Wilson' },
      
      ];
  return (
    <>
      <Paper variant="elevation" elevation="3">
      <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Popular & New Arrivals</Typography>
        </Grid>
        

        {/* list  */}
        <Grid sx={{display:"flex"}}>
        <Box sx={{ width: '100%', typography: 'body1',padding:"10px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>


          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="New Arrivals" value="1"  sx={{color:"black",paddingBottom:"0px"}}/>
            <Tab label="Popluar Books" value="2"   sx={{color:"black",paddingBottom:"0px"}}/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{padding:'24px 0px 0px 0px'}}><NewArrivals data={newArrivalsData}/></TabPanel>
        <TabPanel value="2" sx={{padding:'24px 24px 0px 24px'}}>Item Two</TabPanel>
      </TabContext>
    </Box>
        </Grid>
      </Paper>
    </>
  )
}

export default LastestUpdatesOfBooks
