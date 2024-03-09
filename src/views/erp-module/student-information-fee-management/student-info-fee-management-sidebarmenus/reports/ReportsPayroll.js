import { Typography, Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FormatOverlineOutlinedIcon from '@mui/icons-material/FormatOverlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined';
import {useNavigate} from 'react-router-dom';

const ReportsPayroll = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate=useNavigate();
    const sections = [
        {
            title: 'Overview',
            icon: <FormatOverlineOutlinedIcon />,
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
            icon: <DescriptionOutlinedIcon />,
            pages: ['Ledger']
        },
        {
            title: 'Fee Management',
            icon: <CreditCardOutlinedIcon />,
            pages: ['Transaction', 'Concession', 'Adjustment', 'PG Settlement Report', 'Fee Structure']
        },
        {
            title: 'Student Records',
            icon: <GraphicEqOutlinedIcon />,
            pages: ['Tuition Fee Certificate', 'School Learning Certificate ', 'Gate Pass', 'Identity Card']
        },
        {
            title: 'Activity',
            icon: <NaturePeopleOutlinedIcon />,
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
        <Box>
            {favorites.length > 0 && (
                <Typography variant='h4'>Favorites:</Typography>
            )}
            {favorites.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {favorites.map((page, index) => (
                        <Typography key={index} sx={{ paddingRight: '10px', paddingBottom:'40px' }} onClick={()=>navigate(`/erp/student-info-fee/reports/${path}`)}>
                            <a  style={{ textDecoration: 'none', textTransform: 'none', color:'#408dfb', paddingRight:'70px' }}>{page}</a>
                        </Typography>
                    ))}
                </Box>
            )}
            <Grid container spacing={5} sx={{ }}>
                {sections.map((section, index) => (
                    <Grid item xs={4} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {section.icon}
                            <Typography variant='h3' sx={{ textDecoration: 'none', textTransform: 'none', marginLeft: '10px' }}>{section.title}</Typography>
                        </Box>
                        <Box sx={{ paddingTop: '20px' }}>
                            {section.pages.map((page, pageIndex) => (
                                <Typography key={pageIndex} sx={{paddingBottom: '19px' }}>
                                    {favorites.includes(page) ? (
                                        <StarIcon onClick={() => toggleFavorite(page)} sx={{ color: '#f8cb01', paddingTop: '7px' }} />
                                    ) : (
                                        <StarBorderIcon onClick={() => toggleFavorite(page)} sx={{ color: '#f8cb01', paddingTop: '7px' }} />
                                    )}
                                    <a href={`/erp/student-info-fee/reports/${page}`} style={{ textDecoration: 'none', textTransform: 'none', color:'#408dfb'  }}>{page}</a>
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
