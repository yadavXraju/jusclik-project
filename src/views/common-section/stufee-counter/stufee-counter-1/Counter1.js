import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Counter1Data from './Counter1Data';


const Counter1 = () => {
    return (
        <Grid container spacing={2}>
            {Counter1Data.map((item, index) => <Grid item key={index}>
                    <Box>
                        {<item.icon />} {/* Render the icon component */}
                    </Box>
                    <Box>

                        {/* Counter number */}
                        <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>  {item.CounterNumber}</Typography>

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
                </Grid>
            )}
        </Grid>
    );
}

export default Counter1;
