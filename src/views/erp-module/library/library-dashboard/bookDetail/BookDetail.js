import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const BookDetail = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        sx={{
          background: 'none',
        }}
      >
        {/* Counter grid */}
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          sx={{
            display: 'flex',
            borderRadius: '12px',
        
          }}
        >
          {/* Total Books */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '2rem',
                background: '#f9f9fb',
                borderRadius: '12px',
                borderRight: '1px solid rgb(227, 227, 227)',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                gap:'40px'
              }}
            >
              <Box
                sx={{
                  background: 'rgb(204 245 232)',
                  borderRadius: '50%',
                  padding: '7px',
                }}
              >
                <LibraryBooksOutlinedIcon sx={{ color: 'rgb(16 185 129)', fontSize: '30px', display: 'flex' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontSize: '32px', color: '#000' }}>99</Typography>
                <Typography variant="h4" sx={{ fontSize: '16px', textTransform: 'uppercase', paddingTop: '7px', fontWeight: '500', color: '#12192685' }}>Total Books</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Available Books */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '2rem',
                background: '#f9f9fb',
                borderRight: '1px solid rgb(227, 227, 227)',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                borderRadius: '12px',
                gap:'40px'
              }}
            >
              <Box
                sx={{
                  background: 'rgb(245 238 215)',
                  borderRadius: '50%',
                  padding: '7px',
                }}
              >
                <TaskAltOutlinedIcon sx={{ fontSize: '30px', display: 'flex', color: 'rgb(247, 144, 9)' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontSize: '32px', color: '000' }}>83</Typography>
                <Typography variant="h4" sx={{ fontSize: '16px', textTransform: 'uppercase', paddingTop: '7px', fontWeight: '500', color: '#12192685' }}>Available Books</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Issued Books */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '2rem',
                background: '#f9f9fb',
                borderRadius: '12px',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                gap:'40px'
              }}
            >
              <Box
                sx={{
                  background: 'rgb(42 101 191 / 15%)',
                  borderRadius: '50%',
                  padding: '7px',
                }}
              >
                <MenuBookIcon sx={{ fontSize: '30px', display: 'flex', color: 'rgb(42, 101, 191)' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontSize: '32px', color: '#000' }}>16</Typography>
                <Typography variant="h4" sx={{ fontSize: '16px', textTransform: 'uppercase', paddingTop: '7px', fontWeight: '500', color: '#12192685' }}>Issued Books</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Overdue Books */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '2rem',
                background: '#f9f9fb',
                borderRadius: '12px',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                gap:'40px'
              }}
            >
              <Box
                sx={{
                  background: '#FF08004f',
                  borderRadius: '50%',
                  padding: '7px',
                }}
              >
                <WatchLaterOutlinedIcon sx={{ fontSize: '30px', display: 'flex', color: '#FF0800' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontSize: '32px', color: '#000' }}>16</Typography>
                <Typography variant="h4" sx={{ fontSize: '16px', textTransform: 'uppercase', paddingTop: '7px', fontWeight: '500', color: '#12192685' }}>Overdue Books</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default BookDetail;
