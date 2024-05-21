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
      name: taskGroups['0'].name,
      component:Onboarding,
      props: {
        panelHeading: taskGroups['0'].name,
        panelSubheading:taskGroups['0'].description,
        setTaskGroups:setTaskGroups,
        value:value,
        taskGroups:taskGroups
      }
    },
    {
      id: 1,
      name: taskGroups['1'].name,
      component:Onboarding,
      props: {
        panelHeading: taskGroups['1'].name,
        panelSubheading:taskGroups['1'].description,
        setTaskGroups:setTaskGroups,
        value:value,
        taskGroups:taskGroups
      }
    },
    {
      id: 2,
      name: taskGroups['2'].name,
      component:Onboarding,
      props: {
        panelHeading: taskGroups['2'].name,
        panelSubheading:taskGroups['2'].description,
        setTaskGroups:setTaskGroups,
        value:value,
        taskGroups:taskGroups
      }
    },
    {
      id: 3,
      name: taskGroups['3'].name,
      component:Onboarding,
      props: {
        panelHeading: taskGroups['3'].name,
        panelSubheading:taskGroups['3'].description,
        setTaskGroups:setTaskGroups,
        value:value,
        taskGroups:taskGroups
      }
    },
    {
      id: 4,
      name: taskGroups['4'].name,
      component:Onboarding,
      props: {
        panelHeading: taskGroups['4'].name,
        panelSubheading:taskGroups['4'].description,
        setTaskGroups:setTaskGroups,
        value:value,
        taskGroups:taskGroups
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
