import { Typography, Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const ReportsPayroll = () => {
    const [favorites, setFavorites] = useState([]);
    
    const sections = [
        {
            title: 'Overview',
            icon: <PolicyOutlinedIcon />,
            pages: ['Enquiry', 'Register', 'Admission', 'Enrolment Review', 'Withdraw review']
        },
        {
            title: 'Student',
            icon: <PeopleAltOutlinedIcon />,
            pages: ['Student Age As On', 'Student Strength']
        },
        {
            title: 'Transport',
            icon: <DirectionsBusFilledOutlinedIcon />,
            pages: ['User List', 'Attendance', 'Transport user as on', 'Logs', 'Routes & Stops']
        },
        {
            title: 'Invoices',
            icon: <ReceiptOutlinedIcon />,
            pages: ['Ledger']
        },
        {
            title: 'Fee Management',
            icon: <CreditCardOutlinedIcon />,
            pages: ['Transaction', 'Concession', 'Adjustment', 'PG Settlement Report', 'Fee Structure']
        },
        {
            title: 'Student Records',
            icon: <FolderOpenOutlinedIcon />,
            pages: ['Tuition Fee Certificate', 'School Learning Certificate ', 'Gate Pass', 'Identity Card']
        },
        {
            title: 'Activity',
            icon: <ManageHistoryOutlinedIcon />,
            pages: ['Parent/Teacher Login List', 'User Logs ', 'Deleted Fee Invoices', 'Deleted Fee Transactions']
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
        <Box sx={{ paddingLeft: '30px', paddingRight: '40px', paddingTop: '20px' }}>
            {favorites.length > 0 && (
                <Box sx={{display:'flex', paddingBottom:'20px'}}>
                    <VerifiedOutlinedIcon/>
                <Typography variant='h4' sx={{paddingBottom:'10px', marginTop:'3px', paddingLeft:'10px'}}>Favorites:</Typography>
                </Box>
            )}
            {favorites.length > 0 && (
                <Grid container spacing={2} sx={{paddingBottom:'30px'}}>
                    {favorites.map((page, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{paddingBottom:'20px'}}>
                            <Typography sx={{ paddingBottom: '10px',borderBottom: '1px dashed #cbcbcb' }}>
                                <a href={`#${page}`} style={{ textDecoration: 'none', textTransform: 'none', color: '#408dfb' }}>{page}</a>
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            )}
            <Grid container spacing={5}>
                {sections.map((section, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {section.icon}
                            <Typography variant='h4' sx={{ textDecoration: 'none', textTransform: 'none', marginLeft: '10px' }}>{section.title}</Typography>
                        </Box>
                        <Box sx={{ paddingTop: '20px' }}>
                            {section.pages.map((page, pageIndex) => (
                                <Typography key={pageIndex} sx={{ paddingBottom: '19px', borderBottom: '1px dashed #cbcbcb', display: 'flex', alignItems: 'center', paddingTop: '15px' }}>
                                    {favorites.includes(page) ? (
                                        <StarIcon onClick={() => toggleFavorite(page)} sx={{ color: '#f8cb01' }} />
                                    ) : (
                                        <StarBorderIcon onClick={() => toggleFavorite(page)} sx={{ color: '#cbcbcb' }} />
                                    )}
                                    <a href={`#${page}`} style={{ textDecoration: 'none', textTransform: 'none', color: '#408dfb', marginLeft: '8px' }}>{page}</a>
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
