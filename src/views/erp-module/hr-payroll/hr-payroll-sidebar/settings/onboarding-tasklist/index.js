import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import ParamStepper from 'views/common-section/param-stepper';
import { Paper } from '@mui/material';
import Onboarding from './onboarding-tasklist';

export default function OnboardingTasklist() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 }
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  ];

  const tabPage = [
    {
      id: 0,
      name: 'Onboarding - US: 6 tasks',
      component: Onboarding,
      props: {
        panelHeading:'Onboarding - US',
        panelSubheading:'Onboarding for US citizens'
      }
    },
    {
      id: 1,
      name: 'Onboarding - UK: 5 tasks',
      component: DataGrid,
      props: {
        rows: rows,
        columns: columns,
        pageSize: 5,
        rowsPerPageOptions: [5, 10, 20],
        checkboxSelection: true
      }
    },
    {
      id: 2,
      name: 'Onboarding - India: 6 tasks',
      component: DataGrid,
      props: {
        rows: rows,
        columns: columns,
        pageSize: 5,
        rowsPerPageOptions: [5, 10, 20],
        checkboxSelection: true
      }
    },
    {
      id: 3,
      name: 'Onboarding - Middle East (ME): 18 tasks',
      component: DataGrid,
      props: {
        rows: rows,
        columns: columns,
        pageSize: 5,
        rowsPerPageOptions: [5, 10, 20],
        checkboxSelection: true
      }
    },
    {
      id: 4,
      name: 'Onboarding - Southeast Asia (SEA): 18 tasks',
      component: DataGrid,
      props: {
        rows: rows,
        columns: columns,
        pageSize: 5,
        rowsPerPageOptions: [5, 10, 20],
        checkboxSelection: true
      }
    },
    {
      id: 5,
      name: 'Onboarding - US Sales: 11 tasks',
      component: DataGrid,
      props: {
        rows: rows,
        columns: columns,
        pageSize: 5,
        rowsPerPageOptions: [5, 10, 20],
        checkboxSelection: true
      }
    }
  ];
  
  return (
    <>
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
      />
    </>
  );
}
