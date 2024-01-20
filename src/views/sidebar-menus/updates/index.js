import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { UpdatesData } from './UpdatesData';
import SearchFilter from './SearchFilter';

const Update = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(UpdatesData);

  const handleSearch = ({ searchTerm, startDate, endDate }) => {
    const normalizedTerm = searchTerm.toLowerCase().trim();

    const results = UpdatesData.filter((data) =>
      data.title.toLowerCase().includes(normalizedTerm) &&
      (!startDate || new Date(data.date) >= startDate) &&
      (!endDate || new Date(data.date) <= endDate)
    );

    setSearchTerm(normalizedTerm);
    setSearchResults(results);
  };

  return (
    <Container maxWidth="xl" style={{ marginTop: 20 }}>
      <SearchFilter onSearch={handleSearch} />
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        {searchResults.map((data, index) => (
          <Paper
            sx={{
              p: 2,
              flexGrow: 1,
              my: 2,
              backgroundColor: data.title.toLowerCase().includes(searchTerm) ? '#ffff99' : 'inherit',
            }}
            key={index}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm container direction="column">
                <Typography gutterBottom variant="h3" component="div">
                  {data.title}
                </Typography>
                <Grid
                  item
                  sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'flex-start' }}
                >
                  <CalendarMonthTwoToneIcon sx={{ color: '#364152a3', fontSize: '20px', marginRight: '2px' }} />
                  <Typography variant="body2" sx={{ mt: 0, color: '#364152e0', paddingTop: '3px' }}>
                    {data.day} {data.date}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color={'#364152ad'}>
                  {data.description}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
        {searchTerm && (
          <Typography variant="body2" color="textSecondary">
            Search Term: {searchTerm}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Update;
