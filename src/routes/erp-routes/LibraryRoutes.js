// Page Owner Abhishek
// Description : Library Routes

import { lazy } from 'react';
import Loadable from 'components/ui/Loadable';
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/library/dashboard')));
const Reports =  Loadable(lazy(() => import('views/erp-module/library/reports')));
const Settings =  Loadable(lazy(() => import('views/erp-module/library/settings')));

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
