import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import Typography from '@mui/material/Typography';
//import Box from '@mui/material/Box';
import { Box, Typography, Divider, Grid } from '@mui/material';
import Timeline from './Timeline';

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

  //const isMobile = useMediaQuery('(max-width: 767px)');

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
          <Tab label="Timeline" {...a11yProps(5)} />
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

            <Box p={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    FAMILY ID
                  </Box>
                  <Box fontSize={16}>F847584</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    NATIONALITY
                  </Box>
                  <Box fontSize={16}>Indian</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    RELIGION
                  </Box>
                  <Box fontSize={16}>Hindu</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    HOUSE
                  </Box>
                  <Box fontSize={16}>Green</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    BLOOD GROUP
                  </Box>
                  <Box fontSize={16}>O+</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    SRN No.
                  </Box>
                  <Box fontSize={16}>LKJH8974398</Box>
                </Grid>
              </Grid>
            </Box>

            {/* <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell width={isMobile ? 'auto' : '250px'} sx={{ padding: '10px', fontWeight: '600' }}>
                      Family Id
                    </TableCell>
                    <TableCell sx={{ padding: '10px' }}>F847584</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Nationality</TableCell>
                    <TableCell sx={{ padding: '10px' }}>Indian</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Religion</TableCell>
                    <TableCell sx={{ padding: '10px' }}>Hindu</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>House</TableCell>
                    <TableCell sx={{ padding: '10px' }}>Green</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Blood Group</TableCell>
                    <TableCell sx={{ padding: '10px' }}>O+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>SRN No.</TableCell>
                    <TableCell sx={{ padding: '10px' }}>LKJH8974398</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer> */}
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

            <Box p={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    ADDRESS
                  </Box>
                  <Box fontSize={16}>Dwarka, Delhi</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    COUNTRY/REGION
                  </Box>
                  <Box fontSize={16}>India</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    CITY
                  </Box>
                  <Box fontSize={16}>Delhi</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    STATE
                  </Box>
                  <Box fontSize={16}>Delhi</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    ZIP CODE
                  </Box>
                  <Box fontSize={16}>857473</Box>
                </Grid>
              </Grid>
            </Box>

            {/* <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell width={isMobile ? 'auto' : '250px'} sx={{ padding: '10px', fontWeight: '600' }}>
                      Address
                    </TableCell>
                    <TableCell sx={{ padding: '10px' }}>Dwarka, Delhi</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Country/Region</TableCell>
                    <TableCell sx={{ padding: '10px' }}>India</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>City</TableCell>
                    <TableCell sx={{ padding: '10px' }}>Delhi</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>state</TableCell>
                    <TableCell sx={{ padding: '10px' }}>Delhi</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Zip Code</TableCell>
                    <TableCell sx={{ padding: '10px' }}>857473</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer> */}
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

            <Box p={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    NAME
                  </Box>
                  <Box fontSize={16}>Mr. Subash</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    RELATION
                  </Box>
                  <Box fontSize={16}>Father</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    MOBILE
                  </Box>
                  <Box fontSize={16}>8484937348</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    EMAIL
                  </Box>
                  <Box fontSize={16}>abc@gmail.com</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    EDUCATION
                  </Box>
                  <Box fontSize={16}>B.Sc</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    COMPANY
                  </Box>
                  <Box fontSize={16}>abc Company</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    DESIGNATION
                  </Box>
                  <Box fontSize={16}>Manager</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    ADDRESS
                  </Box>
                  <Box fontSize={16}>Delhi</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    AADHAAR NO.
                  </Box>
                  <Box fontSize={16}>12456789345</Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pb={0.5} color={'#8b8989'}>
                    PEN
                  </Box>
                  <Box fontSize={16}>AZCIV89345</Box>
                </Grid>
              </Grid>
            </Box>

            {/* <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell width={isMobile ? 'auto' : '250px'} sx={{ padding: '10px', fontWeight: '600' }}>
                      Name
                    </TableCell>
                    <TableCell sx={{ padding: '10px' }}>Mr. Subash</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Relation</TableCell>
                    <TableCell sx={{ padding: '10px' }}>Father</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Mobile</TableCell>
                    <TableCell sx={{ padding: '10px' }}>8484937834</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Email</TableCell>
                    <TableCell sx={{ padding: '10px' }}>abc@gmail.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Education</TableCell>
                    <TableCell sx={{ padding: '10px' }}>B.Sc</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Company</TableCell>
                    <TableCell sx={{ padding: '10px' }}>abc Company</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Designation</TableCell>
                    <TableCell sx={{ padding: '10px' }}>Manager</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Address</TableCell>
                    <TableCell sx={{ padding: '10px' }}>Delhi</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>Aadhaar No.</TableCell>
                    <TableCell sx={{ padding: '10px' }}>12456789345</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: '10px', fontWeight: '600' }}>PEN</TableCell>
                    <TableCell sx={{ padding: '10px' }}>AZCIV89345</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer> */}
          </Box>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        4
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        5
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Timeline/>
      </CustomTabPanel>
    </Box>
  );
}
