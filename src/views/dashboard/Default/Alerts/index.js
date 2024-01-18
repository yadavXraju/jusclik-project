import React from 'react';
// import PropTypes from 'prop-types';
import {  Divider, Grid, Typography ,Button , useMediaQuery} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { HeadingCss , boxHeight} from '../dashboard-css/CommonCss';
import { Box } from '@mui/system';
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AlertData from './AlertData';



const Alert = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
 
      <MainCard  content={true} style={boxHeight} className='scrollbar' > {/* Updated content={true} */}
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
     
            {AlertData.map((alert, index) => (
                       <Grid item xs={12} key={index} sx={{paddingTop:'0 !important'}}>
                       <Grid container direction="column">
                         <Grid item>
                           <Grid container alignItems="center" justifyContent="space-between" sx={{ alignItems: 'baseline' }}>
                               {/* title */}
                             <Grid item sx={{display:'flex' , gap:'16px' ,alignItems:'center',}}>
       
                               <Box sx={{
                                   background: '#5e35b1',
                                   padding: '6px',
                                   borderRadius: '50%',
                                   color: '#fff',
                                   display: 'flex',
                                   justifyContent: 'center',
                               }}>
                                   {alert.icon}
                               </Box>
       
                               <Typography variant="h3" color="rgb(153, 161, 183)" sx={{fontSize: isMobile ? '16px' :'auto' , lineHeight:  isMobile ? '22px' :'auto'}}>
                                 {alert.title}
                               </Typography>
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
       
                         {/* desc */}
                         <Grid item sx={{pt:2}}>
                           <Typography variant="subtitle" sx={{color:'#808080'}}>
                               {alert.description}
                           </Typography>
                         </Grid>
       
                         {/* uploaded time */}
       
                         {/* <Grid sx={{textAlign:'right',pt:2}}>
                           <Typography  sx={{color:'#808080'}}>{alert.uploadedTime}</Typography>
                         </Grid> */}
                       </Grid>
                       <Divider sx={{ my: 1.5 }} />
                     </Grid>

           ))}
           
    
          </Grid>
    
      </MainCard>
   
  </>
  )
}

export default Alert