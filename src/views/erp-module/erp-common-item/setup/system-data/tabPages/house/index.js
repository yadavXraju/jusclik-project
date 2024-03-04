import React from 'react'
import ParamTable from 'views/common-section/ParamTable';

const tableHeading=[
  {
   id:0,
   tabHeading:"Records"
  },
  {
   id:1,
   tabHeading:"Created by"
  },{
  id:2,
  tabHeading:"Created On"
  }
]

const data=[];
// 22House	Created by	Created On
const House = () => {
  return (
    <>
    <ParamTable columns={tableHeading} data={data} />
    </>
  )
}

export default House