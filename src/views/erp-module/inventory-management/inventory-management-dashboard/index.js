//inventory module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import CounterData from './counter-data';
import StockStatus from './stock-status';
import StockDetailPieChart from './category-wise-stock';
import LowStockItemList from './low-stock-items';
import FrequentlyItems from './frequently-issued-items';
import NeedSupport from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/support/Support';

const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {/* counter */}
          <Grid
            item
            xs={12}
            lg={12}
            md={12}
            sx={{ marginTop: { md: '0px', lg: '0rem', display: 'flex', flexDirection: 'column', gap: '24px' } }}
          >
            <CounterData />
          </Grid>

          {/* Stock Category */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <StockDetailPieChart />
          </Grid>
          {/* Stockt status */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <StockStatus />
          </Grid>
          {/* Low stock items */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <LowStockItemList />
          </Grid>

          {/* Help & support */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <NeedSupport isLoading={isLoading} />
          </Grid>
          {/* fee collection */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <FrequentlyItems />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
