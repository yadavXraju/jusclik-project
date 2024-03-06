import React from 'react';
import ParamTable from 'views/common-section/ParamTable';

const tableHeading = [
  {
    id: 1,
    tabHeading: "Records"
  },
  {
    id: 2,
    tabHeading: "Transport Stop"
  },
  {
    id: 3,
    tabHeading: "Distance(in Kms)"
  },
  {
    id: 4,
    tabHeading: "Pick Time"
  },
  {
    id: 5,
    tabHeading: "Drop Time"
  }, {
    id: 6,
    tabHeading: "Academic Year Upto"
  }, {
    id: 7,
    tabHeading: "Created Year Upto"
  },
  {
    id: 8,
    tabHeading: "Created by"
  },
  {
    id: 9,
    tabHeding: "Created On"
  }
];


const data = [
  {
    "records": "R001",
    "transportStop": "Delhi Cantt",
    "Distance (in Kms)": 12,
    "pickTime": "8:15am",
    "DropTime": "8:50am",
    "academicYear": "2024-2025",
    "createdBy": "Umang Kumar",
    "createdOn": "08.Feb.2024"
  },
  {
    "records": "R002",
    "transportStop": "New Delhi",
    "Distance (in Kms)": 15,
    "pickTime": "7:45am",
    "DropTime": "8:30am",
    "academicYear": "2024-2025",
    "createdBy": "Anita Sharma",
    "createdOn": "09.Feb.2024"
  },
  {
    "records": "R003",
    "transportStop": "Gurgaon",
    "Distance (in Kms)": 20,
    "pickTime": "7:30am",
    "DropTime": "9:00am",
    "academicYear": "2024-2025",
    "createdBy": "Rajesh Singh",
    "createdOn": "10.Feb.2024"
  },
  {
    "records": "R004",
    "transportStop": "Noida",
    "Distance (in Kms)": 25,
    "pickTime": "7:00am",
    "DropTime": "8:45am",
    "academicYear": "2024-2025",
    "createdBy": "Priya Verma",
    "createdOn": "11.Feb.2024"
  },
  {
    "records": "R005",
    "transportStop": "Faridabad",
    "Distance (in Kms)": 30,
    "pickTime": "6:45am",
    "DropTime": "8:20am",
    "academicYear": "2024-2025",
    "createdBy": "Sanjay Gupta",
    "createdOn": "12.Feb.2024"
  }
]


const TransportStop = () => {
  return (
    <>
      <ParamTable columns={tableHeading} data={data} />
    </>
  )
}

export default TransportStop;