// Page Owner Abhishek
// Description : Hr Payroll Routes

import { lazy } from 'react';
import Loadable from 'components/ui/Loadable';
// project imports
const Dashboard = Loadable(lazy(() => import('views/erp-module/hr-payroll/dashboard')));
// report
const Reports = Loadable(lazy(() => import('views/erp-module/hr-payroll/report')));
const Settings = Loadable(lazy(() => import('views/erp-module/hr-payroll/settings')));
const EmployeeMaster =  Loadable(lazy(() => import('views/erp-module/hr-payroll/Employee-Master')));
const EmployeeMasterPreview =  Loadable(lazy(() => import('views/erp-module/hr-payroll/Employee-Master/EmployeePreview')));
const EmployeeSalary=Loadable(lazy(()=>import('views/erp-module/hr-payroll/new-salary')));
const EmployeeOnBoard=Loadable(lazy(()=>import('views/erp-module/hr-payroll/Employee-Master/employeeonBoard')));
const OnboardingTaskList=Loadable(lazy(()=>import('views/erp-module/hr-payroll/settings/onboarding-tasklist')));
const LeaveApplication=Loadable(lazy(()=>import('views/erp-module/hr-payroll/leave-application')));
const ExitEmployee = Loadable(lazy(()=>import('views/erp-module/hr-payroll/Employee-Master/exit-employee')));
const Attendance = Loadable(lazy(()=>import('views/erp-module/hr-payroll/new-attendance/index')));
const ExpenseAndTravel = Loadable(lazy(()=>import('views/erp-module/hr-payroll/Employee-Master/ExpenseAndTravel')));
const Document = Loadable(lazy(()=>import('views/erp-module/hr-payroll/Employee-Master/new-document')));
const Assets = Loadable(lazy(()=>import('views/erp-module/hr-payroll/Employee-Master/new-assets')));
const Payroll = Loadable(lazy(()=>import('views/erp-module/hr-payroll/new-payroll')));

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
          path: 'employee', 
          children : [
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
                 ],
            },
           
            {
              path : 'exits' ,
              element: <ExitEmployee /> 
            },
            {
              path : 'expense-and-travel' ,
              element: <ExpenseAndTravel /> 
            },
            {
              path : 'document' ,
              element: <Document /> 
            },
            {
              path : 'assets' ,
              element: <Assets /> 
            },
        ]
        },
        {
          path : 'attendance',
          element : <Attendance />
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
          path : 'Payroll',
          element: <Payroll />
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
