
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
// project imports
const Dashboard = Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-dashboard')));
// report
const Reports = Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-sidebar/report')));
const Settings = Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-sidebar/settings')));
const EmployeeMaster =  Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-sidebar/Employee-Master')));
const EmployeeMasterPreview =  Loadable(lazy(() => import('views/erp-module/hr-payroll/hr-payroll-sidebar/Employee-Master/EmployeePreview')));
const EmployeeSalary=Loadable(lazy(()=>import('views/erp-module/hr-payroll/hr-payroll-sidebar/salary')));
const EmployeeOnBoard=Loadable(lazy(()=>import('views/erp-module/hr-payroll/hr-payroll-sidebar/Employee-Master/employeeonBoard')));
const OnboardingTaskList=Loadable(lazy(()=>import('views/erp-module/hr-payroll/hr-payroll-sidebar/settings/onboarding-tasklist')));
const LeaveApplication=Loadable(lazy(()=>import('views/erp-module/hr-payroll/hr-payroll-sidebar/leave-application')));
const ExitProcess = Loadable(lazy(()=>import('views/erp-module/hr-payroll/hr-payroll-sidebar/Employee-Master/exitProcess/EmployeeExitForm')));

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
            {
              path : 'exit-process' ,
              element: <ExitProcess /> 
            },
        ]
        },
        {
          path:'salary',
          element:<EmployeeSalary/>
        },
        {
          path:'leave-application',
          element:<LeaveApplication />
        },
        {
            path: 'settings', 
            children : [
              {
                path: '', 
                element: <Settings />
              },

              {
                path: 'employee-on-boarding', 
                element: <EmployeeOnBoard />
              },

              {
                path: 'on-boarding-task-list', 
                element: <OnboardingTaskList />
              },

            ]
        },
        {
            path: 'reports', 
            element: <Reports /> 
        },
        
    ]
  }
];

export default  HrPayRollRoutes;
