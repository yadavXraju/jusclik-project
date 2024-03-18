import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-management-dashboard')));


// ==============================|| Visitor MENUS ||============================== //

const InventoryRoutes = [
  {
    path: '/erp/inventory',
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

export default  InventoryRoutes;
