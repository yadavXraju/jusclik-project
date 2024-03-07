import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// Class Teacher  Dashboard Menus
const ContactSupport = Loadable(lazy(() => import('views/common-files/post-support-ticket')));

// main dashboard
const MainDashboard = Loadable(lazy(() => import('views/common-files/main-dashboard')));



// Class Teacher Routes
const CommonRoutes = [

    {
        path: '/',
        children: [

      { 
        path: 'contact-support', 
        element: <ContactSupport />
        },

        { 
          path: 'main-dashboard', 
          element: <MainDashboard />
          },


    ]
}
];

export default CommonRoutes;
