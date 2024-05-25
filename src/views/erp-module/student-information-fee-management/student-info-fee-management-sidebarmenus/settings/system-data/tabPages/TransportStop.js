import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, TextField } from '@mui/material';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings = [
  {
    id: 1,
    tabHeading: "Transport Stop"
  },
  {
    id: 2,
    tabHeading: "Distance(in Kms)"
  },
  {
    id: 3,
    tabHeading: "Pick Time"
  },
  {
    id: 4,
    tabHeading: "Drop Time"
  }, {
    id: 5,
    tabHeading: "Academic Year Upto"
  },
  {
    id: 7,
    tabHeading: "Created by"
  },
  {
    id: 8,
    tabHeding: "Created On"
  },
  {
    id:9,
    tabHeading:"Action"
  }
];


const data = [
  {
    "transportStop": "Delhi Cantt",
    "Distance (in Kms)": 12,
    "pickTime": "8:15am",
    "DropTime": "8:50am",
    "academicYear": "2024-2025",
    "createdBy": "Umang Kumar",
    "createdOn": "08.Feb.2024"
  },
  {
    "transportStop": "New Delhi",
    "Distance (in Kms)": 15,
    "pickTime": "7:45am",
    "DropTime": "8:30am",
    "academicYear": "2024-2025",
    "createdBy": "Anita Sharma",
    "createdOn": "09.Feb.2024"
  },
  {
    "transportStop": "Gurgaon",
    "Distance (in Kms)": 20,
    "pickTime": "7:30am",
    "DropTime": "9:00am",
    "academicYear": "2024-2025",
    "createdBy": "Rajesh Singh",
    "createdOn": "10.Feb.2024"
  },
  {
    "transportStop": "Noida",
    "Distance (in Kms)": 25,
    "pickTime": "7:00am",
    "DropTime": "8:45am",
    "academicYear": "2024-2025",
    "createdBy": "Priya Verma",
    "createdOn": "11.Feb.2024"
  },
  {
    "transportStop": "Faridabad",
    "Distance (in Kms)": 30,
    "pickTime": "6:45am",
    "DropTime": "8:20am",
    "academicYear": "2024-2025",
    "createdBy": "Sanjay Gupta",
    "createdOn": "12.Feb.2024"
  }
]



const DrawerContent = ({ toggleDrawer, handleChange, name,classDetails }) =>{
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">{name}</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px",display:"flex",flexDirection:"column",gap:"20px" }}>
                    <TextField id={name} label="Transport Stop" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                           
                    <TextField id={name} label="Distance (in Kms)" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                    <TextField id={name} label="Pick Time" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                    <TextField id={name} label="Drop Time" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                    <ParameterizedAutoComplete option={classDetails} id="Wing"
                     label="Academic Year Upto" onChange={(event, newData) => 
                     handleChange("entryCode", newData)} />
                </Box>
            </Box>
        </>
    );
};



const TransportStop = ({toggleAddDrawer, toggleDrawer }) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  )
}

export default TransportStop;