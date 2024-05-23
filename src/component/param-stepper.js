// @page owner-Tarun Pandey
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import BottomNavbar from 'component/BottomNavbar';
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

//Tab component(Customized like Stepper)

//TabPage Structure:-
// const tabPage = [
//   {
//     id: 0,
//     name: 'Onboarding - US: 6 tasks',
//     component: Onboarding,
//     props: {
//       panelHeading: 'Onboarding - US',
//       panelSubheading: 'Onboarding for US citizens'
//     }
//   }
// ]
// Customize each tab with a name, component, and any additional props needed for tab pages.
//Show BottomNavbar: true to display the bottom Navbar



const SetupTabs = ({
  tabPage,
  component=null,
  orientation = 'horizontal',
  variant = 'scrollable',
  showBottomNav=true,
  customStyleTabs,
  customtabWrapper = {},
  customtabSytle = {},
  customtabPanelStyle = {},
  numberShow = true,
  iconShow = true,
  customBoxStyle={},
  customIconStyle={},
  selectedTab,
  nextBtnText = 'Save and Next'
}) => {
  const [value, setValue] = useState(0);
  const lastIndex = tabPage.length - 1;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    tabWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '25px',
    },
    tabStyle: {
      width: 'fit-content',
      borderBottom: '1px solid #eef2f6',
      alignItems: 'baseline',
      paddingLeft: '0px',
      marginRight: '40px',
    },
    tabPanel: {
      width: '100%',
      padding: '24px',
      bgcolor: 'background.paper',
      borderRadius: '10px',
      overflowY: 'auto',
      height: 'calc(100vh - 250px)',
    },
    boxStyle:{
      padding:"0",
    },
    iconStyle:{
      marginBottom:'0'
    }
  };

  return (
    <>
      <Box  sx={{ ...style?.tabWrapper, ...customtabWrapper }} >
        <Tabs
          orientation={orientation}
          variant={variant}
          component={component}
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            ...customStyleTabs,
            '& .Mui-selected .number-bg': {
              background: '#2196f3',
              color: '#fff',
            },
            '& .Mui-selected': {
              ...selectedTab
            }
          }}
        >
          {tabPage.map((tab, index) => (
            <Tab
              key={tab?.id}
              label={<TabsName name={tab.name} number={index} numberShow={numberShow} iconShow={iconShow} lastIndex={lastIndex}  />}
              icon={tab?.icon} 
              {...a11yProps(index)}
              sx={{
                ...style?.tabStyle,
                ...customtabSytle,
                '& .MuiTypography-body1': {
                  fontSize: '14px',
                  fontWeight: '600',
                  color:'rgb(18, 25, 38)',
                },
                '& .MuiSvgIcon-root':{
                 ...style?.iconStyle,
                 ...customIconStyle,
                }

              }}
            />
          ))}
        </Tabs>
        {tabPage.map((tab, index) => (
          <TabPanel
            key={tab?.id}
            value={value}
            index={index}
            sx={{
              ...style?.tabPanel,
              ...customtabPanelStyle,
              '& > .MuiBox-root': {
                ...style?.boxStyle,
                ...customBoxStyle,
              },
            }}
            className="Scrollbar"
          >
            <tab.component {...tab.props}/>
          </TabPanel>
        ))}
      </Box>
      {showBottomNav&&<BottomNavbar  tabPageLength={tabPage.length} value={value} setValue={setValue}   nextBtnText={nextBtnText} />}
    </>
  );
};

export default SetupTabs;
