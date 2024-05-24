// Page Owner : Abhishek
// Description : widget design

import React from 'react';
import { Divider, Grid, Typography, Button, } from '@mui/material';
import { boxHeight, subTitle, subtitle2} from 'components/dashboard-css/CommonCss';
import { Box ,Paper} from '@mui/material';
import { useNavigate } from 'react-router';
import ParamWidgetHeader from './WidgetHeader';

const Alert = ({ Data , HeadingTitle , icon , description }) => {
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
        marginBottom: '20px', 
      }}
    >
         <ParamWidgetHeader title={HeadingTitle} />
     
           {/* maping data  */}
           <Grid sx={{padding:'24px'}} style={boxHeight}>
             {Data.map((data) => (
                <Grid item xs={12} key={data.id} sx={{paddingTop:'0 !important'}}>
                  <Grid container direction="column">
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{gap:'10px'}}>
                        {/* title and icon */}
                        <Grid item sx={{display:'flex' , gap:'16px' ,alignItems:'center',}}>

                      {icon && (
                          <>
                              {/* Icon */}
                              <Box sx={{
                                backgroundColor: data.bgColor,
                                padding: '6px',
                                borderRadius: '50%',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                    {data.icon}
                            </Box>

                          </>
                      
                      )}
                   

                            {/* title */}
                            <Box>
                              <Typography variant="h3" style={subTitle}>
                                 {data.title}
                               </Typography>

                 
                              {/* desc */}
                              {description && (
                                  <>
                                    <Grid item sx={{
                                          maxWidth: '400px !important', 
                                          overflow: 'hidden !important',
                                          textOverflow: 'ellipsis !important',
                                          whiteSpace: 'nowrap !important',
                                        }}>
                                      <Typography variant="subtitle" style={subtitle2}
                                        >
                                        {data.description}
                                      </Typography>
                                    </Grid>
                                  </>
                               )}

                           </Box>

                        </Grid>

                        {/* Button */}
                          {data.showButton &&  (
                              <Grid item sx={{marginLeft:'auto'}}>
                                <Grid container alignItems="center" justifyContent="space-between">
                                  <Grid item>
                                    <Box>
                                        <Button  variant="contained" onClick={()=>navigate(data.redirect)}>{data.buttonText}</Button>
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