import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Documents from './Documents';
import { Grid } from '@mui/material';
import Policies from './policiesTable';
import PoliciesCounter from './policiesCounter';


export default function DocumentTabs() {
  const [selectedButton, setSelectedButton] = useState('Button1'); 

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
 

  return (
    <Grid  container spacing={1} sx={{ display: 'flex', height: '100%' }}>
      
      <Grid item xs={12} sm={12} lg={2}>
      <Box sx={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', paddingRight:'15px' }}>
        <Button sx={{border:'1px solid #ccc'}} size='large'  onClick={() => handleButtonClick('Button1')}>Upload Documents</Button>
        <Button sx={{border:'1px solid #ccc'}} size='large'  onClick={() => handleButtonClick('Button2')}>View Policies</Button>
      </Box>
      </Grid>

      
      <Grid item xs={12} sm={12} lg={10}>
      <Box sx={{ flex: '1', overflow: 'auto' }}>
        {selectedButton === 'Button1' && <Documents />}
        {selectedButton === 'Button2' && 
        <div>
        <Box pb={3}>
        <PoliciesCounter/>
        </Box>
        <Policies/>
        </div>}
      </Box>
      </Grid>
    </Grid>
  );
}
