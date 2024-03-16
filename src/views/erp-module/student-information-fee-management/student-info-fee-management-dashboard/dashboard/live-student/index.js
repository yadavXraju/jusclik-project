import React from 'react'
import { Paper, Typography , Box , Grid , useMediaQuery} from '@mui/material'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import NoAccountsTwoToneIcon from '@mui/icons-material/NoAccountsTwoTone';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

// chart imports
import ApexCharts from 'react-apexcharts';

const LiveStudent = () => {

    const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
    const isMobile = useMediaQuery('(max-width: 767px)');

// ====================  parent login chart data ====================

const chartData = {
    series: [100, 200 , 50 ],
    chart: {
      type: 'donut',
    },
    labels: ['Desktop Logins', 'Mobile Logins' , 'Never Logged In'],
    colors: ['rgba(60, 159, 60, 0.71)' , 'rgb(94, 53, 177)', 'rgb(30, 136, 229)' , ],
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '100%',
          },
        },
      },
    ],
  };

    // for calculate the percentage of cash and demand draft
    // const calculatePercentage = (value, total) => {
    //     return ((value / total) * 100).toFixed(1);
    //   };
    

    //   const deskTopPercentage = calculatePercentage(chartData.series[0], chartData.series.reduce((acc, cur) => acc + cur, 0));
    //   const mobilePercentage = calculatePercentage(chartData.series[1], chartData.series.reduce((acc, cur) => acc + cur, 0));
    //   const neverLoggedPercentage = calculatePercentage(chartData.series[2], chartData.series.reduce((acc, cur) => acc + cur, 0));

    const calculateAmount = (value) => {
        return value.toFixed(0);
      };
    
      const desktopLogIn = calculateAmount(chartData.series[0], chartData.series.reduce((acc, cur) => acc + cur, 0));
      const mobileLogIn = calculateAmount(chartData.series[1], chartData.series.reduce((acc, cur) => acc + cur, 0));
      const NeverLogIn = calculateAmount(chartData.series[2], chartData.series.reduce((acc, cur) => acc + cur, 0));


  return (
    <>
    
    {/*=========================   counter 1 =========================  */}
      <Paper sx={{
        //  border:'1px solid rgb(227, 227, 227)',
        //  boxShadow:'4px 4px 9px 2px #ddddddc2',
         background:'none'
         }}>
            {/* counter grid 1 */}
            <Grid sx={{
                display:'flex' ,
                gap: '17px',
            }}>

                  {/* live students */}
                    <Box sx={{
                        flex:'0 0 33.3%' , display:'flex', gap:'40px',alignItems:'center' , padding:'2rem',  background:'#f9f9fb' , borderRadius:'12px 12px 12px 12px' , borderRight:'1px solid rgb(227, 227, 227)', boxShadow:'4px 4px 9px 2px #ddddddc2',
                        }}>
                        <Box sx={{
                            background:'rgb(204 245 232)',
                            borderRadius:'50%',
                            padding:'7px' 
                            }}>
                            <PeopleOutlineIcon sx={{color:'rgb(16 185 129)',fontSize:'30px' , display:'flex'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'32px' , color:'#000' }}>99</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase' , paddingTop:'7px' , fontWeight:'500'}}>Live Students</Typography>
                    </Box>
                    </Box>

                  {/* boys  counter*/}
                    <Box sx={{flex:'0 0 33.3%' , display:'flex', gap:'40px',alignItems:'center', padding:'2rem',background:'#f9f9fb' ,  borderRight:'1px solid rgb(227, 227, 227)' , boxShadow:'4px 4px 9px 2px #ddddddc2', borderRadius:'12px'}}>
                        <Box sx={{
                            background:'rgb(245 238 215)',
                            borderRadius:'50%',
                            padding:'7px',
                            }}>
                            <PermIdentityOutlinedIcon sx={{fontSize:'30px' , display:'flex' , color:'rgb(247, 144, 9)'}}/>
                        </Box>

                    <Box>
                        <Typography variant='h3' sx={{fontSize:'32px' , color:'000' ,  }}>83</Typography>
                        <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase' ,  paddingTop:'7px' , fontWeight:'500'}}>Boys</Typography>
                    </Box>
                    </Box>
                 
                  {/* girls counter */}
                    <Box sx={{flex:'0 0 33.3%' , display:'flex', gap:'40px',alignItems:'center', padding:'2rem',background:'#f9f9fb' , borderRadius:'12px' ,  boxShadow:'4px 4px 9px 2px #ddddddc2',}}>
                        <Box sx={{
                            background:'rgb(42 101 191 / 15%)',
                            borderRadius:'50%',
                            padding:'7px'
                            }}>
                            <Person2OutlinedIcon sx={{fontSize:'30px' , display:'flex' , color:'rgb(42, 101, 191)'}}/>
                        </Box>

                        <Box>
                            <Typography variant='h3' sx={{fontSize:'32px' , color:'#000'}}>16</Typography>
                            <Typography variant="h4" sx={{fontSize:'16px' , textTransform:'uppercase', paddingTop:'7px' , fontWeight:'500'}}>Girls</Typography>
                        </Box>
                    </Box>
            </Grid>

      </Paper>

        {/*  =======================  section 2  enrollment statistics and parent logins ======================= */} 
        <Grid sx={{display:'flex' , gap:'2%'}}>

            {/*=========================  enrollment statistics =========================*/}
            <Paper  sx={{
                border:'1px solid rgb(227, 227, 227)',
                boxShadow:'4px 4px 9px 2px #ddddddc2',
                // maxWidth:'49%'
                flex:'0 0 49%'
            }}>

                {/* enrollment stats title*/}

                <Box sx={{ padding: '24px 24px 0 24px' , background:'#f9f9fb' , borderRadius:'12px'}}>
                    <Typography variant='h2' style={{...HeadingCss , border:'none' }}>enrollment statistics</Typography>
                </Box>

                {/* counter grid 2 */}
                    <Grid sx={{
                            display:'flex' ,
                            borderTop:'1px solid rgb(227, 227, 227)'
                    }}>

                        {/* =========================  grid 1  enquiry and registration =========================   */}
                        <Grid sx={{flex:'0 0 50%'}}>

                            {/* enquiry */}
                            <Box sx={{
                                flex:'0 0 50%' ,
                                flexDirection:'column',
                                textAlign:'center',
                                display:'flex', gap:'20px',
                                alignItems:'center',
                                borderRight:'1px solid rgb(227, 227, 227)',
                                padding:'2.5rem 2rem',
                                borderBottom:'1px solid rgb(227, 227, 227)',
                                }}>

                                {/* icon and title */}
                                    <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'100%'}}>
                                        {/* icon */}
                                        <Box sx={{padding:'10px' , borderRadius:'12px' , background:'rgb(227, 242, 253)' , display:'flex'}}>
                                        <LiveHelpTwoToneIcon sx={{color:'rgb(94, 53, 177)' ,  fontSize:'30px'}} />
                                        </Box>

                                        {/* stats */}
                                        <Box sx={{flex:'0 0 65%'}}>
                                            <Typography variant='h3' sx={{fontSize:'24px' ,  }}>25</Typography>         
                                            <Typography variant='h3' sx={{fontSize:'16px' , fontWeight:'400' ,  paddingTop:'7px'}}>Enquiries</Typography>           
                                        </Box>
                                    </Grid>
                            </Box>

                            {/* Registration */}
                            <Box sx={{
                                flex:'0 0 25%' ,
                                display:'flex', 
                                flexDirection:'column',
                                textAlign:'center',
                                gap:'20px',
                                alignItems:'center',
                                borderRight:'1px solid rgb(227, 227, 227)',
                                padding:'2.5rem 2rem',
                                }}>

                                {/* icon and title */}
                                <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'100%'}}>

                                    {/* icon */}
                                    <Box sx={{padding:'10px' , borderRadius:'12px' , background:'rgb(227, 242, 253)' , display:'flex'}}>
                                        <AssignmentTurnedInTwoToneIcon  sx={{color:'rgb(94, 53, 177)' ,  fontSize:'30px'}} />
                                    </Box>

                                    {/* stats */}
                                    <Box sx={{flex:'0 0 65%'}}>
                                    <Typography variant='h3' sx={{fontSize:'24px',}}>76</Typography>         
                                        <Typography variant='h3' sx={{fontSize:'16px' , fontWeight:'400' , paddingTop:'7px'}}>Registration</Typography>       
                                    </Box>
                                </Grid>
                            </Box>
                        </Grid>

                        {/* =========================   grid 2  withdrawl and admission  =========================  */}
                        <Grid sx={{flex:'0 0 50%'}}>

                            {/* admission */}
                                <Box sx={{
                                flex:'0 0 25%' ,
                                display:'flex',
                                flexDirection:'column',
                                textAlign:'center',
                                gap:'20px',
                                alignItems:'center',
                                // borderRight:'1px solid rgb(227, 227, 227)',
                                borderBottom:'1px solid rgb(227, 227, 227)',
                                padding:'2.5rem 2rem',
                                }}>
                                    
                                    {/* icon and title */}
                                    <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'100%'}}>
                                        {/* icon */}
                                        <Box sx={{padding:'10px' , borderRadius:'12px' , background:'rgb(227, 242, 253)' , display:'flex'}}>
                                                <BadgeTwoToneIcon  sx={{color:'rgb(94, 53, 177)' ,  fontSize:'30px'}} />
                                        </Box>

                                        {/* stats */}
                                        <Box sx={{flex:'0 0 65%'}}>
                                            <Typography variant='h3' sx={{fontSize:'24px' ,  }}>281</Typography>    
                                            <Typography variant='h3' sx={{fontSize:'16px' , fontWeight:'400' ,  paddingTop:'7px'}}>Admission</Typography>
                                        </Box>
                                    </Grid>
                                </Box>

                                {/* withdrawl */}

                            
                                    <Box sx={{
                                        flex:'0 0 25%' ,
                                        display:'flex',
                                        flexDirection:'column',
                                        textAlign:'center',
                                        gap:'20px',
                                        alignItems:'center',
                                        padding:'2.5rem 2rem',
                                
                                        }}>

                                    {/* icon and title */}
                                    <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'100%'}}>
                                        {/* icon */}
                                        <Box sx={{padding:'10px' , borderRadius:'12px' , background:'rgb(227, 242, 253)' , display:'flex'}}>
                                                <NoAccountsTwoToneIcon sx={{color:'rgb(94, 53, 177)' , fontSize:'30px'}} />
                                        </Box>
                                        {/* stats */}
                                        <Box sx={{flex:'0 0 65%'}}>
                                                <Typography variant='h3' sx={{fontSize:'24px' , }}>27</Typography>    
                                                <Typography variant='h3' sx={{fontSize:'16px' , fontWeight:'400' ,  paddingTop:'7px'}}>Withdrawals</Typography>
                                            </Box> 
                                        </Grid>
                                    </Box>
                        
                            </Grid>
                            
                    </Grid>
            </Paper>  


                 {/*=========================  parent login  =========================*/}
            <Paper sx={{
                flex:'0 0 49%',
                border:'1px solid rgb(227, 227, 227)',
                boxShadow:'4px 4px 9px 2px #ddddddc2',
            }}>
                {/* ============== logins* ================ */}

                     {/* title */}
                <Box sx={{ padding: '24px 24px 0 24px' , background:'#f9f9fb' , borderRadius:'12px 12px 0 0px' , borderBottom:'1px solid rgb(227, 227, 227)'}}>
                    <Typography variant='h2' style={{...HeadingCss , border:'none' }}>
                        parent login status
                        {/* payment gateway wise collection */}
                    </Typography>
                </Box>

                    <Grid sx={{ display: 'flex' }}>
                            {/* chart */}
                            <Grid lg={6} sx={{ borderRight: '1px solid rgb(227, 227, 227)' }}>
                                <Grid style={{ display: 'flex', flexDirection: 'column', padding: '7px 20px 4px 20px', alignItems: isMobile ? 'center' : 'auto' }}>
                                    <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 200 : 280} />
                                </Grid>
                            </Grid>

                            <Grid lg={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: '40px', gap: '20px' }}>
                   
                                {/* Desktop */}
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant='h4' sx={{ color: 'rgba(60, 159, 60, 0.71)', fontSize: '24px' }}>₹ {desktopLogIn}</Typography>
                                    <Typography variant='h4'>Desktop Logins</Typography>
                                </Box>

                                {/* Mobile */}
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant='h4' sx={{ color: 'rgb(94, 53, 177)', fontSize: '24px' }}>₹ {mobileLogIn}</Typography>
                                    <Typography variant='h4'>Mobile Logins</Typography>
                                </Box>

                                {/* never log in  */}
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant='h4' sx={{ color: 'rgb(30, 136, 229)', fontSize: '24px' }}>₹ {NeverLogIn}</Typography>
                                    <Typography variant='h4'>Never Logged In</Typography>
                                </Box>

                            </Grid>
                    </Grid>
            </Paper>
        </Grid>
    </>
  )
    
}

export default LiveStudent