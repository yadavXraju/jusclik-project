import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MainCard from 'components/ui/cards/MainCard';
import PostSupportContent from './PostSupportContent';
// import RequestACall from './RequestACall';
import RequestAMeeting from './RequestAMeeting';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
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
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <MainCard >
        <Typography variant='h3'>Get in touch with us.</Typography>
      </MainCard>
      <MainCard>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Contact Support" {...a11yProps(0)} />
              {/* <Tab label="  Request a Call" {...a11yProps(1)} /> */}
              <Tab label=" Schedule a Meeting" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <PostSupportContent />
          </CustomTabPanel>
          {/* <CustomTabPanel value={value} index={1}>
            <RequestACall/>
          </CustomTabPanel> */}
          <CustomTabPanel value={value} index={1}>
           <RequestAMeeting/>
          </CustomTabPanel>
        </Box>
      </MainCard>
    </>
  );
}
