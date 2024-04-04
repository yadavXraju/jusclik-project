import React from 'react';
import { Grid , Typography} from '@mui/material';

const OtherSettings = () => {
  return (
    <>
        <Grid container spacing={2} sx={{paddingTop:'24px'}}>
           <Grid lg={3} sx={{border:'1px solid #000' , borderRadius:'12px' , padding:'12px' }}>
              <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
           </Grid>
        </Grid>
    </>
  )
}

export default OtherSettings