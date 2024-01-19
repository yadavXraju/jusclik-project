import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, MenuItem, Select, InputAdornment } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import SelectAccount from './SelectAccount';

export default function EnterMobileDialog() {
  const [open, setOpen] = React.useState(false);
  const [country, setCountry] = React.useState('India');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(input);
  };

  const handleDialogToggle = () => {
    setDialogOpen(!dialogOpen);
  };

  const handleDialogSubmit = () => {
    console.log(`Selected Country: ${country}, Mobile Number: ${mobileNumber}`);
    handleClose();
    handleDialogToggle(); // Open the SelectAccount dialog
  };

  return (
    <React.Fragment>
      <Typography variant="body2" sx={{ cursor: 'pointer', color: '#fff' }} onClick={handleClickOpen}>
        Forgot Credentials
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
      <SelectAccount open={dialogOpen} onClose={handleDialogToggle} />
    </React.Fragment>
  );
}
