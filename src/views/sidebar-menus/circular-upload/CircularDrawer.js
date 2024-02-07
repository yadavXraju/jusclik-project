
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



export default function CircularDrawer() {
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
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const form = (
        <Box
            sx={{ width: 400, padding: 2 }}
            role="presentation"
        >
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                Close
            </Button>
            <form>
                <Box sx={{ padding: 2 }}>
                    <TextField size='small' label="Enter Text" variant="outlined" fullWidth />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{marginTop:'5px'}}>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange} sx={{marginTop:'5px'}}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
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
            <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>New Circular</Button>
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