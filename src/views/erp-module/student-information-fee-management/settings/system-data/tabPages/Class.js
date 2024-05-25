import React from 'react';
import Drawer from '@mui/material/Drawer';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Typography, Box, TextField } from '@mui/material';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import ParamTable from 'components/table-data-grid/Table';



const tableHeadings = [
  {
    id: 2,
    tabHeading: "Class",
  },
  {
    id: 3,
    tabHeading: "Wing",
  },
  {
    id: 4,
    tabHeading: "Academic Year Upto"
  },
  {
    id: 5,
    tabHeading: "Class Initials"
  },
  {
    id: 6,
    tabHeading: "Group Name"
  },
  {
    id: 7,
    tabHeading: "Do Not Show On Website Enquiry Page"
  },
  {
    id: 8,
    tabHeading: "Created by"
  },
  {
    id: 9,
    tabHeading: "Created On"
  }, {
    id: 10,
    tabHeading: "Action"
  }
]

const classData = [
  {
    id: 1,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: 'Umang Kumar',
    createdOn: '09.Feb.2024'
  },
  {
    id: 2,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: 'Shardul Kumar',
    createdOn: '29.Sep.2023'
  },
  {
    id: 3,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  },
  {
    id: 4,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  },
  {
    id: 5,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  },
  {
    id: 6,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  },
  {
    id: 7,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  }
];


const DrawerContent = ({ toggleDrawer, handleChange, name, classDetails }) => {
  return (
    <>
      <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Class</Typography>
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


const Class = ({ toggleAddDrawer, toggleDrawer }) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={classData} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default Class

