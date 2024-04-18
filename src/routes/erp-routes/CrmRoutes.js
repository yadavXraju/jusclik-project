import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
// project imports
const Dashboard = Loadable(lazy(() => import('views/erp-module/crm/crm-dashboard')));
// contact
const Contact = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/contact')));

// pipeline
const Pipeline = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/pipeline')));

// report
const Reports = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/reports')));
// // settings
const Settings = Loadable(lazy(() => import('views/erp-module/crm/crm-sidebar/settings')));

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
        element: <Contact /> 
    },

    {
        path: 'pipeline', 
        element: <Pipeline /> 
    },
        {
            path: 'settings', 
            element: <Settings /> 
        },

        {
            path: 'reports', 
            element: <Reports /> 
        },

    ]
  }
];

export default  CrmRoutes;
