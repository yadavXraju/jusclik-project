import React from 'react';
import ParamTable from 'components/Table';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const tableHeadings = [
  {
    id: 1,
    tabHeading: "Transport Stop"
  },
  {
    id: 2,
    tabHeading: "Distance(in Kms)"
  },
  {
    id: 3,
    tabHeading: "Pick Time"
  },
  {
    id: 4,
    tabHeading: "Drop Time"
  }, {
    id: 5,
    tabHeading: "Academic Year Upto"
  },
  {
    id: 7,
    tabHeading: "Created by"
  },
  {
    id: 8,
    tabHeding: "Created On"
  },
  {
    id:9,
    tabHeading:"Action"
  }
];


const data = [
  {
    "transportStop": "Delhi Cantt",
    "Distance (in Kms)": 12,
    "pickTime": "8:15am",
    "DropTime": "8:50am",
    "academicYear": "2024-2025",
    "createdBy": "Umang Kumar",
    "createdOn": "08.Feb.2024"
  },
  {
    "transportStop": "New Delhi",
    "Distance (in Kms)": 15,
    "pickTime": "7:45am",
    "DropTime": "8:30am",
    "academicYear": "2024-2025",
    "createdBy": "Anita Sharma",
    "createdOn": "09.Feb.2024"
  },
  {
    "transportStop": "Gurgaon",
    "Distance (in Kms)": 20,
    "pickTime": "7:30am",
    "DropTime": "9:00am",
    "academicYear": "2024-2025",
    "createdBy": "Rajesh Singh",
    "createdOn": "10.Feb.2024"
  },
  {
    "transportStop": "Noida",
    "Distance (in Kms)": 25,
    "pickTime": "7:00am",
    "DropTime": "8:45am",
    "academicYear": "2024-2025",
    "createdBy": "Priya Verma",
    "createdOn": "11.Feb.2024"
  },
  {
    "transportStop": "Faridabad",
    "Distance (in Kms)": 30,
    "pickTime": "6:45am",
    "DropTime": "8:20am",
    "academicYear": "2024-2025",
    "createdBy": "Sanjay Gupta",
    "createdOn": "12.Feb.2024"
  }
]


const TransportStop = ({toggleAddDrawer, toggleDrawer }) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  )
}

export default TransportStop;