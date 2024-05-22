// Page Owner Abhishek
// Description : Inventory Routes

import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-management-dashboard')));
// report
const Reports = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-managment-sidebar/report')));
// setting
const Setting = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-managment-sidebar/setting/setting-inventory')));


const InventoryRoutes = [
  {
    path: '/erp/inventory',
    children: [
      { 
        path: 'dashboard', 
        element: <DashboardDefault />
       },

            {
               path: 'settings', 
               element: <Setting /> 
            },

            {
              path: 'reports', 
              element: <Reports /> 
           },

    ]
  }
];

export default  InventoryRoutes;
