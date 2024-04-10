import PropTypes from 'prop-types';
import {  Divider, Grid, Typography , Button ,Box , useMediaQuery} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import { HeadingCss , boxHeight, subtitle2 } from 'views/common-section/dashboard-css/CommonCss';
import { UpdatesData } from 'views/erp-module/parent/parent-sidebar/updates/UpdatesData';
import { useNavigate } from 'react-router';
// import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';



// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

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
        <MainCard style={boxHeight} className='scrollbar'> 
    
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid  alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h2" style={HeadingCss}>
                      latest updates
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

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

                <Box sx={{ pt: 3 , marginLeft:'auto'}}>
                    <Button variant="contained" onClick={() => navigate('/parent/updates')}>
                      View More
                    </Button>
                </Box>
            </Grid>
      
        </MainCard>
      )}
    </>
  );
};

CircularAndNoticeHomeComp.propTypes = {
  isLoading: PropTypes.bool,
};

export default CircularAndNoticeHomeComp;
