import React from 'react';
import { Paper, Grid, Box, Typography, useMediaQuery} from '@mui/material';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss'

// icons
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import NoAccountsTwoToneIcon from '@mui/icons-material/NoAccountsTwoTone';

const EnrollmentStatistics = () => {

    const isMobile = useMediaQuery('(max-width:575px)')
    const iconStyles = {
        fontSize: isMobile ? '18px' : '30px',
        color:'rgb(94, 53, 177)' , 
    };


    const EnrollmentData = [
        {
            id: 1,
            icon: <LiveHelpTwoToneIcon sx={{...iconStyles}}/>,
            counterNumber: 25,
            counterTitle: 'Enquiries'
        },
        {
            id: 2,
            icon: <BadgeTwoToneIcon sx={{...iconStyles}} />,
            counterNumber: 281,
            counterTitle: 'Admission'
        },
        {
            id: 3,
            icon: <AssignmentTurnedInTwoToneIcon sx={{...iconStyles}} />,
            counterNumber: 76,
            counterTitle: 'Registration'
        },
        {
            id: 4,
            icon: <NoAccountsTwoToneIcon sx={{...iconStyles}} />,
            counterNumber: 27,
            counterTitle: 'Withdrawals'
        }
    ];

    return (
        <Paper sx={{
            border: '1px solid rgb(227, 227, 227)',
            boxShadow: '4px 4px 9px 2px #ddddddc2',
        }}>
            <Box sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderRadius: '12px 12px 0 0' , borderBottom:'1px solid rgb(227, 227, 227)' }}>
                <Typography variant='h2' style={{...HeadingCss , border:'none' }} >Enrollment Statistics</Typography>
            </Box>

            <Grid container spacing={0}>
                {EnrollmentData.map((item, index) => (
                    <Grid key={index} item xs={6}>
                        <Box sx={{
                            flexDirection: 'row',
                            textAlign: 'center',
                            display: 'flex',
                            gap: isMobile ? '10px' :'20px',
                            alignItems: 'center',
                            padding: isMobile ? '2rem 1rem'  : '2.5rem 2rem',
                            borderBottom: '1px solid rgb(227, 227, 227)',
                            justifyContent:'center',
                            borderRight: index % 2 === 0 ? '1px solid rgb(227, 227, 227)' : 'none', // Add border to even index items
                        }}>

                            {/* icon */}
                            <Box sx={{ background: `rgb(227, 242, 253)`, padding: isMobile ? '7px' :'10px', borderRadius: '12px' , display:'flex' }}>
                                {item.icon}
                            </Box>

                            {/* title and number */}
                            <Box sx={{flex:'0 0 70%'}}>
                              <Typography variant='h3' sx={{ fontSize: isMobile ? '14px' : '24px', }}>{item.counterNumber}</Typography>
                               <Typography variant='h3' sx={{ fontSize: isMobile ? '14px' : '16px', fontWeight: '400', paddingTop: '7px' }}>{item.counterTitle}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}

export default EnrollmentStatistics;
