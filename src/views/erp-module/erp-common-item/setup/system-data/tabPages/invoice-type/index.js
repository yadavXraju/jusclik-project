import React from 'react'
import ParamTable from 'views/common-section/ParamTable';
import {Box} from '@mui/material'

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
    tabHeading:"Applicable Pay Mode (Only For Periodic Bills)"
  },
  {
    id:17,
    tabHeading:"Is Advance Payment (Next Session)"
  },
  {
    id:18,
    tabHeading:"Created by"
  },
  {
    id:19,
    tabHeading:"Created On"
  }
]

const data = [
  {
    "Records": "Roo1",
    "InvoiceTypeRestricted": "Type1",
    "FeePeriodRequired": "Period1",
    "InvoiceType": "Type1",
    "UnSelectAllHeads": "No",
    "RefundVoucher": "Voucher1",
    "CalculateLateFine": "Yes",
    "CreateMultipleInvoicesInADay": "Yes",
    "IsRegistrationInvoiceType": "No",
    "DoNotForwardBalance": "No",
    "DoNotForwardBalanceOfUnpaidBillsOnly": "No",
    "WillHoldPreviousBalance": "Yes",
    "CreateZeroBillsWithFeePeriod": "No",
    "AutoAdjustByAdjEntry": "Yes",
    "ShowNoOfDaysTimesHead": "7",
    "AmountToBeCharged": "Amount1",
    "ApplicablePayMode": "Mode1",
    "IsAdvancePaymentNextSession": "No"
  },
  {
    "Records": "Roo2",
    "InvoiceTypeRestricted": "Type2",
    "FeePeriodRequired": "Period2",
    "InvoiceType": "Type2",
    "UnSelectAllHeads": "Yes",
    "RefundVoucher": "Voucher2",
    "CalculateLateFine": "No",
    "CreateMultipleInvoicesInADay": "No",
    "IsRegistrationInvoiceType": "Yes",
    "DoNotForwardBalance": "Yes",
    "DoNotForwardBalanceOfUnpaidBillsOnly": "Yes",
    "WillHoldPreviousBalance": "No",
    "CreateZeroBillsWithFeePeriod": "Yes",
    "AutoAdjustByAdjEntry": "No",
    "ShowNoOfDaysTimesHead": "5",
    "AmountToBeCharged": "Amount2",
    "ApplicablePayMode": "Mode2",
    "IsAdvancePaymentNextSession": "Yes"
  },
  {
    "Records": "Roo3",
    "InvoiceTypeRestricted": "Type3",
    "FeePeriodRequired": "Period3",
    "InvoiceType": "Type3",
    "UnSelectAllHeads": "No",
    "RefundVoucher": "Voucher3",
    "CalculateLateFine": "Yes",
    "CreateMultipleInvoicesInADay": "Yes",
    "IsRegistrationInvoiceType": "No",
    "DoNotForwardBalance": "No",
    "DoNotForwardBalanceOfUnpaidBillsOnly": "No",
    "WillHoldPreviousBalance": "Yes",
    "CreateZeroBillsWithFeePeriod": "No",
    "AutoAdjustByAdjEntry": "Yes",
    "ShowNoOfDaysTimesHead": "10",
    "AmountToBeCharged": "Amount3",
    "ApplicablePayMode": "Mode3",
    "IsAdvancePaymentNextSession": "No"
  },
  {
    "Records": "Roo4",
    "InvoiceTypeRestricted": "Type4",
    "FeePeriodRequired": "Period4",
    "InvoiceType": "Type4",
    "UnSelectAllHeads": "Yes",
    "RefundVoucher": "Voucher4",
    "CalculateLateFine": "No",
    "CreateMultipleInvoicesInADay": "No",
    "IsRegistrationInvoiceType": "Yes",
    "DoNotForwardBalance": "Yes",
    "DoNotForwardBalanceOfUnpaidBillsOnly": "Yes",
    "WillHoldPreviousBalance": "No",
    "CreateZeroBillsWithFeePeriod": "Yes",
    "AutoAdjustByAdjEntry": "No",
    "ShowNoOfDaysTimesHead": "3",
    "AmountToBeCharged": "Amount4",
    "ApplicablePayMode": "Mode4",
    "IsAdvancePaymentNextSession": "Yes"
  },
  {
    "Records": "Roo5",
    "InvoiceTypeRestricted": "Type5",
    "FeePeriodRequired": "Period5",
    "InvoiceType": "Type5",
    "UnSelectAllHeads": "No",
    "RefundVoucher": "Voucher5",
    "CalculateLateFine": "Yes",
    "CreateMultipleInvoicesInADay": "Yes",
    "IsRegistrationInvoiceType": "No",
    "DoNotForwardBalance": "No",
    "DoNotForwardBalanceOfUnpaidBillsOnly": "No",
    "WillHoldPreviousBalance": "Yes",
    "CreateZeroBillsWithFeePeriod": "No",
    "AutoAdjustByAdjEntry": "Yes",
    "ShowNoOfDaysTimesHead": "15",
    "AmountToBeCharged": "Amount5",
    "ApplicablePayMode": "Mode5",
    "IsAdvancePaymentNextSession": "No"
  }
];

  
 
const InvoiceType = () => {
  return (
    <Box sx={{width:"100%",overflowX:"auto"}}>
      <ParamTable columns={tableHeading} data={data} />
    </Box>
  )
}

export default InvoiceType;

	