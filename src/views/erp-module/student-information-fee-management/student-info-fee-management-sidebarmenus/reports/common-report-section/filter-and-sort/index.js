import React from 'react';
import {Grid,Typography} from '@mui/material';
import Sort from './sort';
import Filter from './Filter';

const SearchBar = () => {
  const marginBottom = window.innerWidth < 1200 ? "20px" : "0px"
  return (
    <Grid container spacing={4} sx={{ marginTop: "10px", marginLeft: "-24px",minHeight: 'calc(100vh - 400px)' }}>
      {/*Filter Section*/}
      <Grid xs={12} sm={12} md={12} lg={6} sx={{ border: "1px solid #e5ebef", backgroundColor: "#eef2f629", marginBottom: marginBottom }}>
        <Typography variant="h2" sx={{ margin: "20px 0px 20px 20px" }}>Filter</Typography>
            <Filter />
        {/* Clear Filter Button */}
      </Grid>
      {/* Sort Section */}
      <Grid xs={12} sm={12} md={12} lg={6} sx={{ border: "1px solid #e5ebef", backgroundColor: "#eef2f629", marginBottom: marginBottom }}>
        <Sort />
      </Grid>
    </Grid >
  );
};

export default SearchBar;
