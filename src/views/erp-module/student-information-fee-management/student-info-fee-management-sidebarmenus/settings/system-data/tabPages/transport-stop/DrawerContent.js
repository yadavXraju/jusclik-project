import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import ParameterizedAutoComplete from 'components/ParamAutoComplete';

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
export default DrawerContent;