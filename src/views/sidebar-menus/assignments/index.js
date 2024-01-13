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
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
  Snackbar,

} from '@mui/material';

import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadIcon from '@mui/icons-material/Download';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreateIcon from '@mui/icons-material/Create';
import { data } from './AssignmentData';

const Assignments = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('UPCOMING');
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // const data = [
  //   { id: 1, sub: 'E', name: 'ENGLISH', description: 'Description for Item 1', dueDate: '2023-01-12', date: '2023-01-10', homework: "disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
  //   { id: 2, sub: 'H', name: 'HINDI', description: 'Description for Item 2', dueDate: '2023-01-12', date: '2023-01-09', homework: "disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
  //   { id: 3, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2023-06-10', date: '2023-06-5', homework: "disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
  //   { id: 4, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2023-01-12', date: '2024-01-06', homework: "disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
  //   { id: 5, sub: 'M', name: 'English', description: 'Description for Item 3', dueDate: '2023-01-12', date: '2024-01-09', homework: "disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
  //   { id: 6, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2024-01-12', date: '2024-01-08', homework: "disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
  //   { id: 7, sub: 'E', name: 'ENGLISH', description: 'Description for Item 3', dueDate: '2024-01-12', date: '2024-01-08', homework: "disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
  //   { id: 8, sub: 'E', name: 'ENGLISH', description: 'Description for Item 3', dueDate: '2024-01-15', date: '2024-01-07', homework: "disinformation)disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1 presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" }
  // ];
  // const data = [
  //   { id: 1, sub: 'E', name: 'ENGLISH', description: 'Description for Item 1', dueDate: '2023-01-12', date: '2023-01-10'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
  //   { id: 2, sub: 'H', name: 'HINDI', description: 'Description for Item 2', dueDate: '2023-01-12', date: '2023-01-09'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
  //   { id: 3, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2023-06-10', date: '2023-06-5'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
  //   { id: 4, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2023-01-12', date: '2024-01-06' , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
  //   { id: 5, sub: 'M', name: 'English', description: 'Description for Item 3', dueDate: '2023-01-12', date: '2024-01-09'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
  //   { id: 6, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2024-01-12', date: '2024-01-08'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
  //   { id: 7, sub: 'E', name: 'ENGLISH', description: 'Description for Item 3', dueDate: '2024-01-12', date: '2024-01-08' , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
  //   { id: 8, sub: 'E', name: 'ENGLISH', description: 'Description for Item 3', dueDate: '2024-01-15', date: '2024-01-07'  , homework:"disinformation)disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1 presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"}
  // ];


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
    // Handle submission logic here
    setSnackbarOpen(true); // Show a Snackbar notification

    // Close the dialog
    setOpenDialog(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };



  return (
    <Container maxWidth="xl" xs={12} style={{ marginTop: 20 }}>
      <Paper style={{ padding: 20 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered={!isSmallScreen}
          variant={isSmallScreen ? 'scrollable' : 'standard'}
        >
          <Tab label="UPCOMING" value="UPCOMING" />
          <Tab label="PAST" value="PAST" />
        </Tabs>
        <div className="tabs">
          {value === 'UPCOMING' && (
            <div className="panel">
              <Container maxWidth="xl" style={{ marginTop: 20 }}>
                <Paper elevation={2} style={{ marginBottom: 20, padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  <Grid container spacing={2} xs={12} alignItems="center">
                    <Grid item xs={4} md={3}>
                      <Typography variant="h5" color="primary">SUBJECT</Typography>
                    </Grid>
                    <Grid item xs={4} md={7}>
                      <Typography variant="h5" color="primary">TOPIC</Typography>
                    </Grid>
                    <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: "center" }}>
                      <Typography variant="h5" color="primary">ACTION</Typography>
                    </Grid>
                  </Grid>
                </Paper>
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
              </Container>
            </div>
          )}
          {value === 'PAST' && (
            <div className="panel">
              <Paper elevation={2} style={{ marginBottom: 20, padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5" color="primary">SUBJECT</Typography>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Typography variant="h5" color="primary">TOPIC</Typography>
                  </Grid>
                  <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h5" color="primary">ACTIONS</Typography>
                  </Grid>
                </Grid>
              </Paper>
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
      <Dialog maxWidth="xs" open={openDialog} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>Submit Files</DialogTitle>
        <DialogContent maxWidth="md" fullWidth >
          <Typography>Upload files</Typography>
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Set the duration in milliseconds (e.g., 3000 for 3 seconds)
        onClose={handleSnackbarClose}
        message="Files submitted successfully!"
      />
    </Container>
  );
};

export default Assignments;