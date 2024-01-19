import PropTypes from 'prop-types';
import {  Divider, Grid, Typography , Button ,Box} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import { HeadingCss ,fullHeight } from './dashboard-css/CommonCss';
import { UpdatesData } from 'views/sidebar-menus/updates/UpdatesData';
import { useNavigate } from 'react-router';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';



// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const CircularAndNoticeHomeComp = ({ isLoading }) => {

  const navigate = useNavigate();
  const lineClamp = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
  };

  const CirculatToShow = 3
  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={true} style={fullHeight}> {/* Updated content={true} */}
    
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid  alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h2" style={HeadingCss}>
                      latest update
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              {UpdatesData.slice(0,CirculatToShow).map((data) => (
                <Grid item xs={12} key={data.id}>
                  <Grid container direction="column">
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{ alignItems: 'baseline' }}>
                        <Grid item sx={{ pb: 2 }}>
                          <Typography variant="h3" color="#000" sx={{fontWeight:'500', fontSize:'16px'}}>
                            {data.title}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item sx={{display:'flex'}}>
                            <CalendarMonthTwoToneIcon sx={{ color: '#364152a3' , fontSize:'20px', marginRight:'2px' }} />
                              <Typography variant="subtitle1" color="inherit">
                                {data.date} 
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="p" style={lineClamp}>
                        {data.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                </Grid>
              ))}

                <Box sx={{ pt: 3 , marginLeft:'auto'}}>
                    <Button variant="contained" onClick={() => navigate('/updates')}>
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
