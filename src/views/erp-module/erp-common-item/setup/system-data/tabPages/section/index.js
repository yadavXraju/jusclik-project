import React from 'react';
import ParamTable from 'views/common-section/ParamTable';
import DrawerContent from './DrawerContent';
import Drawer from '@mui/material/Drawer';

// table headings
const tableHeadings = [
  {
    id: 1,
    tabHeading: "Section"
  },
  {
    id: 2,
    tabHeading: "Create by"
  },
  {
    id: 3,
    tabHeading: "Create On"
  },
  {
    id: 4,
    tabHeading: "Action"
  }
]

const data = [
  {
    "id": 1,
    "section": "Section A",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "id": 2,
    "section": "Section B",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "id": 3,
    "section": "Section C",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "id": 4,
    "section": "Section D",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "id": 5,
    "section": "Section E",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }]

const Section = ({ toggleAddDrawer, toggleDrawer }) => {
  const handleChange=()=>{

  }
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent handleChange={handleChange} data={tableHeadings} toggleDrawer={toggleDrawer} name="Section" />
      </Drawer>
    </>
  )
}


export default Section;