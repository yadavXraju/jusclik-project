import React from 'react';
import { Box, Drawer, Button, Typography, IconButton } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import InitiateWithdrawal from './InitiateWithdrawal';

export default function PreviewLoginAndWithdrawalDrawer() {
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

  const Replacementform = (
    <Box sx={{ width: { xs: '100vw', sm: 450 }, padding: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <Typography variant="h4">Deactivate Login</Typography>
        <Button onClick={toggleReplacementDrawer('replacementDrawerOpen', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      {/* ========= import Deactivate Login Form ========== */}
    </Box>
  );

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
                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }} onClick={toggleDrawer('right', true, popupState)}>
                  Initiate Withdrawal
                </Button>
                <Button
                  sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}
                  onClick={toggleReplacementDrawer('replacementDrawerOpen', true, popupState)}
                >
                  Deactivate Login
                </Button>
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>
      {/* ====== Initiate Withdrawal Drawer ======= */}
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {/* {form} */}
        <Box sx={{ width: { xs: '100vw', sm: 550 }, padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Initiate Withdrawal</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          {/* ========= import Initiate Withdrawal Form ========== */}
          <InitiateWithdrawal />
        </Box>
      </Drawer>

      {/* ====== Deactivate Login Drawer ======= */}
      <Drawer anchor="right" open={state.replacementDrawerOpen} onClose={toggleReplacementDrawer('replacementDrawerOpen', false)}>
        {Replacementform}
      </Drawer>
    </>
  );
}
