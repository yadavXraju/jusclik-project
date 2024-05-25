import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, TextField } from '@mui/material';
import ParamTable from 'components/table-data-grid/Table';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';

const classDetails = ['a', 'b', 'c', 'd', 'e'];

const tableHeadings=[
  {
   id:1,
   tabHeading:"Transport Route"
  },
  {
   id:2,
   tabHeading:"Academic Year Upto"
  },
  {
    id:4,
    tabHeading:"Created by"
  },
  {
    id:5,
    tabHeading:"Created On"
  },
  {
    id:6,
    tabHeading:"Action"
  }
]

const data=[
  {
    "id": 1,
    "transportRoute": "Route 1",
    "AcademicYearUpto": "2025-2026",
    "createBy": "John Doe",
    "createdOn": "2024-03-05"
  },
  {
    "id": 2,
    "transportRoute": "Route 2",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Jane Smith",
    "createdOn": "2024-03-05"
  },
  {
    "id": 3,
    "transportRoute": "Route 3",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Alice Johnson",
    "createdOn": "2024-03-05"
  },
  {
    "id": 4,
    "transportRoute": "Route 4",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Bob Brown",
    "createdOn": "2024-03-05"
  },
  {
    "id": 5,
    "transportRoute": "Route 5",
    "AcademicYearUpto": "2025-2026",
    "createBy": "Emma Wilson",
    "createdOn": "2024-03-05"
  }
];


const DrawerContent = ({ toggleDrawer, handleChange, name }) => {
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Transport Route</Typography>
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
                    <ParameterizedAutoComplete option={classDetails} id="Wing" label="Transport Route" onChange={(event, newData) => handleChange("entryCode", newData)} />
                </Box>
            </Box>
        </>
    );
};


const TransportRoute = ({ toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
     <ParamTable columns={tableHeadings} data={data}/>
     <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  )
}

export default TransportRoute