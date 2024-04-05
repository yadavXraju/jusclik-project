import React from 'react';
import { Grid, Box, Typography , useMediaQuery } from '@mui/material';




const ParamCounters = ( {CounterData }  ) => {
    
const isTab =  useMediaQuery('(max-width: 1280px)');
const isMobile =  useMediaQuery('(max-width: 575px)');

    return (
        <Grid container spacing={2}>
            {CounterData.map((item, ) => (
                <Grid xs={12} sm item key={item.id}  >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: isTab ? '0px' : '40px',
                            alignItems: 'center',
                            padding:  isTab ? '1.5rem' :'2rem',         
                            borderRadius: '12px',
                            border: '1px solid rgb(227, 227, 227)',
                            boxShadow: '4px 4px 9px 2px #ddddddc2',
                            background:'#fff',
                            justifyContent:isMobile ? 'flex-start' : null ,
                        }}
                    >
                        {/* icon */}
                        <Box
                            sx={{
                                background: item.backgroundColor, 
                                borderRadius: '50%',
                                padding: '7px',
                                marginRight: isTab ? '20px' : 'null',
                            }}
                        >
                            {item.icon}
                        </Box>

                        {/* counter title and number */}
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: isTab ? '24px' : '32px', color: '#000' }}>
                                {item.counterNumber}
                            </Typography>
                            <Typography variant="h4" sx={{ fontSize: isTab ? '14px' : '16px', textTransform: 'uppercase', paddingTop: '7px', fontWeight: '500' }}>
                                {item.counterTitle}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default ParamCounters;