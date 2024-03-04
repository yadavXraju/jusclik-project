import React from 'react'
import ParamTable from 'views/common-section/ParamTable';

const tabHeadings=[
  {
    id:1,
    tabHeading:"Records"
  },
  {
    id:2,
    tabHeading:"Gate Pass Accompanied By"
  },
  {
    id:3,
    tabHeading:"Enable Custom Remarks"
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

const data = [
  {
    id: 1,
    records: "ROO1",
    gatePass: "Father",
    enableCustom: false,
    createdBy: "Aatur Bansal",
    createdOn: "09.Jan.2024"
  },
  {
    id: 2,
    records: "ROO2",
    gatePass: "Mother",
    enableCustom: true,
    createdBy: "Priya Sharma",
    createdOn: "10.Feb.2024"
  },
  {
    id: 3,
    records: "ROO3",
    gatePass: "Guardian",
    enableCustom: false,
    createdBy: "Rahul Singh",
    createdOn: "15.Mar.2024"
  },
  {
    id: 4,
    records: "ROO4",
    gatePass: "Parent",
    enableCustom: true,
    createdBy: "Anjali Gupta",
    createdOn: "20.Apr.2024"
  },
  {
    id: 5,
    records: "ROO5",
    gatePass: "Sibling",
    enableCustom: false,
    createdBy: "Siddharth Patel",
    createdOn: "25.May.2024"
  }
];


const GatePass= () => {
  return (
    <>
    <ParamTable columns={tabHeadings} data={data}/>
    </>
  )
}

export default GatePass