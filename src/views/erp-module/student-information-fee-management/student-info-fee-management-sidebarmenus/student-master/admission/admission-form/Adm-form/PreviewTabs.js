import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box p={1}>
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

// =========== Function for hendle tabs index ============
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function PreviewTabs() {
  const [value, setValue] = React.useState(0);

  // =========== Function for hendle tabs click ============
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} variant="scrollable" onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Other Details" {...a11yProps(0)} />
          <Tab label="Address" {...a11yProps(1)} />
          <Tab label="Contact Person" {...a11yProps(2)} />
          <Tab label="Custom Fields" {...a11yProps(3)} />
          <Tab label="Remarks" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <>
          <Box p={2}>
            <Box p={2}>
              <Typography p={0.7} variant="h4">
                Other Details
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Family Id</span> - F847584
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Nationality</span> - Indian
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Religion</span> - Hindu
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>House</span> - Green
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Blood Group</span> - O+
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>SRN No.</span> - LKJH8974398
              </Typography>
            </Box>
          </Box>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <>
          <Box p={2}>
            <Box p={2}>
              <Typography p={0.7} variant="h4">
                Address
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Address</span> - Dwarka, Delhi
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Country/Region</span> - India
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>City</span> - Delhi
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>state</span> - Delhi
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Zip Code</span> - 857473
              </Typography>
            </Box>
          </Box>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <>
          <Box p={2}>
            <Box p={2}>
              <Typography p={0.7} variant="h4">
                Contact Person
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Name</span> - Mr. Subash
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Relation</span> - Father
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Mobile</span> - 848493734
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Email</span> - abc@gmail.com
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Education</span> - B.Sc
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Company</span> - abc Company
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Designation</span> - Manager
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Address</span> - Delhi
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Aadhaar No.</span> - 12456789345
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>PEN</span> - AZCIV89345
              </Typography>
            </Box>
          </Box>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        4
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        5
      </CustomTabPanel>
    </Box>
  );
}
