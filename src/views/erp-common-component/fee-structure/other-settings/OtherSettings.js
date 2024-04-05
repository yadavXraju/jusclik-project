import React from 'react';
import { Grid , Typography} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

const OtherSettings = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
        <Grid container spacing={2} sx={{padding:'24px' , margin:'0'}}>
           <Grid lg={3} sx={{border:'1px solid #3641525c' , borderRadius:'12px' , padding:' 10px 24px 24px 24px' }}>
           <FormGroup>
             <Switch {...label} />
          </FormGroup>

              <Typography sx={{fontSize:'16px' , fontWeight:'500'}}>Activate fee schedule for quater 1</Typography>
           </Grid>

           <Grid lg={3} sx={{border:'1px solid #3641525c' , borderRadius:'12px' , padding:' 10px 24px 24px 24px' }}>
           <FormGroup>
             <Switch {...label} />
          </FormGroup>

              <Typography sx={{fontSize:'16px' , fontWeight:'500'}}>Activate fee schedule for quater 2</Typography>
           </Grid>
        </Grid>
    </>
  )
}

export default OtherSettings





