import React from 'react';
import { lazy } from 'react';
import Loadable from 'components/ui/Loadable';


const Forms= Loadable(lazy(() => import('views/erp-module/form-builder')));
const Builder= Loadable(lazy(() => import('views/erp-module/form-builder/builder')));
// report
const Reports = Loadable(lazy(() => import('views/erp-module/form-builder/reports')));
// setting
const Settings = Loadable(lazy(() => import('views/erp-module/form-builder/settings')));


// visitor reg


const FormBuilderRoutes = [

    {
        path: '/erp',
        children: [
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
      {
            path: 'settings', 
            element: <Settings /> 
        },

        {
            path: 'reports', 
            element: <Reports /> 
        },
    ]
}
];

export default  FormBuilderRoutes;
