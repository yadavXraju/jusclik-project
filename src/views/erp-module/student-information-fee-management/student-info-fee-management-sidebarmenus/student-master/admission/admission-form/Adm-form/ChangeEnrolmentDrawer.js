import React, { useState } from 'react';
import { Box, Drawer, Button, Typography, IconButton, Grid, Stack, TextField, MenuItem, FormControlLabel , FormLabel,FormControl, Radio, RadioGroup, Select} from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import InitiateWithdrawal from './InitiateWithdrawal';


export default function ChangeEnrolmentDrawer() {
  const [state, setState] = React.useState({
    right: false,
    replacementDrawerOpen: false,
    InitiateWithdrawalOpen: false
  });

  const [selectedEnrolment, setSelectedEnrolment] = useState('');


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

  const toggleDrawer1 = (anchor, open, popupState) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    if (popupState && popupState.close) {
      popupState.close();
    }
  };

  const handleEnrolmentChange = (event) => {
    setSelectedEnrolment(event.target.value);
  };

  const Enrolment = [
    { value: 'Enquiry', label: 'Enquiry' },
    { value: 'Registration', label: 'Registration' },
    { value: 'Provisional', label: 'Provisional' },
    { value: 'Admission', label: 'Admission' }
  ];

   // For Enrolment selection to change
    const [value, setValue] = useState('Change Enrolment Status');
    const [selectedOption, setSelectedOption] = useState('');
    const [cancelReason, setCancelReason] = useState('');
    const options = ["Enquiry", "Registration", "Provisional", "Admission"];
    const cancelReasonOptions = ["Not interested", "Not now"];
  
    const handleChange = (event) => {
      setValue(event.target.value);
      setSelectedOption('');
    };
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const handleCancelReasonChange = (event) => {
      setCancelReason(event.target.value);
    };

 

  const enrolmentStatusForm = (
    <Box sx={{ width: { xs: '100vw', sm: 550 }, padding: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <Typography variant="h4">Change Enrolment Status</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <Box>
        <Grid container sx={{ border: '1px solid #ccc' }}>
          <Grid mt={1} item xs={12} sx={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '17px' }}>
            <TextField select label="Enrolment Type" value={selectedEnrolment} onChange={handleEnrolmentChange} fullWidth>
              {Enrolment.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {selectedEnrolment === 'Enquiry' && (
            <>
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft: '8px', paddingRight: '8px' }}>
                <TextField label="Enquiry Number" fullWidth />
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft: '8px', paddingRight: '8px' }}>
                <ParameterizedDateComponent label="Date of Enquiry" customStyle={{ width: '100%' }} />
              </Grid>
            </>
          )}
          {['Registration', 'Provisional', 'Admission'].includes(selectedEnrolment) && (
            <>
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft: '8px', paddingRight: '8px' }}>
                <TextField label={`${selectedEnrolment} Number`} fullWidth />
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft: '8px', paddingRight: '8px' }}>
                <ParameterizedDateComponent label={`Date of ${selectedEnrolment}`} customStyle={{ width: '100%' }} />
              </Grid>
            </>
          )}
          <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft: '8px', paddingRight: '8px' }}>
            <TextField label="Student Name" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft: '8px', paddingRight: '8px' }}>
            <TextField label="Class" fullWidth />
          </Grid>

          {/* Radio button to select Changes */}
          <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft: '8px', paddingRight: '8px', paddingBottom:'17px' }}>
            <FormControl fullWidth>
              <FormLabel id="row-radio-buttons-group-label">Select Action</FormLabel>
              <RadioGroup row aria-labelledby="row-radio-buttons-group-label" name="Select Action" value={value} onChange={handleChange} defaultValue="Change Enrolment Status">
                <FormControlLabel value="Change Enrolment Status" control={<Radio />} label="Change Enrolment Status" />
                <FormControlLabel value="Cancel Enrolment" control={<Radio />} label="Cancel Enrolment" />
              </RadioGroup>

              {value === 'Change Enrolment Status' && (
                <Box>
                  <Select value={selectedOption} onChange={handleOptionChange} displayEmpty fullWidth style={{ marginBottom: '17px' }}>
                    <MenuItem value="" disabled>
                     Change Status To
                    </MenuItem>
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {selectedOption && <ParameterizedDateComponent label={selectedOption} customStyle={{ width: '100%' }} />}
                </Box>
              )}

              {/* Cancel date and reason */}
              {value === 'Cancel Enrolment' && (
                <Box>
                  <Select value={cancelReason} onChange={handleCancelReasonChange} displayEmpty fullWidth style={{ marginBottom: '17px' }}>
                    <MenuItem value="" disabled>
                    Cancellation reason
                    </MenuItem>
                    {cancelReasonOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {cancelReason && <ParameterizedDateComponent label="Cancellation Date" customStyle={{ width: '100%' }} />}
                </Box>
              )}
            </FormControl>
          </Grid>
        
        </Grid>
        <Box sx={{ paddingTop: '30px' }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Save</Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );


  const enrolmentNumberForm = (
    <Box sx={{ width: { xs: '100vw', sm: 450 }, padding: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <Typography variant="h4">Change Enrolment Number</Typography>
        <Button onClick={toggleReplacementDrawer('replacementDrawerOpen', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      {/* ========= import Change Enrolment Number Form ========== */}
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
                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }} onClick={toggleDrawer('right', true, popupState)}>Change Enrolment Status</Button>
                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }} onClick={toggleReplacementDrawer('replacementDrawerOpen', true, popupState)}>Change Enrolment Number</Button>
                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }} onClick={toggleDrawer1('InitiateWithdrawalOpen', true, popupState)}>Initiate Withdrawal</Button>
                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Bulk Editing</Button>
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>
      {/* ====== Asset Request Drawer ======= */}
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {enrolmentStatusForm}
      </Drawer>

      {/* ====== Replacement Drawer ======= */}
      <Drawer anchor="right" open={state.replacementDrawerOpen} onClose={toggleReplacementDrawer('replacementDrawerOpen', false)}>
        {enrolmentNumberForm}
      </Drawer>

      {/* ====== Initiate Withdrawal Drawer ======= */}
      <Drawer anchor="right" open={state.InitiateWithdrawalOpen} onClose={toggleDrawer1('InitiateWithdrawalOpen', false)}>
        {/* {form} */}
        <Box sx={{ width: { xs: '100vw', sm: 550 }, padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Initiate Withdrawal</Typography>
            <Button onClick={toggleDrawer1('InitiateWithdrawalOpen', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          {/* ========= import Initiate Withdrawal Form ========== */}
          <InitiateWithdrawal />
        </Box>
      </Drawer>
    </>
  );
}
