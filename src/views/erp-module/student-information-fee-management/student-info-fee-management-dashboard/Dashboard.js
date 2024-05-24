// Page Owner :  stufee dashboard
// Description :  stufee dashboard content

import NeedHelp from 'pages/HelpAndSupport';
import React from 'react';
import { Grid , Box , Typography , Paper , useMediaQuery , LinearProgress }from '@mui/material';

// coutner imports
import ParamCounters from "components/ParamCounters";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ParamWidgetHeader from 'components/ParamWidgetHeader';
import { gridSpacing } from 'store/constant';
// Enrollment imports
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import NoAccountsTwoToneIcon from '@mui/icons-material/NoAccountsTwoTone';

// Payment Gateway Wise Collection  import
import CommonChart from 'components/CommonChart';

// ================== fee defaulter imports ==================
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import { HeadingCss } from 'components/dashboard-css/CommonCss';
import Chart from 'react-apexcharts';


// =================== counter start ============
const iconStyles = {
  fontSize: '30px',
  display: 'flex',
};

const CounterData = [
  {
      id: 1,
      icon: <PeopleOutlineIcon sx={{ ...iconStyles, color: 'rgb(16 185 129)' }} />,
      counterNumber: 99,
      counterTitle: 'LIVE STUDENTS',
      backgroundColor:'rgb(204 245 232)',
  },
  {
      id: 2,
      icon: <PermIdentityOutlinedIcon sx={{ ...iconStyles, color: 'rgb(247, 144, 9)' }} />,
      counterNumber: 83,       
      counterTitle: 'BOYS',
      backgroundColor:'rgb(245 238 215)',
  },
  {
      id: 3,
      icon: <Person2OutlinedIcon sx={{ ...iconStyles, color: 'rgb(42, 101, 191)' }} />,
      counterNumber: 16,
      counterTitle: 'GIRLS',
      backgroundColor:'rgb(42 101 191 / 15%)',
  },

];

export const Counters = () => {


  return (
      <>
        <ParamCounters CounterData={CounterData} />
      </>
  );
};
// =================== counter End  ============


// =================== Enrollment Statistics  Start  ============
const EnrollmentStatistics = () => {

  const isMobile = useMediaQuery('(max-width:575px)')
  const iconStyles = {
      fontSize: isMobile ? '18px' : '30px',
      color:'rgb(94, 53, 177)' , 
  };


  const EnrollmentData = [
      {
          id: 1,
          icon: <LiveHelpTwoToneIcon sx={{...iconStyles}}/>,
          counterNumber: 25,
          counterTitle: 'Enquiries'
      },
      {
          id: 2,
          icon: <BadgeTwoToneIcon sx={{...iconStyles}} />,
          counterNumber: 281,
          counterTitle: 'Admission'
      },
      {
          id: 3,
          icon: <AssignmentTurnedInTwoToneIcon sx={{...iconStyles}} />,
          counterNumber: 76,
          counterTitle: 'Registration'
      },
      {
          id: 4,
          icon: <NoAccountsTwoToneIcon sx={{...iconStyles}} />,
          counterNumber: 27,
          counterTitle: 'Withdrawals'
      }
  ];

  return (
      <Paper sx={{
          border: '1px solid rgb(227, 227, 227)',
          boxShadow: '4px 4px 9px 2px #ddddddc2',
      }}>
          <ParamWidgetHeader title='Enrollment Statistics' />

          <Grid container spacing={0}>
              {EnrollmentData.map((item, index) => (
                  <Grid key={index} item xs={6}>
                      <Box sx={{
                          flexDirection: 'row',
                          textAlign: 'center',
                          display: 'flex',
                          gap: isMobile ? '10px' :'20px',
                          alignItems: 'center',
                          padding: isMobile ? '2rem 1rem'  : '2.5rem 2rem',
                          borderBottom: '1px solid rgb(227, 227, 227)',
                          justifyContent:'center',
                          borderRight: index % 2 === 0 ? '1px solid rgb(227, 227, 227)' : 'none', // Add border to even index items
                      }}>

                          {/* icon */}
                          <Box sx={{ background: `rgb(227, 242, 253)`, padding: isMobile ? '7px' :'10px', borderRadius: '12px' , display:'flex' }}>
                              {item.icon}
                          </Box>

                          {/* title and number */}
                          <Box sx={{flex:'0 0 70%'}}>
                            <Typography variant='h3' sx={{ fontSize: isMobile ? '14px' : '24px', }}>{item.counterNumber}</Typography>
                             <Typography variant='h3' sx={{ fontSize: isMobile ? '14px' : '16px', fontWeight: '400', paddingTop: '7px' }}>{item.counterTitle}</Typography>
                          </Box>
                      </Box>
                  </Grid>
              ))}
          </Grid>
      </Paper>
  )
}
// =================== Enrollment Statistics  End  ============


// ===================  Payment Gateway Wise Collection start ============
const ParentLoginStatus = () => {
  const Data = {
      series: [100, 200, 50],
      labels: ['Desktop Logins', 'Mobile Logins', 'Never Logged In'],
      colors: ['rgba(60, 159, 60, 0.71)', 'rgb(94, 53, 177)', 'rgb(30, 136, 229)'],
  };

  const heading = "Payment Gateway Wise Collection";

  return (
      <CommonChart Data={Data} heading={heading} />
  );
}
// ===================  Payment Gateway Wise Collection end ============


// ===================  Invoice Raised Start ============
const InvoiceRaised = () => {
  // Define the total amount and the paid amount
  const totalAmount = 50000; // Replace 1000 with your total amount
  const paidAmount = 30000; // Replace 600 with your paid amount

  // Calculate the percentage of the paid amount
  const paidPercentage = (paidAmount / totalAmount) * 100;
  // Calculate the percentage of the due amount
  // const duePercentage = 100 - paidPercentage;

  return (
    <>
      <Paper spacing={gridSpacing} className='scrollbar' elevation={0} sx={{ boxShadow:'4px 4px 9px 2px #ddddddc2' , display: 'flex', flexDirection: 'column', justifyContent: 'space-between' , border:'1px solid rgb(227, 227, 227)' , }}>
        <Grid >
         <ParamWidgetHeader title='Invoice Raised' />
          {/* Single progress bar indicating both paid and due amounts */}

           {/* paid */}
          <Typography variant='h4' sx={{textAlign:'center', padding:'3rem 0 0rem 0' , fontSize:'24px'}}> {paidPercentage}%</Typography>

          <Box sx={{padding:'14px 24px 60px 24px'}}>
              <LinearProgress variant="determinate" value={paidPercentage} sx={{
                height :'8px',
                background:'#2196f361',
                '& .MuiLinearProgress-barColorPrimary': {
                  backgroundColor: '#2196f391', // Change the color of the progress bar here
                },
              }} />
          </Box>
         
          {/* due ammount and paid amount */}
         <Box sx={{ borderTop:'1px solid rgb(227, 227, 227)'}}>
            <Grid sx={{
              display:'flex',
            }}>

                {/* paid amount */}
                <Box sx={{
                  flex:'0 0 50%',
                  borderRight:'1px solid rgb(227, 227, 227)',
                  padding:'2rem 24px',   
                  textAlign:'center',            
                }}>

                    <Typography variant="h3" sx={{
                      fontSize:'16px',
                      }}>

                        ₹ {paidAmount}

                    </Typography>

                    <Typography variant="h3" sx={{ fontSize:'16px', paddingTop:'5px' , fontWeight:'500' }}>
                          Paid
                    </Typography>
                    
                </Box>

                {/* due amount */}
                <Box sx={{
                  flex:'0 0 50%',
                  padding:'2rem 24px',
                  textAlign:'center',
                }}>

                  <Typography variant="h3" sx={{fontSize:'16px'}}>
                         ₹ {totalAmount - paidAmount}
                    </Typography>

                    <Typography variant="h3" sx={{fontSize:'16px' , paddingTop:'5px' , fontWeight:'500'}}>
                       Due
                    </Typography>
                </Box>

            </Grid>
         </Box>

        </Grid>
      </Paper>
    </>
  );
};
// ===================  Invoice Raised end ============


// ===================  Fee Collection Start  ============
const FeeCollection = () => {
  // Dummy data
  const Data = {
    series: [5000, 4000],
    labels: ['Cash', 'Demand Draft'],
    colors: ['rgb(94, 53, 177)', 'rgb(30, 136, 229)'],
};


  const heading = "Fee Collection";

  return (
      <CommonChart Data={Data} heading={heading} />
  );
}
// ===================  Fee Collection end  ============


// ================== fee defaulter start ==================
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
// ================== fee defaulter end ==================

const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} >

         {/* counter */}  
        <Grid item xs={12} lg={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' , display:'flex' , flexDirection:'column', gap:'24px' ,} }}>
           <Counters />
        </Grid>

          {/* enrollment stats */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <EnrollmentStatistics />
         </Grid>

        {/* parent login */}
        <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
                <ParentLoginStatus/>
          </Grid>

         {/* invoice raised */}
         <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <InvoiceRaised />
         </Grid>

         {/* fee collection */}
         <Grid item xs={12} lg={6}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <FeeCollection/> 
          </Grid>

           {/* fee defaulter */}
           <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <FeeDefaulter isLoading={isLoading} /> 
          </Grid>

          {/* need support */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              {/* <NeedSupport isLoading={isLoading} />  */}
              <NeedHelp isLoading={isLoading} />
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default Dashboard;