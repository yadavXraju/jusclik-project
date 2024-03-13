import React from 'react';
import { Grid, Box, Typography ,} from '@mui/material';



const Counter1 = ( {Counter1Data } ) => {
    return (
        <Grid item container spacing={2} 
         sx={{
          background:'#fff', borderRadius:'16px' ,
          border:'1px solid rgb(227, 227, 227)',
          padding:'1rem',
          boxShadow:'1px 4px 9px -8px black',
          flexDirection:'column'
          
        }}
        lg={4}
         >
            {Counter1Data.map((item, index) => 
                <Grid key={index} >
                    
                    <Box sx={{display:'flex', alignItems:'center' , gap:'20px' , padding:'1rem 16px' , justifyContent:'space-between' }}>
                        {/* icon and title */}

                        <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'baseline' , gap:'10px' ,}}>
                            <Box sx={{background:'rgb(94, 53, 177)' , padding:'8px' , borderRadius:'50%' ,  display:'flex'}}>
                            {<item.icon sx={{fontSize:'26px' , color:'#fff'}} />} {/* Render the icon component */}
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
        </Grid>
    );
}

export default Counter1;