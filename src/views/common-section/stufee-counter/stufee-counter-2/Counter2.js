import React from 'react';
import { Grid, Box, Typography ,Paper} from '@mui/material';



const Counter2 = ( {Counter2Data } ) => {
    return (
        <Grid item container spacing={2} 
         sx={{
          flexDirection:'column' 
        }}
        lg={4}
         >
                 <Paper elevation={1} sx={{
                border:'1px solid rgb(227, 227, 227)',
                padding:'1rem',
            }}>
            {Counter2Data.map((item, index) => 
                <Grid key={index} >
                    
                    <Box sx={{display:'flex', alignItems:'center' , gap:'20px' , padding:'1rem 16px'  , justifyContent:'space-between' }} >
                        {/* icon and title */}

                        <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'baseline' , gap:'10px' ,}}>
                            <Box sx={{background:'rgb(229 231 235 / 65%)' , padding:'8px' , borderRadius:'50%' , display:'flex'}}>
                            {<item.icon sx={{fontSize:'26px' , color:'#000000d6'}} />} {/* Render the icon component */}
                            </Box>

                            <Box>
                            {/* Counter Title */}
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        color: '#000',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {item.counterTitle}
                                </Typography>
                            </Box>
                        </Box>

                        <Box>
                            {/* Counter number */}
                            <Typography sx={{ fontSize: '30px', fontWeight: 500, mr: 1, mt: 0, mb: 0.75 }}>  
                            {item.CounterNumber}
                            </Typography>

                     

                        </Box>
                    </Box>
                </Grid>
            )}
            </Paper>
        </Grid>
    );
}

export default Counter2;