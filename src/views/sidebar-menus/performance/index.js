import * as React from 'react';
import { Box, Tab, Paper, useMediaQuery, useTheme,  IconButton } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import Performance from './performanceComponent/Performance';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function BasicTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
  );
}
