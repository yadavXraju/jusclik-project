import React from 'react'
import ParamTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const tableHeadings=[
  {
   id:1,
   tabHeading:"Transport Route"
  },
  {
   id:2,
   tabHeading:"Academic Year Upto"
  },
  {
    id:4,
    tabHeading:"Created by"
  },
  {
    id:5,
    tabHeading:"Created On"
  },
  {
    id:6,
    tabHeading:"Action"
  }
]

const data=[
  {
    "id": 1,
    "transportRoute": "Route 1",
    "AcademicYearUpto": "2025-2026",
    "createBy": "John Doe",
    "createdOn": "2024-03-05"
  },
  {
    "id": 2,
    "transportRoute": "Route 2",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Jane Smith",
    "createdOn": "2024-03-05"
  },
  {
    "id": 3,
    "transportRoute": "Route 3",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Alice Johnson",
    "createdOn": "2024-03-05"
  },
  {
    "id": 4,
    "transportRoute": "Route 4",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Bob Brown",
    "createdOn": "2024-03-05"
  },
  {
    "id": 5,
    "transportRoute": "Route 5",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Emma Wilson",
    "createdOn": "2024-03-05"
  }
];

const TransportRoute = ({ toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
     <ParamTable columns={tableHeadings} data={data}/>
     <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  )
}

export default TransportRoute