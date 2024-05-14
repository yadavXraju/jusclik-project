import React from 'react';
import { Box, Drawer, Button, Typography, IconButton } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import EmployeeExitForm from './EmployeeExitForm';


export default function ExitEmployee() {
  const [state, setState] = React.useState({
    InitiateEmployeeExit: false
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


  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }} {...bindTrigger(popupState)}>
              <MoreVertTwoToneIcon />
            </IconButton>
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
            >
              <Typography sx={{ p: 1, display: 'Grid' }}>
                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }} onClick={toggleDrawer('InitiateEmployeeExit', true, popupState)}>Initiate Employee Exit</Button>
                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Bulk Editing</Button>
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>

      {/* ====== Initiate Withdrawal Drawer ======= */}
      <Drawer anchor="right" open={state.InitiateEmployeeExit} onClose={toggleDrawer('InitiateEmployeeExit', false)}>
        {/* {form} */}
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Initiate On Board</Typography>
            <Button onClick={toggleDrawer('InitiateEmployeeExit', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          {/* ========= import Initiate Withdrawal Form ========== */}
          <EmployeeExitForm />
        </Box>
      </Drawer>
    </>
  );
}
