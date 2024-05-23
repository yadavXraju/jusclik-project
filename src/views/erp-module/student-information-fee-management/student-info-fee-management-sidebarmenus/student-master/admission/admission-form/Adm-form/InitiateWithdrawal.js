// ======= Page Owner Vikash =========
// ======= Initiate Withdrawal Drawer =========
import React, { useState } from 'react'
import ParameterizedDateComponent from 'component/ParamDateComponent';
import SelectList from 'component/ParamSelectList';
import { Box, Button, Typography, FormGroup,FormControlLabel,Switch, TextField, Stack, Grid} from '@mui/material';

export default function InitiateWithdrawal() {

    // ========= state for Attach Bus ============
 const [addInitiate, setAddInitiate] = useState('');
 const Initiate = [
   { value: 'reason1', label: 'reason1' },
   { value: 'reason2', label: 'reason2' }
 ];
 const addInitiateChange = (event) => {
  setAddInitiate(event.target.value);
 };

  return (
    <>
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
          
         <Box sx={{paddingTop:'20px',width:'100%'}}>
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
          <Box sx={{ paddingTop: '12px', paddingBottom: '20px', paddingLeft:'8px' }}>
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
    </>
  )
}
