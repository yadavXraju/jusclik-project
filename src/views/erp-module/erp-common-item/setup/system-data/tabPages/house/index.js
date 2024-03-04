import React from 'react'
import ParamTable from 'views/common-section/ParamTable';

const tableHeading=[
  {
   id:0,
   tabHeading:"Records"
  },
  {
   id:1,
   tabHeading:"Created by"
  },{
  id:2,
  tabHeading:"Created On"
  }
]

const data=[
  {
    "id": 1,
    "records": "A123",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "id": 2,
    "records": "B456",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "id": 3,
    "records": "C789",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "id": 4,
    "records": "D101112",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "id": 5,
    "records": "E131415",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }];
// 22House	Created by	Created On
const House = () => {
  return (
    <>
    <ParamTable columns={tableHeading} data={data} />
    </>
  )
}

export default House