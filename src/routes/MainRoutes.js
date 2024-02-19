import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import classTeacherRoutes from './ClassTeacherRoutes';
import ParentRoutes from './ParentRoutes';




 // subject Teacher  Dashboard Menus

 const SubjectTeacherDashboard = Loadable(lazy(() => import('views/subject-teacher-dashboard/')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [


    // Parent  dashboard Menus
     ...ParentRoutes,
 
       // Class Teacher Dashboard Menus (Include imported routes here)

   // Include imported routes from classTeacherRoutes.js
    ...classTeacherRoutes,
 
      
    // subject teacher dashboard

    {
      path: 'subject-teacher/dashboard',
      element: <SubjectTeacherDashboard />
    },

        


  ]
};

export default MainRoutes;


