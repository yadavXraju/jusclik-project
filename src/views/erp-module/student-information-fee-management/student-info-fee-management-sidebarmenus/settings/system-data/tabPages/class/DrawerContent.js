import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';



const DrawerContent = ({ toggleDrawer, handleChange, name,classDetails }) =>{
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Class</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px",display:"flex",flexDirection:"column",gap:"20px" }}>
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
export default DrawerContent;