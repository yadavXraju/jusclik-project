
import { FormControl, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';




const MultiLine = () => {

  return (
    <>
      <FormControl>
        <Typography>Multiline</Typography>
        <TextField
          id=""
          label=""
          variant="outlined"
          multiline
          minRows={6}
        />
      </FormControl>
    </>
  );
}
export default MultiLine