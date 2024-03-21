import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import Typography from '@mui/material/Typography';
//import Box from '@mui/material/Box';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Divider } from '@mui/material';

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
          {/* ================ Render Other Details tab content ============== */}
          <Box p={2}>
            <Typography pb={1} variant="h4" gutterBottom>
              Other Details
            </Typography>
            <Divider />
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Family Id</TableCell>
                    <TableCell sx={{padding:'10px'}}>F847584</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Nationality</TableCell>
                    <TableCell sx={{padding:'10px'}}>Indian</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Religion</TableCell>
                    <TableCell sx={{padding:'10px'}}>Hindu</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>House</TableCell>
                    <TableCell sx={{padding:'10px'}}>Green</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Blood Group</TableCell>
                    <TableCell sx={{padding:'10px'}}>O+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>SRN No.</TableCell>
                    <TableCell sx={{padding:'10px'}}>LKJH8974398</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <>
        {/* ================ Render Address tab content ============== */}
        <Box p={2}>
            <Typography pb={1} variant="h4" gutterBottom>
              Address
            </Typography>
            <Divider />
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Address</TableCell>
                    <TableCell sx={{padding:'10px'}}>Dwarka, Delhi</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Country/Region</TableCell>
                    <TableCell sx={{padding:'10px'}}>India</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>City</TableCell>
                    <TableCell sx={{padding:'10px'}}>Delhi</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>state</TableCell>
                    <TableCell sx={{padding:'10px'}}>Delhi</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Zip Code</TableCell>
                    <TableCell sx={{padding:'10px'}}>857473</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <>
        {/* ================ Render Contact Person tab content ============== */}
        <Box p={2}>
            <Typography pb={1} variant="h4" gutterBottom>
            Contact Person
            </Typography>
            <Divider />
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Name</TableCell>
                    <TableCell sx={{padding:'10px'}}>Mr. Subash</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Relation</TableCell>
                    <TableCell sx={{padding:'10px'}}>Father</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Mobile</TableCell>
                    <TableCell sx={{padding:'10px'}}>848493734</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Email</TableCell>
                    <TableCell sx={{padding:'10px'}}>abc@gmail.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Education</TableCell>
                    <TableCell sx={{padding:'10px'}}>B.Sc</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Company</TableCell>
                    <TableCell sx={{padding:'10px'}}>abc Company</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Designation</TableCell>
                    <TableCell sx={{padding:'10px'}}>Manager</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Address</TableCell>
                    <TableCell sx={{padding:'10px'}}>Delhi</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>Aadhaar No.</TableCell>
                    <TableCell sx={{padding:'10px'}}>12456789345</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{padding:'10px', fontWeight:'600'}}>PEN</TableCell>
                    <TableCell sx={{padding:'10px'}}>AZCIV89345</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          {/* <Box p={2}>
            <Box p={2}>
              <Typography p={0.7} variant="h4">
                Contact Person
              </Typography>
              <Typography sx={{ '&:hover': { backgroundColor: '#cbc7c73d' } }} p={0.7} variant="body2">
                <span style={{ fontWeight: '500' }}>Name</span> - Mr. Subash
              </Typography>
            </Box>
          </Box> */}
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
