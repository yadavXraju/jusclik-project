import React from 'react';
import { Grid, Box, Typography } from '@mui/material';


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
        counterNumber: 65,
        counterTitle: 'MATERIAL REQUESTED'
    },
    {
        id: 2,
        icon: <PermIdentityOutlinedIcon sx={{ ...iconStyles, color: 'rgb(247, 144, 9)' }} />,
        counterNumber: 114,
        counterTitle: 'ORDER GENERATED'
    },
    {
        id: 3,
        icon: <Person2OutlinedIcon sx={{ ...iconStyles, color: 'rgb(42, 101, 191)' }} />,
        counterNumber: 39,
        counterTitle: 'MATERIAL RECEIVED'
    }
];

// Function to calculate background color based on index
const calculateBackgroundColor = (index) => {
    const colors = ['rgb(204 245 232)', 'rgb(245 238 215)', 'rgb(42 101 191 / 15%)'];
    return colors[index % colors.length];
};

const Counters = () => {
    return (
        <Grid container spacing={2}>
            {CounterData.map((item, index) => (
                <Grid item key={item.id} xs={12} md={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '40px',
                            alignItems: 'center',
                            padding: '2rem',         
                            borderRadius: '12px',
                            border: '1px solid rgb(227, 227, 227)',
                            boxShadow: '4px 4px 9px 2px #ddddddc2',
                            background:'#fff',
                        }}
                    >
                        {/* icon */}
                        <Box
                            sx={{
                                background: calculateBackgroundColor(index), // Call the function to get background color
                                borderRadius: '50%',
                                padding: '7px'
                            }}
                        >
                            {item.icon}
                        </Box>

                        {/* counter title and number */}
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: '32px', color: '#000' }}>
                                {item.counterNumber}
                            </Typography>
                            <Typography variant="h4" sx={{ fontSize: '16px', textTransform: 'uppercase', paddingTop: '7px', fontWeight: '500' }}>
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
