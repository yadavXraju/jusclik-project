import React from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss'
import StockList from './StockList';

const LowStockItemList = () => {
  return (
    <>
      <Paper variant="elevation" elevation="3">
        <Grid
          sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0'
          }}
        >
          <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
            Low Stock Items
          </Typography>
        </Grid>

        {/* list  */}
        <Grid sx={{ display: 'flex'}}>
          <Box className='scrollbar-2' sx={{overflow: 'scroll', width: '100%',height:"425px", typography: 'body1', padding: '10px' }}>
            <StockList />
          </Box>
        </Grid>
      </Paper>
    </>
  );
};

export default LowStockItemList;
