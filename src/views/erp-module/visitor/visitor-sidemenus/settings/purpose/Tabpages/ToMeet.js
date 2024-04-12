import React from 'react';
import ParamTable from 'views/erp-common-component/ParamTable';
// import Drawer from '@mui/material/Drawer';
// import DrawerContent from './DrawerContent';


const tableHeadings = [
  {
    id: 2,
    tabHeading: "Name"
  },
  {
    id: 3,
    tabHeading: "To Meet"
  },

  {
    id: 4,
    tabHeading: "Phone Number"
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
    
    "Name":'Sourabh Sharma',
    "To Meet":" Head Master",
    "Phone Number": "9568412358",
    "createdOn": "2024-03-05"
  },
  {
    
    "Name": "Jane Smith",
    "To Meet":" Principal",
    "Phone Number": "8754694572",
    "createdOn": "2024-03-06"
  },
  {
    
    "Name": "Alice Johnson",
    "To Meet":" Class Teacher",
    "Phone Number": "9645782364",
    "createdOn": "2024-03-07"
  },
  {
  
    "Name": "Bob Brown",
    "To Meet":" HR Department",
    "Phone Number": "7548956786",
    "createdOn": "2024-03-08"
  },
  {
   
    "Name": "Emma Wilson",
    "To Meet":"Sports Teacher",
    "Phone Number": "9214569874",
    "createdOn": "2024-03-09"
  }
];


const ToMeet = () => {
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

export default ToMeet;