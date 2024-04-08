import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box} from '@mui/material';
import BottomNavbar from 'views/common-section/BottomNavbar';
import TabsName from './ParamTabStep';


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

const SetupTabs = ({ tabPage , orientation='horizontal', variant='scrollable' , customStyleTabs , customtabWrapper={},customtabSytle={},customtabPanelStyle={} , numberShow=true , iconShow=true}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  const style={
       tabWrapper:{
        width: "100%",display: 'flex',flexDirection: "column",marginTop: "25px"
       },
      tabStyle:{
        width:"fit-content",borderBottom: "1px solid #eef2f6", alignItems: "baseline",paddingLeft:'0px',marginRight:"40px" 
      },
      tabPanel:{
        width: "100%",padding:"0px 20px 20px 0px",bgcolor: 'background.paper', borderRadius: "10px",overflowY: "auto",height: 'calc(100vh - 250px)'
      }
  }

  return (
    <>
      <Box sx={{...style?.tabWrapper,...customtabWrapper}}>
        <Tabs
          orientation={orientation}
          variant={variant}
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{...customStyleTabs , '& .Mui-selected .number-bg':{
            background:'#2196f3',
            color:'#fff',
          }}}
        >
          {tabPage.map((tab, index) => (
            <Tab
              key={tab?.id}
             
              label={<TabsName name={tab.name} number={index} numberShow={numberShow} iconShow={iconShow}/>}
              {...a11yProps(index)}
              sx={{...style?.tabStyle,...customtabSytle , '& .MuiTypography-body1':{
                fontSize:'15px',
                fontWeight:'500',
              }}}
               
            />
          ))}
        </Tabs>
        {tabPage.map((tab, index) => (
          <TabPanel
            key={tab?.id}
            value={value}
            index={index}
            sx={{...style?.tabPanel,...customtabPanelStyle , '& .MuiBox-root':{
              padding:'0',
            }}} className="Scrollbar">
            <tab.component />
          </TabPanel>
        ))}
      </Box >
      <BottomNavbar tabPageLength={tabPage.length}  value={value} setValue={setValue}/>
    </>
  );
};

export default SetupTabs;