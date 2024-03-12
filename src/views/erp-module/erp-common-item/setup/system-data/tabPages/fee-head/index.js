import React from 'react'
import ParamTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';
import DrawerContent from './DrawerContent';
import Drawer from '@mui/material/Drawer';
const tableHeadings = [
   {
    id: 2,
    tabHeading: "Fee Head"
  }, {
    id: 3,
    tabHeading: "Fee Group"
  }, {
    id: 4,
    tabHeading: "Fee Type"
  }, {
    id: 5,
    tabHeading: "Allow Adjustment"
  }, {
    id: 6,
    tabHeading: "Optional Head Display On Student Master"
  },
  {
    id: 7,
    tabHeading: "Ledger Account"
  }, {
    id: 8,
    tabHeading: "Academic Year Upto"
  }, {
    id: 9,
    tabHeading: "Tally Ledger Name"
  },{
    id:10,
    tabHeading:"Action"
  }
]

const data =
  [
    {
      "id": 1,
      "feeHead": "Tuition Fee",
      "feeGroup": "Group A",
      "feeType": "Regular",
      "allowAdjustment": true,
      "optionalHead": "Exam Fee",
      "ledgeerAccount": "12345",
      "academicYear": "2023-2024",
      "tallyLedger": "Tuition_Fee"
    },
    {
      "id": 2,
      "feeHead": "Library Fee",
      "feeGroup": "Group B",
      "feeType": "Regular",
      "allowAdjustment": false,
      "optionalHead": "Sports Fee",
      "ledgeerAccount": "23456",
      "academicYear": "2023-2024",
      "tallyLedger": "Library_Fee"
    },
    {
      "id": 3,
      "feeHead": "Transportation Fee",
      "feeGroup": "Group C",
      "feeType": "Regular",
      "allowAdjustment": true,
      "optionalHead": "Fine",
      "ledgeerAccount": "34567",
      "academicYear": "2023-2024",
      "tallyLedger": "Transportation_Fee"
    },
    {
      "id": 4,
      "feeHead": "Hostel Fee",
      "feeGroup": "Group D",
      "feeType": "Regular",
      "allowAdjustment": false,
      "optionalHead": "Mess Fee",
      "ledgeerAccount": "45678",
      "academicYear": "2023-2024",
      "tallyLedger": "Hostel_Fee"
    },
    {
      "id": 5,
      "feeHead": "Admission Fee",
      "feeGroup": "Group E",
      "feeType": "One-time",
      "allowAdjustment": false,
      "optionalHead": "",
      "ledgeerAccount": "56789",
      "academicYear": "2023-2024",
      "tallyLedger": "Admission_Fee"
    }
  ]


const FeeHead = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default FeeHead