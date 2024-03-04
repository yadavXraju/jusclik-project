import React from 'react'
import ParamTable from 'views/common-section/ParamTable';

const tableHeading=[
  {
      id:1,
      tabHeading:"Records"
  },
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
 }
]

const data=[
  {
    "records": "R001",
    "other": "Some data",
    "category": "Category A",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "records": "R002",
    "other": "Another data",
    "category": "Category B",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "records": "R003",
    "other": "Additional data",
    "category": "Category C",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "records": "R004",
    "other": "Extra data",
    "category": "Category D",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "records": "R005",
    "other": "More data",
    "category": "Category E",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }
];

const OtherCategory = () => {
  return (
    <>
      <ParamTable columns={tableHeading} data={data}/>
    </>
  )
}

export default OtherCategory