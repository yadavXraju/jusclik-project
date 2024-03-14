
import PropTypes from 'prop-types';
import { Grid , Box , Typography , Paper} from '@mui/material';
import Chart from 'react-apexcharts';


// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
// import MainCard from 'ui-component/cards/MainCard';
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
      },
      yaxis: {
        labels: {
          show: false // Hide the left side amount labels
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

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <Paper  elevation={1} sx={{display:'flex' , flexWrap:'wrap' , border:'1px solid rgb(227, 227, 227)' , }}>
          {/* <Box sx={{ padding: '24px' }}>
             <Typography variant='h2' style={HeadingCss}>FEE DEFAULTERS</Typography>
          </Box> */}

          <Box sx={{
            flex:'0 0 30%' ,
            display:'flex' ,
            justifyContent:'space-between' ,
            flexDirection:'column' ,
            padding:'20px',
            }}>
            <Box>
                 <Typography variant='h3' sx={{mb:'10px'}}>FEE DEFAULTERS</Typography>
                 <Typography variant='p' sx={{fontWeight:'500'}}>increase in app usage with 6,521 new products purchased</Typography>
            </Box>

            <Box>
               <Typography variant='p' sx={{fontWeight:'500'}} >This year is forecasted to increase in your traffic by the end of the current month</Typography>
            </Box>

          </Box>

          <Grid sx={{flex:'0 0 68%' , flexDirection:'column'}}  spacing={gridSpacing} height={500}>
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
