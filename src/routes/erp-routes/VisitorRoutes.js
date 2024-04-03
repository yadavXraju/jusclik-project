import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/visitor/visitor-dashboard')));
const VisitorEntry = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/visitor-managment/visitor-entry')));
const ScheduledVisit = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/visitor-managment/scheduled-visit')));
const Reports =Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/reports')));
const Settings =Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/settings/Settings')));

// const SmsDeliveryReport = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/tool-item/sms-delivery-report')));
// const Report = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/tool-item/sms-delivery-report/Report')));




// ==============================|| Visitor MENUS ||============================== //

const VisitorRoutes = [
  {
    path: '/erp/visitor',
    children: [
      { 
        path: 'dashboard', 
        element: <DashboardDefault />
       },

      //  collapse menus

       {
        path: 'visitor-management',
        children: [
          { 
            path: 'visitor-entry', 
            element: <VisitorEntry /> 
          },

          {
            path: 'scheduled-visit',
            element: <ScheduledVisit />
         }
        ]
      },
      { 
        path: 'reports', 
        element: <Reports />
       },
       { 
        path: 'settings', 
        element: <Settings />
       },


       
      // {
      //   path: 'tools',
      //   children: [
      //     { 
      //       path: 'sms-delivery-report', 
      //       element: <SmsDeliveryReport  /> 
      //     },

      //     { 
      //       path: 'report', 
      //       element: <Report  /> 
      //     },

      //   ]
      // }, 



    ]
  }
];

export default  VisitorRoutes;
