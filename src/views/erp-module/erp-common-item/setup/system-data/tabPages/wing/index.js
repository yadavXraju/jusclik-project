import React from 'react';
import ParamTable from 'views/common-section/ParamTable';


const tableHeadings = [
  {
    id: 1,
    tabHeading: "Records"
  },
  {
    id: 2,
    tabHeading: "Wing{Restricted}"
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
    id:5,
    tabHeading:"Action"
  }
]

const data = [
  {
    "records": "R001",
    "wing": "A",
    "createdBy": "John Doe",
    "createdOn": "2024-03-05"
  },
  {
    "records": "R002",
    "wing": "B",
    "createdBy": "Jane Smith",
    "createdOn": "2024-03-06"
  },
  {
    "records": "R003",
    "wing": "C",
    "createdBy": "Alice Johnson",
    "createdOn": "2024-03-07"
  },
  {
    "records": "R004",
    "wing": "D",
    "createdBy": "Bob Brown",
    "createdOn": "2024-03-08"
  },
  {
    "records": "R005",
    "wing": "E",
    "createdBy": "Emma Wilson",
    "createdOn": "2024-03-09"
  }
];


const Wing = () => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
    </>
  )
}

export default Wing;