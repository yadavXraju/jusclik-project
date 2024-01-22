import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Leave from './requestcomponent/Leave';
import Transportation from './requestcomponent/Transportation';
import PersonalDetail from './requestcomponent/Personal';
import ChangeSection from './requestcomponent/ChangeSection';
import InterBranchTransfer from './requestcomponent/InterBranchTransfer';
import Widthrawal from './requestcomponent/Widthrawal';
import BookReservation from './requestcomponent/BookReservation';
function Request() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
   
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Leave" value="1" />
          <Tab label="Transport" value="2" />
          <Tab label="Personal Detail" value="3" />
          <Tab label="Change Section" value="4" />
          <Tab label="Widthrawal" value="5" />
          <Tab label="Book Reservation" value="6" />
          <Tab label="Inter Branch Transfer" value="7" />

        </TabList>
      </Box>
      <TabPanel value="1">
        <Leave/>
      </TabPanel>
      <TabPanel value="2">
        <Transportation/>
      </TabPanel>
      <TabPanel value="3">
        <PersonalDetail/>
      </TabPanel>
      <TabPanel value="4">
        <ChangeSection/>
      </TabPanel>
      <TabPanel value="5">
  <Widthrawal/>
      </TabPanel>
      <TabPanel value="6">
        <BookReservation/>
      </TabPanel>
      <TabPanel value="7">
      <InterBranchTransfer/>
      </TabPanel>
    </TabContext>
  </Box>
  )
}

export default Request
