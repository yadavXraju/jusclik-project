import React from 'react'

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

  const data = [
    { id: 1, sub: 'E', name: 'ENGLISH', description: 'Description for Item 1', dueDate: '2023-01-12', date: '2023-01-10'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
    { id: 2, sub: 'H', name: 'HINDI', description: 'Description for Item 2', dueDate: '2023-01-12', date: '2023-01-09'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
    { id: 3, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2023-06-10', date: '2023-06-5'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
    { id: 4, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2023-01-12', date: '2024-01-06' , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
    { id: 5, sub: 'M', name: 'English', description: 'Description for Item 3', dueDate: '2023-01-12', date: '2024-01-09'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
    { id: 6, sub: 'M', name: 'MATH', description: 'Description for Item 3', dueDate: '2024-01-12', date: '2024-01-08'  , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"},
    { id: 7, sub: 'E', name: 'ENGLISH', description: 'Description for Item 3', dueDate: '2024-01-12', date: '2024-01-08' , homework:"disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when" },
    { id: 8, sub: 'E', name: 'ENGLISH', description: 'Description for Item 3', dueDate: '2024-01-15', date: '2024-01-07'  , homework:"disinformation)disinformation) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1 presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[1][2] Although false news has always been spread throughout history, the term  was first used in the 1890s when"}
  ];

 
  

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
    const options = { year:'numeric',month: 'long', day: 'numeric' };
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
    <div>Assignments</div>
  )
}

export default Assignments