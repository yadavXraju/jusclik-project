import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';


// Class Teacher  Dashboard Menus
const ContactSupport = Loadable(lazy(() => import('views/common-files/post-support-ticket')));

// visitor reg

const VisitorRegistration = Loadable(lazy(() => import('views/erp-module/visitor/visitor-sidemenus/visitor-registration')));




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
          path: 'visitor-registration', 
          element: <VisitorRegistration/>
          },
  
    ]
}
];

export default CommonRoutes;
