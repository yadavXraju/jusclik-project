// Page Owner: Suraj
// Description: Login page Mobile Dialoge 

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem, Select, InputAdornment } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import SelectAccount from './SelectAccount';

export default function EnterMobileDialog({ open, onClose, onMobileSubmit, onOtpToggle }) {
  const [country, setCountry] = React.useState('India');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [otpDialogOpen, setOtpDialogOpen] = useState(false); 
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(input);
  };

  const handleDialogSubmit = () => {
    console.log(`Selected Country: ${country}, Mobile Number: ${mobileNumber}`);
    onMobileSubmit({ country, mobileNumber }); // Callback to handle mobile number submit
    onClose(); // Close the dialog
    setOtpDialogOpen(true); // Open the OTP Dialog
  };
  
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleDialogSubmit();
          },
        }}
      >
        <DialogTitle>Enter your mobile number to proceed</DialogTitle>
        <DialogContent>
          <Select
            label="Country"
            value={country}
            onChange={handleCountryChange}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: '8px' }}
            startAdornment={
              <InputAdornment position="start">
                <PublicIcon />
              </InputAdornment>
            }
          >
            <MenuItem selected value="India">
              India (+91)
            </MenuItem>
            <MenuItem value="Dubai">Dubai (+971)</MenuItem>
            <MenuItem value="USA">USA (+1)</MenuItem>
          </Select>
          <TextField
            required
            margin="dense"
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            type="tel"
            fullWidth
            variant="outlined"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            placeholder="Enter your mobile number"
            sx={{ marginBottom: '8px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SmartphoneOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>

      {/* OTP Dialog */}
      {otpDialogOpen && (
        <SelectAccount
          open={otpDialogOpen}
          onClose={() => setOtpDialogOpen(false)}
          onOtpToggle={onOtpToggle}
          
        />
      )}
    </React.Fragment>
  );
}
