import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import ParamSearchBar from 'views/common-section/ParamSearchBar';
import 'assets/scss/tabscustomization.css';
import { useEffect } from 'react';

const defaultStyles = {
  tabPanel: {
    width: "100%",
    bgcolor: 'background.paper',
    marginLeft: "40px",
    borderRadius: "10px",
    overflowX: "auto"
  },
  tabs: {
    borderRight: 1,
    height: "auto",
    minWidth: "300px !important",
    bgcolor: 'background.paper',
    border: "1px solid #EEEDEB",
    borderRadius: "10px"
  }
};

const TabPanel = (props) => {
  const { children, value, index, styles, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{ ...defaultStyles.tabPanel, ...styles }}
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
  styles: PropTypes.object
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const SetupTabs = (props) => {
  const { tabPage, selectedTab, tabsStyles, tabPanelStyles,rootStyle } = props;
  const [value, setValue] = useState(selectedTab || 0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterData = tabPage.filter((tab) => tab.name.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    if (selectedTab !== undefined && selectedTab !== value)
      setValue(selectedTab);
  }, [selectedTab]);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', background: "none",...rootStyle }} className="scrollbar">
        <Box >
          <ParamSearchBar value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} />
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ ...defaultStyles.tabs, ...tabsStyles }}
          >
            {filterData && filterData.map((tab, index) => (
              <Tab key={tab?.id} label={tab.name} {...a11yProps(index)} sx={{ borderBottom: "1px solid #eef2f6", width: ' 100%', alignItems: "baseline"}}  className="heelo1" />
            ))}
          </Tabs>
        </Box>
        {
          filterData && filterData.map((tab, index) => {
            return <TabPanel  key={tab?.id} value={value} index={index} sx={{...defaultStyles.tabPanel,...tabPanelStyles, '& > .MuiBox-root':{
              padding:'0',
            }}}
            className="scrollbar">
              <tab.component  {...tab.props} />
            </TabPanel>
          })
        }
      </Box >
    </>
  );
}

SetupTabs.defaultProps = {
  tabsStyles: {},
  tabPanelStyles: {},
  rootStyle:{}
};

SetupTabs.propTypes = {
  tabPage: PropTypes.array.isRequired,
  selectedTab: PropTypes.number,
  tabsStyles: PropTypes.object,
  tabPanelStyles: PropTypes.object
};

export default SetupTabs;



