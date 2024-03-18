import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Box } from '@mui/material';
import Chart from 'react-apexcharts';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

const OverDueBook = ({ isLoading }) => {
  const FeeDefaulterData = {
    height: 380,
    type: 'bar',
    options: {
      chart: {
        id: 'bar-chart',
        stacked: true,
        toolbar: { show: false },
        zoom: { enabled: false },
        stroke: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: 'bottom', offsetX: -10, offsetY: 0 },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 5,
          dataLabels: { position: 'bottom',
          color:'#ABB5E6',
          fontWeight:"400" },
        },
      },
      xaxis: {
        type: 'category',
        categories: [
          'Nursery', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
        ],
        labels: {
          style: {
            fontSize: '14px', // Adjust x-axis labels font size
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '14px', // Adjust y-axis labels font size
          },
        },
      },
      legend: {
        show: false,
      },
      fill: {
        type: 'solid',
        colors: ['#B5B7F1'], // Customize bar colors
        opacity: 0.9, // Set opacity for the bars
      },
      grid: { show: true },
    },
    series: [{ name: 'Overdue', data: [174, 140, 301, 134, 193, 348, 520, 512, 138, 472, 116, 234, 193] ,
  fontWeight:"400"}],
  };

  const totalOverDueBooks = FeeDefaulterData.series[0].data.reduce((total, currentValue) => total + currentValue, 0);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)', borderRadius: '12px' }}>
          <Grid sx={{ padding: '24px' }}>
            <Typography variant="h2" sx={HeadingCss}>
              Overdue Books
            </Typography>
          </Grid>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Chart {...FeeDefaulterData} />
            </Grid>
          </Grid>
          <Box sx={{ p: 2, textAlign: 'center', borderTop: '1px solid rgb(227, 227, 227)' }}>
            <Typography variant="body1">Total Books: {totalOverDueBooks}</Typography>
          </Box>
        </Paper>
      )}
    </>
  );
};

OverDueBook.propTypes = {
  isLoading: PropTypes.bool,
};

export default OverDueBook;
