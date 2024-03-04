import React from 'react'
import ParamTable from 'views/common-section/ParamTable';
const data=[];

const tableHeading=[
  {
      id:1,
      tabHeading:"Records"
  },
  {
    id:2,
    tabHeading:"Concession"
  },
  {
    id:3,
    tabHeading:"Category"
  },
  {
    id:4,
    tabHeading:"Academic"
  },
  {
  id:5,
  tabHeading:"Year Upto"
 },{
  id:6,
  tabHeading:"Approval"
 },{
  id:7,
  tabHeading:"Email"
 },{
  id:8,
  tabHeading:"Approval Based"
 },
 {
  id:9,
  tabHeading:"Concession Type"
 },{
  id:10,
  tabHeading:"Created by"
 },{
  id:11,
  tabHeading:"Created On"
 }
]

const ConcessionCategory = () => {
  return (
    <>
    <ParamTable columns={tableHeading} data={data}/>
    </>
  )
}

export default ConcessionCategory;


