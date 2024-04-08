import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import useDrawer from 'hooks/useDrawer';
import ParamSearchBar from 'views/common-section/ParamSearchBar';
import {
Meeting
,Submission
,ParentsDiscussion
,Admission} from './Tabpages'
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


const Purpose = () => {
  const [value, setValue] = useState(0);
  const { anchor, toggleDrawer } = useDrawer();
  const [searchTerm, setSearchTerm] = useState('');
  const tabPage = [
    {
      id: 1,
      name: "Meeting",
      component: Meeting,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 2,
      name: "Submission",
      component: Submission,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    }, {
      id: 3,
      name: "ParentsDiscussion",
      component: ParentsDiscussion,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 4,
      name: "Admission",
      component: Admission,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },


  ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const filterData = tabPage.filter((tab) => tab.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "97%", alignItems: "center" }}>
        <Typography variant="p" sx={{ marginTop: "-20px", marginLeft: "20px" }}>
        Purpose
        </Typography>
        <Button onClick={toggleDrawer('right', true)} sx={{ margin: "0px 0px 20px 60px", height: "40px", color: '#fff' }} variant="contained" startIcon={<AddIcon />}>Add Field</Button>
      </Box>
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
            className="testf"
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


export default Purpose;

