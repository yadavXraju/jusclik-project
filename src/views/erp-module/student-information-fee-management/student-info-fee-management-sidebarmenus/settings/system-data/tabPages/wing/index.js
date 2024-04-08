import React from 'react';
import ParamTable from 'views/erp-common-component/ParamTable';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';


const tableHeadings = [
  {
    id: 2,
    tabHeading: "Wing{Restricted}"
  },
  {
    id: 3,
    tabHeading: "Created by"
  },
  {
    id: 4,
    tabHeading: "Created On"
  },
  {
    id: 5,
    tabHeading: "Action"
  }
]

const data = [
  {
    "wing": "A",
    "createdBy": "John Doe",
    "createdOn": "2024-03-05"
  },
  {
    "wing": "B",
    "createdBy": "Jane Smith",
    "createdOn": "2024-03-06"
  },
  {
    "wing": "C",
    "createdBy": "Alice Johnson",
    "createdOn": "2024-03-07"
  },
  {
    "wing": "D",
    "createdBy": "Bob Brown",
    "createdOn": "2024-03-08"
  },
  {
    "wing": "E",
    "createdBy": "Emma Wilson",
    "createdOn": "2024-03-09"
  }
];


const Wing = ({ toggleAddDrawer, toggleDrawer}) => {
  const handleChange=()=>{

  }

  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent handleChange={handleChange} data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}"/>
      </Drawer>
    </>
  )
}

export default Wing;