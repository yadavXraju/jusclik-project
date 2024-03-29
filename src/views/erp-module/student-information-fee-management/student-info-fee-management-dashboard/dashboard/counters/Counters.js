import React from 'react';
import { Grid, Box, Typography , useMediaQuery } from '@mui/material';


// icons
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const iconStyles = {
    fontSize: '30px',
    display: 'flex',
};

const CounterData = [
    {
        id: 1,
        icon: <PeopleOutlineIcon sx={{ ...iconStyles, color: 'rgb(16 185 129)' }} />,
        counterNumber: 99,
        counterTitle: 'LIVE STUDENTS'
    },
    {
        id: 2,
        icon: <PermIdentityOutlinedIcon sx={{ ...iconStyles, color: 'rgb(247, 144, 9)' }} />,
        counterNumber: 83,
        counterTitle: 'BOYS'
    },
    {
        id: 3,
        icon: <Person2OutlinedIcon sx={{ ...iconStyles, color: 'rgb(42, 101, 191)' }} />,
        counterNumber: 16,
        counterTitle: 'GIRLS'
    },

];

// Function to calculate background color based on index
const calculateBackgroundColor = (index) => {
    const colors = ['rgb(204 245 232)', 'rgb(245 238 215)', 'rgb(42 101 191 / 15%)'];
    return colors[index % colors.length];
};



const Counters = () => {
    
const isTab =  useMediaQuery('(max-width: 1280px)');
const isMobile =  useMediaQuery('(max-width: 575px)');

    return (
        <Grid container spacing={2}>
            {CounterData.map((item, index) => (
                <Grid xs={12} md item key={item.id}  >
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
                                background: calculateBackgroundColor(index), // Call the function to get background color
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

export default Counters;
