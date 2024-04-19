import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box} from '@mui/material';
import ParamSearchBar from 'views/common-section/ParamSearchBar';
import 'assets/scss/tabscustomization.css';
import { useEffect } from 'react';


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


const SetupTabs = (props) => {
  const [value, setValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterData = props.tabPage.filter((tab) => tab.name.toLowerCase().includes(searchTerm.toLowerCase()));
  useEffect(()=>{
      if(props.selectedTab)
      setValue(props.selectedTab)
  },[value])

  return (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', background: "none" }}>
        <Box>
          <ParamSearchBar value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} />
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, height: "auto", minWidth: "300px !important", bgcolor: 'background.paper', border: "1px solid #EEEDEB", borderRadius: "10px" }}
          >
            {filterData.map((tab, index) => (
              <Tab key={tab?.id} label={tab.name} {...a11yProps(index)} sx={{ borderBottom: "1px solid #eef2f6", width: ' 100%', alignItems: "baseline" }} className="testf" />
            ))}
          </Tabs>
        </Box>
        {
          filterData.map((tab, index) => {
            return <TabPanel key={tab?.id} value={value} index={index} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px", overflowX: "auto" }}>
              <tab.component  {...tab.props} />
            </TabPanel>
          })
        }
      </Box >
    </>
  );
}


export default SetupTabs;

