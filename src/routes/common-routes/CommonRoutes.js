import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';


// Class Teacher  Dashboard Menus
const ContactSupport = Loadable(lazy(() => import('views/erp-common-component/post-support-ticket')));
const FormBuilder= Loadable(lazy(() => import('views/form-builder')));
// const Pricing =  Loadable(lazy(() => import('views/pages/pricing')));

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
            path: 'form-builder', 
            element: <FormBuilder />
            },
        //    {
        //   path:'/pricing',
        //   element: <Pricing/>
        // },
      

    ]
}
];

export default CommonRoutes;
