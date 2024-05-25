import React from 'react'
import { Button, Typography, Box, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Drawer from '@mui/material/Drawer';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings = [
  {
    id: 2,
    tabHeading: "Gate Pass Accompanied By"
  },
  {
    id: 3,
    tabHeading: "Enable Custom Remarks"
  },
  {
    id: 4,
    tabHeading: "Created by"
  },
  {
    id: 5,
    tabHeading: "Created On"
  },
  {
    id:6,
    tabHeading:"Action"
  }
]

const data = [
  {
    id: 1,
    gatePass: "Father",
    enableCustom: false,
    createdBy: "Aatur Bansal",
    createdOn: "09.Jan.2024"
  },
  {
    id: 2,
    gatePass: "Mother",
    enableCustom: true,
    createdBy: "Priya Sharma",
    createdOn: "10.Feb.2024"
  },
  {
    id: 3,
    gatePass: "Guardian",
    enableCustom: false,
    createdBy: "Rahul Singh",
    createdOn: "15.Mar.2024"
  },
  {
    id: 4,
    gatePass: "Parent",
    enableCustom: true,
    createdBy: "Anjali Gupta",
    createdOn: "20.Apr.2024"
  },
  {
    id: 5,
    gatePass: "Sibling",
    enableCustom: false,
    createdBy: "Siddharth Patel",
    createdOn: "25.May.2024"
  }
];


const DrawerContent = ({ toggleDrawer, handleChange, name,classDetails }) =>{
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Gate Pass Accompanied By</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px",display:"flex",flexDirection:"column",gap:"20px" }}>
                    <TextField id={name} label="Gate Pass Accompanied By" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                    <FormControlLabel
                        control={<Checkbox checked={classDetails?.show} onChange={handleChange} />}
                        label="Enable Custom Remarks"
                    />
                </Box>
            </Box>
        </>
    );
};


const GatePass = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default GatePass