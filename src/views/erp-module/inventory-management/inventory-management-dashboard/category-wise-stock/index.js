import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

const StockDetailPieChart = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const chartData = {
    series: [200, 100, 110],
    chart: {
      type: 'donut'
    },
    stroke: {
      width: 3
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Stocks',
              formatter: function () {
                return chartData.series.reduce((a, b) => a + b, 0).toFixed(0);
              }
            }
          }
        }
      }
    },
    dataLabels: {
      formatter: function (val) {
        return val.toFixed(0) + '%';
      }
    },
    labels: ['Material Requested', 'Order Generated', 'Material Received'],
    colors: ['#4C88BE', '#9FCCE9', '#1162A4'],
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '80%'
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    legend: {
      show: false,
      fontSize: '16px',
      colors: ['#99a1b7'],
      fontWeight: '400',
      itemMargin: {
        vertical: 5
      },
      markers: {
        width: 12,
        height: 12
      },
      formatter: function (seriesName) {
        return seriesName;
      },
      offsetY: 10,
      itemDirection: 'row'
    }
  };

  return (
    <>
      <Paper
        spacing={gridSpacing}
        sx={{
          display: 'flex',
          borderRadius: '12px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgb(227, 227, 227)',
          boxShadow: '4px 4px 9px 2px #ddddddc2'
        }}
      >
        {/* ================================= heading  =================================  */}
        <Grid
          sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0'
          }}
        >
          <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
            Category Wise Stock
          </Typography>
        </Grid>

        {/* ================================= content  =================================  */}
        <Grid sx={{ display: isMobile?'block': 'flex', padding: isMobile?'20px': '' }}>
          {/* =================================  chart =================================   */}
          <Grid lg={6} sx={{ borderRight:isMobile?'none': '1px solid rgb(227, 227, 227)' }}>
            <Grid
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: isMobile ? '0px' : '20px 20px 18px 20px',
                alignItems: isMobile ? 'center' : 'auto'
              }}
            >
              <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 200 : 330} />
            </Grid>
          </Grid>

          {/* =================================  book detail =================================   */}
          <Grid lg={6} sx={{ display:isMobile?'grid': 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: isMobile?'0px':'40px', gap: '20px' }}>
            <Grid container spacing={0}>
              {/* detail left */}
              <Grid item xs={12}>
                {/* avialable */}
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Box
                    sx={{ width: '10px', height: '10px', borderRadius: '50%', marginRight: '15px', background: chartData.colors[0] }}
                  ></Box>

                  <Typography variant="body1" className="labels">
                    {chartData.labels[0]}
                  </Typography>
                </Box>
                {/* Issued */}
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Box
                    sx={{ width: '10px', height: '10px', borderRadius: '50%', marginRight: '15px', background: chartData.colors[1] }}
                  ></Box>

                  <Typography variant="body1" className="labels">
                    {chartData.labels[1]}
                  </Typography>
                </Box>
                {/* Issued */}
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Box
                    sx={{ width: '10px', height: '10px', borderRadius: '50%', marginRight: '15px', background: chartData.colors[2] }}
                  ></Box>

                  <Typography variant="body1" className="labels">
                    {chartData.labels[2]}
                  </Typography>
                </Box>
              </Grid>
              {/* detail right */}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default StockDetailPieChart;
