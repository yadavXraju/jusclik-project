import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper,  useMediaQuery } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { useTheme } from '@emotion/react';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';

const StockDetailPieChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

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
        options: {
          chart: {
            width: '80%'
          }
        }
      }
    ],
    legend: {
      show: true,
      position: isMobile ? 'bottom' : 'right',
      offsetX: -15,
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
      itemDirection: 'column'
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

       <ParamWidgetHeader  title='Category Wise Stock' />
        {/* =================================  chart =================================   */}
        <Grid
          sx={{
            display: isMobile ? 'block' : 'flex', 
            height: '345px',
            flexDirection: 'column',
            padding: isMobile ? '20px' : '20px 20px 18px 20px',
            alignItems: isMobile ? 'center' : 'auto',
            justifyContent: 'center'
          }}
        >
          <ApexCharts options={chartData} series={chartData.series} type="donut" height={330}/>
        </Grid>
      </Paper>
    </>
  );
};

export default StockDetailPieChart;
