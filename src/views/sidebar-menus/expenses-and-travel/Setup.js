import * as React from 'react';
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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item 1" {...a11yProps(0)} />
        <Tab label="Item 2" {...a11yProps(1)} />
        <Tab label="Item 3" {...a11yProps(2)} />
        <Tab label="Item 4" {...a11yProps(3)} />
        <Tab label="Item 5" {...a11yProps(4)} />
        <Tab label="Item 6" {...a11yProps(5)} />
        <Tab label="Item 7" {...a11yProps(6)} />
        <Tab label="Item 8" {...a11yProps(7)} />
        <Tab label="Item 9" {...a11yProps(8)} />
        <Tab label="Item 10" {...a11yProps(9)} />
        <Tab label="Item 11" {...a11yProps(10)} />
        <Tab label="Item 12" {...a11yProps(11)} />
        <Tab label="Item 13" {...a11yProps(12)} />
        <Tab label="Item 14" {...a11yProps(13)} />
        <Tab label="Item 15" {...a11yProps(14)} />
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
      <TabPanel value={value} index={14}>
        Gate pass Accompanied By
      </TabPanel>
    </Box>
  );
}

