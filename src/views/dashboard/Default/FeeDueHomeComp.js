import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box,  Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/CounterCard';

// assets
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const DueFee = ({ isLoading }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  // ===========================|| Theme color and other setting ||=========================== //


      // to store state in this varible
      const customization = useSelector((state) => state.customization);

    
      // Extract theme color and set opacity
      const themeColor = customization.themeColorV2 || 'rgb(94, 53, 177)';
      const opacity = .95;


  const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: `${themeColor.slice(0, -1)}, ${opacity}) !important`, // Adding opacity
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
      position: 'relative',
      zIndex: 5
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 210,
       background: theme?.customization?.themeColorV2,
      borderRadius: '50%',
      zIndex: 1,
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
      zIndex: 1,
      width: 210,
      height: 210,
      background: theme?.customization?.themeColorV2,
      borderRadius: '50%',
      top: -125,
      right: -15,
      opacity: 0.5,
      [theme.breakpoints.down('sm')]: {
        top: -155,
        right: -70
      }
    }
  }));

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}  className='themeColorV2'>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">

                  <Grid item>
                    <Avatar
                      variant="rounded"
                      className='themeColorV2'
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        // backgroundColor: theme.palette.primary[800],
                        background: `${theme?.customization?.themeColorV2} `,
                        color: '#fff',
                        mt: 1
                      }}
                    >
                      <CreditCardTwoToneIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>

                  <Grid item>
                  <Avatar
                      variant="rounded"
                      className='themeColorV2'
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        // backgroundColor: '#1e88e5',
                        background: `${theme?.customization?.themeColorV2} `,
                        color: theme.palette.secondary[200],
                        zIndex: 1
                      }}
                      aria-controls="menu-earning-card"
                      aria-haspopup="true"  
                      onClick={() => navigate('/school-fee')}   
                    >
                      <ArrowForwardTwoToneIcon fontSize="inherit" sx={{color:'#fff'}} />
                    </Avatar>           
                  </Grid>
            
                </Grid>
              </Grid>


              <Grid item>
                <Grid container alignItems="center">
                    <Grid item>                
                          <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>₹ -48,836</Typography>
                      </Grid>
                  </Grid>
              </Grid>

                      <Grid item sx={{ mb: 1.25 }}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: '#fff',
                            textTransform:'uppercase'
                          }}
                        >
                          fee due
                        </Typography>
                      </Grid>
                    </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

DueFee.propTypes = {
  isLoading: PropTypes.bool
};

export default DueFee;
