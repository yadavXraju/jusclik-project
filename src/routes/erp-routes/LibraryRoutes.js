import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/library/library-dashboard')));


// ==============================|| Visitor MENUS ||============================== //

const LibraryRoutes = [
  {
    path: '/erp/library',
    children: [
      { 
        path: 'dashboard', 
        element: <DashboardDefault />
       },

      //  collapse menus

        // setting
        // { 
        //     path: 'setting', 
        //     element: <Setting /> 
        // },


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
