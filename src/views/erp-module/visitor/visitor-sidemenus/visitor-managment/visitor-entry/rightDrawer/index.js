import React, { useState, useRef, useEffect } from 'react';
import {
  CssBaseline,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Typography,
  InputBase,
  ThemeProvider,
  createTheme,
  Grid,
  Paper
} from '@mui/material';
import TablePagination from '@mui/material/TablePagination';

import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import AvtarImg from '../../../../../../../assets/images/avatar.png';

const theme = createTheme();

// Sample data for initial inbox messages
export const initialData = [
  { id: 1, name: 'John Doe', role: 'Website Developer', message: 'Lorem ipsum dolor sit amet 1', unread: false, important: true, phoneNumber: "7042469676" },
  { id: 2, name: 'Jane Smith', role: 'Software Developer', message: 'Lorem ipsum dolor sit amet 2', unread: true, important: false, phoneNumber: "9045669676" },
  { id: 3, name: 'Bob Johnson', role: 'Front-end Developer', message: 'Lorem ipsum dolor sit amet 3', unread: false, important: true, phoneNumber: "8042369676" },
  { id: 4, name: 'Alice Williams', role: 'Developer', message: 'Lorem ipsum dolor sit amet 4', unread: true, important: false, phoneNumber: "7042469676" },
  { id: 5, name: 'Charlie Brown', role: 'Manager', message: 'Lorem ipsum dolor sit amet 5', unread: false, important: true, phoneNumber: "7042469676" },
  { id: 6, name: 'Eva Davis', role: 'CEO', message: 'Lorem ipsum dolor sit amet 6', unread: false, important: false, phoneNumber: "7042469676" },
  { id: 7, name: 'Frank White', role: 'Managing Director', message: 'Lorem ipsum dolor sit amet 7', unread: true, important: true, phoneNumber: "7042469676" },
  { id: 8, name: 'Grace Miller', role: 'Businessman', message: 'Lorem ipsum dolor sit amet 8', unread: false, important: false, phoneNumber: "7042469676" },
  { id: 9, name: 'Henry Jackson', role: 'Developer', message: 'Lorem ipsum dolor sit amet 9', unread: true, important: true, phoneNumber: "7042469676" },
  { id: 10, name: 'Ivy Lee', role: 'Developer', message: 'Lorem ipsum dolor sit amet 10', unread: false, important: false, phoneNumber: "7042469676" },
  { id: 11, name: 'Charlie Brown', role: 'Developer', message: 'Lorem ipsum dolor sit amet 5', unread: false, important: true , phoneNumber: "7042469676"},
  { id: 12, name: 'Eva Davis', role: 'Developer', message: 'Lorem ipsum dolor sit amet 6', unread: false, important: false, phoneNumber: "7042469676" },
  { id: 13, name: 'Frank White', role: 'Developer', message: 'Lorem ipsum dolor sit amet 7', unread: true, important: true , phoneNumber: "7042469676"},
  { id: 14, name: 'Grace Miller', role: 'Developer', message: 'Lorem ipsum dolor sit amet 8', unread: false, important: false, phoneNumber: "7042469676" },
  { id: 15, name: 'Henry Jackson', role: 'Developer', message: 'Lorem ipsum dolor sit amet 9', unread: true, important: true , phoneNumber: "7042469676"},
  { id: 16, name: 'Ivy Lee', role: 'Developer', message: 'Lorem ipsum dolor sit amet 10', unread: false, important: false, phoneNumber: "7042469676" }
];

const VisitorDrawer = () => {
  const searchInputRef = useRef(null)

  const [searchQuery, setSearchQuery] = useState('');
  // const [isComposeOpen, setComposeOpen] = useState(shouldOpenByDefault);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchResults, setSearchResults] = useState([]);

  // Styled components using MUI's styled utility
  const SearchWrapper = styled('div')({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      backgroundColor: theme.palette.background.paper
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  });

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary
  }));
 
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      [theme.breakpoints.up('sm')]: {
        width: '12ch'
      }
    }
  }));




  // Function to handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData('search', query);
  };

  // Function to filter data based on different filters
  const filterData = (filterType, filterValue) => {
    if (filterType === 'search') {
      const filteredResults = initialData.filter(
        (item) =>
          item.name.toLowerCase().includes(filterValue.toLowerCase()) || item.message.toLowerCase().includes(filterValue.toLowerCase())
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
      regex.test(part) ? (
        <span key={index} style={{ fontWeight: 'bold' }}>
          {part}
        </span>
      ) : (
        part
      )
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

  // Effect to set focus on search input
  useEffect(() => {
    // Set focus when the component mounts or searchQuery changes
    searchInputRef.current.focus();
  }, [searchQuery]);

  return (
    <>
      <Paper>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <CssBaseline />
            {/* Header Section */}
            <Box
              sx={{
                padding: '20px',
                borderBottom: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.background.paper
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid sx={{ display: 'inline-flex' }}>
                  {/* Search Section */}
                  <SearchWrapper sx={{ display: 'flex' }}>
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
                    count={searchResults.length || initialData.length}
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
            <Box sx={{ flexGrow: 1 }}>
              {(searchResults.length > 0 || searchQuery === '') && (
                <List>
                  {(searchResults.length ? searchResults : initialData).slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((item) => (
                    <React.Fragment key={item.id}>
                      {/* Message Item */}
                      <ListItem
                        sx={{
                          padding: '8px'
                        }}
                      >
                        {/* User Avatar */}
                        <ListItemAvatar onClick={(event) => event.stopPropagation()}>
                          <Avatar alt="User Avatar" src={AvtarImg} />
                        </ListItemAvatar>
                        {/* Message Text */}
                        <ListItemText
                          primary={highlightMatch(item.name, searchQuery)}
                          secondary={highlightMatch(item.message, searchQuery)}
                          // Adjusting font size for better mobile readability
                          primaryTypographyProps={{ variant: 'body1', fontSize: '16px' }}
                          secondaryTypographyProps={{ variant: 'body2', fontSize: '14px' }}
                        />
                        {/* Timestamp */}
                        <Typography variant="subtitle2" color="textSecondary" onClick={(event) => event.stopPropagation()}>
                          {item.phoneNumber}
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
          </Box>
        </ThemeProvider>
      </Paper>
    </>
  );
};

export default VisitorDrawer;
