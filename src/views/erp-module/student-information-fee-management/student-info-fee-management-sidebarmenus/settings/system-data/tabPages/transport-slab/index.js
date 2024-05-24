import React from 'react'
import ParamTable from 'components/table-data-grid/Table';
import DrawerContent from './DrawerContent';
import Drawer from '@mui/material/Drawer';

const tableHeadings= [
  {
    id: 2,
    tabHeading: "Transport Slab"
  },
  {
    id: 3,
    tabHeading: "Academic Year Upto"
  },
  {
    id: 4,
    tabHeading: "Created by"
  }, {
    id: 5,
    tabHeading: "Created On"
  },
  {
    id:6,
    tabHeading:"Action"
  },
];

const data = [
  {
    id: 1,
    "TransportSlab": "Slab A",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:00:00Z"
  },
  {
    id: 2,
    "TransportSlab": "Slab B",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:15:00Z"
  },
  {
    id: 3,
    "TransportSlab": "Slab C",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:30:00Z"
  },
  {
    id: 4,
    "TransportSlab": "Slab D",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:45:00Z"
  },
  {
    id: 5,
    "TransportSlab": "Slab E",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T13:00:00Z"
  }];

const TransportSlab = ({toggleAddDrawer,toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
  )
}

export default TransportSlab