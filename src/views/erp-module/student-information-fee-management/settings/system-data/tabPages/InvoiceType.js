import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings = [
  {
    id: 1,
    tabHeading: "Invoice Type  {Restricted}"
  },
  {
    id: 2,
    tabHeading: "Fee Period Required"
  },
  {
    id: 3,
    tabHeading: "Invoice Type"
  },
  {
    id: 4,
    tabHeading: "UnSelect All Heads"
  },
  {
    id: 5,
    tabHeading: "Refund Voucher"
  },
  {
    id: 6,
    tabHeading: "Calculate Late Fine"
  },
  {
    id: 7,
    tabHeading: "Create Multiple Invoices in a day"
  },
  {
    id: 8,
    tabHeading: "Calculate Late Fine"
  },
  {
    id: 9,
    tabHeading: "Is Registration Invoice Type"
  },
  {
    id: 10,
    tabHeading: "Do Not Forward Balance"
  }, {
    id: 11,
    tabHeading: "Do Not Forward Balance of Unpaid Bills Only"
  },
  {
    id: 12,
    tabHeading: "Will Hold Previous Balance"
  }, {
    id: 13,
    tabHeading: "Create Zero Bills with Fee Period"
  },
  {
    id: 14,
    tabHeading: "Auto Adjust By Adj Entry"
  },
  {
    id: 15,
    tabHeading: "Show No of Days / Times Head Amount to be charged"
  },
  {
    id: 16,
    tabHeading: "Applicable Pay Mode (Only For Periodic Bills)"
  },
  {
    id: 17,
    tabHeading: "Is Advance Payment (Next Session)"
  },
  {
    id: 18,
    tabHeading: "Created by"
  },
  {
    id: 19,
    tabHeading: "Created On"
  },
  {
    id: 20,
    tabHeading: "Action"
  }
]

const data = [
  {
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
    "IsAdvancePaymentNextSession": "No",
    "creatdOn": "19/03/2022",
    "createdBy": "Admin"
  },
  {
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
    "IsAdvancePaymentNextSession": "Yes",
    "creatdOn": "19/03/2022",
    "createdBy": "Admin"
  },
  {
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
    "IsAdvancePaymentNextSession": "No",
    "creatdOn": "19/03/2022",
    "createdBy": "Admin"
  },
  {
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
    "IsAdvancePaymentNextSession": "Yes",
    "creatdOn": "19/03/2022",
    "createdBy": "Admin"
  },
  {
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
    "IsAdvancePaymentNextSession": "No",
    "creatdOn": "19/03/2022",
    "createdBy": "Admin"
  }
];




const drawerData = [
  {
    id: 1,
    description: "Fee Period Required",
    isSelected: false
  },
  {
    id: 2,
    description: "UnSelect All Heads",
    isSelected: false
  },
  {
    id: 3,
    description: "Refund Voucher",
    isSelected: false
  },
  {
    id: 4,
    description: "Calculate Late Fine",
    isSelected: false
  },
  {
    id: 5,
    description: "Create Multiple Invoices in a day",
    isSelected: false
  },
  {
    id: 6,
    description: "Is Registration Invoice Type",
    isSelected: false
  },
  {
    id: 7,
    description: "Do Not Forward Balance",
    isSelected: false
  },
  {
    id: 8,
    description: "Do Not Forward Balance of Unpaid Bills Only",
    isSelected: false
  },
  {
    id: 9,
    description: "Will Hold Previous Balance",
    isSelected: false
  },
  {
    id: 10,
    description: "Create Zero Bills with Fee Period",
    isSelected: false
  },
  {
    id: 11,
    description: "Auto Adjust By Adj Entry",
    isSelected: false
  },
  {
    id: 12,
    description: "Show No of Days / Times Head Amount to be charged",
    isSelected: false
  },
  {
    id: 13,
    description: "Create Bill With Receipt (Activity Charges)",
    isSelected: false
  },
  {
    id: 14,
    description: "Applicable Pay Mode (Only For Periodic Bills)",
    isSelected: false
  },
  {
    id: 15,
    description: "Is Advance Payment (Next Session)",
    isSelected: false
  }
];



const DrawerContent = ({ toggleDrawer, handleChange }) => {
  return (
    <>
      <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Invoice Type Restricted</Typography>
          <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "-10px" }}>
          <TextField id={name} label="Invoice Type {Restricted}" variant="outlined"
            inputProps={{ maxLength: 10 }}
            onChange={(event) => handleChange("Wing", event.target.value)}
            fullWidth
            autoComplete="off" />
          {
            drawerData && drawerData.map((item) =>
              <FormControlLabel
                key={item?.id} control={<Checkbox checked={data?.isSelected} onChange={handleChange} />}
                label={item?.description}
              />
            )
          }
        </Box>
      </Box>
    </>
  );
};


const InvoiceType = ({ toggleAddDrawer, toggleDrawer }) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default InvoiceType;

