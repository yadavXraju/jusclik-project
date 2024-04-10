import React from 'react';
import ParamTable from 'views/erp-common-component/ParamTable';
// import Drawer from '@mui/material/Drawer';
// import DrawerContent from './DrawerContent';


const tableHeadings = [
  {
    id: 2,
    tabHeading: "Phone Number"
  },
  {
    id: 3,
    tabHeading: "Reason"
  },
  {
    id: 4,
    tabHeading: "Created by"
  },
  {
    id: 5,
    tabHeading: "Created On"
  },
  {
    id: 6,
    tabHeading: "Action"
  }
]

const data = [
  {
    "Phone Number": "9874523614",
    "Reason":"Abusive",
    "createdBy": "John Doe",
    "createdOn": "2024-03-05"
  },
  {
    "Phone Number": "9874523614",
    "Reason":"Fight",
    "createdBy": "Jane Smith",
    "createdOn": "2024-03-06"
  },
  {
    "Phone Number": "9874523614",
    "Reason":"Fight",
    "createdBy": "Alice Johnson",
    "createdOn": "2024-03-07"
  },
  {
    "Phone Number": "9874523614",
    "Reason":"Abusive",
    "createdBy": "Bob Brown",
    "createdOn": "2024-03-08"
  },
  
];


const ParentsDiscussion = () => {
//   const handleChange=()=>{

//   }

  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      {/* <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent handleChange={handleChange} data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}"/>
      </Drawer> */}
    </>
  )
}

export default ParentsDiscussion;