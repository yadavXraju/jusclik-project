import * as React from 'react';
import TextField from '@mui/material/TextField';
import TextFieldsTwoToneIcon from '@mui/icons-material/TextFieldsTwoTone';
import { FormControl, Typography } from '@mui/material';

const SingleLine=()=>{
  return (
    <>
    <FormControl>
        <Typography>Single Line</Typography>
        <TextField
        id=""
        label=""
        variant="outlined"
        InputProps={{
          startAdornment: (
            <TextFieldsTwoToneIcon sx={{ mr: 1 }} />
          ),
        }}
      />
      </FormControl>
      </>
  );
}
export default SingleLine