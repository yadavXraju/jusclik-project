// Page Owner Abhishek
// Description : Library Routes

import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/library/library-dashboard')));
const Reports =  Loadable(lazy(() => import('views/erp-module/library/library-sidebar/reports')));
const Settings =  Loadable(lazy(() => import('views/erp-module/library/library-sidebar/settings')));

const LibraryRoutes = [
  {
    path: '/erp/library',
    children: [
      { 
        path: 'dashboard', 
        element: <DashboardDefault />
       },
       // reports
        { 
            path: 'reports', 
            element: <Reports /> 
        },

         // setting
         { 
          path: 'settings', 
          element: <Settings /> 
      },
    ]
  }
];

export default  LibraryRoutes;
