import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Paper,
  useMediaQuery,
  useTheme,
  Box,
  Container, 
} from '@mui/material';
import { data } from './AssignmentData';
import Attcgment from './Attcgment';
import Heading from './Heading';
<<<<<<< HEAD
import SearchAssignment from './SearchAssignment';
import AssignmentItem from './AssignmentItem';
=======


import SearchAssignment from './SearchAssignment';
import AssignmentItem from './AssignmentItem';






>>>>>>> bc93146ace78ae0cf26e5d71b2ace604f987c672
import UrlPage from 'views/navigation-for-pages';

const Assignments = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('UPCOMING');
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({}); // Add state for search criteria

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // current Date Function to check compare due date
  const currentDate = new Date();

  // filter function to separate upcoming assignment
  const upcomingAssignments = data.filter(item => {
    const dueDate = new Date(item.dueDate);
    return dueDate >= currentDate;
  });

  // filter function to separate past assignment
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

<<<<<<< HEAD
  const handleSearch = criteria => {
    setSearchCriteria(criteria);
  };

  return (
    <>
      <UrlPage />
      <SearchAssignment onSearch={handleSearch} />
      <Box maxWidth="xl" xs={12} style={{ marginTop: 20 }}>
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
                  <Heading />
                  {sortedUpcomingAssignments.map((item, index) => (
                    <AssignmentItem
                      key={item.id}
                      item={item}
                      index={index}
                      handleOpenDialog={handleOpenDialog}
                      getFormattedDate={getFormattedDate}
                      searchText={searchCriteria.searchText} // Pass searchText to AssignmentItem
                    />
                  ))}
                </Container>
              </div>
            )}

            {value === 'PAST' && (
              <div className="panel">
                <Heading />
                {sortAssignmentsByDueDate(previousAssignments).map((item, index) => (
                  <AssignmentItem
                    key={item.id}
                    item={item}
                    index={index}
                    handleOpenDialog={handleOpenDialog}
                    getFormattedDate={getFormattedDate}
                    searchText={searchCriteria.searchText} // Pass searchText to AssignmentItem
                  />
                ))}
              </div>
            )}
          </div>
        </Paper>
        <Attcgment isOpen={openDialog} onClose={handleCloseDialog} snackOpen={snackbarOpen} snackBarClose={handleSnackbarClose} />
      </Box>
=======





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
>>>>>>> bc93146ace78ae0cf26e5d71b2ace604f987c672
    </>
  );
};

<<<<<<< HEAD
export default Assignments;
=======

export default Assignments;
>>>>>>> bc93146ace78ae0cf26e5d71b2ace604f987c672
