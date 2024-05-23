
import { Typography , Grid} from '@mui/material';
import { boxHeight , HeadingCss ,  subTitle , subtitle2 } from 'component/dashboard-css/CommonCss';

import { BirthdayList } from './BirthdayList';
import {Divider , Box , Paper} from '@mui/material';



const UpcomingBirthday =()  => {

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
                     Upcoming Birthdays
                  </Typography>
                </Grid>
             
     <Grid sx={{padding:'24px'}}style={boxHeight}>
           {/* maping data */}
            {BirthdayList.map((item, index) => (
                <Grid item xs={12} key={index} sx={{paddingTop:'0 !important'}}>
                  <Grid container direction="column">
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{gap:'14px'}}>
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
                                  {item.icon}
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

                         {/* birthday date              */}
                        <Grid item sx={{marginLeft:'auto'}}>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                              <Box>
                                 <Typography variant='h4'>{item.birthday}</Typography>
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

export default UpcomingBirthday

