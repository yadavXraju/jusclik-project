
import PropTypes from 'prop-types';
import { Grid  , Typography , Paper} from '@mui/material';
import Chart from 'react-apexcharts';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
// import MainCard from 'ui-component/cards/MainCard';
// import { gridSpacing } from 'store/constant';


const FeeDefaulter = ({ isLoading }) => {

  const FeeDefaulterData = {
    height: 430,
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
        stroke: false, // Set stroke to false to remove the stroke
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
          columnWidth: '50%',
          borderRadius:5,
        }
      },
      xaxis: {
        type: 'category',
        categories: ['Nursery', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
        labels: {
          style: {
            fontFamily: 'Plus Jakarta Sans, sans-serif', // Specify your desired font family
            fontWeight: 600, // Specify the font weight (e.g., normal: 400, bold: 700)
          },
        },
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
      colors: ['rgba(94, 53, 177, 0.9)'],
      borderRadius: '12px',
      display:'none'
    },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: true
      },
      yaxis: {
        labels: {
          show: true, // show the left side amount labels
          style: {
            fontFamily: 'Plus Jakarta Sans, sans-serif', // Specify your desired font family
            fontWeight: 600, // Specify the font weight (e.g., normal: 400, bold: 700)
          },
        }
        
      }
    },
    series: [
      {
        name: 'Amount',
        data: [4500 , 4540 , 3116 , 2034 , 1093 , 3357, 5260, 3652, 3728, 4732, 1116 , 2034 , 1093 ,]
      },
    
    ]
  };

  // Calculate total amount
  const totalAmount = FeeDefaulterData.series[0].data.reduce((acc, cur) => acc + cur, 0);

  
  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <Paper  elevation={0} sx={{display:'flex' , flexWrap:'wrap' , border:'1px solid rgb(227, 227, 227)' , boxShadow:'4px 4px 9px 2px #ddddddc2' , flexDirection:'column' }}>

 
        <Grid sx={{ padding: '24px 24px 0 24px' , background:'#f9f9fb' , borderBottom:'1px solid rgba(128, 128, 128, 0.25)' , borderRadius:'12px 12px 0px 0' , display:'flex' , justifyContent:'space-between'}} >
              <Typography variant='h2' style={{...HeadingCss , border:'none'}}>fee defaulter</Typography>

              <Typography variant='h2' style={{...HeadingCss , border:'none'}}>Total : ₹ {totalAmount}</Typography>

        </Grid>

 
          <Grid  height={430}>
            <Grid item >
              <Chart {...FeeDefaulterData} />
            </Grid>
          </Grid>

        </Paper>
      )}
    </>
  );
};

FeeDefaulter.propTypes = {
  isLoading: PropTypes.bool
};

export default FeeDefaulter;
