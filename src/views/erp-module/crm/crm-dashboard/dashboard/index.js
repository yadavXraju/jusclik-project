//inventory module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';

import NeedHelp from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/support/Support2';

import CRMCounter from './counter';
import LeadStatus from './lead-status';
import AgentLeaderBoard from './Aggent-leaderbord';
import LeadBySource from './Lead-source';
import RecentActivity from './recent-activity';
import LeadInProcess from './process-lead';
import HotAndColdLeads from './Hot-coldLeads';
import FollowUpCalender from './follow-up-calednder';

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
            <CRMCounter/>
          </Grid>

          {/* Stock Category */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <LeadStatus/>
          </Grid>
          {/* Stockt status */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
   <LeadBySource/>
     
          </Grid>
          {/* Vendor Contacs */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <HotAndColdLeads/>
  
          </Grid>
          {/* Low stock items */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <RecentActivity/>
          </Grid>
          {/* Frequently Issued Items */}
          <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
         
          <FollowUpCalender />
          </Grid>
          {/* Help & support */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            {/* <NeedSupport isLoading={isLoading} /> */}
            <AgentLeaderBoard/>
          </Grid>
          <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <LeadInProcess />
          </Grid>
          {/* Help & support */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            {/* <NeedSupport isLoading={isLoading} /> */}
            <NeedHelp isLoading={isLoading} />
            {/* <AgentLeaderBoard/> */}
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardContent;
