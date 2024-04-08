import React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import ParameterizedAutoComplete from 'views/common-section/ParamAutoComplete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
const classDetails = ['a', 'b', 'c', 'd', 'e'];

const DrawerContent = ({ toggleDrawer, handleChange, name}) => {
    return (
        <>
            <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                    <Typography variant="h4">Student Documents Restricted</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <TextField id={name} label="Student Documents {Restricted}" variant="outlined"
                        inputProps={{ maxLength: 10 }}
                        onChange={(event) => handleChange("Wing", event.target.value)}
                        fullWidth
                        autoComplete="off" />
                    <FormControlLabel
                        control={<Checkbox checked={classDetails?.show} onChange={handleChange} />}
                        label="Online Doc"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={classDetails?.show} onChange={handleChange} />}
                        label="Offline Doc"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={classDetails?.show} onChange={handleChange} />}
                        label="Show On Parent"
                    />
                    <ParameterizedAutoComplete option={classDetails} id="Single Parent?" label="Wing" onChange={(event, newData) => handleChange("entryCode", newData)} />
                    <ParameterizedAutoComplete option={classDetails} id="Academic Year Upto" label="Academic Year Upto
                     " onChange={(event, newData) => handleChange("entryCode", newData)} />
                    <ParameterizedAutoComplete option={classDetails} id="Academic Year From" label="Academic Year From
                    " onChange={(event, newData) => handleChange("entryCode", newData)} />
                </Box>
            </Box>
        </>
    );
};
export default DrawerContent;