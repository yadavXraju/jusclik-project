import React from 'react'
import ParamTable from 'views/common-section/ParamTable';

const tabHeadings = [
  {
    id: 1,
    tabHeading: "Records"
  }, 
  {
    id: 2,
    tabHeading: "Left Reasons {Restricted}"
  },
  {
    id: 3,
    tabHeading: "Type"
  }, 
  {
    id: 4,
    tabHeading: "	Created On"
  }
];

const data=[
  {
    id: 1,
    "records": "select",
    "leftReasons": "Transferred to other school",
    "type": "For Admission",
    "CreatedOn": "05.Feb.2019"
  },
  {
    id: 2,
    "records": "select",
    "leftReasons": "Moved to another city",
    "type": "For Admission",
    "CreatedOn": "10.May.2020"
  },
  {
    id: 3,
    "records": "select",
    "leftReasons": "Financial reasons",
    "type": "For Admission",
    "CreatedOn": "15.Jul.2021"
  },
  {
     id: 4,
    "records": "select",
    "leftReasons": "Health issues",
    "type": "For Admission",
    "CreatedOn": "20.Oct.2022"
  },
  {
     id: 5,
    "records": "select",
    "leftReasons": "Family relocation",
    "type": "For Admission",
    "CreatedOn": "25.Dec.2023"
  }
]



const LeftReason = () => {
  return (
    <>
    <ParamTable columns={tabHeadings} data={data} />
    </>
  )
}

export default LeftReason