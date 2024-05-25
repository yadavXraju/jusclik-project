import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ParamTable from 'components/table-data-grid/Table';

const tableHeadings = [
  {
    id: 2,
    tabHeading: "Nationality Restricted"
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
    nationality: "Afghan",
    createdOn: "09.Jan.2024"
  },
  {
    id: 1,
    nationality: "Inida ",
    createdOn: "09.Jan.2024"
  },
  {
    id: 1,
    nationality: "Pakistan",
    createdOn: "09.Jan.2024"
  },
  {
    id: 1,
    nationality: "Australia",
    createdOn: "09.Jan.2024"
  },
  {
    id: 1,
    nationality: "Bangladesh",
    createdOn: "09.Jan.2024"
  }
];



const DrawerContent = ({ toggleDrawer, handleChange, name }) =>{
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Nationality</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px",display:"flex",flexDirection:"column",gap:"20px" }}>
                    <TextField id={name} label="Nationality" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
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
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
  )
}

export default GatePass;