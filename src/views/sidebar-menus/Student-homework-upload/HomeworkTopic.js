import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function HomeworkTopic() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' }, paddingLeft:'4px', paddingRight:'8px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Topic" variant="outlined" />
  
    </Box>
  );
}