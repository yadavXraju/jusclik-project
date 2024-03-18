import React from 'react';
import { styles, css } from '../css'
import {
  Box,
  Paper,
  Button,
  FormControl,
} from '@mui/material';
import MobileNumberTextfeild from 'views/common-section/mobileNumberTextfeild';
import { useState } from 'react';
export const MobileNumber = ({step,handleSteps}) => {
const [error,setError]=useState(false)
  {
    return (<>

      <Box sx={{ ...css.center }}></Box>
      <Paper sx={{ ...css.mobilePaper }} elevation={4}>
        <Box>
          <FormControl fullWidth>
            <MobileNumberTextfeild countrySelectCss={styles} mobileNumberCss={css.mobileNumber} error={error} setError={setError}  />
          </FormControl>
        </Box>
        {/* mobile number input feild over */}
        <Button
          type="submit"
          sx={{
            ...css.center, ...css.marginAuto,
            ...css.submitButton,...css.button
          }}
          onClick={error?()=>{}:()=>handleSteps(step)}
        >
          {'Next'}
        </Button>
      </Paper>
    </>
    );
  }
}

