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
    tableHeading:"Invoice Type"
  },
  {
    id:4,
    tableHeading:"UnSelect All Heads"
  },
  {
    id:5,
    tableHeading:"Refund Voucher"
  },
  {
    id:6,
    tableHeading:"Calculate Late Fine"
  },
  {
    id:7,
    tableHeading:"Create Multiple Invoices in a day"
  },
  {
    id:8,
    tableHeading:"Calculate Late Fine"
  },
  {
    id:9,
    tableHeading:"Is Registration Invoice Type"
  },
  {
    id:10,
    tableHeading:"Do Not Forward Balance"
  },{
    id:11,
    tableHeading:"Do Not Forward Balance of Unpaid Bills Only"
  },
  {
    id:12,
    tableHeading:"Will Hold Previous Balance"
  },{
    id:13,
    tableHeading:"Create Zero Bills with Fee Period"
  },
  {
    id:14,
    tableHeading:"Auto Adjust By Adj Entry"
  },
  {
    id:15,
    tableHeading:"Show No of Days / Times Head Amount to be charged"
  },
  {
    id:16,
    tableHeading:"Show No of Days / Times Head Amount to be charged"
  },
  {
    id:17,
    tableHeading:"Applicable Pay Mode (Only For Periodic Bills)"
  },
  {
    id:18,
    tableHeading:"Is Advance Payment (Next Session)"
  },
  {
    id:19,
    tableHeading:"Created by"
  },
  {
    id:20,
    tableHeading:"Created On"
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

	