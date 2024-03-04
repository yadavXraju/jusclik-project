import React from 'react'
import ParamTable from 'views/common-section/ParamTable';
const tableHeading=[
  {
    id:0,
    tabHeading:"Records"
  },{
    id:1,
    tabHeading:"Cheque"
  },{
    id:2,
    tabHeading:"Category"
  },{
    id:3,
    tabHeading:"Created by"
  },{
  id:4,
  tabHeading:"Created On"
  }
]

const  data=[];

const ChequeCategory = () => {
  return (
   <>
   <ParamTable columns={tableHeading} data={data}/>
   
   </>
  )
}

export default ChequeCategory;