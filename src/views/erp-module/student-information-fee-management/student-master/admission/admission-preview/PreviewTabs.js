// ======= Page Owner Vikash =========
// ======= Preview Tabs For Students =========
import React, {useState} from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import Timeline from './Timeline';
import ParamStepper from 'components/tabs/Stepper';

export default function PreviewTabs() {
  const [value, setValue] = useState(0);

  const OtherDetails = () => {
    return (
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
        </Box>
      </>
    );
  };

  {/* ================ Render Address tab content ============== */}
  const Address = () => {
    return (
      <>
        <Box p={2}>
          <Typography pb={1} variant="h4" gutterBottom>
            Current Address
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
        </Box>

        <Box p={2}>
          <Typography pb={1} variant="h4" gutterBottom>
            Permanent Address
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
        </Box>
      </>
    );
  };

  {/* ================ Render Contact Person tab content ============== */}
  const ContactPerson = () => {
    return (
      <>
        <Box p={2}>
          <Typography pb={1} variant="h4" gutterBottom>
            Contact Person (Father)
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
        </Box>

        <Box p={2}>
          <Typography pb={1} variant="h4" gutterBottom>
            Contact Person (Mother)
          </Typography>
          <Divider />

          <Box p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box pb={0.5} color={'#8b8989'}>
                  NAME
                </Box>
                <Box fontSize={16}>Ms. Suman</Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box pb={0.5} color={'#8b8989'}>
                  RELATION
                </Box>
                <Box fontSize={16}>Mother</Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box pb={0.5} color={'#8b8989'}>
                  MOBILE
                </Box>
                <Box fontSize={16}>5469354098</Box>
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
        </Box>
      </>
    );
  };

  const CustomFields = () => {
    return <>4</>;
  };

  const Remarks = () => {
    return <>5</>;
  };

  const tabPage = [
    {
      id: 1,
      name: 'Other Details',
      value: '1',
      component: OtherDetails
    },
    {
      id: 2,
      name: 'Address',
      value: '2',
      component: Address
    },
    {
      id: 3,
      name: 'Contact Person',
      value: '3',
      component: ContactPerson
    },
    {
      id: 4,
      name: 'Custom Fields',
      value: '4',
      component: CustomFields
    },
    {
      id: 5,
      name: 'Remarks',
      value: '5',
      component: Remarks
    },
    {
      id: 6,
      name: 'Timeline',
      value: '6',
      component: Timeline
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ParamStepper
        variant={'scrollable'}
        tabPage={tabPage}
        showBottomNav={false}
        numberShow={false}
        iconShow={false}
        value={value}
        handleChange={handleChange}
        customtabSytle={{padding:'8px'}}
        customtabPanelStyle={{ padding: '0px', marginTop: '4px' }}
        customtabWrapper={{ marginTop: '0px' }}
      />
    </>
  );
}
