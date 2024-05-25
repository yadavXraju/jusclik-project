import React from 'react'
import { Button, Typography, Box, TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings= [
  {
    id: 2,
    tabHeading: "Transport Slab"
  },
  {
    id: 3,
    tabHeading: "Academic Year Upto"
  },
  {
    id: 4,
    tabHeading: "Created by"
  }, {
    id: 5,
    tabHeading: "Created On"
  },
  {
    id:6,
    tabHeading:"Action"
  },
];

const data = [
  {
    id: 1,
    "TransportSlab": "Slab A",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:00:00Z"
  },
  {
    id: 2,
    "TransportSlab": "Slab B",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:15:00Z"
  },
  {
    id: 3,
    "TransportSlab": "Slab C",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:30:00Z"
  },
  {
    id: 4,
    "TransportSlab": "Slab D",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T12:45:00Z"
  },
  {
    id: 5,
    "TransportSlab": "Slab E",
    "AcademicYear": "2023-2024",
    "CreatedBy": "Admin",
    "CreatedOn": "2024-03-04T13:00:00Z"
  }];

  
const DrawerContent = ({ toggleDrawer, handleChange, name,classDetails }) =>{
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Transport Slab</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px",display:"flex",flexDirection:"column",gap:"20px" }}>
                    <TextField id={name} label="Transport Slab" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                    <ParameterizedAutoComplete option={classDetails} id="Academic Year Upto" label="Academic Year Upto" 
                    onChange={(event, newData) => handleChange("entryCode", newData)} />
                </Box>
            </Box>
        </>
    );
};


const TransportSlab = ({toggleAddDrawer,toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
  )
}

export default TransportSlab