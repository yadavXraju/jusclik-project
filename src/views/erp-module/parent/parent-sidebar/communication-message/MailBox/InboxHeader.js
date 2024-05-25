// Page Owner: Suraj
// Description: Inbox Header 

import React from 'react';
import { Box, Grid, Button, IconButton, Popover, MenuItem, useMediaQuery } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import TablePagination from '@mui/material/TablePagination';
import styled from '@emotion/styled';


export const stylesPagination= styled.div`
.css-jtlhu6-MuiTablePagination-root {
   overflow: hidden !important;
 
}
`

const InboxHeader = ({
  theme,
  handleComposeOpen,
  handleFilterClick,
  currentFilter,
  anchorEl,
  handleFilterClose,
  handleFilterSelect,
  searchQuery,
  handleSearchChange,
  searchInputRef,
  searchResults,
  initialData,
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
  ComposeButtonWrapper,
  FilterWrapper,
  SearchWrapper,
  SearchIconWrapper,
  StyledInputBase,
  id
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        padding: '20px',
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          flexWrap: isMobile ? 'wrap' : 'noWrap'
        }}
      >
        <Grid sx={{ display: 'inline-flex' }} xs={12} sm={6} md={4}>
          <ComposeButtonWrapper onClick={handleComposeOpen}>
            <Button variant="contained" color="primary">
              <AddCircleOutlineOutlinedIcon sx={{ marginRight: '7px' }} />
              Compose
            </Button>
          </ComposeButtonWrapper>
          <FilterWrapper>
            <IconButton aria-label="Filter" onClick={handleFilterClick} color={currentFilter === 'important' ? 'primary' : 'default'}>
              <FilterListIcon />
            </IconButton>
            <Popover
              id={id}
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleFilterClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >
              <Box sx={{ p: 2, top: '20px', bottom: '20px' }}>
                <MenuItem onClick={() => handleFilterSelect('name')}>Name</MenuItem>
                <MenuItem onClick={() => handleFilterSelect('date')}>Date</MenuItem>
                <MenuItem onClick={() => handleFilterSelect('unread')}>Unread</MenuItem>
                <MenuItem onClick={() => handleFilterSelect('important')}>Important</MenuItem>
              </Box>
            </Popover>
          </FilterWrapper>
        </Grid>
        <Grid
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: isMobile ? 'wrap' : 'noWrap',
            justifyContent: isMobile ? 'center' : 0,
            marginTop: isMobile ? 1 : 0
          }}
          xs={12}
          sm={6}
          md={4}
        >
          <Grid>
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
          </Grid>
          <Grid>
            {/* Pagination Section */}
            <stylesPagination>
            <TablePagination
              component="div"
              count={searchResults.length || initialData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Pages"
            />
            </stylesPagination>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InboxHeader;
