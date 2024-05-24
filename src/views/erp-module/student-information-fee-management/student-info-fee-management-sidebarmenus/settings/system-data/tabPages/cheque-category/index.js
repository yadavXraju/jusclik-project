import React from 'react'
import ParamTable from 'components/table-data-grid/Table';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const tableHeadings= [
  {
    id: 1,
    tabHeading: "Cheque Category"
  }, {
    id: 2,
    tabHeading: "Created by"
  }, {
    id: 3,
    tabHeading: "Created On"
  },
  {
    id:4,
    tabHeading:"Action"
  }
]

const data = [
  {
    "id": 1,
    "cheque": "Cheque001",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "id": 2,
    "cheque": "Cheque002",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "id": 3,
    "cheque": "Cheque003",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "id": 4,
    "cheque": "Cheque004",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "id": 5,
    "cheque": "Cheque005",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }
];


const ChequeCategory = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
  )
}

export default ChequeCategory;