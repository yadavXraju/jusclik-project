import MainCard from 'ui-component/cards/MainCard';
import { Typography , Grid} from '@mui/material';
import { boxHeight , HeadingCss ,  subTitle , subtitle2 } from 'views/common-section/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';
import { BirthdayList } from './BirthdayList';
import {Divider , Box } from '@mui/material';



const UpcomingBirthday =()  => {

  return (
     <>
       <MainCard  style={boxHeight} className='scrollbar' > 
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sx={{mb:3}}>
              <Grid  alignContent="center" justifyContent="space-between">
                <Grid item>
                  <Typography variant="h2" style={HeadingCss}>
                     Upcoming Birthdays
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
     
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
      </MainCard> 
  </>
  )
}

export default UpcomingBirthday

