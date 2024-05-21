//inventory module Dashboard.js   owned by sangeeta
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

          {/* LeadStatus*/}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <LeadStatus/>
          </Grid>
          {/* HotAndColdLeads */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <HotAndColdLeads/>
     
          </Grid>
          {/*LeadBySource */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
       
          <LeadBySource/>
          </Grid>
          {/* FollowUpCalender*/}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <FollowUpCalender />
      
          </Grid>
          {/* RecentActivity */}
          <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
        
          <RecentActivity/>
          </Grid>
          {/*AgentLeaderBoard */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
           
            <AgentLeaderBoard/>
          </Grid>

          {/*  LeadInProcess*/}
          <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>

          <LeadInProcess />
          </Grid>
          {/* Help & support */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          
            <NeedHelp isLoading={isLoading} />
       
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardContent;
