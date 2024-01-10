import React from 'react';
import { Grid,  Paper, Typography, Button } from '@mui/material';
import { timetableRows } from 'views/sidebar-menus/timetable/Timetablelist';
import { gridSpacing } from 'store/constant';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';

const TimeTableHome = () => {
  // const [periodsToShow, setPeriodsToShow] = useState(4);
// let subjectPrinted = false;

// const handleViewMore = () => {
//   setPeriodsToShow(prevCount => prevCount + 4);
// };

  const periodsToShow = 4;
  const navigate = useNavigate();

  return (
    <Grid spacing={gridSpacing}>
      <Grid component={Paper} item lg={8} md={12} sm={12} xs={12}  sx={{ textAlign: 'right' , p:3 }}>
      {timetableRows.slice(0, periodsToShow).map((row, index) => (
            <Box key={index} sx={{textAlign:'left'}}>
               <Typography variant='p'>{row.time}</Typography>
               <Typography variant='p'>
                  <span> {row.key === null ? row.sub : row.key} </span>
                  <span>{row.key !== null ? row.sub : null}</span>
                </Typography>
                <Typography variant='p'>{row.teacher}</Typography>
            </Box>
            
            ))}

        <Box sx={{pt:3}}>
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
