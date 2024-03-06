import React from 'react'
import { Box, Paper, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import StudentDetails from './student-details';
// import StepperForm from './student-details/data-forms/StepperForm';
const StudentDataTab = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div>
      <Paper variant="elevation" elevation="">
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext  value={value}>
                <Box  sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Overview" value="1" />
                  <Tab label="Fee detail" value="2" />
                  <Tab label="Transport detail" value="3" />
                  <Tab label="" value="4" />
                  <Tab label="" value="5" />

                </TabList>
                </Box>
                <TabPanel value='1'>
                 <StudentDetails/>
                </TabPanel>
                <TabPanel value='2'>Father detail</TabPanel>
                <TabPanel value='3'>Mother detail</TabPanel>
                <TabPanel value='3'>Fee Detail</TabPanel>
                <TabPanel value='3'>Transport- detail</TabPanel>

            </TabContext>
                
        </Box>
      </Paper>
     
    </div>
  )
}

export default StudentDataTab
