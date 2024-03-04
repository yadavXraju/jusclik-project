import React from 'react';
import ParamTable from 'views/common-section/ParamTable';

const tableHeading = [
  {
    id: 1,
    tabHeading: "Records"
  },
  {
    id: 2,
    tabHeading: "Bounce Email Notification Reason {Restricted}"
  },
  {
    id: 3,
    tabHeading: "Created On"
  }
];

const data = [
    {
      id: 1,
      "records": "R001",
      "BounceEmail": "example1@example.com",
      "CreatedOn": "2024-03-04T12:00:00Z"
    },
    {
      id: 2,
      "records": "R002",
      "BounceEmail": "example2@example.com",
      "CreatedOn": "2024-03-04T12:15:00Z"
    },
    {
      id: 3,
      "records": "R003",
      "BounceEmail": "example3@example.com",
      "CreatedOn": "2024-03-04T12:30:00Z"
    },
    {
      id: 4,
      "records": "R004",
      "BounceEmail": "example4@example.com",
      "CreatedOn": "2024-03-04T12:45:00Z"
    },
    {
      id: 5,
      "records": "R005",
      "BounceEmail": "example5@example.com",
      "CreatedOn": "2024-03-04T13:00:00Z"
    }
  ];

const BounceEmailNotification = () => {
  return (
    <>
      <ParamTable columns={tableHeading} data={data} />
    </>
  )
}

export default BounceEmailNotification
