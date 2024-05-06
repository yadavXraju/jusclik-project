import React from 'react';
import { Divider, Grid, Typography, Button, } from '@mui/material';
// import MainCard from 'ui-component/cards/MainCard';
// import { gridSpacing } from 'store/constant';
import { HeadingCss, boxHeight, subTitle, subtitle2} from 'views/common-section/dashboard-css/CommonCss';
import { Box ,Paper} from '@mui/material';
import { useNavigate } from 'react-router';


// this is a common section we can use this layout by sending alert data as a props

const Alert = ({ AlertData }) => {
    const navigate = useNavigate()
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
              
     
           {/* maping data  */}
           <Grid sx={{padding:'24px'}} style={boxHeight}>
                        {AlertData.map((alert, index) => (
                <Grid item xs={12} key={index} sx={{paddingTop:'0 !important'}}>
                  <Grid container direction="column">
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{gap:'10px'}}>
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
                              <Grid item sx={{marginLeft:'auto'}}>
                                <Grid container alignItems="center" justifyContent="space-between">
                                  <Grid item>
                                    <Box>
                                        <Button  variant="contained" onClick={()=>navigate(alert.redirect)}>{alert.buttonText}</Button>
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

      </Paper> 
  </>
  )
}

export default Alert