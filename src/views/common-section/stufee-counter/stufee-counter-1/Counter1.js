import React from 'react';
import { Grid, Box, Typography ,} from '@mui/material';



const Counter1 = ( {Counter1Data } ) => {
    return (
        <Grid container spacing={2} 
         sx={{
          background:'#fff', borderRadius:'16px' ,
          border:'1px solid rgb(227, 227, 227)',
          //  boxShadow:'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px' ,
          padding:'1rem',
          boxShadow:'1px 4px 9px -8px black',
          flex:'0 0 33.3%',
          flexDirection:'column'
        }}
         >
            {Counter1Data.map((item, index) => 
                <Grid key={index} >
                    
                    <Box sx={{display:'flex', alignItems:'center' , gap:'20px' , padding:'16px' }}>
                        {/* icon and title */}

                        <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'baseline' , gap:'10px' , justifyContent:'space-between'}}>
                            <Box sx={{background:'rgb(94, 53, 177)' , padding:'8px' , borderRadius:'10px'}}>
                            {<item.icon sx={{fontSize:'30px' , color:'#fff'}} />} {/* Render the icon component */}
                            </Box>

                            <Box>
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

                        <Box>
                            {/* Counter number */}
                            <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 0, mb: 0.75 }}>  
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
