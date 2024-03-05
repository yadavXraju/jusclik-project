import React from 'react'
import ParamTable from 'views/common-section/ParamTable';


const tableHeading=[
  {
    id:0,
    tabHeading:"Records"
  },
  {
    id:1,
    tabHeading:"Invoice Type  {Restricted}"
  },
  {
    id:2,
    tabHeading:"Fee Period Required"
  },
  {
    id:3,
    tabHeading:"Invoice Type"
  },
  {
    id:4,
    tabHeading:"UnSelect All Heads"
  },
  {
    id:5,
    tabHeading:"Refund Voucher"
  },
  {
    id:6,
    tabHeading:"Calculate Late Fine"
  },
  {
    id:7,
    tabHeading:"Create Multiple Invoices in a day"
  },
  {
    id:8,
    tabHeading:"Calculate Late Fine"
  },
  {
    id:9,
    tabHeading:"Is Registration Invoice Type"
  },
  {
    id:10,
    tabHeading:"Do Not Forward Balance"
  },{
    id:11,
    tabHeading:"Do Not Forward Balance of Unpaid Bills Only"
  },
  {
    id:12,
    tabHeading:"Will Hold Previous Balance"
  },{
    id:13,
    tabHeading:"Create Zero Bills with Fee Period"
  },
  {
    id:14,
    tabHeading:"Auto Adjust By Adj Entry"
  },
  {
    id:15,
    tabHeading:"Show No of Days / Times Head Amount to be charged"
  },
  {
    id:16,
    tabHeading:"Show No of Days / Times Head Amount to be charged"
  },
  {
    id:17,
    tabHeading:"Applicable Pay Mode (Only For Periodic Bills)"
  },
  {
    id:18,
    tabHeading:"Is Advance Payment (Next Session)"
  },
  {
    id:19,
    tabHeading:"Created by"
  },
  {
    id:20,
    tabHeading:"Created On"
  }
]

const data=[];
  
const InvoiceType = () => {
  return (
    <>
      <ParamTable columns={tableHeading} data={data} />
    </>
  )
}

export default InvoiceType;

	