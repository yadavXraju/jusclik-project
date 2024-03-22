import React from 'react';
import { Paper, Typography, Box, Grid ,useMediaQuery} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const BookDetail = () => {
  const isMoble=useMediaQuery('(max-width: 767px)');
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
                padding: isMoble?'1rem':'2rem',
                background: '#f9f9fb',
                borderRadius: '12px',
                borderRight: '1px solid rgb(227, 227, 227)',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                gap:isMoble ?'40px': '40px',
              }}
            >
              <Box
                sx={{
                  background:isMoble?"rgb(204 245 232)": 'rgb(204 245 232)',
                  borderRadius: '50%',
                  padding: isMoble ? '7px':'7px',
                }}
              >
                <LibraryBooksOutlinedIcon sx={{ color: 'rgb(16 185 129)', fontSize: isMoble?'30px':'30px', display: 'flex' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{fontSize: isMoble?"32px": '32px', color: '#000' }}>99</Typography>
                <Typography variant="h4" sx={{ fontSize: isMoble?"16px": '16px', textTransform: 'uppercase', paddingTop: isMoble ? '7px':'7px', fontWeight: '500', color: '#12192685' }}>Total Books</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Available Books */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: isMoble?'1rem':'2rem',
                background: '#f9f9fb',
                borderRight: '1px solid rgb(227, 227, 227)',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                borderRadius: '12px',
                gap:isMoble ?'40px': '40px',
              }}
            >
              <Box
                sx={{
                  background:isMoble?"rgb(245 238 215)": 'rgb(245 238 215)',
                  borderRadius: '50%',
                  padding: isMoble ? '7px':'7px',
                }}
              >
                <TaskAltOutlinedIcon sx={{ fontSize: isMoble?'30px':'30px', display: 'flex', color: '#F3DB3F' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontSize: isMoble?"32px": '32px', color: '000' }}>83</Typography>
                <Typography variant="h4" sx={{ fontSize: isMoble?"16px": '16px', textTransform: 'uppercase', paddingTop: isMoble ? '7px':'7px', fontWeight: '500', color: '#12192685' }}>Available Books</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Issued Books */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: isMoble?'1rem':'2rem',
                background: '#f9f9fb',
                borderRadius: '12px',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                gap:isMoble ?'40px': '40px',
              }}
            >
              <Box
                sx={{
                  background:isMoble?"rgb(42 101 191 / 15%)": 'rgb(42 101 191 / 15%)',
                  borderRadius: '50%',
                  padding: isMoble ? '7px':'7px',
                }}
              >
                <MenuBookIcon sx={{ fontSize: isMoble?'30px':'30px', display: 'flex', color: 'rgb(42, 101, 191)' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{fontSize: isMoble?"32px": '32px', color: '#000' }}>16</Typography>
                <Typography variant="h4" sx={{fontSize: isMoble?"16px": '16px', textTransform: 'uppercase', paddingTop: isMoble ? '7px':'7px', fontWeight: '500', color: '#12192685' }}>Issued Books</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Overdue Books */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: isMoble?'1rem':'2rem',
                background: '#f9f9fb',
                borderRadius: '12px',
                boxShadow: '4px 4px 9px 2px #ddddddc2',
                gap:isMoble ?'40px': '40px',
              }}
            >
              <Box
                sx={{
                  background:isMoble?"#F1C3BF": '#F1C3BF',
                  borderRadius: '50%',
                  padding: isMoble ? '7px':'7px',
                }}
              >
                <WatchLaterOutlinedIcon sx={{ fontSize: isMoble?'30px':'30px', display: 'flex', color: '#EC1605' }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontSize: isMoble?"32px": '32px', color: '#000' }}>16</Typography>
                <Typography variant="h4" sx={{ fontSize: isMoble?"16px": '16px', textTransform: 'uppercase', paddingTop:isMoble ? '7px':'7px' , fontWeight: '500', color: '#12192685' }}>Overdue Books</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default BookDetail;
