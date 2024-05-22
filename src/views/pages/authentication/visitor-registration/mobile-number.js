// OWNER : DAMANDEEP
import React from 'react';
import { styles, css } from './css';
import { Box, Paper, Button, FormControl, InputAdornment, MenuItem, Select, TextField, FormHelperText } from '@mui/material';
import { withStyles } from '@mui/styles';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles(() => ({
  helperText: {
    textAlign: 'center' // Center align the text
  }
}));

export function CountrySelect({ state, stateHandler }) {
  return (
    <Select value={state.country} onChange={(e) => stateHandler('country', e.target.value)} variant="standard">
      <MenuItem selected value="India">
        IN (+91)
      </MenuItem>
      <MenuItem value="Dubai">UAE (+971)</MenuItem>
      <MenuItem value="USA">USA (+1)</MenuItem>
    </Select>
  );
}

export const MobileNumber = ({ step, handleSteps, setMobileNumber }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    mobileNumber: '',
    mobileError: false,
    country: 'India'
  });
  const StyledCountrySelect = withStyles(styles)(CountrySelect);

  const stateHandler = (key, value) => {
    setState((state) => ({
      ...state,
      [key]: value
    }));
  };

  {
    return (
      <>
        <Box>
          <Paper sx={{ ...css.mobilePaper, minWidth: '20rem' }} elevation={2}>
            <Box>
              <FormControl fullWidth>
                {/* mobile number input box */}
                <TextField
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <StyledCountrySelect state={state} stateHandler={stateHandler} />
                      </InputAdornment>
                    ),
                    style: { borderRadius: '50px', fontSize: '15px', fontFamily: 'plus Jakarta sans', backgroundColor: '#ffffff' }
                  }}
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  error={state.mobileError} // Set error state
                  id="Mobilenumber"
                  // Error message
                  helperText={
                    <FormHelperText className={classes.helperText}>
                      {state.mobileError ? 'Mobile number must be 10 digits' : 'OTP will be sent to this number'}
                    </FormHelperText>
                  }
                  placeholder="Mobile Number"
                  name="Mobilenumber"
                  autoComplete="Mobilenumber"
                  value={state.mobileNumber}
                  onChange={(e) => {
                    const input = e.target.value.replace(/\D/g, '').slice(0, 10); // Remove non-digit characters and limit to 10 digits
                    stateHandler('mobileNumber', input);
                    setMobileNumber(input);
                    stateHandler('mobileError', false);
                  }}
                  sx={{
                    ...css.mobileNumber,
                    '& .MuiInput-underline:before': {
                      borderBottom: 'none'
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: 'none'
                    }
                  }}
                />
              </FormControl>
            </Box>
            {/* mobile number input feild over */}
            <Button
              type="submit"
              sx={{
                ...css.center,
                ...css.marginAuto,
                ...css.submitButton,
                ...css.button
              }}
              onClick={state.mobileError ? () => {} : () => handleSteps(step)}
            >
              {'Next'}
            </Button>
          </Paper>
        </Box>
      </>
    );
  }
};
