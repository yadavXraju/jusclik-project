import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';


// Class Teacher  Dashboard Menus
const ContactSupport = Loadable(lazy(() => import('views/erp-common-component/post-support-ticket')));

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
