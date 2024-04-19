import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';


const Forms= Loadable(lazy(() => import('views/erp-module/form-builder')));
const Builder= Loadable(lazy(() => import('views/erp-module/form-builder/builder')));
// report
const Reports = Loadable(lazy(() => import('views/erp-module/form-builder/reports')));
// setting
const Settings = Loadable(lazy(() => import('views/erp-module/form-builder/settings')));
// temp routes
const DamanTemp= Loadable(lazy(() => import('views/erp-module/form-builder/common/common-fields')));
const CommonDrawer= Loadable(lazy(() => import('views/erp-module/form-builder/common/common-drawer')));

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
          // temp routes
          { 
            path: 'daman-temp', 
            element: <DamanTemp />
            },
            { 
              path: 'common-drawer', 
              element: <CommonDrawer />
              },
    ]
}
];

export default  FormBuilderRoutes;
