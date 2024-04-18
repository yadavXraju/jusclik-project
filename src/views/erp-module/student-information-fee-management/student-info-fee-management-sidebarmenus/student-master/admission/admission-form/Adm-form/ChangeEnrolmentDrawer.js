import React, { useState } from 'react';
import { Box, Drawer, Button, Typography, IconButton, Grid, Stack, TextField, MenuItem, Checkbox,FormControlLabel } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import InitiateWithdrawal from './InitiateWithdrawal';

export default function ChangeEnrolmentDrawer() {
  const [state, setState] = React.useState({
    right: false,
    replacementDrawerOpen: false 
  });

  const [selectedEnrollment, setSelectedEnrollment] = useState('');
  const [selectedChangeStatus, setSelectedChangeStatus] = useState('');
  const [cancelChecked, setCancelChecked] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

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

  const handleEnrollmentChange = (event) => {
    setSelectedEnrollment(event.target.value);
  };

  const Enrollment = [
    { value: 'Enquiry', label: 'Enquiry' },
    { value: 'Registration', label: 'Registration' },
    { value: 'Provisional', label: 'Provisional' },
    { value: 'Admission', label: 'Admission' }
  ];

  const handleChangeStatusChange = (event) => {
    setSelectedChangeStatus(event.target.value);
    if (event.target.value === 'Cancel') {
      // Do nothing here to prevent automatic selection of checkbox
      setCancelReason('');
    } else {
      setCancelChecked(false);
    }
  };

  const ChangeStatus = [
    { value: 'Cancel', label: 'Cancel' },
    { value: 'Registration', label: 'Registration' },
    { value: 'Provisional', label: 'Provisional' },
    { value: 'Admission', label: 'Admission' }
  ];

  const handleCancelReasonChange = (event) => {
    setCancelReason(event.target.value);
  };

  const enrolmentStatusForm = (
    <Box sx={{ width: { xs: '100vw', sm: 550 }, padding: 2,  }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <Typography variant="h4">Change Enrolment Status</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
      <Box >
        <Grid container sx={{border:'1px solid #ccc'}}>
          <Grid mt={1} item xs={12} sx={{ paddingLeft:'8px', paddingRight:'8px',paddingTop:'17px' }}>
            <TextField
              select
              label="Enrollment Type"
              value={selectedEnrollment}
              onChange={handleEnrollmentChange}
              fullWidth
            >
              {Enrollment.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {selectedEnrollment === 'Enquiry' && (
            <>
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px' }}>
                <TextField label="Enquiry Number" fullWidth />
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px' }}>
                <ParameterizedDateComponent label="Date of Enquiry" customStyle={{ width: '100%' }} />
              </Grid>
            </>
          )}
          {['Registration', 'Provisional', 'Admission'].includes(selectedEnrollment) && (
            <>
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px' }}>
                <TextField label={`${selectedEnrollment} Number`} fullWidth />
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px' }}>
                <ParameterizedDateComponent label={`Date of ${selectedEnrollment}`} customStyle={{ width: '100%' }}  />
              </Grid>
            </>
          )}
           <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px' }}>
            <TextField label="Student Name" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px' }}>
            <TextField label="Class" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px' }}>
            <TextField label="Contact Name" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px' }}>
            <TextField label="Related Info" fullWidth />
          </Grid>

          <Grid mt={1} item xs={12} sx={{ paddingLeft:'8px', paddingRight:'8px',paddingTop:'17px',paddingBottom:'12px' }}>
            <TextField
              select
              label="Change Status To"
              value={selectedChangeStatus}
              onChange={handleChangeStatusChange}
              fullWidth
            >
              {ChangeStatus.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {selectedChangeStatus === 'Enquiry' && (
            <>
             
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px',paddingBottom:'12px' }}>
                <ParameterizedDateComponent label="Date of Enquiry" customStyle={{ width: '100%' }} />
              </Grid>
            </>
          )}
          {['Registration', 'Provisional', 'Admission'].includes(selectedChangeStatus) && (
            <>
              
              <Grid item xs={12} sx={{ paddingTop: '17px', paddingLeft:'8px', paddingRight:'8px',paddingBottom:'12px' }}>
                <ParameterizedDateComponent label={`Date of ${selectedChangeStatus}`} customStyle={{ width: '100%' }}  />
              </Grid>
            </>
          )}
          {selectedChangeStatus === 'Cancel' && (
           <Grid mt={1} item xs={12} sx={{ paddingLeft:'8px', paddingRight:'8px',paddingTop:'5px' }}>
           <FormControlLabel
            control={  <Checkbox checked={cancelChecked} onChange={(event) => setCancelChecked(event.target.checked)} />}
             label="Cancel"
           />
         </Grid>
          )}
          {cancelChecked && selectedChangeStatus === 'Cancel' && (
              <Grid item xs={12} sx={{ paddingTop: '10px', paddingLeft:'8px', paddingRight:'8px' ,paddingBottom:'12px'}}>
                <TextField
                  select
                  label="Cancel Reason"
                  value={cancelReason}
                  onChange={handleCancelReasonChange}
                  fullWidth
                >
                  <MenuItem value="Not Interested">Not Interested</MenuItem>
                  <MenuItem value="Any Other">Any Other</MenuItem>
                </TextField>
              </Grid>
            )}
        </Grid>
        <Box sx={{paddingTop:'30px'}}>
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
                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }} onClick={toggleDrawer('right', true, popupState)}>Initiate Withdrawal</Button>
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
    </>
  );
}
