import React, { useState } from 'react';
import {
  CssBaseline, Box, List, ListItem, ListItemAvatar, Avatar, ListItemIcon, ListItemText, Divider, Typography, Button, InputBase, ThemeProvider, createTheme, IconButton, Popover, MenuItem, Grid,
} from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import MailCompose from './MailCompose';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router';
import UrlPage from 'views/navigation-for-pages';


const theme = createTheme();

export const initialData = [
  { id: 1, name: 'John Doe', message: 'Lorem ipsum dolor sit amet 1', unread: false, important: true },
  { id: 2, name: 'Jane Smith', message: 'Lorem ipsum dolor sit amet 2', unread: true, important: false },
  { id: 3, name: 'Bob Johnson', message: 'Lorem ipsum dolor sit amet 3', unread: false, important: true },
  { id: 4, name: 'Alice Williams', message: 'Lorem ipsum dolor sit amet 4', unread: true, important: false },
  { id: 5, name: 'Charlie Brown', message: 'Lorem ipsum dolor sit amet 5', unread: false, important: true },
  { id: 6, name: 'Eva Davis', message: 'Lorem ipsum dolor sit amet 6', unread: false, important: false },
  { id: 7, name: 'Frank White', message: 'Lorem ipsum dolor sit amet 7', unread: true, important: true },
  { id: 8, name: 'Grace Miller', message: 'Lorem ipsum dolor sit amet 8', unread: false, important: false },
  { id: 9, name: 'Henry Jackson', message: 'Lorem ipsum dolor sit amet 9', unread: true, important: true },
  { id: 10, name: 'Ivy Lee', message: 'Lorem ipsum dolor sit amet 10', unread: false, important: false },
  { id: 11, name: 'Charlie Brown', message: 'Lorem ipsum dolor sit amet 5', unread: false, important: true },
  { id: 12, name: 'Eva Davis', message: 'Lorem ipsum dolor sit amet 6', unread: false, important: false },
  { id: 13, name: 'Frank White', message: 'Lorem ipsum dolor sit amet 7', unread: true, important: true },
  { id: 14, name: 'Grace Miller', message: 'Lorem ipsum dolor sit amet 8', unread: false, important: false },
  { id: 15, name: 'Henry Jackson', message: 'Lorem ipsum dolor sit amet 9', unread: true, important: true },
  { id: 16, name: 'Ivy Lee', message: 'Lorem ipsum dolor sit amet 10', unread: false, important: false },
];

const GmailInboxTemplate = () => {
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



  const [data, setData] = useState(initialData);
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [isComposeOpen, setComposeOpen] = useState(true);

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

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilterSelect = (filterValue) => {
    handleFilterClose();
    filterData(filterValue);
  };

  const filterData = (filterType, filterValue) => {
    if (filterType === 'search') {
      const filteredData = initialData.filter((item) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.message.toLowerCase().includes(filterValue.toLowerCase())
      );
      setData(filteredData);
    } else if (filterValue === 'name') {
      setData([...initialData.sort((a, b) => a.name.localeCompare(b.name))]);
    } else if (filterValue === 'date') {
      setData([...initialData.sort((a, b) => a.id - b.id)]);
    } else if (filterValue === 'unread') {
      setData([...initialData.filter((item) => item.unread)]);
    } else if (filterValue === 'important') {
      setData([...initialData.filter((item) => item.important)]);
    }
  };

  const EmailItem = ({ emailData, searchQuery }) => {
    const [isImportant, setIsImportant] = useState(emailData.important);

    const handleStarClick = () => {
      setIsImportant(!isImportant);
    };

    const highlightMatch = (text, query) => {
      if (!query || !text) return text;

      const regex = new RegExp(`(${query})`, 'gi');
      return text.split(regex).map((part, index) =>
        regex.test(part) ? <span key={index} style={{ fontWeight: 'bold' }}>{part}</span> : part
      );
    };

    return (
      <ListItemIcon onClick={handleStarClick}>
        <StarBorderOutlinedIcon color={isImportant ? 'yellow' : 'inherit'} />
        {highlightMatch(emailData.name, searchQuery)} - {highlightMatch(emailData.message, searchQuery)}
      </ListItemIcon>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const [isComposeOpen, setComposeOpen] = useState(true);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData('search', query);
  };

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

  const navigate = useNavigate()

  return (

    <>
    <UrlPage/>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box sx={{ padding: '20px', flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <Grid sx={{ display: 'inline-flex' }}>
              <ComposeButtonWrapper onClick={handleComposeOpen}>
                <Button variant="contained" color="primary">
                  <AddCircleOutlineOutlinedIcon sx={{ marginRight: '7px' }} />
                  Compose
                </Button>
              </ComposeButtonWrapper>
              <FilterWrapper>
                <IconButton aria-label="Filter" onClick={handleFilterClick}>
                  <FilterListIcon />
                </IconButton>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleFilterClose}
                  anchorOrigin={{
                    // vertical: 'bottom',
                    // horizontal: 'right', 
                  }}
                  transformOrigin={{
                    // vertical: 'top',
                    // horizontal: 'right', 
                  }}
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
                <SearchWrapper sx={{ justifyContent: 'center' }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </SearchWrapper>
                <TablePagination
                  component="div"
                  count={data.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  labelRowsPerPage=""
                />
              </Grid>
            </Box>
            <List>
              {data.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem onClick={() => navigate('/communication/inbox/message')}>
                    <ListItemAvatar>
                      <Avatar alt="User Avatar" src={`/static/images/avatar/1.jpg/${item.id}.jpg`} />
                    </ListItemAvatar>
                    <EmailItem emailData={item} />
                    <ListItemText primary={item.name} secondary={item.message} />
                    <Typography variant="subtitle2" color="textSecondary">
                      {getCurrentDateTime()}
                    </Typography>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Box>
        <MailCompose open={isComposeOpen} onClose={handleComposeClose} onSend={handleComposeSend} />
      </ThemeProvider>
</>
  );
};

export default GmailInboxTemplate;
