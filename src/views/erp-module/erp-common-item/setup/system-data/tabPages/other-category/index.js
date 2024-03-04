import React from 'react'
import ParamTable from 'views/common-section/ParamTable';

const tableHeading=[
  {
      id:1,
      tabHeading:"Records"
  },
  {
    id:2,
    tabHeading:"Other"
  },
  {
    id:3,
    tabHeading:"Category"
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

const data=[];

const OtherCategory = () => {
  return (
    <>
      <ParamTable columns={tableHeading} data={data}/>
    </>
  )
}

export default OtherCategory