
// project imports
import MainLayout from 'layout/MainLayout';

// import { lazy } from 'react';
// import Loadable from 'ui-component/Loadable';

// parent routes
import ParentRoutes from './ParentRoutes';

// class teacher routes
import classTeacherRoutes from './ClassTeacherRoutes';

// visitor dashboard
import VisitorRoutes from './erp-routes/VisitorRoutes';

// stufee dashboard
import StudentInfoFeeRoutes from './erp-routes/StudentInfoFeeRoutes';

// library dashboard
import LibraryRoutes from './erp-routes/LibraryRoutes';

// inventory dashboard
import InventoryRoutes from './erp-routes/InventoryRoutes';

// hr payroll dashbaord
import HrPayRollRoutes from './erp-routes/HrPayrollRoutes';
 // subject Teacher  Dashboard Menus

//  const SubjectTeacherDashboard= Loadable(lazy(() => import('views/subject-teacher-dashboard/')));

//  common routes
import CommonRoutes from './common-routes/CommonRoutes';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [


    // Parent Dashboard Menus (Include imported routes here)
     ...ParentRoutes,
 
    // Class Teacher Dashboard Menus (Include imported routes here)
    ...classTeacherRoutes,
 
    // subject Dashboard Menus (Include imported routes here)

    // {
    //   path: 'subject-teacher/dashboard',
    //   element: <SubjectTeacherDashboard />
    // },

    // visitor Dashboard Menus (Include imported routes here)
    ...VisitorRoutes,

    // Student info and fee info Dashboard Menus (Include imported routes here)
    ...StudentInfoFeeRoutes,

    // library Dashboard Menus (Include imported routes here)
    ...LibraryRoutes , 

    // inventory Dashboard Menus (Include imported routes here)
    ...InventoryRoutes , 

    // hr pay roll Dashboard Menus (Include imported routes here)
    ...HrPayRollRoutes,

    // common routes  
    ...CommonRoutes

  ]
};

export default MainRoutes;


