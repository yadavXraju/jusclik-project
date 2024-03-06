import React from 'react'
import ParamTable from 'views/common-section/ParamTable';

const tableHeading=[
  {
    id:1,
    tabHeading:"Records"
  },
  {
   id:2,
   tabHeading:"Transport Route"
  },
  {
   id:3,
   tabHeading:"Academic Year Upto"
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
    "id": 1,
    "Records": "R001",
    "transportRoute": "Route 1",
    "AcademicYear": "2024-2025",
    "AcademicYearUpto": "2025-2026",
    "createBy": "John Doe",
    "createdOn": "2024-03-05"
  },
  {
    "id": 2,
    "Records": "R002",
    "transportRoute": "Route 2",
    "AcademicYear": "2024-2025",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Jane Smith",
    "createdOn": "2024-03-05"
  },
  {
    "id": 3,
    "Records": "R003",
    "transportRoute": "Route 3",
    "AcademicYear": "2024-2025",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Alice Johnson",
    "createdOn": "2024-03-05"
  },
  {
    "id": 4,
    "Records": "R004",
    "transportRoute": "Route 4",
    "AcademicYear": "2024-2025",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Bob Brown",
    "createdOn": "2024-03-05"
  },
  {
    "id": 5,
    "Records": "R005",
    "transportRoute": "Route 5",
    "AcademicYear": "2024-2025",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Emma Wilson",
    "createdOn": "2024-03-05"
  }
];

const TransportRoute = () => {
  return (
    <>
     <ParamTable columns={tableHeading} data={data}/>
    </>
  )
}

export default TransportRoute