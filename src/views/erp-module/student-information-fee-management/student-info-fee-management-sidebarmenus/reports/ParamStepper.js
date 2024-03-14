import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Paper, Button } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const TabsName = ({ name, number }) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', gap: '5px', alignItems: "center" }}>
        <span style={{
          display: 'inline-block',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          color: '#344040',
          textAlign: 'center',
          lineHeight: '25px',
          fontSize: '16px',
          fontWeight: 'bold',
          border: '1px solid #ddd',
          boxSizing: 'border-box',
        }}>{number + 1}</span>
        <Typography>{name}</Typography>
      </Box>
      <ChevronRightOutlinedIcon sx={{ marginTop: "2px" }} />
    </Box>
  );
};

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
};

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
};

const SetupTabs = ({ tabPage }) => {
  const [value, setValue] = useState(0);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handlePrev = () => {
    handleChange(Math.max(0, value - 1));
  };

  const handleNext = () => {
    handleChange(Math.min(tabPage.length - 1, value + 1));
  };

  return (
    <>
      <Box sx={{ width: "100%", display: 'flex', flexDirection: "column", marginTop: "25px" }}>
        <Tabs
          orientation="horizontal"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderBottom: "1px solid #eef2f6", width: "1000px", bgcolor: 'background.paper', display: "flex" }}
        >
          {tabPage.map((tab, index) => (
            <Tab
              key={tab?.id}
              label={<TabsName name={tab.name} number={index} />}
              {...a11yProps(index)}
              sx={{ width: "250px", borderBottom: "1px solid #eef2f6", alignItems: "baseline" }}
            />
          ))}
        </Tabs>
        {tabPage.map((tab, index) => (
          <TabPanel
            key={tab?.id}
            value={value}
            index={index}
            sx={{ width: "100%", bgcolor: 'background.paper', borderRadius: "10px", overflowX: "auto" }}
          >
            <tab.component />
          </TabPanel>
        ))}
        <Paper sx={{marginLeft:"-5px",alginItems: "center", display: "flex", width: "100%", gap: "20px", backgroundColor: "#fafafa", height: "60px", borderBottom: '1px solid #eee', borderTop: '1px solid #eee', position: "fixed", bottom: "90px" }}>
          <Box sx={{display: "flex",gap:"20px",marginLeft: "5%"}}>
            <Button variant="contained" sx={{ height: "38px",marginTop: "10px", width: "100px" }} onClick={handlePrev}>
              Previous
            </Button>
            <Button variant="contained" sx={{ height: "38px", marginTop: "10px", width: "100px" }} onClick={handleNext}>
              Next
            </Button>
          </Box>
          <Button variant="outlined" sx={{ height: "38px", marginTop: "10px", width: "100px" }}>
            Cancel
          </Button>
        </Paper>
      </Box >
    </>
  );
};

export default SetupTabs;
