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
import Grid from '@mui/material/Grid';
import TextArea from 'antd/es/input/TextArea';
import ButtonGroup from '@mui/material/ButtonGroup';


const useStyles = makeStyles({
    datePicker: {
        width: '100%',
        fontSize: '0.5rem', // Adjust font size to make it smaller
    },
});

export default function LeaveDrawer() {
    const [state, setState] = React.useState({
        right: false,
        leaveFrom: null,
        leaveTo: null,
        leaveDuration: null,
    });
    //const [storedLeaveFromDate, setStoredLeaveFromDate] = React.useState(null);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };



    const handleLeaveFromChange = (date) => {
        setState({
            ...state,
            leaveFrom: date,
            leaveDuration: calculateLeaveDuration(date, state.leaveTo),
        });
        //setStoredLeaveFromDate(date);
    };
    const handleLeaveToChange = (date) => {
        setState({
            ...state,
            leaveTo: date,
            leaveDuration: calculateLeaveDuration(state.leaveFrom, date),
        });
    };

    const classes = useStyles();

    // ========== calculate leave ============
    const calculateLeaveDuration = (startDate, endDate) => {
        if (startDate && endDate) {
            const diffInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
            return diffInDays;
        }
        return null;
    };

    // ============ render full day / custom =============
    const [selectedButton, setSelectedButton] = React.useState(1);
    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };


    const form = (
        <Box
            sx={{ width: 650, padding: 2 }}
            role="presentation"
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h4'>Request Leave</Typography>
                <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                    Close
                </Button>
            </Box>
            <form>
                <Box sx={{ padding: 2 }}>

                    <Box mb={4} p={1} sx={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Box p={.5}>Leave From</Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    className={classes.datePicker}
                                    value={state.leaveFrom}
                                    onChange={handleLeaveFromChange}
                                />
                            </LocalizationProvider>
                        </Box>

                        <Box >{state.leaveDuration > 0 ? state.leaveDuration+ 'days' : ''} </Box>

                        <Box>
                            <Box p={.5}>Leave To</Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    className={classes.datePicker}
                                    value={state.leaveTo}
                                    onChange={handleLeaveToChange}
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
                                <MenuItem value={10}>Casual Leave</MenuItem>
                                <MenuItem value={20}>Earned Leave</MenuItem>
                                <MenuItem value={30}>Medical Leave</MenuItem>
                                <MenuItem value={30}>Festival Leave</MenuItem>
                                <MenuItem value={30}>Leave Without Pay</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>





                    <Box>
                        <ButtonGroup sx={{padding:'5px', background:'#d3cfcf'}} aria-label="Basic button group">
                            <Button sx={{
                                color: selectedButton === 1 ? 'black' : 'black',
                                background: selectedButton === 1 ? '#ffffff' : '#d3cfcf',
                                border:'none',
                                '&:hover': {
                                    border:'none'
                                  },
                            }} onClick={() => handleButtonClick(1)}>Full Day</Button>
                            <Button sx={{
                                color: selectedButton === 2 ? 'black' : 'black',
                                background: selectedButton === 2 ? '#ffffff' : '#d3cfcf',
                                border:'none',
                                '&:hover': {
                                    border:'none'
                                  },
                            }} onClick={() => handleButtonClick(2)}>Custom</Button>
                        </ButtonGroup>

                        {selectedButton === 1 && (
                            <Box mt={2} p={1}>
                               
                            </Box>
                        )}

                        {selectedButton === 2 && (
                            <Box mb={2}  mt={2} p={1} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={6}>
                                        <Box>
                                        <Box p={.5}>From: {} </Box>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Select"
                                                >
                                                    <MenuItem value={10}>Short Leave(SL)</MenuItem>
                                                    <MenuItem value={20}>Half Day 1 Leave(H1)</MenuItem>
                                                    <MenuItem value={30}>Half Day 2 Leave(H2)</MenuItem>
                                                    <MenuItem value={30}>On Duty(OD)</MenuItem>
                                                    <MenuItem value={30}>Leave(LV)</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Box>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Select"
                                                >
                                                    <MenuItem value={10}>Short Leave(SL)</MenuItem>
                                                    <MenuItem value={20}>Half Day 1 Leave(H1)</MenuItem>
                                                    <MenuItem value={30}>Half Day 2 Leave(H2)</MenuItem>
                                                    <MenuItem value={30}>On Duty(OD)</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Box>
                        )}
                    </Box>









                    <Box pb={2}>
                        <Box p={.5}>Note</Box>
                        <TextArea
                            rows={4} // Number of rows to display
                            placeholder="Enter your text here..."
                            fullWidth // Take up full width of the container
                            variant="outlined" // Use outlined variant
                        />
                    </Box>

                    <Box>
                        <TextField size='small' label="Enter Text" variant="outlined" fullWidth />
                    </Box>
                    <Box sx={{ padding: 2 }}>
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                        <Button sx={{ alignSelf: 'flex-end' }}>
                            Cancal
                        </Button>
                    </Box>
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
