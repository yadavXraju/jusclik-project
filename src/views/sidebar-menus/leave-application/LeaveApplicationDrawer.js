import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';




const useStyles = makeStyles({
    datePicker: {
        width: '100%',
        fontSize: '0.5rem', // Adjust font size to make it smaller
    },
});

export default function LeaveDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // ========= for select List ==========
    // const [age, setAge] = React.useState('');
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    const classes = useStyles();

    const form = (
        <Box
            sx={{ width: 650, padding: 2 }}
            role="presentation"
        >
            <Box sx={{display:'flex', justifyContent:'space-between' }}>  
                <Typography variant='h4'>Request Leave</Typography>
                <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                    Close
                </Button>
            </Box>
            <form>
                <Box sx={{ padding: 2 }}>


                    <Box mb={4} p={1} sx={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', justifyContent: 'center',alignItems:'center' }}>
                        <Box>
                            <Box p={.5}>Leave From</Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    className={classes.datePicker}
                                />
                            </LocalizationProvider>
                        </Box>

                        <Box p={2} >6.5 days</Box>

                        <Box>
                            <Box p={.5}>Leave To</Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    className={classes.datePicker}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Box>

                    <Box mb={2}>
                        <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label">Select Type Of Leave You Want to Apply</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Select Type Of Leave You Want to Apply"
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Short Leave(SL)</MenuItem>
                                <MenuItem value={20}>Half Day 1 Leave(H1)</MenuItem>
                                <MenuItem value={30}>Half Day 2 Leave(H2)</MenuItem>
                                <MenuItem value={30}>On Duty(OD)</MenuItem>
                                <MenuItem value={30}>Leave(LV)</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* <Box mb={2} p={1} sx={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', justifyContent: 'center',alignItems:'center' }}>
                        <Box>
                            <Box p={.5}>Leave From</Box>
                            <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label">Select Type Of Leave You Want to Apply</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Type Of Leave You Want to Apply"
                            >
                                <MenuItem value={10}>Short Leave(SL)</MenuItem>
                                <MenuItem value={20}>Half Day 1 Leave(H1)</MenuItem>
                                <MenuItem value={30}>Half Day 2 Leave(H2)</MenuItem>
                                <MenuItem value={30}>On Duty(OD)</MenuItem>
                                <MenuItem value={30}>Leave(LV)</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>

                        <Box>
                            <Box p={.5}>Leave To</Box>
                            <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label">Select Type Of Leave You Want to Apply</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Type Of Leave You Want to Apply"
                            >
                                <MenuItem value={10}>Short Leave(SL)</MenuItem>
                                <MenuItem value={20}>Half Day 1 Leave(H1)</MenuItem>
                                <MenuItem value={30}>Half Day 2 Leave(H2)</MenuItem>
                                <MenuItem value={30}>On Duty(OD)</MenuItem>
                                <MenuItem value={30}>Leave(LV)</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </Box> */}



                    <Box>
                        <TextField size='small' label="Enter Text" variant="outlined" fullWidth />
                    </Box>
                </Box>
                <Box sx={{ padding: 2 }}>
                    <Button type="submit" variant="contained" fullWidth>
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>Leave Application</Button>
            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}
            >
                {form}
            </Drawer>
        </div>
    );
}