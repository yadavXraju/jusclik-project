import * as React from 'react';
import { Box, Drawer, Button, Typography } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
//import { TextField } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AssetsRequestForm from './AssetsRequestForm';

export default function AssetsRequestDrawer() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [state, setState] = React.useState({
    right: false,
    replacementDrawerOpen: false 
  });

  const toggleDrawer = (anchor, open, popupState) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    if (popupState && popupState.close) {
      popupState.close();
    }
  };

  const toggleReplacementDrawer = (anchor, open, popupState) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, replacementDrawerOpen: open });
    if (popupState && popupState.close) {
      popupState.close();
    }
  };

  const isMobile = window.innerWidth < 600;
  const useStyles = makeStyles({
    popover: {
      borderRadius: '0px'
    }
  });
  const classes = useStyles();

  const form = (
    <Box sx={{ width: isMobile ? '100%' : 650, padding: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <Typography variant="h4">Request New Asset</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <AssetsRequestForm/>
    </Box>
  );

  const Replacementform = (
    <Box sx={{ width: isMobile ? '100%' : 650, padding: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <Typography variant="h4">Replacement Request</Typography>
        <Button onClick={toggleReplacementDrawer('replacementDrawerOpen', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <form>
        <Box pt={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box pb={2}>
          <Box p={0.5}>Note</Box>
          <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
        </Box>
        <Box sx={{ padding: 2 }}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );

  return (
    <div>
      <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <Button sx={{ margin: '0px' }} {...bindTrigger(popupState)} variant="outlined" startIcon={<AddOutlinedIcon />}>
                Asset Request
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                classes={{ paper: classes.popover }}
              >
                <Box sx={{ display: 'Grid' }}>
                  <Button
                    sx={{ color: 'black', borderBottom: '1px dotted #ccc', borderRadius: '0px', width: '100%' }}
                    onClick={toggleDrawer('right', true, popupState)}
                  >
                    New Request
                  </Button>
                  <Button sx={{ color: 'black' }} onClick={toggleReplacementDrawer('replacementDrawerOpen', true, popupState)}>
                    Replacement Request
                  </Button>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      </Typography>

      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {form}
      </Drawer>

      {/* Replacement Drawer */}
      <Drawer anchor="right" open={state.replacementDrawerOpen} onClose={toggleReplacementDrawer('replacementDrawerOpen', false)}>
        {Replacementform}
      </Drawer>
    </div>
  );
}
