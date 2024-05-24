import React from 'react'
import{Paper,Grid,Typography,Box,Tab,useMediaQuery}  from '@mui/material'
// import { gridSpacing } from 'store/constant';
import {TabContext,TabList,TabPanel } from '@mui/lab';
import { HeadingCss } from 'components/dashboard-css/CommonCss'
import NewArrivals from './NewArrivals';
import PopularBook from './PopularBook';
// import NewArrivals from './NewArrivals';


const LastestUpdatesOfBooks = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  


  return (
    <>
      <Paper variant="elevation" elevation="3">
      <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Popular & New Arrivals</Typography>
        </Grid>
        

        {/* list  */}
        <Grid sx={{display:"flex",height:"410px"}}>
        <Box sx={{ width: '100%', typography: 'body1',padding:isMobile?"0px":"10px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>


          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="New Arrivals" value="1"  sx={{color:"black",paddingBottom:"0px"}}/>
            <Tab label="Popular Books" value="2"   sx={{color:"black",paddingBottom:"0px"}}/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{padding:'4px 0px 0px 0px'}}>
          <NewArrivals/>
        </TabPanel>
        <TabPanel value="2" sx={{padding:'4px 0px 0px 0px'}}><PopularBook/></TabPanel>
      </TabContext>
    </Box>
        </Grid>
      </Paper>
    </>
  )
}

export default LastestUpdatesOfBooks
