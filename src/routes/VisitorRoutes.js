import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/visitor/visitor-dashboard')));
const VisitorEntry = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/visitor-managment/visitor-entry')));
const ScheduledVisit = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/visitor-managment/scheduled-visit')));
const VisitorDetails = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/dynamic-reports/visitor-details')));
const BlackListedVisitor = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/dynamic-reports/black-listed-visitor')));



// ==============================|| Visitor MENUS ||============================== //

const VisitorRoutes = [
  {
    path: '/visitor',
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


    ]
  }
];

export default  VisitorRoutes;
