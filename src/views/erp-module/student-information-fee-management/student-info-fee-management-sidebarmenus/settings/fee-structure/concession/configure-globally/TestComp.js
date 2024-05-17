import React from 'react';
import ConfigPreviewReusable from './configPreviewReusable';


const tableHeadings = [
    {
      id: 1,
      tabHeading: "Fee Head"
    },
    {
      id: 2,
      tabHeading: "Concession Type",
      checkbox:true,
    },
    {
      id: 3,
      tabHeading: "Amount",
      checkbox:true,
    },

    {
        id: 4,
        tabHeading: "additional",
        checkbox:true,
      },

  ];
  
  const data = [
      {
        id: 1,
        "records": "R001",
        "BounceEmail": "example1@example.com",
        "CreatedOn": "2024-03-04T12:00:00Z",
        "CreatedOn1": "2024-03-04T12:00:00Z"
      },
      {
        id: 2,
        "records": "R002",
        "BounceEmail": "example2@example.com",
        "CreatedOn": "2024-03-04T12:15:00Z",
        "CreatedOn1": "2024-03-04T12:00:00Z"
      },
      {
        id: 3,
        "records": "R003",
        "BounceEmail": "example3@example.com",
        "CreatedOn": "2024-03-04T12:30:00Z",
        "CreatedOn1": "2024-03-04T12:00:00Z"
      },
      {
        id: 4,
        "records": "R003",
        "BounceEmail": "example3@example.com",
        "CreatedOn": "2024-03-04T12:30:00Z",
        "CreatedOn1": "2024-03-04T12:00:00Z"
      },
   ]

const ParentComponent = () => {
  return (
    <div>
        <ConfigPreviewReusable  columns={tableHeadings} data={data}/>
    </div>
  )
}

export default ParentComponent