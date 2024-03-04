import React from 'react'
import ParamTable from 'views/common-section/ParamTable';

const tableHeading = [
  {
    id: 1,
    tabHeading: "records"
  },
  {
    id: 2,
    tabHeading: "Transport Slab"
  },
  {
    id: 3,
    tabHeading: "Academic Year Upto"
  },
  {
    id: 4,
    tabHeading: "Created by"
  }, {
    id: 5,
    tabHeading: "Created On"
  }
];

const data = [
  {
    id: 1,
    "records": "R001",
    "TransportSlab": "Slab A",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:00:00Z"
  },
  {
    id: 2,
    "records": "R002",
    "TransportSlab": "Slab B",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:15:00Z"
  },
  {
    id: 3,
    "records": "R003",
    "TransportSlab": "Slab C",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:30:00Z"
  },
  {
    id: 4,
    "records": "R004",
    "TransportSlab": "Slab D",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:45:00Z"
  },
  {
    id: 5,
    "records": "R005",
    "TransportSlab": "Slab E",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T13:00:00Z"
  }];

const TransportSlab = () => {
  return (
    <>
      <ParamTable columns={tableHeading} data={data} />
    </>
  )
}

export default TransportSlab