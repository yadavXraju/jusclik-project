import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Documents from './Documents';
import Policies from './policiesTable';
import UploadFileTwoToneIcon from '@mui/icons-material/UploadFileTwoTone';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';

export default function DocumentTabs() {
  const [selectedButton, setSelectedButton] = useState('Button1');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    // ============= buttons tab for View Policies and Upload Documents =============
    <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
      <Grid item xs={12} sm={12} lg={3}>
        <Box sx={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', paddingRight: '15px' }}>
          <Button
            sx={{
              color: selectedButton === 'Button1' ? '#2196f3' : 'black',
              justifyContent:'start',
              fontSize:'14px',
            }}
            startIcon={<UploadFileTwoToneIcon/>}
            size='large'
            onClick={() => handleButtonClick('Button1')}
          >
            <Box >
            <div style={{ justifyContent:'start', display:'flex'}}>Upload Documents</div>
            <p style={{fontSize:'12px', color:'rgb(105, 117, 134)', justifyContent:'start',
            display:'flex', margin:'0px'}}>
            Add & Upload File
            </p>
            </Box>
          </Button>
          <Button
            sx={{
              color: selectedButton === 'Button2' ? '#2196f3' : 'black',
              justifyContent:'start',
              fontSize:'14px',
            }}
            startIcon={<RemoveRedEyeTwoToneIcon/>}
            size='large'
            onClick={() => handleButtonClick('Button2')}
          >
          <Box >
            <div style={{ justifyContent:'start', display:'flex'}}>View Policies</div>
            <p style={{fontSize:'12px', color:'rgb(105, 117, 134)', justifyContent:'start',
            display:'flex', margin:'0px'}}>
            View Terms & Conditions
            </p>
            </Box>
            
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} lg={9}>
        <Box sx={{ flex: '1', overflow: 'auto' }}>
          {selectedButton === 'Button1' && <Documents />}
          {selectedButton === 'Button2' && (
            <div>
              <Policies />
            </div>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
