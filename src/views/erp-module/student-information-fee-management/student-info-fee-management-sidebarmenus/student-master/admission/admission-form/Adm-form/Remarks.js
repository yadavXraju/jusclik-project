import React from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';

function Remarks() {

  //const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <>
    {/* Other Details */}
    <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1.4} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Remarks
      </Typography>
    <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
    <Grid item xs={12} sm={12} lg={12}>
    <Box pb={1}>
              <Box p={0.5}>Remarks</Box>
              <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
            </Box>
      </Grid>
      {/* <Grid item xs={12} sm={12} lg={6}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Countory/Region" variant="outlined" />
      </Grid> */}
    </Grid>
    </Card>

    
    </>
  );
}

export default Remarks;
