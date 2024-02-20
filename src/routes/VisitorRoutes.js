import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/visitor/visitor-dashboard')));



// ==============================|| Visitor MENUS ||============================== //

const VisitorRoutes = [
  {
    path: '/visitor',
    children: [
      { 
        path: 'dashboard', 
        element: <DashboardDefault />
       },
    ]
  }
];

export default  VisitorRoutes;
