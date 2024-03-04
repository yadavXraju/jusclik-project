import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const tabs = [
  "Class",
  "Section",
  "House",
  "Cheque Category",
  "Other Category",
  "Concession Category",
  "Invoice Type",
  "Fee Group",
  "Fee Head",
  "Transport Slab",
  "Bounce Email Notification Reason",
  "Student Documents",
  "Currency",
  "Left Reasons",
  "Gate pass Reasons",
  "Gate pass Accompanied By"
];

export default function SetupTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} {...a11yProps(index)} />
        ))}
      </Tabs>

      <TabPanel value={value} index={0}>
        Class
      </TabPanel>
      <TabPanel value={value} index={1}>
        Section
      </TabPanel>
      <TabPanel value={value} index={2}>
        House
      </TabPanel>
      <TabPanel value={value} index={3}>
        Cheque Category
      </TabPanel>
      <TabPanel value={value} index={4}>
        Other Category
      </TabPanel>
      <TabPanel value={value} index={5}>
        Concession Category
      </TabPanel>
      <TabPanel value={value} index={6}>
        Inviice Type
      </TabPanel>
      <TabPanel value={value} index={7}>
        Fee Group
      </TabPanel>
      <TabPanel value={value} index={8}>
        Fee Head
      </TabPanel>
      <TabPanel value={value} index={9}>
        Transport Slab
      </TabPanel>
      <TabPanel value={value} index={10}>
        Bounce Email Notification Reason
      </TabPanel>
      <TabPanel value={value} index={11}>
        Student Documents
      </TabPanel>
      <TabPanel value={value} index={12}>
        Currency
      </TabPanel>
      <TabPanel value={value} index={13}>
        Left Reasons
      </TabPanel>
      <TabPanel value={value} index={14}>
        Gate pass Reasons
      </TabPanel>
      <TabPanel value={value} index={15}>
        Gate pass Accompanied By
      </TabPanel>

    </Box>
  );
}
