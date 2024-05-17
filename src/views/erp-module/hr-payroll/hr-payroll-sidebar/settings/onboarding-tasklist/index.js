// import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import ParamStepper from 'views/common-section/param-stepper';
import { Paper } from '@mui/material';
import Onboarding from './onboarding-tasklist';

export default function OnboardingTasklist() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const tabPage = [
    {
      id: 0,
      name: 'Onboarding - US: 6 tasks',
      component: Onboarding,
      props: {
        panelHeading: 'Onboarding - US',
        panelSubheading: 'Onboarding for US citizens'
      }
    },
    {
      id: 1,
      name: 'Onboarding - UK: 5 tasks',
      component: Onboarding, // Use the same component type as the first element
      props: {
        panelHeading: 'Onboarding - UK',
        panelSubheading: 'Onboarding for UK citizens'
      }
    },
    {
      id: 2,
      name: 'Onboarding - India: 6 tasks',
      component: Onboarding, // Use the same component type as the first element
      props: {
        panelHeading: 'Onboarding - India',
        panelSubheading: 'Onboarding for Indian citizens'
      }
    },
    {
      id: 3,
      name: 'Onboarding - Middle East (ME): 18 tasks',
      component: Onboarding, // Use the same component type as the first element
      props: {
        panelHeading: 'Onboarding - Middle East (ME)',
        panelSubheading: 'Onboarding for Middle Eastern citizens'
      }
    },
    {
      id: 4,
      name: 'Onboarding - Southeast Asia (SEA): 18 tasks',
      component: Onboarding, // Use the same component type as the first element
      props: {
        panelHeading: 'Onboarding - Southeast Asia (SEA)',
        panelSubheading: 'Onboarding for Southeast Asian citizens'
      }
    },
    {
      id: 5,
      name: 'Onboarding - US Sales: 11 tasks',
      component: Onboarding, // Use the same component type as the first element
      props: {
        panelHeading: 'Onboarding - US Sales',
        panelSubheading: 'Onboarding for US Sales'
      }
    }
  ];
  
  return (
    <>
    {/* TABS FOR TASKLISTS */}
      <ParamStepper
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        tabPage={tabPage}
        customtabWrapper={{ flexDirection: 'row', gap: 4,padding:'0rem' }}
        component={Paper}
        customStyleTabs={{paddingLeft:'1rem'}}
        customtabPanelStyle={{backgroundColor:'transparent'}}
        customtabSytle={{textAlign:'left'}}
      />
    </>
  );
}
