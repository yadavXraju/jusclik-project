import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
// project imports
const Dashboard = Loadable(lazy(() => import('views/erp-module/crm/crm-dashboard')));
// contact
const Contact = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/contact')));
const Preview = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/contact/Preview')));

// pipeline
const Pipeline = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/pipeline')));

// report
const Reports = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/reports')));
// // settings
const Settings = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/settings')));
const LeadStage = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/settings/configure/lead-stage')));
const LeadScore = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/settings/configure/lead-score')));
const LeadOwner = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/settings/configure/lead-owner')));
const LeadSource = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/settings/configure/lead-source')));
const LeadClassification = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/settings/configure/lead-classification')));
// ==============================|| Visitor MENUS ||============================== //

const CrmRoutes = [
  {
    path: '/erp/crm',
    children: [
      { 
        path: 'dashboard', 
        element: <Dashboard />
       },
       {
        path: 'contact', 
        children:[
          {
            path: '', 
            element: <Contact /> 
          },

          {
            path: ':id', 
            element: <Preview /> 
          }

        ]
      },

    {
        path: 'pipeline', 
        element: <Pipeline /> 
    },
    { 
      path: 'settings', 
      children : [
        {
          path: '', 
          element: <Settings />
        } , 

        {
          path: 'lead-stage', 
          element: <LeadStage />
        } , 

        {
          path: 'lead-score', 
          element: <LeadScore />
        } , 

        {
          path: 'lead-owner', 
          element: <LeadOwner />
        } , 
        {
          path: 'lead-source', 
          element: <LeadSource />
        } , 
        {
          path: 'lead-classification', 
          element: <LeadClassification />
        } , 
      ]
     
     },


        {
            path: 'reports', 
            element: <Reports /> 
        },

    ]
  }
];

export default  CrmRoutes;
