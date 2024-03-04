import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Class from './tabPages/class';
import Section from './tabPages/Section';
import House from './tabPages/house';
import ChequeCategory from './tabPages/cheque-category';
import OtherCategory from './tabPages/other-category';
import ConcessionCategory from './tabPages/concession-category';
import InvoiceType from './tabPages/invoice-type';
import FeeGroup from './tabPages/fee-group';
import FeeHead from './tabPages/fee-head';
import TransportSlab from './tabPages/transport-slab';
import BounceEmailNotification from './tabPages/bounce-email-notification-reason';
import StudentDocuments from './tabPages/student-documents';
import Currency from './tabPages/currency';
import LeftReason from './tabPages/left-reason';
import GatePassAccompaniedBy from './tabPages/gate-pass-accompanied-by';
import GatePassReason from './tabPages/gate-pass-reasons';

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
          <Class />
      </TabPanel>
      <TabPanel value={value} index={1}>
         <Section />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <House />
      </TabPanel>
      <TabPanel value={value} index={3}>
       <ChequeCategory />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OtherCategory />
      </TabPanel>
      <TabPanel value={value} index={5}>
       <ConcessionCategory />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <InvoiceType />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <FeeGroup />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <FeeHead />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <TransportSlab />
      </TabPanel>
      <TabPanel value={value} index={10}>
       <BounceEmailNotification />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <StudentDocuments/>
      </TabPanel>
      <TabPanel value={value} index={12}>
        <Currency />
      </TabPanel>
      <TabPanel value={value} index={13}>
        <LeftReason/>
      </TabPanel>
      <TabPanel value={value} index={14}>
       <GatePassReason />
      </TabPanel>
      <TabPanel value={value} index={15}>
       <GatePassAccompaniedBy />
      </TabPanel>
    </Box>
  );
}
