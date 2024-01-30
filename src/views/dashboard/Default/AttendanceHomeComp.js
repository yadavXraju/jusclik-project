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
import { present } from './chart-data/AttandanceData';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  // backgroundColor: theme.palette.secondary.dark,
  background: theme?.customization?.backgroundColor,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    // background: theme.palette.secondary[800],
    background: theme?.customization?.backgroundColor,
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
    // background: theme.palette.secondary[800],
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

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const AttendanceHomeComp = ({ isLoading }) => {
  const theme = useTheme();
  const navigate = useNavigate();


  return (
    <>
      {isLoading ? (
        <SkeletonAttendanceCard />
      ) : (
        <CardWrapper border={false} content={false} className='dynamicBg'>
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
                      className='dynamicBg'
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
                      className='dynamicBg'
                      aria-controls="menu-earning-card"
                      aria-haspopup="true"  
                      onClick={() => navigate('/attendance')}   
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
                    color: theme.palette.secondary[200],
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
