import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
// project imports
const Dashboard = Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-dashboard')));
// report
// const Reports = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-managment-sidebar/report')));
// // setting
// const Setting = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-managment-sidebar/setting/setting-inventory')));
const EmployeeMaster =  Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-sidebar/Employee-Master')));
// ==============================|| Visitor MENUS ||============================== //

const HrPayRollRoutes = [
  {
    path: '/erp/hr-payroll',
    children: [
      { 
        path: 'dashboard', 
        element: <Dashboard />
       },
        {
          path: 'employee-master', 
          element: <EmployeeMaster /> 
        },
        // {
        //     path: 'settings', 
        //     element: <Settings /> 
        // },

        // {
        //     path: 'reports', 
        //     element: <Reports /> 
        // },

    ]
  }
];

export default  HrPayRollRoutes;
