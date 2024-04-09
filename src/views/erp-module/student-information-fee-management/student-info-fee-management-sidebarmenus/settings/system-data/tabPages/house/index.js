import React from 'react'
import ParamTable from 'views/erp-common-component/ParamTable';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const tableHeadings = [
  {
    id:1,
    tabHeading:"House"
  },
  {
    id: 2,
    tabHeading: "Created by"
  }, {
    id: 3,
    tabHeading: "Created On"
  },
  {
    id: 4,
    tabHeading: "Action"
  }
]

const data = [
  {
    "id": 1,
    "house":"shsoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "id": 2,
    "house":"shsoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "id": 3,
    "house":"hssoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "id": 4,
    "house":"hssoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "id": 5,
    "house":"hssoft",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }];
// 22House	Created by	Created On
const House = ({ toggleAddDrawer, toggleDrawer }) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
  )
}

export default House