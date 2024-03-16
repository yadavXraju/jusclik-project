import React from 'react';
import { styles, css } from '../css'
import {
  Box,
  Paper,
  Button,
  FormControl,
} from '@mui/material';
import MobileNumberTextfeild from 'views/common-section/mobileNumberTextfeild';
export const MobileNumber = () => {
  {
    return (<>

      <Box sx={{ ...css.center }}></Box>
      <Paper sx={{ ...css.mobilePaper }} elevation={4}>
        <Box>
          <FormControl fullWidth>
            <MobileNumberTextfeild countrySelectCss={styles} mobileNumberCss={css.mobileNumber} />
          </FormControl>
        </Box>
        {/* mobile number input feild over */}
        <Button
          type="submit"
          sx={{
            ...css.center, ...css.marginAuto,
            ...css.submitButton,...css.button
          }}
        >
          {'Next'}
        </Button>
      </Paper>
    </>
    );
  }
}

