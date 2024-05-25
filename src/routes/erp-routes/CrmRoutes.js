// Page Owner Abhishek
// Description : Routes for CRM Dashboard


import { lazy } from 'react';
import Loadable from 'components/ui/Loadable';
// project imports
const Dashboard = Loadable(lazy(() => import('views/erp-module/crm/dashboard')));
// contact
const Contact = Loadable(lazy(() => import('views/erp-module/crm/contact')));
const Preview = Loadable(lazy(() => import('views/erp-module/crm/contact/Preview')));

// pipeline
const Pipeline = Loadable(lazy(() => import('views/erp-module/crm/pipeline')));

// report
const Reports = Loadable(lazy(() => import('views/erp-module/crm/reports')));
// // settings
const Settings = Loadable(lazy(() => import('views/erp-module/crm/settings')));
const LeadStage = Loadable(lazy(() => import('views/erp-module/crm/settings/configure/lead-stage')));
const LeadScore = Loadable(lazy(() => import('views/erp-module/crm/settings/configure/lead-score')));
const SystemDataEnter = Loadable(lazy(() => import('views/erp-module/crm/settings/configure/system-data')));
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
          path: 'system-data-enter', 
          element: <SystemDataEnter />
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
