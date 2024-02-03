import React from 'react'
import {TextField} from '@mui/material';
function Datecomponent({label}) {

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
    />
 </>
  )
}

export default Datecomponent