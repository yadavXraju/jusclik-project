import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
// project imports
const Dashboard = Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-dashboard')));
// report
// const Reports = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-managment-sidebar/report')));
// // setting
// const Setting = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-managment-sidebar/setting/setting-inventory')));

// ==============================|| Visitor MENUS ||============================== //

const HrPayRollRoutes = [
  {
    path: '/erp/hr-payroll',
    children: [
      { 
        path: 'dashboard', 
        element: <Dashboard />
       },
        // {
        //     path: 'settings', 
        //     element: <Setting /> 
        // },

        // {
        //     path: 'reports', 
        //     element: <Reports /> 
        // },

    ]
  }
];

export default  HrPayRollRoutes;
