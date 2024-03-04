import React from 'react';
import ParamTable from 'views/common-section/ParamTable';

const tableHeading=[
  {
  id:0,
  tabHeading:"Records"
  },
  {
  id:1,
  tabHeading:"Section"
  },
  {
  id:2,
  tabHeading:"Create by"
  },
  {
  id:3,
  tabHeading:"Create On"
  }
  ]

const data=[ ]
const Section = () => {
  return (
   <>
   <ParamTable columns={tableHeading} data={data} />
   </> 
  )
}

export default Section;