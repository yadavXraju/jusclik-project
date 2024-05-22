import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid,  Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonAttendanceCard from 'ui-component/cards/Skeleton/CounterCard';

// assets
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { useNavigate } from 'react-router';
// import { present } from './chart-data/AttandanceData';
import { useSelector } from 'react-redux';

export const present = '63.3%';
const AttendanceHomeComp = ({ isLoading }) => {
  const theme = useTheme();
  const navigate = useNavigate();

// ===========================|| Theme color and other setting ||=========================== //


      // to store state in this varible
      const customization = useSelector((state) => state.customization);

    
      // Extract background color and set opacity
      const themeColor = customization.themeColor || 'rgb(94, 53, 177)';
      const opacity = .95;


  const CardWrapper = styled(MainCard)(({ theme }) => ({
     backgroundColor: `${themeColor.slice(0, -1)}, ${opacity}) !important`, // Adding opacity
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 210,
      background: theme?.customization?.themeColor,
      borderRadius: '50%',
      top: -85,
      right: -95,
      [theme.breakpoints.down('sm')]: {
        top: -105,
        right: -140
      }
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 210,
      background: theme?.customization?.themeColor,
      borderRadius: '50%',
      top: -125,
      right: -15,
      opacity: 0.5,
      [theme.breakpoints.down('sm')]: {
        top: -155,
        right: -70
      }
    },
    
  }));



  return (
    <>
      {isLoading ? (
        <SkeletonAttendanceCard />
      ) : (
        <CardWrapper border={false} content={false} className='themeColor'>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between" alignItems='center'>
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        // backgroundColor: theme.palette.secondary[800],
                        background: `${theme?.customization?.backgroundColor} `,
                        mt: 1,
                        color : '#fff'
                      }}
                      className='themeColor'
                    >
                       <CalendarMonthTwoToneIcon />
                    </Avatar>
                  </Grid>


                  <Grid item>
                  <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        // backgroundColor: theme.palette.secondary.dark,
                        background: `${theme?.customization?.backgroundColor} `,
                        color: theme.palette.secondary[200],
                        zIndex: 1
                      }}
                      className='themeColor'
                      aria-controls="menu-earning-card"
                      aria-haspopup="true"  
                      onClick={() => navigate('/parent/attendance')}   
                    >
                      <ArrowForwardTwoToneIcon fontSize="inherit" sx={{color:'#fff'}} />
                    </Avatar>           
                  </Grid>
            
                </Grid>
              </Grid>
              
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{present}</Typography>
                  </Grid>
     
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#fff',
                    textTransform : 'uppercase'
                  }}
                >
                attendance
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

AttendanceHomeComp.propTypes = {
  isLoading: PropTypes.bool
};

export default AttendanceHomeComp;
