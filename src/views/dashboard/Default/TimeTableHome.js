import React from 'react';
import { Grid, Paper, Typography, Button ,  useMediaQuery } from '@mui/material';
import { timetableRows } from 'views/sidebar-menus/timetable/Timetablelist';
import { gridSpacing } from 'store/constant';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';

const TimeTableHome = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const periodsToShow = 4;
  const navigate = useNavigate();

  return (
    <Grid spacing={gridSpacing} sx={{border:'1px solid #80808026', borderRadius:'8px'}}>
      <Grid item component={Paper} lg={12} md={12} sm={12} xs={12} sx={{ textAlign: 'right', p: 3, display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <Typography variant='h2' sx={{ textAlign: 'left' , color:'#99a1b7' , borderBottom: '1px solid #80808040;' , paddingBottom:'16px' }}>Friday Timetable</Typography>

         {/* header sec start */}
         <Grid container >

            <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' , flexDirection: isMobile ? 'column' : 'row'  , textAlign: 'left'}} >
                    <Typography variant='span' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:'18px'  }}>Time</Typography>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' , flexDirection: isMobile ? 'column' : 'row'  ,textAlign: 'left',}} >
                    <Typography variant='span' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:'18px'  }}>Period</Typography>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' , flexDirection: isMobile ? 'column' : 'row'  ,textAlign: 'left',}} >
                    <Typography variant='span' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:'18px'  }}>Teacher</Typography>
                </Grid>
          </Grid>
          {/* header section end */}
        {timetableRows.slice(0, periodsToShow).map((row, index) => (         
          <Grid container key={index} sx={{ textAlign: 'left', display: 'flex' , borderBottom: '1px solid #80808040;' , paddingBottom:'10px',}}>
          
            <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex' , flexDirection: isMobile ? 'column' : 'row'  ,}} >
              {/* <Typography variant='span' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:isMobile ? '14px' : '16px'  }}>Time:</Typography> */}
              <Typography variant='h5' sx={{fontSize:isMobile ? '14px' : '16px' }}>{row.time}</Typography>
            </Grid>

            {row.key !== null ? (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: isMobile ? '1px' : '16px' , flexDirection: isMobile ? 'column' : 'row'  , }}>
                <Typography variant='body2' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:isMobile ? '14px' : '16px'  }}>Period {row.key} :</Typography>
                <Typography variant='h5'  sx={{fontSize:isMobile ? '14px' : '16px' }}>
                  <span>{row.sub}</span>
                </Typography>
              </Grid>
            ) : (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex',  flexDirection: isMobile ? 'column' : 'row'  , }}>
                <Typography variant='h5'  sx={{fontSize: isMobile ? '14px' : '16px' }}>
                <Typography variant='body2' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize: isMobile ? '14px' : '16px'  }}>{row.sub}</Typography>
                </Typography>
              </Grid>
            )}

            {row.key !== null && (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' , flexDirection: isMobile ? 'column' : 'row'  , }}>
                {/* <Typography variant='body2' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:isMobile ? '14px' : '16px' }}>Teacher:</Typography> */}
                <Typography variant='h5' sx={{fontSize: isMobile ? '14px' : '16px'  ,}}>{row.teacher}</Typography>
              </Grid>
            )}

          </Grid>
        ))}

        <Box sx={{ pt: 3 }}>
          {periodsToShow < timetableRows.length && (
            <Button variant="contained" onClick={() => navigate('/timetable')}>
              View More
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default TimeTableHome;
