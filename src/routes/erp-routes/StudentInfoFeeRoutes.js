import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-dashboard')));
const Enquiry = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/enquiry')));
const Registration = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/registration')));
const VisitorDetails = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/dynamic-reports/visitor-details')));
const BlackListedVisitor = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/dynamic-reports/black-listed-visitor')));
const SmsDeliveryReport = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/tool-item/sms-delivery-report')));
const Report = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/tool-item/sms-delivery-report/Report')));




// ==============================|| Visitor MENUS ||============================== //

const StudentInfoFeeRoutes = [
  {
    path: '/erp/student-info-fee',
    children: [
      { 
        path: 'dashboard', 
        element: <DashboardDefault />
       },

      //  collapse menus

       {
        path: 'student-master',
        children: [
          { 
            path: 'enquiry', 
            element: <Enquiry /> 
          },

          {
            path: 'registration',
            element: <Registration />
         }
        ]
      },


      {
        path: 'dynamic-reports',
        children: [
          { 
            path: 'visitor-details', 
            element: < VisitorDetails  /> 
          },

          {
            path: 'black-listed-visitor',
            element: <BlackListedVisitor />
         }
        ]
      }, 

       
      {
        path: 'tools',
        children: [
          { 
            path: 'sms-delivery-report', 
            element: <SmsDeliveryReport  /> 
          },

          { 
            path: 'report', 
            element: <Report  /> 
          },

        ]
      }, 



    ]
  }
];

export default  StudentInfoFeeRoutes;
