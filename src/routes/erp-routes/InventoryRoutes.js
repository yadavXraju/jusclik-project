// Page Owner Abhishek
// Description : Inventory Routes

import { lazy } from 'react';
import Loadable from 'components/ui/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-management-dashboard')));
// report
const Reports = Loadable(lazy(() => import('views/erp-module/inventory-management/report')));
// setting
const Setting = Loadable(lazy(() => import('views/erp-module/inventory-management/settings')));


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
