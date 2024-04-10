import React from 'react'
import {TextField} from '@mui/material';
function CircularDate({label}) {

  return (
 <>
   <TextField
      id="outlined-select-option"
      type="date"
      fullWidth
      label={label}
      sx={{margin:"5px"}}
      InputLabelProps={{
        shrink: true,
      }}
    />
 </>
  )
}

export default CircularDate