import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function HomeDrawerSubmit() {
  return (
    <Stack spacing={2} direction="row" sx={{display:'flex', justifyContent:'center'}}>
      <Button variant="contained">Submit</Button>
    </Stack>
  );
}