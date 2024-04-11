//inventory module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import StockStatus from './stock-status';
import StockDetailPieChart from './category-wise-stock';
import LowStockItemList from './low-stock-items';
import FrequentlyItems from './frequently-issued-items';
import VendorContacts from './vendor-contacts';
// import NeedSupport from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/support/Support';
import Counters from './counter';
import NeedHelp from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/support/Support2';

const DashboardContent = ({ isLoading }) => {
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
            <Counters/>
          </Grid>

          {/* Stock Category */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <StockDetailPieChart />
          </Grid>
          {/* Stockt status */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <StockStatus />
          </Grid>
          {/* Vendor Contacs */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <VendorContacts />
          </Grid>
          {/* Low stock items */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <LowStockItemList />
          </Grid>
          {/* Frequently Issued Items */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <FrequentlyItems />
          </Grid>
          {/* Help & support */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            {/* <NeedSupport isLoading={isLoading} /> */}
            <NeedHelp isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardContent;
