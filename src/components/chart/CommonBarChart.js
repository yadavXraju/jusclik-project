import React from 'react';
import Chart from 'react-apexcharts';
import { Box, Paper, Grid, Typography, Divider } from '@mui/material';
import { HeadingCss } from 'components/dashboard/CommonCss';

const CommonBarChart = ({ ChartTitle, BarChartcategories, BarChartSeries}) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const FeeDefaulterData = {
    height: 350,
    type: 'bar',
    options: {
      chart: {
        id: 'bar-chart',
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        stroke: false // Set stroke to false to remove the stroke
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
          borderRadius: 5
        }
      },
      xaxis: {
        type: 'category',
        categories: BarChartcategories,
        labels: {
          style: {
            fontFamily: 'Plus Jakarta Sans, sans-serif', // Specify your desired font family
            fontWeight: 600 // Specify the font weight (e.g., normal: 400, bold: 700)
          }
        }
      },

      legend: {
        show: true,
        fontSize: '14px',
        // fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        offsetX: 20,
        labels: {
          useSeriesColors: false
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5
        },
        itemMargin: {
          horizontal: 15,
          vertical: 8
        }
      },

      fill: {
        type: 'solid',
        colors: ['#1e88e5'],
        borderRadius: '12px',
        display: 'none'
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: true
      },
      yaxis: {
        title: {
          text: 'Expense Amount (INR)',
          style: {
            fontSize: '13px', // Adjust the font size as needed
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 600,
            color: '#a7a3a0'
          }
        },
        labels: {
          show: true,
          style: {
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 600
          }
        }
      }
    },
    series: BarChartSeries
  };

  // Calculate total amount
  const totalAmount = FeeDefaulterData.series[0].data.reduce((acc, cur) => acc + cur, 0);

  // Find the least expensive month and its index
  const leastAmountOfMonth = Math.min(...FeeDefaulterData.series[0].data);
  const leastAmountIndex = FeeDefaulterData.series[0].data.indexOf(leastAmountOfMonth);

  // Find the most expensive month and its index
  const mostAmountOfMonth = Math.max(...FeeDefaulterData.series[0].data);
  const mostAmountIndex = FeeDefaulterData.series[0].data.indexOf(mostAmountOfMonth);

  // Get the name of the least and most expensive months
  const leastExpensiveMonth = months[leastAmountIndex];
  const mostExpensiveMonth = months[mostAmountIndex];

  const barChartDetails = [
    { label: 'TOTAL EXPENSE PAID', value: `₹ ${totalAmount}` },
    { label: 'MOST EXPENSIVE MONTH', value: mostExpensiveMonth },
    { label: 'LEAST EXPENSE PAID', value: leastExpensiveMonth }
  ];

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          border: '1px solid rgb(227, 227, 227)',
          boxShadow: '4px 4px 9px 2px #ddddddc2',
          flexDirection: 'column'
        }}
      >
        <Grid
          sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
            {ChartTitle}
          </Typography>
        </Grid>
        <Grid height={350}>
          <Grid item>
            <Chart {...FeeDefaulterData} />
          </Grid>
        </Grid>

        <Box>
          <Divider sx={{ paddingTop: '0.5rem' }} />
          <Box sx={{ padding: '0rem 2rem' }}>
            <Typography variant="h5" sx={{ paddingBottom: '0.5rem', paddingTop: '0.5rem' }}>
              Insights
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ padding: '0.5rem 2rem' }}>
            {barChartDetails.map((item, index) => (
              <Grid item lg={4} key={index}>
                <Typography variant="body" sx={{ fontSize: '14px' }}>
                  {item.label}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {item.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

CommonBarChart.defaultProps = {
  ChartTitle: 'Enter Chart Name '
};

export default CommonBarChart;
