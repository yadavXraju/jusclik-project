import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Tabs,Tab,Typography,Box,Button,Drawer} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import useDrawer from 'hooks/useDrawer';
import ParamSearchBar from 'views/common-section/ParamSearchBar';
import MergerButton from './tabPages/wing/wingDrawer';
import {
  Class,
  Section,
  House,
  ChequeCategory,
  OtherCategory,
  ConcessionCategory,
  InvoiceType,
  FeeGroup,
  FeeHead,
  TransportSlab,
  BounceEmailNotification,
  StudentDocuments,
  Currency,
  LeftReason,
  GatePassAccompaniedBy,
  GatePassReason,
  Nationality,
  Wing,
  TransportRoute,
  TransportStop
} from './tabPages';

import 'assets/scss/tabscustomization.css';


const TabPanel=(props)=>{
  const { children, value, index, ...other } = props;
  return (
    <Box
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
    </Box>
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
  "Wing",
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
  "Transport Route",
  "Transport Stop",
  "Bounce Email Notification Reason",
  "Student Documents",
  "Currency",
  "Left Reasons",
  "Gate pass Reasons",
  "Gate pass Accompanied By",
  "Nationality {Restricted}"
];



const SetupTabs = () => {
  const [value, setValue] = useState(0);
  const { anchor, toggleDrawer } = useDrawer();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "97%", alignItems: "center" }}>
        <Typography variant="p" sx={{ marginTop: "-20px", marginLeft: "20px" }}>
          Setup System Data  as application setting to manage all application settings
        </Typography>
        <Button onClick={toggleDrawer('right', true)} sx={{ margin: "0px 0px 20px 60px", height: "40px", color: '#fff' }} variant="contained" startIcon={<AddIcon />}>Add Data</Button>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', background: "none" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, height: "auto", minWidth: "300px !important", bgcolor: 'background.paper', border: "1px solid #EEEDEB", borderRadius: "10px" }}
          className="testf"
        >
          <ParamSearchBar />
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab} {...a11yProps(index)} sx={{ borderBottom: "1px solid #eef2f6", width: ' 100%', alignItems: "baseline" }} className="testf" />
          ))}
        </Tabs>
        <TabPanel value={value} index={0} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px", justifyContent: "flex-end" }}>
          <Wing />
          <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
            <MergerButton />
          </Drawer>
        </TabPanel>
        <TabPanel value={value} index={1} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <Class />
        </TabPanel>
        <TabPanel value={value} index={2} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <Section />
        </TabPanel>
        <TabPanel value={value} index={3} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <House />
        </TabPanel>
        <TabPanel value={value} index={4} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <ChequeCategory />
        </TabPanel>
        <TabPanel value={value} index={5} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <OtherCategory />
        </TabPanel>
        <TabPanel value={value} index={6} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <ConcessionCategory />
        </TabPanel>
        <TabPanel value={value} index={7} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <InvoiceType />
        </TabPanel>
        <TabPanel value={value} index={8} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <FeeGroup />
        </TabPanel>
        <TabPanel value={value} index={9} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <FeeHead />
        </TabPanel>
        <TabPanel value={value} index={10} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <TransportSlab />
        </TabPanel>
        <TabPanel value={value} index={11} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <TransportRoute />
        </TabPanel>
        <TabPanel value={value} index={12} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <TransportStop />
        </TabPanel>
        <TabPanel value={value} index={13} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <BounceEmailNotification />
        </TabPanel>
        <TabPanel value={value} index={14} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <StudentDocuments />
        </TabPanel>
        <TabPanel value={value} index={15} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <Currency />
        </TabPanel>
        <TabPanel value={value} index={16} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <LeftReason />
        </TabPanel>
        <TabPanel value={value} index={17} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <GatePassReason />
        </TabPanel>
        <TabPanel value={value} index={18} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <GatePassAccompaniedBy />
        </TabPanel>
        <TabPanel value={value} index={18} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px" }}>
          <Nationality />
        </TabPanel>
      </Box>
    </>
  );
}


export default SetupTabs;