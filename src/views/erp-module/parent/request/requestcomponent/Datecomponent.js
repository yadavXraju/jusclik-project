// sangeeta need to change

import React from 'react'
import {TextField} from '@mui/material';
function Datecomponent({label,Margin}) {

  return (
 <>
   <TextField
      id="outlined-select-option"
      type="date"
      fullWidth
      label={label}
      sx={{margin:Margin?Margin:"10px"}}
      InputLabelProps={{
        shrink:true,
      }}
    />
 </>
  )
}

export default Datecomponent