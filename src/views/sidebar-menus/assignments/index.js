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
<<<<<<< HEAD
import SearchAssignment from './SearchAssignment';
import AssignmentItem from './AssignmentItem';
=======



import SearchAssignment from './SearchAssignment';
import AssignmentItem from './AssignmentItem';






<<<<<<< HEAD
=======
>>>>>>> 79e3037662ea3a7baed68f63f3e3ad19d396f946
>>>>>>> f80c3b970713ff3b95be224cb8d080e8b5d005d3
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

<<<<<<< HEAD
  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
  };




  return (
    <>
<<<<<<< HEAD
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


=======
      <UrlPage />
      <Container maxWidth="xl" xs={12} style={{ marginTop: 20 }}>
        <SearchAssignment onSearch={handleSearch} />
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
                  {sortedUpcomingAssignments
                    .filter((item) => {
                      // Filter based on search criteria
                      const dueDate = new Date(item.dueDate);
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
>>>>>>> 79e3037662ea3a7baed68f63f3e3ad19d396f946


<<<<<<< HEAD
                      const isSubjectMatch =
                        !searchCriteria.selectedSubject ||
                        item.name.toLowerCase() ===
                          searchCriteria.selectedSubject.title.toLowerCase();

                      const isTextMatch =
                        !searchCriteria.searchText ||
                        item.homework
                          .toLowerCase()
                          .includes(searchCriteria.searchText.toLowerCase());

                      return isDateInRange && isSubjectMatch && isTextMatch;
                    })
                    .map((item, index) => (
                      <AssignmentItem
                        key={item.id}
                        item={item}
                        index={index}
                        handleOpenDialog={handleOpenDialog}
                        getFormattedDate={getFormattedDate}
                      />
                    ))}
                </Container>
              </div>
            )}

            {value === 'PAST' && (
              <div className="panel">
                <Heading />
                {sortAssignmentsByDueDate(previousAssignments)
                  .filter((item) => {
                    // Filter based on search criteria
                    const dueDate = new Date(item.dueDate);

                    const isDateInRange =
                      (!searchCriteria.startDate ||
                        dueDate >= new Date(searchCriteria.startDate)) &&
                      (!searchCriteria.endDate ||
                        dueDate <= new Date(searchCriteria.endDate));

                    const isSubjectMatch =
                      !searchCriteria.selectedSubject ||
                      item.name.toLowerCase() ===
                        searchCriteria.selectedSubject.title.toLowerCase();

                    const isTextMatch =
                      !searchCriteria.searchText ||
                      item.homework
                        .toLowerCase()
                        .includes(searchCriteria.searchText.toLowerCase());

                    return isDateInRange && isSubjectMatch && isTextMatch;
                  })
                  .map((item, index) => (
                    <AssignmentItem
                      key={item.id}
                      item={item}
                      index={index}
                      handleOpenDialog={handleOpenDialog}
                      getFormattedDate={getFormattedDate}
                    />
                  ))}
              </div>
            )}
          </div>
        </Paper>
        <Attcgment
          isOpen={openDialog}
          onClose={handleCloseDialog}
          snackOpen={snackbarOpen}
          snackBarClose={handleSnackbarClose}
        />
      </Container>
=======
>>>>>>> f80c3b970713ff3b95be224cb8d080e8b5d005d3
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
<<<<<<< HEAD
=======
>>>>>>> 79e3037662ea3a7baed68f63f3e3ad19d396f946
>>>>>>> f80c3b970713ff3b95be224cb8d080e8b5d005d3
    </>
  );
};

<<<<<<< HEAD

export default Assignments;
=======
<<<<<<< HEAD
export default Assignments;
=======

export default Assignments;

>>>>>>> 79e3037662ea3a7baed68f63f3e3ad19d396f946
>>>>>>> f80c3b970713ff3b95be224cb8d080e8b5d005d3
