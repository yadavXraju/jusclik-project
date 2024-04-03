// Dashboard.js
import React from 'react';
import { Box, Paper } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from 'views/erp-module/erp-common-item/tab/TabLabel';
import DashboardPayRoll from 'views/common-section/dashboard-payroll';
import PhoneIcon from '@mui/icons-material/Phone';
import useTabValue from 'views/common-section/ParamTab';
import DashboardContent from './Dashboard';


const Dashboard = () => {
  const { value, handleChange } = useTabValue('1');

  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Paper sx={{ mx: '24px', background: 'none' }}>
          <Box sx={{ 
            borderBottom: 0,
            borderColor: '#e3e8efad',
            borderRadius: '10px',
            padding: '10px',
            '& .MuiBox-root': {
              marginBottom: '10px'
            }
          }}>
            <TabLabel handleChange={handleChange} />
          </Box>
        </Paper>
        <TabPanel icon={<PhoneIcon />} value="1"><DashboardContent/></TabPanel>
        <TabPanel value="2"><DashboardPayRoll /></TabPanel>
        <TabPanel value="3"></TabPanel>
        <TabPanel value="4"></TabPanel>
      </TabContext>
    </Box>
  </>
  );
};

export default Dashboard;
