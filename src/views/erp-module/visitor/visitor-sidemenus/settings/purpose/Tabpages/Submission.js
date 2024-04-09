import React from 'react';
import ParamTable from 'views/erp-common-component/ParamTable';
// import Drawer from '@mui/material/Drawer';
// import DrawerContent from './DrawerContent';


const tableHeadings = [
  {
    id: 2,
    tabHeading: "Average Meeting Time"
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
    "Average Meeting Time": "1:30",
    "createdBy": "Rahul Kumar",
    "createdOn": "2024-03-05"
  },
  {
    "Average Meeting Time": "2:30",
    "createdBy": "Vijay Mishra",
    "createdOn": "2024-03-06"
  },
  {
    "Average Meeting Time": "0:30",
    "createdBy": "Mohit Thakur",
    "createdOn": "2024-03-07"
  },
  {
    "Average Meeting Time": "3:30",
    "createdBy": "Sidharat Verma",
    "createdOn": "2024-03-08"
  },
  {
    "Average Meeting Time": "1:30",
    "createdBy": "Tarun Yadav",
    "createdOn": "2024-03-09"
  }
];


const Submission = () => {
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

export default Submission;