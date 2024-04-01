import React from 'react';
import { Box, TextField, useMediaQuery, Card } from '@mui/material';

function SlabForm() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Card sx={{border:'1px solid #ccc', p:2, borderRadius:'5px'}}>
        <Box>
          <Box pb={2}>
            <TextField id="outlined-basic" size={isMobile ? 'small' : 'normal'} fullWidth label="Slab Name" variant="outlined" />
          </Box>
          
        </Box>
      </Card>
    </>
  );
}

export default SlabForm;
