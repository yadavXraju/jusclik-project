// sangeeta

import * as React from 'react';
import { Box, Tab, Paper, useMediaQuery, useTheme,  IconButton } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import Performance from './Performance';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MainCard from 'components/ui/cards/MainCard';
export default function BasicTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const res2560 = useMediaQuery('(min-width:2000px)')

  const [value, setValue] = React.useState('1');
  let rem = null;
  if(res2560) {
    rem='17rem'

  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainCard>
      <Paper>
      <Box sx={{paddingLeft:rem , paddingRight:rem}}>
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
              <Tab label="Unit Test-1" value="1" sx={{margin:"5px 15px"}} />
              <Tab label="Half Yearly" value="2"  sx={{margin:"5px 15px"}}/>
              <Tab label="Unit Test-2" value="3"  sx={{margin:"5px 15px"}} />
              <Tab label="Annual Exam" value="4" sx={{margin:"5px 15px"}} />
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
            
          </TabPanel>
        </TabContext>
      </Box>
    </Paper>
    </MainCard>
  );
}
