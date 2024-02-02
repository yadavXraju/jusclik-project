import React from 'react';
import { Divider, Grid, Typography, Button, } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { HeadingCss, boxHeight, subTitle, subtitle2} from 'views/dashboard/Default/dashboard-css/CommonCss';
import { Box } from '@mui/system';
import AlertData from './AlertData';
import { useNavigate } from 'react-router';

const Alert = () => {
    const navigate = useNavigate()
  return (
    <>
      <MainCard  style={boxHeight} className='scrollbar' > 
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sx={{mb:3}}>
              <Grid  alignContent="center" justifyContent="space-between">
                <Grid item>
                  <Typography variant="h2" style={HeadingCss}>
                    alerts
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
     
           {/* maping data */}
            {AlertData.map((alert, index) => (
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
                                        <Button variant="contained" onClick={()=>navigate(alert.redirect)}>{alert.buttonText}</Button>
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
      </MainCard> 
  </>
  )
}

export default Alert