import React from 'react'
import ParamTable from 'views/common-section/ParamTable';
const tableHeading=[
  {
    id:0,
    tabHeading:"Records"
  },{
    id:1,
    tabHeading:"Cheque Category"
  },{
    id:2,
    tabHeading:"Created by"
  },{
  id:3,
  tabHeading:"Created On"
  }
]

const  data=[
  {
    "id": 1,
    "records": "A123",
    "cheque": "Cheque001",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "id": 2,
    "records": "B456",
    "cheque": "Cheque002",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "id": 3,
    "records": "C789",
    "cheque": "Cheque003",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "id": 4,
    "records": "D101112",
    "cheque": "Cheque004",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "id": 5,
    "records": "E131415",
    "cheque": "Cheque005",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }
];


const ChequeCategory = () => {
  return (
   <>
   <ParamTable columns={tableHeading} data={data}/>
   
   </>
  )
}

export default ChequeCategory;