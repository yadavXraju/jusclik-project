//inventory module Dashboard.js   owned by sangeeta
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import NeedHelp from 'pages/HelpAndSupport';
import CRMCounter from 'views/erp-module/crm/dashboard/Counter';
import LeadStatus from 'views/erp-module/crm/dashboard/LeadStatus';
import AgentLeaderBoard from 'views/erp-module/crm/dashboard/AgentLeaderBoard';
import LeadBySource from 'views/erp-module/crm/dashboard/LeadSource';
import RecentActivity from 'views/erp-module/crm/dashboard/RecentActivity';
import LeadInProcess from 'views/erp-module/crm/dashboard/LeadInProcess';
import HotAndColdLeads from 'views/erp-module/crm/dashboard/HotAndColdLeads';
import FollowUpCalender from 'views/erp-module/crm/dashboard/FollowUpCalendar';

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

export default Dashboard;
