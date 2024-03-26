import React from 'react';
import { Paper, Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import ApexCharts from 'react-apexcharts';

const ParentLoginStatusTemplate = ({ loginData, heading }) => {
    const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
    const isMobile = useMediaQuery('(max-width: 767px)');

    const chartData = {
        series: loginData.series,
        chart: {
            type: 'donut',
        },
        labels: loginData.labels,
        colors: loginData.colors,
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    chart: {
                        width: '100%',
                    },
                },
            },
        ],
    };

    const calculateAmount = (value) => {
        return value.toFixed(0);
    };

    const loginAmounts = loginData.series.map((value) => calculateAmount(value, loginData.series.reduce((acc, cur) => acc + cur, 0)));

    return (
        <>
            <Paper sx={{
                border: '1px solid rgb(227, 227, 227)',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
            }}>
                <Box sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderRadius: '12px 12px 0 0px', borderBottom: '1px solid rgb(227, 227, 227)' }}>
                    <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>
                        {heading}
                    </Typography>
                </Box>


                <Grid sx={{ display: 'flex' }}>
                    <Grid item lg={6} sx={{ borderRight: '1px solid rgb(227, 227, 227)' }}>
                        <Grid style={{ display: 'flex', flexDirection: 'column', padding: '7px 20px 4px 20px', alignItems: isMobile ? 'center' : 'auto' }}>
                            <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 280 : 280} />
                        </Grid>
                    </Grid>


                    <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: '40px', gap: '20px' }}>
                        {loginData.labels.map((label, index) => (
                            <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h4' sx={{ color: chartData.colors[index], fontSize: '24px' }}> {loginAmounts[index]}</Typography>
                                <Typography variant='h4'>{label}</Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default ParentLoginStatusTemplate;