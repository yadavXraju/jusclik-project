// ======= Page Owner Vikash =========

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import TransportRouteTable from './TransportRouteTable';
import SlabTable from './SlabTable';
// import Stoppage from './Stoppage';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ padding:{xs:0 , sm:2} }}>
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

export default function RoutesAndSlabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card sx={{ padding: '16px' }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} variant="scrollable" onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Slabs" {...a11yProps(0)} />
              <Tab label="Route" {...a11yProps(1)} />
              {/* <Tab label="Stoppage" {...a11yProps(2)} /> */}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
          <SlabTable/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
           <TransportRouteTable/>
          </CustomTabPanel>
          {/* <CustomTabPanel value={value} index={2}>
          <Stoppage/>
          </CustomTabPanel> */}
        </Box>
      </Card>
    </>
  );
}
