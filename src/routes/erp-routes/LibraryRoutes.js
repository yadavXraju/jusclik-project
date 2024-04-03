import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/library/library-dashboard')));
const Reports =  Loadable(lazy(() => import('views/erp-module/library/library-sidebar/reports')));
const Settings =  Loadable(lazy(() => import('views/erp-module/library/library-sidebar/settings')));


// ==============================|| Visitor MENUS ||============================== //

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

            // {
            //   path: 'settings',
            //   children: [

            //     { 
            //       path: 'system-data', 
            //       element: <SystemData /> 
            //     },
      
      
            //   ]
            // },

            // tools


            // user and roles

    ]
  }
];

export default  LibraryRoutes;
