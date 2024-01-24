import React, { useState } from 'react';
import {
  Container,
  Tabs,
  Tab,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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

  const [searchCriteria, setSearchCriteria] = useState({
    startDate: null,
    endDate: null,
    selectedSubject: null,
    searchText: '',
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const currentDate = new Date();
  const upcomingAssignments = data.filter((item) => {
    const dueDate = new Date(item.dueDate);
    return dueDate >= currentDate;
  });

  const previousAssignments = data.filter((item) => {
    const dueDate = new Date(item.dueDate);
    return dueDate < currentDate;
  });

  const sortAssignmentsByDueDate = (assignments) => {
    return assignments.sort((a, b) => {
      const dueDateA = new Date(a.dueDate);
      const dueDateB = new Date(b.dueDate);
      return dueDateA - dueDateB;
    });
  };

  const sortedUpcomingAssignments = sortAssignmentsByDueDate(upcomingAssignments);

  const getFormattedDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSnackbarOpen(true);
    setOpenDialog(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
  };

  return (
    <>
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
    </>
  );
};

export default Assignments;
