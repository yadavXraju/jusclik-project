
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
// project imports
const Dashboard = Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-dashboard')));
// report
// const Reports = Loadable(lazy(() => import('views/erp-module/inventory-management/inventory-managment-sidebar/report')));
const Settings = Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-sidebar/settings')));
const EmployeeMaster =  Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-sidebar/Employee-Master')));
const EmployeeMasterPreview =  Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-sidebar/Employee-Master/EmployeePreview')));
const EmployeeSalary=Loadable(lazy(()=>import('views/erp-module/hr-payroll/hr-payroll-sidebar/salary')));

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
          children : [
            {
                path : '' ,
                element: <EmployeeMaster /> 
            },
            {
              path : ':id' ,
              element: <EmployeeMasterPreview /> 
            },
        ]
        },
        {
          path:'salary',
          element:<EmployeeSalary/>
        },
        {
            path: 'settings', 
            element: <Settings /> 
        },

        // {
        //     path: 'reports', 
        //     element: <Reports /> 
        // },

    ]
  }
];

export default  HrPayRollRoutes;
