import React from 'react';
import { Grid, Box, Typography ,} from '@mui/material';



const Counter2 = ( {Counter2Data } ) => {
    return (
        <Grid container spacing={2} 
         sx={{background:'#fff', borderRadius:'10px' ,
        //  boxShadow:'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px' ,
        }}
         >
            {Counter2Data.map((item, index) => 
                <Grid key={index}  >
                    
                    <Box sx={{display:'flex', alignItems:'center' , gap:'20px' , padding:'16px' }}>
                        <Box sx={{background:'rgb(30, 136, 229)' , padding:'8px' , borderRadius:'10px'}}>
                         {<item.icon sx={{fontSize:'30px' , color:'#fff'}} />} {/* Render the icon component */}
                        </Box>

                        <Box>
                            {/* Counter number */}
                            <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 0, mb: 0.75 }}>  
                            {item.CounterNumber}
                            </Typography>

                            {/* Counter Title */}
                            <Typography
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: '#000',
                                    textTransform: 'uppercase'
                                }}
                            >
                                {item.counterTitle}
                            </Typography>

                        </Box>
                    </Box>
                </Grid>
            )}
        </Grid>
    );
}

export default Counter2;
