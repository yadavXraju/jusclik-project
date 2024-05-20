// import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import ParamStepper from 'views/common-section/param-stepper';
import { Paper } from '@mui/material';
import Onboarding from './onboarding-tasklist';

export default function OnboardingTasklist() {
  const [value, setValue] = React.useState(0);
  const [taskGroups, setTaskGroups] = React.useState({
    '0': {
      name: 'Document Submission',
      description: 'Tasks related to submitting documents'
    },
    '1': {
      name: 'Payroll Tasks',
      description: 'Tasks related to payroll processing'
    },
    '2': {
      name: 'Interns Tasks',
      description: 'Tasks related to interns management'
    },
    '3': {
      name: 'IT Team Tasks',
      description: 'Tasks related to IT team activities'
    },
    '4': {
      name: 'HR Tasks',
      description: 'Tasks related to HR management'
    }
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabPage = [
    {
      id: 0,
      name: 'Document Submission',
      component:Onboarding,
      props: {
        panelHeading: 'Document Submission',
        panelSubheading: 'Tasks related to submitting documents'
      }
    },
    {
      id: 1,
      name: 'Payroll Tasks',
      component:Onboarding,
      props: {
        panelHeading: 'Payroll Tasks',
        panelSubheading: 'Tasks related to payroll processing'
      }
    },
    {
      id: 2,
      name: 'Interns Tasks',
      component:Onboarding,
      props: {
        panelHeading: 'Interns Tasks',
        panelSubheading: 'Tasks related to interns management'
      }
    },
    {
      id: 3,
      name: 'IT Team Tasks',
      component:Onboarding,
      props: {
        panelHeading: 'IT Team Tasks',
        panelSubheading: 'Tasks related to IT team activities'
      }
    },
    {
      id: 4,
      name: 'HR Tasks',
      component:Onboarding,
      props: {
        panelHeading: 'HR Tasks',
        panelSubheading: 'Tasks related to HR management'
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
