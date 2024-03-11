import React from 'react';
import ParamTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';


const tableHeadings= [
  {
    id: 2,
    tabHeading: "Fee Group"
  }, 
  {
    id: 3,
    tabHeading: "Created By"
  },
  {
    id: 4,
    tabHeading: "Created On"
  },
  {
    id:5,
    tabHeading:"Action"
  }
]

const  data=[
  {
     id:1,
    "feeGroup": "Group A",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
     id:2,
    "feeGroup": "Group B",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
     id:3,
    "feeGroup": "Group C",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    id:4,
    "feeGroup": "Group D",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    id:5,
    "feeGroup": "Group E",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }
];

const FeeGroup = ({ toggleAddDrawer, toggleDrawer }) => {
  return (
    <>
      <ParamTable  columns={tableHeadings} data={data}/>
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default FeeGroup;