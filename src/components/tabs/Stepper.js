// @page owner-Tarun Pandey
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import TabsName from './TabStep';


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
  customTabsStyle,
  customtabWrapper = {},
  customtabSytle = {},
  customtabPanelStyle = {},
  numberShow = true,
  iconShow = true,
  customBoxStyle={},
  customIconStyle={},
  selectedTab,
  value,
  handleChange
}) => {
  const lastIndex = tabPage.length - 1;
  const style = {
    tabWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: orientation=='vertical'?'row':'column',
      marginTop: '25px',
    },
    TabsStyle:{
      borderBottom:'1px solid rgb(227, 232, 239)',
   },
    tabStyle: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:'15px',
      width: 'fit-content',
      paddingLeft: '0px',
    },
    tabPanel: {
      width: '100%',
      padding: '24px',
      bgcolor: 'background.paper',
      borderRadius: '10px',
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
            ...style?.TabsStyle,
            ...customTabsStyle,
            '& .Mui-selected .MuiTypography-root':{
              color:'#2196f3',
            },
            '& .Mui-selected .number-bg': {
              background: '#2196f3',
              color: '#fff',
              // color:'#2196f3',
              '& ~ .MuiTypography-root':{
                color:'#2196f3',
                background:'none',
              },
            },
            '& .Mui-selected': {
              ...selectedTab
            }
          }}
        >
          {tabPage.map((tab, index) => (
            <Tab
              key={tab?.id}
              label={<TabsName name={tab.name} 
              number={index} numberShow={numberShow} 
              iconShow={iconShow} lastIndex={lastIndex} 
              selectedValue={value}
              />}
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
        {tabPage&&tabPage.map((tab, index) => (
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
    </>
  );
};

export default SetupTabs;
