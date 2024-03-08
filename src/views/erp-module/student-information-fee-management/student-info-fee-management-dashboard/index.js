import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import { Paper , Box } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from './tabs/TabLabel';
import DashboardContent from './dashboard';
import DashboardPayRoll from 'views/common-section/dashboard-payroll';




const Dashboard =()=> {

  // for active first item when page load
  const [value, setValue] = useState('1')


  // for change the setvalue into newvalue
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1' }}>

          <TabContext value={value}>
          <Paper sx={{mx:'24px'}}>
            <Box sx={{ borderBottom: 0, borderColor: '#e3e8efad' , background:'rgb(30, 136, 229)' , borderRadius:'10px' , padding:'10px'}}>
              <TabLabel handleChange={handleChange}/>
            </Box>
          </Paper>
            <TabPanel value="1"><DashboardContent/></TabPanel>
            <TabPanel value="2"><DashboardPayRoll /> </TabPanel>
            <TabPanel value="3"></TabPanel>
            <TabPanel value="4"></TabPanel>
          </TabContext>
  

    </Box>
    </>
  );
}

export default Dashboard