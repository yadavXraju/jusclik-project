import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// Class Teacher  Dashboard Menus
const ContactSupport = Loadable(lazy(() => import('views/common-files/post-support-ticket')));





// Class Teacher Routes
const CommonRoutes = [

    {
        path: '/',
        children: [

      { 
        path: 'contact-support', 
        element: <ContactSupport />
        },


    ]
}
];

export default CommonRoutes;
