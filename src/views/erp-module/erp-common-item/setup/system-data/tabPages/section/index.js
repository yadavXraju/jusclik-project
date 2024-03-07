import React from 'react';
import ParamTable from 'views/common-section/ParamTable';
// table headings
const tableHeading=[
  {
  id:0,
  tabHeading:"Records"
  },
  {
  id:1,
  tabHeading:"Section"
  },
  {
  id:2,
  tabHeading:"Create by"
  },
  {
  id:3,
  tabHeading:"Create On"
  },
  {
   id:4,
   tabHeading:"Action"
  }
  ]

const data=[
  {
    "id": 1,
    "records": "A123",
    "section": "Section A",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:00:00Z"
  },
  {
    "id": 2,
    "records": "B456",
    "section": "Section B",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:15:00Z"
  },
  {
    "id": 3,
    "records": "C789",
    "section": "Section C",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:30:00Z"
  },
  {
    "id": 4,
    "records": "D101112",
    "section": "Section D",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T12:45:00Z"
  },
  {
    "id": 5,
    "records": "E131415",
    "section": "Section E",
    "createdBy": "Admin",
    "createdOn": "2024-03-04T13:00:00Z"
  }]
  
const Section = () => {
  return (
   <>
   <ParamTable columns={tableHeading} data={data} />
   </> 
  )
}


export default Section;