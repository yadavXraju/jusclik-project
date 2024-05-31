// ======= Page Owner Vikash =========
// ======= Class Teacher Profile Tabs =========

import React, { useState } from 'react';
import MainCard from 'components/ui/cards/MainCard';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import ClassTeacherCard from './ClassTeacherCard';
import DocumentTabs from 'views/erp-module/parent/dashboard/studentProfile/DocumentsTab';
import ClassTeacherAssets from './ClassTeacherAssets';
import TeacherCredentials from './Teacher-Credentials';
import TeacherProfileForm from './TeacherProfileForm';
import TeacherContactDetails from './TeacherContactDetails';
import ParamStepper from 'components/tabs/Stepper';

const ClassTeacherProfile = () => {
  const [value, setValue] = useState(0);

  const Profile = () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <ClassTeacherCard />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TeacherProfileForm />
        </Grid>
      </Grid>
    </Box>
  );

  // Define the tabs
  const tabPage = [
    {
      id: 1,
      name: 'Profile',
      value: '1',
      component: Profile
    },
    {
      id: 2,
      name: 'Contact Details',
      value: '2',
      component: TeacherContactDetails
    },
    {
      id: 3,
      name: 'Documents',
      value: '3',
      component: DocumentTabs
    },
    {
      id: 4,
      name: 'Asset Allocation',
      value: '4',
      component: ClassTeacherAssets
    },
    {
      id: 5,
      name: 'Credentials',
      value: '5',
      component: TeacherCredentials
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainCard>
      <ParamStepper
        variant='scrollable'
        tabPage={tabPage}
        numberShow={false}
        iconShow={false}
        value={value}
        handleChange={handleChange}
        customtabSytle={{padding:'8px'}}
        customtabWrapper={{ marginTop: '0px', marginBottom:'8px' }}
      />
    </MainCard>
  );
}

// Export the component
export default ClassTeacherProfile;
