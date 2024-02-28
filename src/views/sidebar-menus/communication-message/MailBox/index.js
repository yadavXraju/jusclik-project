import React, { useState, useRef, useEffect } from 'react';
import { CssBaseline, Box, List, ListItem, ListItemAvatar, Avatar, ListItemIcon, ListItemText, Divider, Typography, InputBase, ThemeProvider, createTheme, Paper } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MailCompose from './MailCompose';
import { styled } from '@mui/system';
import { useNavigate, useLocation } from 'react-router';
import AvtarImg from '../../../../assets/images/avatar.png'
import InboxHeader from './InboxHeader';
import initialData from './InboxNameList';



const theme = createTheme();



const GmailInboxTemplate = () => {
  const searchInputRef = useRef(null);

  // Function to get the current date and time
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return currentDate.toLocaleString('en-US', options);
  };

  

  const location = useLocation();
  const shouldOpenByDefault = location.pathname.includes('inbox');
  const [isComposeOpen, setComposeOpen] = useState(shouldOpenByDefault);
  

  const [searchQuery, setSearchQuery] = useState('');
  // const [isComposeOpen, setComposeOpen] = useState(shouldOpenByDefault);
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchResults, setSearchResults] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');

  // Styled components using MUI's styled utility
  const SearchWrapper = styled('div')({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  });

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
      },
    },
  }));

  const ComposeButtonWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    order: -1,
  });

  const FilterWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  });

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData('search', query);
  };


  // Function to filter data based on different filters
  const filterData = (filterType, filterValue) => {
    if (filterType === 'search') {
      const filteredResults = initialData.filter((item) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.message.toLowerCase().includes(filterValue.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else if (filterType === 'name') {
      setSearchResults([...initialData.sort((a, b) => a.name.localeCompare(b.name))]);
    } else if (filterType === 'date') {
      setSearchResults([...initialData.sort((a, b) => a.id - b.id)]);
    } else if (filterType === 'unread') {
      setSearchResults([...initialData.filter((item) => item.unread)]);
    } else if (filterType === 'important') {
      setSearchResults([...initialData.filter((item) => item.important)]);
    }

    setCurrentFilter(filterType);
  };

  const highlightMatch = (text, query) => {
    if (!query || !text) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <span key={index} style={{ fontWeight: 'bold' }}>{part}</span> : part
    );
  };


  // Handlers for changing page and rows per page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handlers for compose mail modal
  const handleComposeOpen = () => {
    setComposeOpen(true);
  };

  const handleComposeClose = () => {
    setComposeOpen(false);
  };

  const handleComposeSend = (mailData) => {
    console.log('Sending mail:', mailData);
    handleComposeClose();
  };

  // Handlers for filter popover
  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilterSelect = (filterValue) => {
    handleFilterClose();
    filterData(filterValue, filterValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // Navigation hook
  const navigate = useNavigate();

  // Handler for starring a message
  const handleStarClick = (item) => {
    const updatedData = searchResults.length
      ? searchResults.map((d) => (d.id === item.id ? { ...d, important: !d.important } : d))
      : initialData.map((d) => (d.id === item.id ? { ...d, important: !d.important } : d));

    setSearchResults(updatedData);
  };

  // Effect to set focus on search input
  useEffect(() => {
    // Set focus when the component mounts or searchQuery changes
    searchInputRef.current.focus();
  }, [searchQuery]);

  return (
    <>
      <Paper>
      <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CssBaseline />
        {/* Header Section */}
        <InboxHeader
            theme={theme}
            handleComposeOpen={handleComposeOpen}
            handleFilterClick={handleFilterClick}
            currentFilter={currentFilter}
            anchorEl={anchorEl}
            handleFilterClose={handleFilterClose}
            handleFilterSelect={handleFilterSelect}
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
            searchInputRef={searchInputRef}
            searchResults={searchResults}
            initialData={initialData}
            page={page}
            handleChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            ComposeButtonWrapper={ComposeButtonWrapper}
            FilterWrapper={FilterWrapper}
            SearchWrapper={SearchWrapper}
            SearchIconWrapper={SearchIconWrapper}
            StyledInputBase={StyledInputBase}
            handleClose={handleClose} 
            id={id} 
          />
        {/* Main Content Section */}
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {(searchResults.length > 0 || searchQuery === '') && (
            <List>
              {(searchResults.length ? searchResults : initialData)
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                .map((item) => (
                  <React.Fragment key={item.id}>
                    {/* Message Item */}
                    <ListItem
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          boxShadow: theme.shadows[2],
                        },
                        // Adjusting padding for better mobile responsiveness
                        padding: '8px',
                      }}
                      onClick={() => navigate('/parent/communication/inbox/message')}
                    >
                      {/* User Avatar */}
                      <ListItemAvatar onClick={(event) => event.stopPropagation()}>
                        <Avatar alt="User Avatar" src={AvtarImg} />
                      </ListItemAvatar>
                      {/* Star Icon */}
                      <ListItemIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          handleStarClick(item);
                        }}
                        sx={{ marginRight: '5px' }}
                      >
                        <StarBorderOutlinedIcon
                          style={{ color: item.important ? '#f3c74a' : 'inherit' }}
                        />
                      </ListItemIcon>
                      {/* Message Text */}
                      <ListItemText
                        primary={highlightMatch(item.name, searchQuery)}
                        secondary={highlightMatch(item.message, searchQuery)}
                        // Adjusting font size for better mobile readability
                        primaryTypographyProps={{ variant: 'body1', fontSize: '16px' }}
                        secondaryTypographyProps={{ variant: 'body2', fontSize: '14px' }}
                      />
                      {/* Timestamp */}
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {getCurrentDateTime()}
                      </Typography>
                    </ListItem>
                    {/* Divider */}
                    <Divider />
                  </React.Fragment>
                ))}
            </List>
          )}

          {searchResults.length === 0 && searchQuery !== '' && (
            <Typography variant="body1" color="textSecondary" textAlign="center">
              No data found.
            </Typography>
          )}
        </Box>
        {/* Compose Mail Section */}
        <MailCompose open={isComposeOpen} onClose={handleComposeClose} onSend={handleComposeSend} />
      </Box>
    </ThemeProvider>
      </Paper>
    </>
  );
};

export default GmailInboxTemplate;
