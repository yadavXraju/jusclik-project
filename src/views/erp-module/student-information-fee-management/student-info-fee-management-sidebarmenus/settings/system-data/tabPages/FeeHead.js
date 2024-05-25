import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ParamTable from 'components/table-data-grid/Table';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';


const classDetails = ['a', 'b', 'c', 'd']
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
  }, {
    id: 10,
    tabHeading: "Action"
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

const DrawerContent = ({ toggleDrawer, handleChange, name }) => {
  return (
    <>
      <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">{name}</Typography>
          <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <TextField id={name} label="Class" variant="outlined"
            inputProps={{ maxLength: 10 }}
            onChange={(event) => handleChange("Wing", event.target.value)}
            fullWidth
            autoComplete="off" />
          <ParameterizedAutoComplete option={classDetails} id="Wing" label="Wing" onChange={(event, newData) => handleChange("entryCode", newData)} />
          <ParameterizedAutoComplete option={classDetails} id="Academic Year Upto" label="Academic Year Upto
  " onChange={(event, newData) => handleChange("entryCode", newData)} />
          <TextField id={name} label="Class Initials" variant="outlined"
            inputProps={{ maxLength: 10 }}
            onChange={(event) => handleChange("Wing", event.target.value)}
            fullWidth
            autoComplete="off" />
          <TextField id={name} label="Group Name" variant="outlined"
            inputProps={{ maxLength: 10 }}
            onChange={(event) => handleChange("Wing", event.target.value)}
            fullWidth
            autoComplete="off" />
          <FormControlLabel
            control={<Checkbox checked={classDetails?.show} onChange={handleChange} />}
            label="Do Not Show On Website Enquiry Page"
          />
        </Box>
      </Box>
    </>
  );
};


const FeeHead = ({ toggleAddDrawer, toggleDrawer }) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default FeeHead