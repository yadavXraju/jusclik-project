
import PropTypes from 'prop-types';
import { Grid  , Paper,Typography,Box} from '@mui/material';
import Chart from 'react-apexcharts';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
// import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';


const OverDueBook = ({ isLoading }) => {

  const FeeDefaulterData = {
    height: 380,
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
          columnWidth: '60%',
          borderRadius:5,
          dataLabels:{
            position:"bottom",

        }
        },
      
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
    //   dataLabels: {
    //     enabled: false,
 
       
    //   },
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
        name: 'Overdue',
        data: [174 , 140 , 301 , 134 , 193 , 348, 520, 512, 138, 472, 116 , 234 , 193 ,]
      },
    
    ]
  };
  const totalOverDueBooks = FeeDefaulterData.series[0].data.reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <Paper   spacing={gridSpacing}  sx={{display:'flex' , flexDirection:'column' , justifyContent :'space-between' , border:'1px solid rgb(227, 227, 227)'}}>
             <Grid sx={{padding:'24px 24px 22px 24px'}}>
                    <Typography variant='h2' style={HeadingCss}>Overdue Books</Typography> 
              </Grid>
          <Grid  spacing={gridSpacing} height={420}>
            <Grid item >
              <Chart {...FeeDefaulterData} />
            </Grid>
          </Grid>
      
          <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="body1">Total Books: {totalOverDueBooks}</Typography>
        </Box>
        </Paper>
        
      )}
    </>
  );
};

OverDueBook.propTypes = {
  isLoading: PropTypes.bool
};

export default OverDueBook;
