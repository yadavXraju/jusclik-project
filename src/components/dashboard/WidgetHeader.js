// Page Owner : Abhishek
// Description : dashboard widget header

import React from 'react';
import { Grid , Typography } from '@mui/material';
import { HeadingCss } from './CommonCss';

const ParamWidgetHeader = ({title}) => {
  return (
    <>
      <Grid
            sx={{
                padding: '24px 24px 0 24px',
                background: '#f9f9fb',
                borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
                borderRadius: '12px 12px 0px 0',
            }}
       >
                <Typography variant="h2" style={HeadingCss}>
                  {title}
                </Typography>
        </Grid>
    </>
  )
}

export default ParamWidgetHeader




