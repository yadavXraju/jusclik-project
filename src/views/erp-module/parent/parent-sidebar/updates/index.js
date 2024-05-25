import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import Box from '@mui/material/Box';
import SearchFilter from './SearchFilter'; // Correct import path
import { UpdatesData } from './UpdatesData';
import MainCard from 'components/ui/cards/MainCard';

const Update = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(UpdatesData);

  const handleSearch = ({ searchTerm, startDate, endDate }) => {
    const normalizedTerm = searchTerm.toLowerCase().trim();

    const results = UpdatesData.filter((data) => {
      const isTitleMatch = data.title.toLowerCase().includes(normalizedTerm);
      const isDescriptionMatch = data.description.toLowerCase().includes(normalizedTerm);

      if (!startDate && !endDate) {
        return isTitleMatch || isDescriptionMatch;
      }

      const dataDate = new Date(`${data.year}-${data.month}-${data.date}`);
      const startDateTime = startDate ? new Date(startDate) : null;
      const endDateTime = endDate ? new Date(endDate) : null;

      return (
        (isTitleMatch || isDescriptionMatch) &&
        (!startDateTime || dataDate >= startDateTime) &&
        (!endDateTime || dataDate <= endDateTime)
      );
    });

    setSearchTerm(normalizedTerm);
    setSearchResults(results);
  };

  const highlightSearchTerm = (text) => {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, (match) => `<span style="background-color: yellow;">${match}</span>`);
  };

  return (
    <>
        <MainCard>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' , display:'flex' }}>
        <Grid container spacing={2} maxWidth="xl" style={{ marginTop: 20 }} >
      <SearchFilter onSearch={handleSearch} />
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        {searchResults.map((data, index) => (
          <Paper
            sx={{
              p: 2,
              flexGrow: 1,
              my: 2,
              backgroundColor: '#fff'
            }}
            key={index}
          >
            <Grid container spacing={2} alignItems="center" sx={{boxShadow: 'rgba(0, 0, 0, 0.09) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0', paddingBottom:'16px', paddingRight:'16px'}}>
              <Grid item xs={12} sm container direction="column">
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  dangerouslySetInnerHTML={{ __html: highlightSearchTerm(data.title) }}
                />
                <Grid
                  item
                  sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'flex-start' }}
                >
                  <CalendarMonthTwoToneIcon sx={{ color: '#364152a3', fontSize: '20px', marginRight: '2px' }} />
                  <Typography
                    variant="body2"
                    sx={{ mt: 0, color: '#364152e0', paddingTop: '3px' }}
                    dangerouslySetInnerHTML={{ __html: highlightSearchTerm(`${data.day} ${data.date}`) }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  color={'#364152ad'}
                  dangerouslySetInnerHTML={{ __html: highlightSearchTerm(data.description) }}
                />
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
    </Grid>

    </Grid>
    </MainCard>
    </>
  );
};
export default Update;