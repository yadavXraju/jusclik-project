import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextFieldsTwoToneIcon from '@mui/icons-material/TextFieldsTwoTone';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextFieldsTwoToneIcon/>
      <TextField id="" label="" variant="outlined" />
    </Box>
  );
}