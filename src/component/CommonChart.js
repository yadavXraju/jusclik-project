// page owner : Abhishek 
// Description : Common Donut Chart

import React from 'react';
import { Paper, Box, Grid, Typography, useMediaQuery } from '@mui/material';
import ApexCharts from 'react-apexcharts';
import ParamWidgetHeader from 'component/ParamWidgetHeader';


const CommonChart = ({ Data, heading }) => {

    const isMediumDesktop = useMediaQuery('(max-width: 1480px)');
    const isMobile = useMediaQuery('(max-width: 767px)');

    const style = {
        ChartCustomLegendsWrapper : {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: isMediumDesktop ? 'row' : 'column',
          paddingLeft: isMediumDesktop ? '0' : '40px',
          gap: isMobile ? '10px' : '20px', 
          flex: isMediumDesktop ? '0 0 100%' : 'auto', 
          maxWidth: isMediumDesktop ? '100% !important' : 'auto',
          paddingBottom: isMediumDesktop ? '16px' : '0', 
          padding:isMobile ? '16px' : null
        }
      }
      
    const chartData = {
        series: Data?.series,
        chart: {
            type: 'donut',
        },
        labels: Data?.labels,
        colors: Data?.colors,
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

    const calculateValue = (value) => {
        return value.toFixed(0);
    };

    const TotalValue = Data?.series.map((value) => calculateValue(value, Data?.series.reduce((acc, cur) => acc + cur, 0)));

    return (
        <>
            <Paper sx={{
                border: '1px solid rgb(227, 227, 227)',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
            }}>
                <ParamWidgetHeader title={heading}/>
                <Grid sx={{ display: 'flex', flexDirection: isMediumDesktop ? 'column' : 'row', }}>
                    <Grid item lg={6} sx={{ borderRight: '1px solid rgb(227, 227, 227)', flex: isMediumDesktop ? '0 0 100%' : 'auto', maxWidth: isMediumDesktop ? '100% !important' : 'auto', }}>
                        <Grid style={{ display: 'flex', flexDirection: 'column', padding: '7px 20px 4px 20px', alignItems: isMobile ? 'center' : 'auto' }}>
                            <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 240 : 280} />
                        </Grid>
                    </Grid>
                    <Grid item lg={6} sx={style.ChartCustomLegendsWrapper}>
                        {Data.labels.map((label, index) => (
                            <Box key={index} sx={{ display: 'flex', flexWrap:'wrap' , flexDirection: isMediumDesktop ? 'row' : 'column', gap: isMediumDesktop ? '7px' : 'auto' }}>
                                <Typography variant='h4' sx={{ color: chartData.colors[index], fontSize: isMediumDesktop ? '14px' : '24px' }}> {TotalValue[index]}</Typography>
                                <Typography variant='h4' sx={{ fontSize: isMediumDesktop ? '14px' : '16px'}}>{label}</Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default CommonChart