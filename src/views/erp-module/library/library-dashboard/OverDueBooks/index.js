import PropTypes from 'prop-types';
import { Grid, Paper, Typography} from '@mui/material';
import Chart from 'react-apexcharts';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

const OverDueBook = ({ isLoading }) => {
  const FeeDefaulterData = {
    height: 300,
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
            legend: { position: 'bottom', offsetX: 0, offsetY: 0 },
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
            fontSize: '12px', // Adjust x-axis labels font size
          },
        },
      },
      yaxis: {
        show:false,
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
        colors: ['#987ECD'], // Customize bar colors
        opacity: 0.9, // Set opacity for the bars
      },
      grid: { show: false },
    },
    series: [{ name: 'Overdue', data: [174, 140, 301, 134, 193, 348, 520, 512, 138, 472, 116, 234, 193] ,
  fontWeight:"400"}],
  };



  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)', borderRadius: '12px' }}>

               <Grid sx={{ padding: '24px 24px 0 24px' , background:'#f9f9fb' , borderBottom:'1px solid rgba(128, 128, 128, 0.25)' , borderRadius:'12px 12px 0px 0'}} >
                    <Typography variant='h2' style={{...HeadingCss , border:'none'}}>fee defaulter</Typography> 
              </Grid>
          <Grid container spacing={gridSpacing} height={340}>
            <Grid item xs={12}>
              <Chart {...FeeDefaulterData} />
            </Grid>
          </Grid>

        </Paper>
      )}
    </>
  );
};

OverDueBook.propTypes = {
  isLoading: PropTypes.bool,
};

export default OverDueBook;
