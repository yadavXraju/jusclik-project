import React from 'react';
import { QuickTipsData } from './QuickTipsData';
import { Typography , Box , Grid , Button , Divider } from '@mui/material';
import { subTitle  } from 'components/dashboard-css/CommonCss';

const QuickTips = () => {
  return (
    <>
      {/* maping data */}
        { QuickTipsData.map((item, index) => (
                    <Grid item xs={12} key={index} sx={{paddingTop:'0 !important'}}>
                    <Grid container direction="column">
                        <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between" >
                            {/* title and icon */}
                            <Grid item sx={{display:'flex' , gap:'16px' ,alignItems:'center',}}>

                                {/* Icon */}
                                <Box sx={{
                                    backgroundColor: item.bgColor,
                                    padding: '6px !important',
                                    borderRadius: '50%',
                                    color: '#fff',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                        {item.icon}
                                </Box>

                                {/* title */}
                                <Box>
                                    <Typography variant="h3" style={subTitle}>
                                        {item.title}
                                    </Typography>
                                </Box>

                            </Grid>

                            {/* Button */}
       
                                <Grid item>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                    <Grid item>
                                        <Box>
                                            <Button sx={{fontSize:{md:'14px' , sm:'12px' , xs:'10px'}}} variant="contained">{item.btnText}</Button>
                                        </Box>
                                    </Grid>
                                    </Grid>
                                </Grid>
    
    
                        </Grid>
                        </Grid>
    
                    </Grid>
                    <Divider sx={{ my: 1.5 , color:'1px solid #80808024'}} />
                    </Grid>
        ))}
    </>
  )
}

export default QuickTips