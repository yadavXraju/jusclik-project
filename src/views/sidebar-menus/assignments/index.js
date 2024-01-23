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
    <Container maxWidth="xl" xs={12} style={{ marginTop: 20 }}>
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
                          <AssignmentItem key={item.id} item={item} index={index} handleOpenDialog={handleOpenDialog} getFormattedDate={getFormattedDate}/>
                     ))}
               </Container>
            </div>
           )}

          {value === 'PAST' && (
            <div className="panel">
               <Heading/>
              {sortAssignmentsByDueDate(previousAssignments).map((item ,index)=> (
                   <AssignmentItem key={item.id} item={item} index={index} handleOpenDialog={handleOpenDialog} getFormattedDate={getFormattedDate}/>
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