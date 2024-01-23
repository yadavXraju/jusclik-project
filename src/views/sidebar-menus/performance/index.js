import * as React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UrlPage from 'views/navigation-for-pages';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

=======
import { Box, Tab, Paper, useMediaQuery, useTheme,  IconButton } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import Performance from './performanceComponent/Performance';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
>>>>>>> 05f6e916d47430cb13fe9efc34af79afe07a3fc6
export default function BasicTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<<<<<<< HEAD
    <>
      <UrlPage/>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label=" Circulars" {...a11yProps(0)} />
            <Tab label="School Notice" {...a11yProps(1)} />
            <Tab label="Syllabus" {...a11yProps(2)} />
            <Tab label="Result Circulars" {...a11yProps(3)} />
            <Tab label="All Circulars" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        Circulars
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        School Notice
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        Syllabus
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
        Result Circulars
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
        All Circulars
        </CustomTabPanel>
      </Box>
    </>
=======
    <Paper>
      <Box sx={{ width: '100%' }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant={isMobile ? 'scrollable' : 'fullWidth'}
              scrollButtons={isMobile ? 'auto' : 'off'}
              action={(actions) => {
                return (
                  <React.Fragment>
                    {isMobile && (
                      <IconButton
                        {...actions}
                        component="div"
                        icon={<KeyboardArrowLeft />}
                        sx={{ color: 'primary.main' }}
                      />
                    )}
                    <TabList {...actions} />
                    {isMobile && (
                      <IconButton
                        {...actions}
                        component="div"
                        icon={<ArrowRightAltIcon />}
                        sx={{ color: 'primary.main' }}
                      />
                    )}
                  </React.Fragment>
                );
              }}
            >
              <Tab label="Unit Test-1" value="1" />
              <Tab label="Half Yearly" value="2" />
              <Tab label="Unit Test-2" value="3" />
              <Tab label="Annual Exam" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Performance />
          </TabPanel>
          <TabPanel value="2">
            <Performance />
          </TabPanel>
          <TabPanel value="3">
            <Performance />
          </TabPanel>
          <TabPanel value="4">
            <Performance />
          </TabPanel>
        </TabContext>
      </Box>
    </Paper>
>>>>>>> 05f6e916d47430cb13fe9efc34af79afe07a3fc6
  );
}
