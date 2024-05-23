
import { Typography , Grid} from '@mui/material';
import {Divider , Box ,Paper} from '@mui/material';
import { subTitle , subtitle2  , boxHeight ,  HeadingCss } from 'component/dashboard-css/CommonCss';
import { studnetAttendancePercentage } from './Attendance';



const LowStudentAttendance = () => {

  // Sort the array based on attendancePercentage in ascending order
  const sortedAttendance = [...studnetAttendancePercentage].sort(
    (a, b) => parseFloat(a.attendancePercentage) - parseFloat(b.attendancePercentage)
  );

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
          <Grid
        sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
        }}
      >
                  <Typography variant="h2" style={HeadingCss}>
                     Lowest Attendance
                  </Typography>
                </Grid>
            
     
           {/* maping data */}
           <Grid sx={{ padding: '24px' }}style={boxHeight}>
            {sortedAttendance.slice(0 , 5).map((item, index) => (
                <Grid item xs={12} key={index} sx={{paddingTop:'0 !important'}}>
                  <Grid container direction="column">
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between" >
                        {/* title and icon */}
                        <Grid item sx={{display:'flex' , gap:'16px' ,alignItems:'center',}}>

                          {/* Icon */}
                          <Box sx={{
                              backgroundColor: item.bgColor,
                              // padding: '6px',
                              borderRadius: '50%',
                              color: '#fff',
                              display: 'flex',
                              justifyContent: 'center',
                           }}>
                                  {item.profile}
                           </Box>

                            {/* title */}
                            <Box>
                              <Typography variant="h3" style={subTitle}>
                                 {item.name}
                               </Typography>
                      
                               {/* desc */}
                                <Grid item>
                                   <Typography variant="subtitle" style={subtitle2}>
                                          {item.class}
                                    </Typography>
                                </Grid>
                            </Box>

                        </Grid>

                         {/* birth date */}
                        <Grid item>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                              <Box>
                                 <Typography variant='h4'>{item.attendancePercentage}</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                 
                      </Grid>
                    </Grid>
  
                  </Grid>
                  <Divider sx={{ my: 1.5 , color:'1px solid #80808024'}} />
                </Grid>
            ))}
          </Grid>
           </Paper>
          
     </>
  )
}

export default LowStudentAttendance

