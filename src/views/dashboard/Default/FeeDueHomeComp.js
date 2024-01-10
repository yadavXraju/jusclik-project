import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box,  Grid, Typography } from '@mui/material';

// third-party
// import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/CounterCard';

// import ChartDataMonth from './chart-data/total-order-month-line-chart';
// import ChartDataYear from './chart-data/total-order-year-line-chart';

// assets
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { useNavigate } from 'react-router';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
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
    background: theme.palette.primary[800],
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
    background: theme.palette.primary[800],
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

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const DueFee = ({ isLoading }) => {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">

                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
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
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        backgroundColor: '#1e88e5',
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
                            color: theme.palette.primary[200],
                            textTransform:'uppercase'
                          }}
                        >
                          fee due
                        </Typography>
                      </Grid>
                    </Grid>
                  {/* </Grid> */}
               
                {/* </Grid> */}
              {/* </Grid> */}
            {/* </Grid> */}
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
