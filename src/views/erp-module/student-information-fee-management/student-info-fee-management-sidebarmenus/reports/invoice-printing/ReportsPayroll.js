import { Typography, Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const ReportsPayroll = () => {
    const [favorites, setFavorites] = useState([]);
    
    const sections = [
        {
            title: 'Overview',
            pages: ['Enquiry', 'Register', 'Admission', 'Enrolment Review', 'Withdraw review']
        },
        {
            title: 'Student',
            pages: ['Student Age As On', 'Student Strength']
        },
        {
            title: 'Trasport',
            pages: ['User List', 'Attendence', 'Transport user as on', 'Logs', 'Routes & Stops']
        },
        {
            title: 'Invoices',
            pages: ['Ledger']
        },
        {
            title: 'Fee Management',
            pages: ['Transaction', 'Concession', 'Adjustment', 'PG Settlement Report', 'Fee Structure']
        },
        {
            title: 'Student Records',
            pages: ['Tution Fee Certificate', 'School Learning Certificate ', 'Gate Pass', 'Identity Card']
        },
        {
            title: 'Activity',
            pages: ['Parent/Teacher Login List', 'User Logs ', 'Deleted Fee Invoices', 'Delete Fee Transactions']
        },

    ];

    const toggleFavorite = (pageName) => {
        if (favorites.includes(pageName)) {
            setFavorites(favorites.filter((page) => page !== pageName));
        } else {
            setFavorites([...favorites, pageName]);
        }
    };

    return (
        <Box>
            <Typography variant='h4'>Favorites:</Typography>
            {favorites.map((page, index) => (
                <Typography key={index}>{page}</Typography>
            ))}
            <Grid container spacing={5} sx={{  }}>
                {sections.map((section, index) => (
                    <Grid item xs={4} key={index}>
                        <Typography variant='h3' sx={{ textDecoration: 'none', textTransform: 'none', }}>{section.title}</Typography>
                        <Box sx={{ paddingTop: '20px' }}>
                            {section.pages.map((page, pageIndex) => (
                                <Typography key={pageIndex} sx={{ paddingBottom: '19px' }}>
                                    {favorites.includes(page) ? (
                                        <StarIcon onClick={() => toggleFavorite(page)} sx={{ color: '#f8cb01', paddingTop: '7px' }} />
                                    ) : (
                                        <StarBorderIcon onClick={() => toggleFavorite(page)} sx={{ color: '#f8cb01', paddingTop: '7px' }} />
                                    )}
                                    <a href={`#${page}`} style={{ textDecoration: 'none', textTransform: 'none', color:'#408dfb' }}>{page}</a>
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ReportsPayroll;
