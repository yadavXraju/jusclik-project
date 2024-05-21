// page owner abhishek

import React from 'react';
import { Divider, Grid, Typography, Button,Paper } from '@mui/material';
// import { gridSpacing } from 'store/constant';
import { HeadingCss, subTitle, subtitle2 ,boxHeight} from '../../../../common-section/dashboard-css/CommonCss';
import { Box} from '@mui/system';
import ParentAlertData from './AlertData';

const Alert = () => {

  return (
    <>
      <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid rgba(128, 128, 128, 0.25)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
        marginBottom: '20px', // Add some bottom margin for spacing
      }}
    >
          {/* <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sx={{mb:3}}>
              <Grid  alignContent="center" justifyContent="space-between">
                <Grid item> */}
                <Grid
        sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
        }}
      >
                  <Typography variant="h2" style={HeadingCss}>
                    alerts
                  </Typography>
                </Grid>
              {/* </Grid>
            </Grid>
      */}
           {/* maping data */}
           <Grid sx={{ padding: '24px' }} style={boxHeight}>
            {ParentAlertData.map((alert, index) => (
                <Grid item xs={12} key={index} sx={{paddingTop:'0 !important'}}>
                  <Grid container direction="column">
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between" >
                        {/* title and icon */}
                        <Grid item sx={{display:'flex' , gap:'16px' ,alignItems:'center',}}>

                          {/* Icon */}
                          <Box sx={{
                              backgroundColor: alert.bgColor,
                              padding: '6px',
                              borderRadius: '50%',
                              color: '#fff',
                              display: 'flex',
                              justifyContent: 'center',
                           }}>
                                  {alert.icon}
                           </Box>

                            {/* title */}
                            <Box>
                              <Typography variant="h3" style={subTitle}>
                                 {alert.title}
                               </Typography>
                      
                               {/* desc */}
                                <Grid item>
                                   <Typography variant="subtitle" style={subtitle2}>
                                          {alert.description}
                                    </Typography>
                                </Grid>
                            </Box>

                        </Grid>

                        {/* Button */}
                          {alert.showButton && (
                              <Grid item>
                                <Grid container alignItems="center" justifyContent="space-between">
                                  <Grid item>
                                    <Box>
                                        <Button variant="contained">{alert.buttonText}</Button>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Grid>
                          )}
                      </Grid>
                    </Grid>
  
                  </Grid>
                  <Divider sx={{ my: 1.5 , color:'1px solid #80808024'}} />
                </Grid>
            ))}
           </Grid>
          {/* </Grid>  */}
          </Paper>
  </>
  )
}

export default Alert