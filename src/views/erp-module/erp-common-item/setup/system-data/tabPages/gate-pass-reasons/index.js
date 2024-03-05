import React from 'react'
import ParamTable from 'views/common-section/ParamTable';

const tableHeadings=[
  {
    id:1,
    tabHeading:"Records"
  },
  {
    id:2,
    tabHeading:"Gate Pass Reasons"
  },
  {
    id:3,
    tabHeading:"Created by"
  },
  {
   id:4,
   tabHeading:"Created On"
  }
];


const data = [
  {
    id: 1,
    records: "Have to go",
    gatePass: "Umang Kumar",
    CreatedBy: "Umang Kumar",
    CreatedOn: "08.Feb.2024"
  },
  {
    id: 2,
    records: "Need to leave",
    gatePass: "John Doe",
    CreatedBy: "John Doe",
    CreatedOn: "10.May.2024"
  },
  {
    id: 3,
    records: "Emergency exit",
    gatePass: "Alice Smith",
    CreatedBy: "Alice Smith",
    CreatedOn: "15.Jul.2024"
  },
  {
    id: 4,
    records: "Urgent leave",
    gatePass: "Emily Brown",
    CreatedBy: "Emily Brown",
    CreatedOn: "20.Oct.2024"
  },
  {
    id: 5,
    records: "Leave request",
    gatePass: "James Wilson",
    CreatedBy: "James Wilson",
    CreatedOn: "25.Dec.2024"
  }
];


const GatePassReason = () => {
  return (
    <>
     <ParamTable columns={tableHeadings} data={data}/>
    </>
  )
}

export default GatePassReason;