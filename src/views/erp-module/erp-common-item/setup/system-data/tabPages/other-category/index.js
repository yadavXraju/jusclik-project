import React from 'react'
import ParamTable from 'views/common-section/ParamTable';
import DrawerContent from './DrawerContent';
import Drawer from '@mui/material/Drawer';

const tableHeadings=[
  {
    id:2,
    tabHeading:"Other"
  },
  {
    id:3,
    tabHeading:"Category"
  },
  {
    id:4,
    tabHeading:"Created by"
  },
  {
  id:5,
  tabHeading:"Created On"
 },{
  id:6,
  tabHeading:"Action"
 }
]

const data=[
  {
    "other": "Some data",
    "category": "Category A",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "other": "Another data",
    "category": "Category B",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "other": "Additional data",
    "category": "Category C",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "other": "Extra data",
    "category": "Category D",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "other": "More data",
    "category": "Category E",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }
];

const OtherCategory = ({ toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data}/>
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} />
      </Drawer>  
    </>
  )
}

export default OtherCategory