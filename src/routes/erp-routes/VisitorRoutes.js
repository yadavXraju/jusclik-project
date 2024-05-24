// Page Owner Abhishek
// Description : Visitor Routes

import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/visitor/visitor-dashboard')));
const VisitorEntry = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/visitor-managment/visitor-entry')));
const ScheduledVisit = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/visitor-managment/scheduled-visit')));
const VisitorDetails=Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/visitor-managment/visitor-detail')));
const Reports =Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/reports')));
const Settings =Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/settings')));
const Purpose = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/settings/purpose')));


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
         },
         {
          path: 'visitor-detail',
          element: <VisitorDetails/>              
       }
        ]
      },
      { 
        path: 'reports', 
        element: <Reports />
       },
       { 
        path: 'settings', 
        children : [
          {
            path: '', 
            element: <Settings />
          } , 
          {
            path: 'purpose', 
            element: <Purpose />
          } , 
        ]
       
       },

    ]
  }
];

export default  VisitorRoutes;
