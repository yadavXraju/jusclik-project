import React from 'react';
import ParamTable from 'views/common-section/ParamTable';

const tableHeading = [
  {
    id: 1,
    tabHeading: "records"
  }, 
  {
    id: 2,
    tabHeading: "Fee Group"
  }, 
  {
    id: 3,
    tabHeading: "Created By"
  },
  {
    id: 4,
    tabHeading: "Created On"
  }
]

const  data=[
  {
     id:1,
    "records": "R001",
    "feeGroup": "Group A",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
     id:2,
    "records": "R002",
    "feeGroup": "Group B",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
     id:3,
    "records": "R003",
    "feeGroup": "Group C",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    id:4,
    "records": "R004",
    "feeGroup": "Group D",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    id:5,
    "records": "R005",
    "feeGroup": "Group E",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }
];

const FeeGroup = () => {
  return (
    <>
      <ParamTable  columns={tableHeading} data={data}/>
    </>
  )
}

export default FeeGroup;