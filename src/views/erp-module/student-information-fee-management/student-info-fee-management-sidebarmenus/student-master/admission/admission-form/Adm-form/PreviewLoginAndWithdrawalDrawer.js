import React, { useState } from 'react';
import { Box, Drawer, Button, Typography, IconButton,Grid , FormGroup,FormControlLabel,Switch, TextField,Stack} from '@mui/material';
import Popover from '@mui/material/Popover';
import SelectList from 'views/common-section/ParamSelectList';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

export default function PreviewLoginAndWithdrawalDrawer() {
  const [state, setState] = React.useState({
    right: false,
    replacementDrawerOpen: false 
  });

  //const isMobile = useMediaQuery('(max-width: 425px)');

 // ========= state for Attach Bus ============
 const [addInitiate, setAddInitiate] = useState('');
 const Initiate = [
   { value: 'reason1', label: 'reason1' },
   { value: 'reason2', label: 'reason2' }
 ];
 const addInitiateChange = (event) => {
  setAddInitiate(event.target.value);
 };


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


  const form = (
    <Box sx={{ width: { xs: '100vw', sm: 550 }, padding: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <Typography variant="h4">Initiate Withdrawal</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      {/* ========= import Initiate Withdrawal Form ========== */}
      <Box>
        <Typography variant="h5" sx={{ paddingTop: '20px', paddingLeft:'8px' }}>
          What is the reason for withdrawal?
        </Typography>
        <Grid container>
          <Grid mt={1} item xs={12} sx={{ paddingLeft:'8px', paddingRight:'8px' }}>
            <SelectList
              label="Reason"
              options={Initiate}
              value={addInitiate}
              onChange={addInitiateChange}
              // size={isMobile ? 'small' : 'normal'}
              // customSytle={{ width: '30%' }}
            />
          </Grid>
          <Typography variant="h5" sx={{ paddingTop: '20px', paddingLeft:'8px' }}>
            When did the student provide notice for withdrawal?
          </Typography>
          <Grid item xs={12} sx={{ paddingTop: '7px', paddingLeft:'8px', paddingRight:'8px' }}>
            <ParameterizedDateComponent label="Date" customStyle={{ width: '100%' }} />
          </Grid>
          <Typography variant="h5" sx={{ paddingTop: '20px',paddingLeft:'8px' }}>
            What will be the Date of leaving?
          </Typography>
          <Grid item xs={12} sx={{ paddingTop: '7px',paddingLeft:'8px', paddingRight:'8px' }}>
            <ParameterizedDateComponent label="Date" customStyle={{ width: '100%' }} />
          </Grid>
          
         <Box sx={{paddingTop:'30px',width:'100%'}}>
         <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1,width:'100%' , paddingRight:'15px'}
            }}
            noValidate
            autoComplete="off"
          >
            {' '}
            <TextField id="outlined-multiline-static" label="Remarks" multiline rows={4} fullWidth/>
          </Box>
         </Box>
          <Box sx={{ paddingTop: '30px', paddingBottom: '20px', paddingLeft:'8px' }}>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Eligible for Re-admission" />
            </FormGroup>
          </Box>

      
        </Grid>
        <Box sx={{paddingTop:'30px'}}>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Initiate Withdrawal</Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
          </Box>
      </Box>
    </Box>
  );

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
                        <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }} onClick={toggleDrawer('right', true, popupState)}>Initiate Withdrawal</Button>
                        <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }} onClick={toggleReplacementDrawer('replacementDrawerOpen', true, popupState)}>Deactivate Login</Button>
                      </Typography>
              </Popover>
            </div>
          )}
        </PopupState>
      {/* ====== Asset Request Drawer ======= */}
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {form}
      </Drawer>

      {/* ====== Replacement Drawer ======= */}
      <Drawer anchor="right" open={state.replacementDrawerOpen} onClose={toggleReplacementDrawer('replacementDrawerOpen', false)}>
        {Replacementform}
      </Drawer>
    </>
  );
}