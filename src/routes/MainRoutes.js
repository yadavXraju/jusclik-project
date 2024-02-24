import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import classTeacherRoutes from './ClassTeacherRoutes';
import ParentRoutes from './ParentRoutes';
import VisitorRoutes from './erp-routes/VisitorRoutes';
import StudentInfoFeeRoutes from './erp-routes/StudentInfoFeeRoutes';



 // subject Teacher  Dashboard Menus

 const SubjectTeacherDashboard= Loadable(lazy(() => import('views/subject-teacher-dashboard/')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [


    // Parent Dashboard Menus (Include imported routes here)
     ...ParentRoutes,
 
    // Class Teacher Dashboard Menus (Include imported routes here)
    ...classTeacherRoutes,
 
      
    // subject teacher dashboard

    {
      path: 'subject-teacher/dashboard',
      element: <SubjectTeacherDashboard />
    },

    // visitor Dashboard Menus (Include imported routes here)
    ...VisitorRoutes,

    // Student info and fee info Dashboard Menus (Include imported routes here)
    ...StudentInfoFeeRoutes,


  ]
};

export default MainRoutes;


