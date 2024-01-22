import React, { useState } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  Grid,
  Tooltip,
  IconButton,
  useMediaQuery,
  useTheme,

} from '@mui/material';

import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadIcon from '@mui/icons-material/Download';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreateIcon from '@mui/icons-material/Create';
import { data } from './AssignmentData';
import Attcgment from './Attcgment';
import Heading from './Heading';
<<<<<<< HEAD
import SearchAssignment from './SearchAssignment';
=======
import UrlPage from 'views/navigation-for-pages';
>>>>>>> 4d0155e25c42832ea9da419c3e54c9eefdbc3b2c

const Assignments = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('UPCOMING');
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  const currentDate = new Date();

  const upcomingAssignments = data.filter(item => {
    const dueDate = new Date(item.dueDate);
    return dueDate >= currentDate;
  });

  const previousAssignments = data.filter(item => {
    const dueDate = new Date(item.dueDate);
    return dueDate < currentDate;
  });

  const sortAssignmentsByDueDate = assignments => {
    return assignments.sort((a, b) => {
      const dueDateA = new Date(a.dueDate);
      const dueDateB = new Date(b.dueDate);
      return dueDateA - dueDateB;
    });
  };

  const sortedUpcomingAssignments = sortAssignmentsByDueDate(upcomingAssignments);

  const getFormattedDate = dateString => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {

    setSnackbarOpen(true); // Show a Snackbar notification
    setOpenDialog(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };



  return (
    <>
    <UrlPage />
    <Container maxWidth="xl" xs={12} style={{ marginTop: 20 }}>
      <SearchAssignment/>
      <Paper style={{ padding: 20 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered={!isSmallScreen}
          variant={isSmallScreen ? 'scrollable' : 'standard'}>
          <Tab label="UPCOMING" value="UPCOMING" />
          <Tab label="PAST" value="PAST" />
        </Tabs>
        <div className="tabs">
          {value === 'UPCOMING' && (
            <div className="panel">
               <Container maxWidth="xl" style={{ marginTop: 20 }}>
                 <Heading/>
{sortedUpcomingAssignments.map((item,index) => (
          <Paper elevation={2} key={item.id} sx={{ padding: '0px 20px', marginBottom: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
<Grid  className='tab' container spacing={2} sx={{
   borderLeft: `4px solid ${index % 2 == 0 ? 'rgb(237,231,246)' : 'rgb(144,202,249)'}`
}}>
  <Grid item xs={4} md={2} sx={{  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
    <Typography variant="h4">{item.name}</Typography>
    <Typography variant="subtitle2" color="textSecondary"> <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}><CalendarTodayIcon sx={{width:"16px" ,height:"16px"}}/>  {item.date && getFormattedDate(item.date)}</Grid> </Typography>
    <Typography variant="subtitle2" color="textSecondary">Due Date: {item.dueDate && getFormattedDate(item.dueDate)}</Typography>
  </Grid>
  <Grid direction="row" alignItems="flex-start" justifyContent='flex-start'  item xs={4} md={8} >
    <Typography variant='h6'>{item.homework}</Typography>
    <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}>
    <Tooltip title="Attachment">
      <IconButton onClick={handleOpenDialog}>
        <AttachmentIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="Download">
      <IconButton>
        <DownloadIcon />
      </IconButton>
    </Tooltip>
    </Grid>
  </Grid>
  <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', mt: '10px' }}>
  
    <Tooltip title="Download">
      <IconButton>
        <CreateIcon />
      </IconButton>
    </Tooltip>
    
  </Grid>
</Grid>
          </Paper>
))}
</Container>
            </div>
          )}
          {value === 'PAST' && (
            <div className="panel">
               <Heading/>
              {sortAssignmentsByDueDate(previousAssignments).map((item ,index)=> (
               <Paper elevation={2} key={item.id} sx={{ padding: '0px 20px', marginBottom: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
               <Grid container spacing={2}  sx={{
                 borderLeft: `4px solid ${index % 2 === 0 ? 'rgb(237,231,246)' : 'rgb(144,202,249)'}`
               }}
               >
                 <Grid item xs={12} md={2} sx={{  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                   <Typography variant="h4">{item.name}</Typography>
                   <Typography variant="subtitle2" color="textSecondary"> <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}><CalendarTodayIcon sx={{width:"16px" ,height:"16px"}}/> {item.date && getFormattedDate(item.date)}</Grid> </Typography>
                   <Typography variant="subtitle2" color="textSecondary">Due Date: {item.dueDate && getFormattedDate(item.dueDate)}</Typography>
                  
                 </Grid>
                 <Grid direction="row" alignItems="flex-start" justifyContent='flex-start'  item xs={12} md={8} >
                   <Typography variant='h6'>{item.homework}</Typography>
                   <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}>
                   <Tooltip title="Attachment">
                     <IconButton onClick={handleOpenDialog}>
                       <AttachmentIcon />
                     </IconButton>
                   </Tooltip>
                   <Tooltip title="Download">
                     <IconButton>
                       <DownloadIcon />
                     </IconButton>
                   </Tooltip>
                   </Grid>
                 </Grid>
                 <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', mt: '10px' }}>
                 
                   <Tooltip title="Download">
                     <IconButton>
                       <CreateIcon />
                     </IconButton>
                   </Tooltip>
                   
                 </Grid>
               </Grid>
               </Paper>
              ))}
            </div>
          )}
        </div>
      </Paper>
   <Attcgment isOpen={openDialog} onClose={handleCloseDialog} snackOpen={snackbarOpen} snackBarClose={handleSnackbarClose} />
  
    </Container>
    </>
  );
};

export default Assignments;