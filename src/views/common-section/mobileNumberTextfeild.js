 import { InputAdornment, MenuItem, Select, TextField, } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

function CountrySelect({state,stateHandler }) {
    return (
      <Select value={state.country} onChange={(e)=>stateHandler('country',e.target.value)} variant="standard" >
        <MenuItem selected value="India">
          IN (+91)
        </MenuItem>
        <MenuItem value="Dubai">UAE (+971)</MenuItem>
        <MenuItem value="USA">USA (+1)</MenuItem>
      </Select>
    );
  }
const MobileNumberTextfeild = ({countrySelectCss,mobileNumberCss}) => {
    const [state,setState]=useState({
        mobileNumber:'',
        mobileError:'false',
        country:'India'
    })
    const stateHandler=(key,value)=>{
        setState((state)=>({
            ...state,
            [key]:value,
        }))}
    const StyledCountrySelect = withStyles(countrySelectCss)(CountrySelect)
  return (
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
                helperText={state.mobileError ? 'Mobile number must be 10 digits' : 'Enter your registered mobile number'} // Error message
                placeholder="Mobile Number"
                name="Mobilenumber"
                autoComplete="Mobilenumber"
                value={state.mobileNumber}
                onChange={ (e) => {
                    const input = e.target.value.replace(/\D/g, '').slice(0, 10); // Remove non-digit characters and limit to 10 digits        
                    stateHandler('mobileNumber',input)
                    stateHandler('mobileError',false)
                  }}                
                sx={{...mobileNumberCss,'& .MuiInput-underline:before': {
                  borderBottom: 'none',
                },
                '& .MuiInput-underline:after': {
                  borderBottom: 'none',
                },}}
              />              
  )
}
MobileNumberTextfeild.propTypes = {
    // Define prop types here
    countrySelectCss:PropTypes.object,
    mobileNumberCss:PropTypes.object
  }
export default MobileNumberTextfeild