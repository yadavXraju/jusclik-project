import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';



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
export default DrawerContent;