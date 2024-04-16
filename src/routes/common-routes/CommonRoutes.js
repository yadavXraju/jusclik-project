import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';


// Class Teacher  Dashboard Menus
const ContactSupport = Loadable(lazy(() => import('views/erp-common-component/post-support-ticket')));
const Forms= Loadable(lazy(() => import('views/erp-module/form-builder')));
const Builder= Loadable(lazy(() => import('views/erp-module/form-builder/builder')));

// temp routes
const DamanTemp= Loadable(lazy(() => import('views/erp-module/form-builder/common/common-fields')));

// visitor reg


const CommonRoutes = [

    {
        path: '/',
        children: [

      { 
        path: 'contact-support', 
        element: <ContactSupport />
        },

        { 
          path: 'contact-support', 
          element: <ContactSupport />
          },

          { 
            path: 'forms', 
            children:[
              {
              path: '', 
              element: <Forms/>
             },

             {
              path: ':id/builder', 
              element: <Builder />
             },

          ]
          },
          // temp routes
          { 
            path: 'daman-temp', 
            element: <DamanTemp />
            },
  

    ]
}
];

export default CommonRoutes;
