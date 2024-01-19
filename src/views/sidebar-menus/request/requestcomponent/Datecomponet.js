import React from 'react'
import {TextField} from '@mui/material';
function Datecomponet({label}) {

    // const getCurrentDate = () => {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     let month = today.getMonth() + 1;
    //     let day = today.getDate();
      
    //     // Add leading zero if month or day is a single digit
    //     month = month < 10 ? `0${month}` : month;
    //     day = day < 10 ? `0${day}` : day;
      
    //     return `${year}-${month}-${day}`;}
  return (
 <>
   <TextField
      id="outlined-select-option"
      type="date"
      fullWidth
      label={label}
      sx={{margin:"10px"}}
      InputLabelProps={{
        shrink: true,
      }}
    //   InputProps={{
    //     inputProps: { max: getCurrentDate() }, 
    //   }}
    />
 </>
  )
}

export default Datecomponet