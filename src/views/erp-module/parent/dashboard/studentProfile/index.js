// ======= Page Owner Vikash =========
// ======= Entry Page of Student Profile =========

import React, { useState } from 'react';
import MainCard from 'components/ui/cards/MainCard';
import { Box } from '@mui/material';
import ProfileCard from './StudentProfile';
import Grid from '@mui/material/Grid';
import ParamStepper from 'components/tabs/Stepper';
import ProfileForm from './ProfileForm';
import FatherDetails from './FatherDetails';
import MotherDetails from './MotherDetails';
import GuardianDetails from './GuardianDetails';
import Credentials from './Credentials';
import DocumentTabs from './DocumentsTab';

// Main component for rendering the tab section
function Profile() {
  const [value, setValue] = useState(0);

  const Primary = () => {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={8}>
              <ProfileForm />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };


  // drawer btn
  const tabPage = [
    {
      id: 1,
      name: 'Primary',
      value: '1',
      component: Primary
    },
    {
      id: 2,
      name: 'Father',
      value: '2',
      component: FatherDetails
    },
    {
      id: 3,
      name: 'Mother',
      value: '3',
      component: MotherDetails
    },
    {
      id: 4,
      name: 'Guardian',
      value: '4',
      component: GuardianDetails
    },
    {
      id: 5,
      name: 'Upload Documents',
      value: '5',
      component: DocumentTabs
    },
    {
      id: 5,
      name: 'Credentials',
      value: '5',
      component: Credentials
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <MainCard title="Student Profile">
        <ParamStepper
          variant="scrollable"
          tabPage={tabPage}
          numberShow={false}
          iconShow={false}
          customtabSytle={{padding:'8px'}}
          customtabWrapper={{ marginTop: '0px', marginBottom:'8px' }}
          value={value}
          handleChange={handleChange}
        />
      </MainCard>
    </>
  );
}

// Export the component
export default Profile;
