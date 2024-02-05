import React, { useState, useRef, useEffect } from 'react';
import { CssBaseline, Box, List, ListItem, ListItemAvatar, Avatar, ListItemIcon, ListItemText, Divider, Typography, Button, InputBase, ThemeProvider, createTheme, IconButton, Popover, MenuItem, Grid, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import MailCompose from './MailCompose';
import { styled } from '@mui/system';
import { useNavigate, useLocation } from 'react-router';
import AvtarImg from '../../../../assets/images/avatar.png'



const theme = createTheme();

// Sample data for initial inbox messages
export const initialData = [
  { id: 1, name: 'John Doe', role: 'Website Developer', message: 'Lorem ipsum dolor sit amet 1', unread: false, important: true },
  { id: 2, name: 'Jane Smith', role: 'Software Developer', message: 'Lorem ipsum dolor sit amet 2', unread: true, important: false },
  { id: 3, name: 'Bob Johnson', role: 'Front-end Developer', message: 'Lorem ipsum dolor sit amet 3', unread: false, important: true },
  { id: 4, name: 'Alice Williams', role: 'Developer', message: 'Lorem ipsum dolor sit amet 4', unread: true, important: false },
  { id: 5, name: 'Charlie Brown', role: 'Manager', message: 'Lorem ipsum dolor sit amet 5', unread: false, important: true },
  { id: 6, name: 'Eva Davis', role: 'CEO', message: 'Lorem ipsum dolor sit amet 6', unread: false, important: false },
  { id: 7, name: 'Frank White', role: 'Managing Director', message: 'Lorem ipsum dolor sit amet 7', unread: true, important: true },
  { id: 8, name: 'Grace Miller', role: 'Businessman', message: 'Lorem ipsum dolor sit amet 8', unread: false, important: false },
  { id: 9, name: 'Henry Jackson', role: 'Developer', message: 'Lorem ipsum dolor sit amet 9', unread: true, important: true },
  { id: 10, name: 'Ivy Lee', role: 'Developer', message: 'Lorem ipsum dolor sit amet 10', unread: false, important: false },
  { id: 11, name: 'Charlie Brown', role: 'Developer', message: 'Lorem ipsum dolor sit amet 5', unread: false, important: true },
  { id: 12, name: 'Eva Davis', role: 'Developer', message: 'Lorem ipsum dolor sit amet 6', unread: false, important: false },
  { id: 13, name: 'Frank White', role: 'Developer', message: 'Lorem ipsum dolor sit amet 7', unread: true, important: true },
  { id: 14, name: 'Grace Miller', role: 'Developer', message: 'Lorem ipsum dolor sit amet 8', unread: false, important: false },
  { id: 15, name: 'Henry Jackson', role: 'Developer', message: 'Lorem ipsum dolor sit amet 9', unread: true, important: true },
  { id: 16, name: 'Ivy Lee', role: 'Developer', message: 'Lorem ipsum dolor sit amet 10', unread: false, important: false },
];

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
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <CssBaseline />
        {/* Header Section */}
        <Box
          sx={{
            padding: '20px',
            borderBottom: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid sx={{display:'inline-flex'}}>
              <ComposeButtonWrapper onClick={handleComposeOpen}>
                <Button variant="contained" color="primary">
                  <AddCircleOutlineOutlinedIcon sx={{ marginRight: '7px' }} />
                  Compose
                </Button>
              </ComposeButtonWrapper>
              <FilterWrapper>
                <IconButton
                  aria-label="Filter"
                  onClick={handleFilterClick}
                  color={currentFilter === 'important' ? 'primary' : 'default'}
                >
                  <FilterListIcon />
                </IconButton>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleFilterClose}
                >
                  <Box sx={{ p: 2 }}>
                    <MenuItem onClick={() => handleFilterSelect('name')}>Name</MenuItem>
                    <MenuItem onClick={() => handleFilterSelect('date')}>Date</MenuItem>
                    <MenuItem onClick={() => handleFilterSelect('unread')}>Unread</MenuItem>
                    <MenuItem onClick={() => handleFilterSelect('important')}>Important</MenuItem>
                  </Box>
                </Popover>
              </FilterWrapper>
            </Grid>
            <Grid sx={{ display: 'inline-flex' }}>
              {/* Search Section */}
              <SearchWrapper sx={{display:'flex'}}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  inputRef={searchInputRef}
                />
              </SearchWrapper>
              {/* Pagination Section */}
              <TablePagination
                component="div"
                count={(searchResults.length || initialData.length)}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Pages"
              />
            </Grid>
          </Box>
        </Box>
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
                      onClick={() => navigate('/communication/inbox/message')}
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
