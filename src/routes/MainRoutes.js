// page owner : Abhishek Negi 
// Description : Distuctring  

import React from 'react';
import { lazy } from 'react';
import Loadable from 'components/ui/Loadable';
import MainLayout from 'layout/MainLayout';

// parent routes
import ParentRoutes from 'routes/erp-routes/ParentRoutes';
// class teacher routes
import classTeacherRoutes from 'routes/erp-routes/ClassTeacherRoutes';
// visitor dashboard
import VisitorRoutes from 'routes/erp-routes/VisitorRoutes';
// stufee dashboard
import StudentInfoFeeRoutes from 'routes/erp-routes/StudentInfoFeeRoutes';
// library dashboard
import LibraryRoutes from 'routes/erp-routes/LibraryRoutes';
// inventory dashboard
import InventoryRoutes from 'routes/erp-routes/InventoryRoutes';
// hr payroll dashbaord
import HrPayRollRoutes from 'routes/erp-routes/HrPayrollRoutes';
// crm dashbaord
import CrmRoutes from 'routes/erp-routes/CrmRoutes';
// form builder
import FormBuilderRoutes from 'routes/erp-routes/FormBuilderRoutes';

 // subject Teacher  Dashboard Menus
//  const SubjectTeacherDashboard= Loadable(lazy(() => import('views/subject-teacher-dashboard/')));

//  common routes
const ContactSupport = Loadable(lazy(() => import('pages/post-support-ticket')));

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

     // crm Dashboard Menus (Include imported routes here)
    ...CrmRoutes , 

   // from builder Dashboard Menus (Include imported routes here)
    ...FormBuilderRoutes,

     // common   Pages routes
     { 
      path: 'contact-support', 
      element: <ContactSupport />
      },


  ]
};

export default MainRoutes;


