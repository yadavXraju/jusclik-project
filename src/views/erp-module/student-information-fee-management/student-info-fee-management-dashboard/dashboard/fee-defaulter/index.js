
import PropTypes from 'prop-types';
import { Grid , } from '@mui/material';
// import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';


const FeeDefaulter = ({ isLoading }) => {

  const FeeDefaulterData = {
    height: 480,
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
        categories: ['Nursery', 'I', 'II', 'III', 'Iv', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI' , 'XII']
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
    //   fill: {
    //     type: 'solid'
    //   },

      
      fill: {
        type: 'solid',
        // opacity: 0.7,
        colors: ['rgba(94, 53, 177, 0.9)'] ,
        borderRadius:'12px',
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: true
      }
    },
    series: [
      {
        name: 'Amount',
        data: [4500 , 9540 , 1116 , 2034 , 1093 , 3357, 5260, 6652, 3728, 4732, 1116 , 2034 , 1093 ,]
      },
    
    ]
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          {/* <Box sx={{ padding: '24px' }}>
             <Typography variant='h2' style={HeadingCss}>FEE DEFAULTERS</Typography>
          </Box> */}

          <Grid container spacing={gridSpacing} height={500}>
            <Grid item xs={12}>
              <Chart {...FeeDefaulterData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

FeeDefaulter.propTypes = {
  isLoading: PropTypes.bool
};

export default FeeDefaulter;
