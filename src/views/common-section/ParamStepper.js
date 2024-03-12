import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import 'assets/scss/tabscustomization.css';


const TabPanel = (props) => {
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

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const SetupTabs = ({tabPage}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{width:"100%",display:'flex',flexDirection:"column",marginTop:"25px",marginLeft:"80px"}}>
          <Tabs
            orientation="horizental"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{borderBottom:"1px solid #eef2f6",borderBottomWidth:"1px",width:"900px",bgcolor:'background.paper' }}
          >
            {tabPage.map((tab, index) => (
              <Tab key={tab?.id} label={tab.name} {...a11yProps(index)} sx={{width:"200px",borderBottom: "1px solid #eef2f6", alignItems: "baseline" }} className="testf" />
            ))}
          </Tabs>
        {
          tabPage.map((tab, index) => {
            return <TabPanel key={tab?.id} value={value} index={index} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px", overflowX: "auto" }}>
              <tab.component   />
            </TabPanel>
          })
        }
      </Box >
    </>
  );
}


export default SetupTabs;

