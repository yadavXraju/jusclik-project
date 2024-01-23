import React, { useState } from 'react';
import {
  Container,
  Tabs,
  Tab,
  Paper,
  useMediaQuery,
  useTheme,

} from '@mui/material';
// icon from mui
import { data } from './AssignmentData';
import Attcgment from './Attcgment';
import Heading from './Heading';

import SearchAssignment from './SearchAssignment';
import AssignmentItem from './AssignmentItem';



import UrlPage from 'views/navigation-for-pages';

const Assignments = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('UPCOMING');
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
// current Date Function to check compare due date
  const currentDate = new Date();


  // filter function to seprate upcoming assignment
  const upcomingAssignments = data.filter(item => {
    const dueDate = new Date(item.dueDate);
    return dueDate >= currentDate;
  });
  // filter function to seprate past  assignment
  const previousAssignments = data.filter(item => {
    const dueDate = new Date(item.dueDate);
    return dueDate < currentDate;
  });


// sort assignment based on due date
  const sortAssignmentsByDueDate = assignments => {
    return assignments.sort((a, b) => {
      const dueDateA = new Date(a.dueDate);
      const dueDateB = new Date(b.dueDate);
      return dueDateA - dueDateB;
    });
  };

  const sortedUpcomingAssignments = sortAssignmentsByDueDate(upcomingAssignments);


  // Date formatter 
  const getFormattedDate = dateString => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


// open dialogbox where assigment upload function
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

// close dialogbox where assigment upload function
  const handleCloseDialog = () => {

    setSnackbarOpen(true); // Show a Snackbar notification
    setOpenDialog(false);
  };
// pop up notification for assignment submitted
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };



  return (
    <>
      <UrlPage />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Grid maxWidth="xl" xs={12} style={{ marginTop: 20 }}>
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
                      <Heading />
                      {sortedUpcomingAssignments.map((item, index) => (
                        <Paper elevation={2} key={item.id} sx={{ padding: '0px 20px', marginBottom: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                          <Grid className='tab' container spacing={2} sx={{
                            borderLeft: `4px solid ${index % 2 == 0 ? 'rgb(237,231,246)' : 'rgb(144,202,249)'}`
                          }}>
                            <Grid item xs={4} md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                              <Typography variant="h4">{item.name}</Typography>
                              <Typography variant="subtitle2" color="textSecondary"> <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}><CalendarTodayIcon sx={{ width: "16px", height: "16px" }} />  {item.date && getFormattedDate(item.date)}</Grid> </Typography>
                              <Typography variant="subtitle2" color="textSecondary">Due Date: {item.dueDate && getFormattedDate(item.dueDate)}</Typography>
                            </Grid>
                            <Grid direction="row" alignItems="flex-start" justifyContent='flex-start' item xs={4} md={8} >
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
                      <Container maxWidth="xl" xs={12} style={{ marginTop: 20 }}>
                        <SearchAssignment />
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
                                  <Heading />
                                  {sortedUpcomingAssignments.map((item, index) => (
                                    <AssignmentItem key={item.id} item={item} index={index} handleOpenDialog={handleOpenDialog} getFormattedDate={getFormattedDate} />
                                  ))}
                                </Container>
                              </div>
                            )}

                            {value === 'PAST' && (
                              <div className="panel">
                                <Heading />
                                {sortAssignmentsByDueDate(previousAssignments).map((item, index) => (
                                  <AssignmentItem key={item.id} item={item} index={index} handleOpenDialog={handleOpenDialog} getFormattedDate={getFormattedDate} />
                                ))}
                              </div>
                            )}
                          </div>
                        </Paper>
                        <Attcgment isOpen={openDialog} onClose={handleCloseDialog} snackOpen={snackbarOpen} snackBarClose={handleSnackbarClose} />

                      </Container>
                      </Container>
                  </div>
                )}
                {value === 'PAST' && (
                  <div className="panel">
                    <Heading />
                    {sortAssignmentsByDueDate(previousAssignments).map((item, index) => (
                      <Paper elevation={2} key={item.id} sx={{ padding: '0px 20px', marginBottom: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <Grid container spacing={2} sx={{
                          borderLeft: `4px solid ${index % 2 === 0 ? 'rgb(237,231,246)' : 'rgb(144,202,249)'}`
                        }}
                        >
                          <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Typography variant="h4">{item.name}</Typography>
                            <Typography variant="subtitle2" color="textSecondary"> <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', mt: '10px' }}><CalendarTodayIcon sx={{ width: "16px", height: "16px" }} /> {item.date && getFormattedDate(item.date)}</Grid> </Typography>
                            <Typography variant="subtitle2" color="textSecondary">Due Date: {item.dueDate && getFormattedDate(item.dueDate)}</Typography>

                          </Grid>
                          <Grid direction="row" alignItems="flex-start" justifyContent='flex-start' item xs={12} md={8} >
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

          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Assignments;