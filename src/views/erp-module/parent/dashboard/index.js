// page owner abhishek
// description : Parent Dashboard

import React, { useState, useEffect }  from 'react';
import { Typography , useMediaQuery , Grid ,Avatar, Box, Button , Paper , IconButton, Tooltip, Badge , Divider} from '@mui/material';
import { gridSpacing } from 'store/constant';
import ApexCharts from 'react-apexcharts';

// ============== user welcome message imports 

import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails'
import { welcomeMsg } from 'components/dashboard-css/CommonCss'

// ============== Counter imports 
import { useSelector } from 'react-redux';
import CommonCounter from 'components/CommonCounter';
import { useNavigate } from 'react-router';

// ============== Profile imports 

// ============== Communication  imports
import AlignItemsList from 'views/erp-module/parent/parent-sidebar/communication-message/Contact-list';
import ParamWidgetHeader from 'component/ParamWidgetHeader';

// ============== Alerts imports
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ParamWidget from 'component/ParamWidget';

// ============== Assignment  imports
import Checkbox from '@mui/material/Checkbox';
import Attachment from 'views/erp-module/parent/parent-sidebar/assignments/Attachment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CreateIcon from '@mui/icons-material/Create';
import { data } from 'views/erp-module/parent/parent-sidebar/assignments/AssignmentData';
import { subTitle, subtitle2 } from 'component/dashboard-css/CommonCss';
import { commonStyles } from 'views/erp-module/parent/parent-sidebar/communication-message/Contact-list';
import { boxHeight } from 'component/dashboard-css/CommonCss';

// ============== Time Table  imports
import timeTableData1 from 'views/erp-module/parent/parent-sidebar/timetable/TimeTableData';


// Circular or update start 
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { UpdatesData } from 'views/erp-module/parent/parent-sidebar/updates/UpdatesData';

// user welcome Message start
const WelcomeMessage = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
     <Typography  style={welcomeMsg}  variant='h1' sx={{py:2, fontSize: isMobile ? '32px' : '40px'}}>   Hello {studentProfileDetails.StudentName} !</Typography>
    </>
  )
}
// user welcome Message end 

// Attendance Comp  start
export const AttendancetData  = {
  id :1,
  counterValue : '63.3%'  ,
  counterTitle : 'attendance',
}

export const present = '63.3%';
const AttendanceHomeComp = () => {
   // to store state in this varible
   const customization = useSelector((state) => state.customization);
   // Extract background color and set opacity
   const themeColor = customization.themeColor || '';

return (
 <>
   <CommonCounter CounterData={AttendancetData} themeColor={themeColor} className='themeColor'/>
 </>
)
}
// Attendance Comp  end

// Due Fee  start
export const DueFeeData  = {
  id :1,
  counterValue : '₹ -48,836%' ,
  counterTitle : 'fee due',
}

const DueFee = () => {
    // to store state in this varible
    const customization = useSelector((state) => state.customization);
    // Extract background color and set opacity
    const themeColor = customization.themeColorV2 || '';
 
 return (
  <>
    <CommonCounter CounterData={DueFeeData} themeColor={themeColor} className='themeColorV2'/>
  </>
 )
 }
// Due Fee  end 

// Profile fee  start
const Profile = () => {
  const navigate = useNavigate(); 


return (
  <>
    <Box sx={{ textAlign: 'center',  border: ' 1px solid rgb(227 227 227)',borderRadius:'7px', padding: '2rem' , background:'#fff' }}>
      <Avatar alt="Remy Sharp" src={studentProfileDetails.StudentImage} sx={{ width: 150, height: 150, margin: 'auto', marginBottom: '10px' }} />
      <Typography variant="h2">{studentProfileDetails.StudentName}</Typography>
      <Typography variant="h5" sx={{lineHeight:'1.6'}}>{studentProfileDetails.AdminNo}</Typography>
      <Typography variant="h5">Class : {studentProfileDetails.Class}</Typography>
      <Button sx={{ textTransform: 'uppercase', background: 'rgb(33, 150, 243)', color: '#fff' , marginTop:'1rem' }} variant="contained"  onClick={() => navigate('/parent/student-profile')}>
        View Profile
      </Button>
    </Box>
  </>
);
};

// Profile fee  end 

// Communication start

const Communication = () => {

  
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid rgba(128, 128, 128, 0.25)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
        marginBottom: '20px', // Add some bottom margin for spacing
      }}
    >
      <ParamWidgetHeader title='communication' />
      <Grid sx={{ padding: '24px', height: '470px',overflowY:"auto" }}>
        {/* Assuming AlignItemsList is a custom component */}
        <AlignItemsList communication_wrapper_style={{ paddingLeft: 0, paddingRight: 0 }} />
      </Grid>
    </Paper>
  );
};
// Communication end

// Alerts Start
export const ParentAlertData = [
  {
    id: 1,
    icon: <CurrencyRupeeOutlinedIcon />,
    title: 'Fee Payment Due',
    // if you want any type of  button then make showButton : true
    showButton: true, 
    buttonText : 'Pay',
    description: 'Fee Payment Due',
    
    // for bg color of icon
    bgColor : '#3c9f3cb5'
  },

  {
    id: 2,
    icon: <BookOutlinedIcon  />,

    title: 'New Book Issued',
    showButton: false,
    description: 'New Book Issued',
    bgColor : '#76b9ef'
  },

  {
    id: 3,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Leave Application Approved',
    showButton: false,
    description: 'Application No: 9',
    bgColor : '#5e35b1a3'
  },

  {
    id: 4,
    icon: <CurrencyRupeeOutlinedIcon />,
    title: 'Fee Payment Due',
    showButton: true,
    buttonText : 'Pay',
    description: 'Fee Payment Due',
    bgColor : '#3c9f3cb5'
  },

  {
    id: 5,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'New Book Issued',
    showButton: false,
    description: 'New Book Issued',
    bgColor : '#76b9ef'
  },

  {
    id: 6,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'Leave Application Approved',
    showButton: false,
    description: 'Application No: 9',
    bgColor : '#5e35b1a3'
  },

  {
    id: 7,
    icon: <NotificationsNoneOutlinedIcon />,
    title: 'New Book Issued',
    showButton: false,
    description: 'New Book Issued',
    bgColor : '#76b9ef'
  },
 
];

const Alerts = () => {

  return (
    <>
      <Box sx={{
        '& .css-16ti1tk-MuiButtonBase-root-MuiButton-root': {
          fontSize: {
            xs: '10px',
            sm: '12px',
            md: '14px'
          }
        }
      }}>
          <ParamWidget
          HeadingTitle='Alerts' 
          Data={ParentAlertData}
          icon={true}
          button={true}/>
      </Box>
   </>
  )
}
// Alerts end

// Assignments start
const useDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSnackbarOpen(true);
    setOpenDialog(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  // return all functions
  return {
    openDialog,
    snackbarOpen,
    handleOpenDialog,
    handleCloseDialog,
    handleSnackbarClose,
  };
};

const AssignmentsHome = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
 
  // this function from assignment and  converted into custom hook 
  const { openDialog, snackbarOpen, handleOpenDialog , handleCloseDialog ,  handleSnackbarClose} = useDialog()

  const navigate = useNavigate();

  // checkbox id  for identify  which checkbox is  clicked
  const handleCheckboxClick = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id)
        : [...prevSelectedItems, id]
    );

    setCompletedItems((prevCompletedItems) =>
      prevCompletedItems.includes(id)
        ? prevCompletedItems.filter((itemId) => itemId !== id)
        : [...prevCompletedItems, id]
    );
  };


  // Load selected items from localStorage on component mount
  useEffect(() => {
    const storedSelectedItems = localStorage.getItem('selectedItems');
    const storedCompletedItems = localStorage.getItem('completedItems');

    if (storedSelectedItems) {
      setSelectedItems(JSON.parse(storedSelectedItems));
    }

    if (storedCompletedItems) {
      setCompletedItems(JSON.parse(storedCompletedItems));
    }
  }, []);


  // Save selected items to localStorage whenever it changes

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    localStorage.setItem('completedItems', JSON.stringify(completedItems));
  }, [selectedItems, completedItems]);


  const inputStyle = {
    borderRadius: '0',
    width: '0',
    height: '0',
  }


  const AssignmentToShow = 5; 

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const isMobile = useMediaQuery('(max-width: 767px)');
  

  // Sort the data array based on the 'date' property in descending order
  const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    < Paper>
      <ParamWidgetHeader title='Recent Homework & Assignments' />
      <Grid  sx={{ padding: '24px' }} style={boxHeight}>             {/* getting data and slicing */}
                  {sortedData.slice(0 , AssignmentToShow).map((item) => (
                    <Grid item container key={item.id} lg={12} sx={{ gap: '8px', borderBottom:'1px solid #80808024', paddingBottom:'10px',paddingTop:'24px'}}>
                      {/* left */}
                        <Grid container item lg={7} md={7} sx={{gap:'8px'}}>
                            <Grid item  sx={{ display: 'flex', flex: '0 0 10%' , gap: '3px', alignItems:'center' }}   className="notchecked" >

                              {/* blank div for verticle line */}
                              <Grid
                                sx={{
                                  background: completedItems.includes(item.id) ? theme => theme.palette.success.main : theme => theme.palette.primary.main,
                                  width: '5px',
                                  height: '100%',
                                  borderRadius: '3px'
                                }}
                              >

                              </Grid>

                              {/* checkbox */}

                              <Checkbox {...label} defaultChecked color="success"  style={inputStyle }
                                type='checkbox'
                                {...label} 
                                checked={selectedItems.includes(item.id)}
                                onClick={() => handleCheckboxClick(item.id)}
                                sx={{margin:'0 18px',transform:'scale(1.3) ',
                        
                                '&:not(.Mui-checked)': {
                                  backgroundColor: '#f1f1f4',
                                },                
                                }}                           
                              />

                            </Grid>
                            
                            {/* subject, date and status */}
                              <Grid item  sx={{display:'flex' ,  flex:  isMobile ? '0 0 100%'  :  '0 0 80%' , gap:'10%' , alignItems:'center'}}>

                            {/* this box is holding subject , date and description */}
                                  <Box sx={{flex : '0 0 60%'}}>
                                      {/* subject and date*/}
                                    <Typography variant='body1' style={subTitle}>
                                        {item.name} -  {item.date}
                                    </Typography>

                                    {/*description*/}

                                    <Typography variant='body1' style={subtitle2}>
                                    {item.description}  
                                    </Typography>
                                  </Box>

                            {/* this box is holding status */}

                                <Box sx={{flex : '0 0 30%'}}>
                                      <Typography variant='body1' sx={{ color: completedItems.includes(item.id) ? '#00e676' : '#2196f3', fontWeight: '400', display:'inline', fontSize: '14px' , background : completedItems.includes(item.id) ? '#ccffdd' : '#2196f32e' , padding:'0 4px'}}>
                                      {completedItems.includes(item.id) ? 'Complete' : 'In Process'}
                                    </Typography>
                                </Box>

                            
                              </Grid>
                        </Grid>

                        {/* right */}
                        <Grid container item lg={4} md={4} sx={{gap:'20px' , alignItems:'center', justifyContent:'end' , marginTop: isMobile ? '20px' : '0' }}>
                  

                            <Box sx={{display:'flex', gap:'20px'}}>                          

                      

                                <Badge badgeContent={item.attachmentNo} color="primary" >
                                  <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
                                        <Tooltip title="Attachment">
                                          <IconButton onClick={handleOpenDialog} sx={{p:0}}>
                                              <AttachmentIcon  color="primary"/>
                                          </IconButton>
                                      </Tooltip> 
                                  </Box>
                                </Badge>


                    

                                <Badge color="primary" >
                                  <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
                                        <Tooltip  title="Edit">
                                          <IconButton  sx={{p:0}}>
                                            <CreateIcon  color="primary" sx={{fontSize:'20px'}}/>
                                          </IconButton>
                                      </Tooltip> 
                                  </Box>
                                </Badge>

                            </Box>

                          {/* due date end*/}
                        </Grid>
                        


                    </Grid>         
                  ))}

                  <Box sx={{px:3, textAlign:'right',paddingTop:'16px'}}>
                      <Button variant="contained" onClick={() => navigate('/parent/assignments')}>
                        View More
                      </Button>
                  </Box>

      </Grid>
      <Attachment isOpen={openDialog} onClose={handleCloseDialog} snackOpen={snackbarOpen} snackBarClose={handleSnackbarClose} />
    </Paper>
  );
}
// Assignments end

// Attandance Chart HomeComp Start
export const absent = ' 36.7%';

const AttandanceChartHomeComp = () => {
  const navigate = useNavigate();
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');
  
    const chartData = {
      series: [parseFloat(present), parseFloat(absent)],
      chart: {
        type: 'donut',
      },
      labels: ['Present', 'Absent'],
      colors: ['#61bb61d4', 'rgb(244, 67, 54)'],
      responsive: [{
        breakpoint: 768,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
      legend: {
        fontSize: '16px',
        colors: ['#99a1b7'],
        fontWeight:'600'
      },
    };
  
    return (
         <>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                border: '1px solid rgba(128, 128, 128, 0.25)',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                marginBottom: '20px', // Add some bottom margin for spacing
              }}
           >
            <ParamWidgetHeader title='Attendance' />
        
                <Grid sx={{ padding: '24px' }}style={boxHeight}>
                    <ApexCharts options={chartData} series={chartData.series} type="donut"  height={ isMediumDesktop ? 370 : 370} />
              
  
                <Box sx={{p:3, pt:0 , textAlign:'right' , marginTop: isMobile ? '2rem' : '0'}}>
                    <Button variant="contained" onClick={() => navigate('/parent/attendance')}>
                      View More
                    </Button>
                </Box>
                </Grid>
            </Paper>
         </>
    );
};
// Attandance Chart HomeComp end

// Time Table HomeComp Start
const TimeTableHome = () => {
  const [timeTableData, setTimeTableData] = useState(null);

  // Media querys for responsiveness
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isSmallMobile = useMediaQuery('(max-width: 500px)');


  //  style for time table header

  const timeTableHeader = {
    display: 'flex',
    gap: '16px',
    flexDirection: isMobile ? 'column' : 'row',
    textAlign: 'left',
  }


  // fethcing data 

  useEffect(() => {
    const fetchData = async () => {
      const data = await timeTableData1;
      setTimeTableData(data);
    };

    fetchData();
  }, []);

  // Check if data has been fetched
  if (!timeTableData) {
    return <p>Loading...</p>;
  }

  // Get the current day
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Access the array for the current day
  const currentDayData = timeTableData[currentDay];

  // Check if data is available for the current day
  if (!currentDayData || currentDayData.length === 0) {
    return <p>No schedule available for {currentDay}</p>;
  }

  // Map over the array and display details
  return (
    <>

      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
          border: '1px solid rgba(128, 128, 128, 0.25)',
          boxShadow: '4px 4px 9px 2px #ddddddc2',
          marginBottom: '20px', // Add some bottom margin for spacing
        }}
      >

        <ParamWidgetHeader title='today Timetable' />
         
        <Grid style={boxHeight} >
          {/* header sec start */}
          <Grid container sx={{ borderBottom: '1px solid #80808040;', padding: '10px 24px' }} >


            <Grid item lg={3} md={3} sm={3} xs={3} style={timeTableHeader} >
              <Typography variant='span' sx={{ fontSize: isMobile ? '14px' : '18px' }} >Period</Typography>
            </Grid>

            <Grid item lg={3} md={3} sm={3} xs={3} style={timeTableHeader} >
              <Typography variant='span' sx={{ fontSize: isMobile ? '14px' : '18px' }} >Subject</Typography>
            </Grid>

            <Grid item lg={3} md={3} sm={3} xs={3} style={timeTableHeader} >
              <Typography variant='span' sx={{ fontSize: isMobile ? '14px' : '18px' }} >Teacher</Typography>
            </Grid>

            <Grid item lg={3} md={3} sm={3} xs={3} style={timeTableHeader}>
              <Typography variant='span' sx={{ fontSize: isMobile ? '14px' : '18px' }} >Time</Typography>
            </Grid>

          </Grid>
          {/* header section end */}



          {currentDayData.map((scheduleItem, index) => (
            <Grid container key={index}>

              {/* if period is Assembly or short break render only  period  cuz of bg color adjustment */}

              {scheduleItem.period === 'Assembly' || scheduleItem.period === 'Short Break'
                ?
                <Grid container sx={{ textAlign: 'left', display: 'flex', padding: '13px 24px', background: 'rgba(128, 128, 128, 0.1)' }}>
                  <Grid item lg={12} md={12} sm={12} xs={12}
                    sx={{
                      display: 'flex',
                      gap: isMobile ? '1px' : '16px',
                      flexDirection: isMobile ? 'column' : 'row',
                      flex: isSmallMobile ? '0 0 40%' : 'auto',
                    }}>
                    <Typography variant='body2' sx={{ color: 'green', fontWeight: '500', fontSize: isMobile ? '14px' : '16px', }}>
                      {scheduleItem.period}
                    </Typography>
                  </Grid>
                </Grid>

                //  else render all data  

                :

                <Grid container sx={{ textAlign: 'left', display: 'flex', padding: '13px 24px', }}>
                  <Grid item lg={3} md={3} sm={3} xs={3}
                    sx={{
                      display: 'flex',
                      gap: isMobile ? '1px' : '16px',
                      flexDirection: isMobile ? 'column' : 'row',
                      flex: isSmallMobile ? '0 0 40%' : 'auto',
                    }}>
                    <Typography variant='body2' sx={{ fontWeight: '500', fontSize: isMobile ? '14px' : '16px' }}>
                      {scheduleItem.period}
                    </Typography>
                  </Grid>


                  {scheduleItem.details.length > 0 ? (
                    <Grid item lg={9} md={9} sm={9} xs={9} >

                      {scheduleItem.details.map((detail, detailIndex) => (

                        <Grid key={detailIndex} sx={{ display: 'flex' }}>

                          <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flex: isSmallMobile ? '0 0 25%' : 'auto', }} >
                            {/* <Typography variant='h5' sx={{fontSize:isMobile ? '14px' : '15px' }}>{detail.time}</Typography> */}
                            <Typography variant='h5' sx={{ fontSize: isMobile ? '14px' : '14px', display: 'flex', alignItems: 'center' }}>
                              <span>{detail.subject}</span>
                            </Typography>
                          </Grid>

                          <Grid item lg={4} md={4} sm={4} xs={4}
                            sx={{ display: 'flex', gap: '16px', flexDirection: isMobile ? 'column' : 'row', flex: isSmallMobile ? '0 0 35%' : 'auto', }}>
                            <Typography variant='h5' sx={{ fontSize: isMobile ? '14px' : '14px', }}>{detail.teacher}</Typography>
                          </Grid>

                          <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flex: isSmallMobile ? '0 0 25%' : 'auto', }} >
                            <Typography variant='h5' sx={{ fontSize: isMobile ? '14px' : '15px' }}>{detail.time}</Typography>
                          </Grid>

                        </Grid>
                      ))}

                    </Grid>
                  ) : (
                    <p>  </p>
                  )}

                </Grid>
              }

              {/* map function for getting details  object*/}

            </Grid>
          ))}

        </Grid>
      </Paper>


    </>
  );
};
// Time Table HomeComp End


// Circular or update start 
const CircularAndNoticeHomeComp = ({ isLoading }) => {
 
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 767px)')
  const CirculatToShow = 4

  const dateDesign = {
      background: 'rgb(241, 241, 241)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '16px',
  }
  
  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard /> 
      ) : (
        <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid rgba(128, 128, 128, 0.25)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
        marginBottom: '20px', // Add some bottom margin for spacing
      }}
    > 
        <ParamWidgetHeader title='latest updates' />
          <Grid sx={{ padding: '24px' }} style={boxHeight}>
        {UpdatesData.slice(0,CirculatToShow).map((data) => (
          <Grid item xs={12} key={data.id} >
            <Grid container direction="column">
              <Grid item>
                <Grid container alignItems="center" justifyContent="space-between" sx={{ alignItems: 'start' }} >

                  
                  {/* date and month */}
                  <Grid item sx={{flex: isMobile ? '0 0 100%' :'0 0 8%' }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item sx={{display:'flex'}} style={dateDesign}>                         
                        <Typography variant="subtitle1" color="#11927" sx={{fontSize:'16px'}}>
                          {data.date}
                        </Typography>

                        <Typography variant="subtitle1" color="#11927" sx={{fontSize:'18px',fontWeight:'700', marginTop:'-10px'}}>
                            {data.month}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* title */}
                  <Grid item sx={{ flex: isMobile ? '0 0 100%' : '0 0 86%' , marginTop: isMobile ? '20px' : 'auto'}}>
                    <Typography variant="h3" color="#000" sx={{fontWeight:'500', fontSize:'16px' , pb:'1'}}>
                      {data.title}
                    </Typography>

                      {/* <CalendarMonthTwoToneIcon sx={{ color: '#364152a3' , fontSize:'20px', marginRight:'2px' }} /> */}

                    <Typography style={subtitle2} variant="p" sx={{pt:'7px', display:'flex'}}>
                      {data.description}
                    </Typography>
    
                  </Grid>

                </Grid>
              </Grid>

              {/* description */}
              
                  {/* <Grid item>
                    <Typography variant="p" style={lineClamp}>
                      {data.description}
                    </Typography>
                  </Grid> */}
            </Grid>
            <Divider sx={{ my: 1.5 }} />
          </Grid>
        ))}

          <Box sx={{ pt: 3 , marginLeft:'auto' ,display:'flex', justifyContent:'end'}}>
              <Button variant="contained" onClick={() => navigate('/parent/updates')}>
                View More
              </Button>
          </Box>
          </Grid>
        </Paper>
      )}
    </>
  );
};
// Circular or update end 

const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

         {/* Welcome message , Attandance and fee due comp */}
          <Grid item lg={8} md={12} sm={12} xs={12} >
            <Grid sx={{ backgroundColor: '#fff',  border: '1px solid rgb(227 227 227)', borderRadius: '7px',  px: 4, py: 3, }}
            >
                <Grid container spacing={gridSpacing} sx={{pb:'11px'}}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <WelcomeMessage isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <AttendanceHomeComp isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <DueFee isLoading={isLoading} />
                    </Grid>
               </Grid>
            </Grid>
          </Grid>

         {/* Profile comp */}
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={12} xs={12} md={12} lg={12}>
                <Profile />
              </Grid>
            </Grid>
          </Grid>

          {/* Communication comp */}
          <Grid item xs={12} lg={7} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <Communication isLoading={isLoading} />
          </Grid>

           {/* Alert comp */}
          <Grid item xs={12} lg={5}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <Alerts isLoading={isLoading} /> 
          </Grid>

           {/* Assignment comp */}
          <Grid item xs={12} lg={7}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <AssignmentsHome isLoading={isLoading} />
          </Grid>
          
           {/* Attandance chart comp */}
          <Grid item xs={12} lg={5}  md={12}>
              <AttandanceChartHomeComp isLoading={isLoading} />
          </Grid>

           {/* Time Table comp */}
          <Grid item xs={12} lg={7}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <TimeTableHome isLoading={isLoading} /> 
          </Grid>

           {/* Circular and Notice or Updates comp */}
          <Grid item xs={12}  lg={5}  md={12}>
              <CircularAndNoticeHomeComp isLoading={isLoading} />
          </Grid>


        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
