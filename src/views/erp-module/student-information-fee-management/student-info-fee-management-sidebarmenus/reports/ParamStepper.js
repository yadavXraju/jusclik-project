import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box} from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import BottomNavbar from 'views/common-section/BottomNavbar';

const TabsName = ({ name, number }) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', gap: '5px', alignItems: "center" }}>
        <span style={{
         display: 'inline-block',
         width: '23px',
         height: '23px',
         borderRadius: '50%',
         color:'rgb(52, 64, 64)',
         textAlign: 'center',
         lineHeight: '22px',
         fontSize: '15px',
         fontWeight: 'bold',
         border: '1px solid rgb(221, 221, 221)',
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

  const handleChange = (event,newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{width: "100%",display: 'flex',flexDirection: "column",marginTop: "25px" }}>
        <Tabs
          orientation="horizontal"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{alignItems:"flex-start", borderBottom: "1px solid #eef2f6", bgcolor: 'background.paper', display: "flex" }}
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
            sx={{width: "100%",padding:"20px 20px 20px 20px",height:"600px",bgcolor: 'background.paper', borderRadius: "10px", overflowY: "auto" }}
          >
            <tab.component />
          </TabPanel>
        ))}
      </Box >
      <BottomNavbar tabPageLength={tabPage.length}  value={value} setValue={setValue}/>
    </>
  );
};

export default SetupTabs;
