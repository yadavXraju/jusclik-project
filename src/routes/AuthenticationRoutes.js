import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';


// minimal layout for  without sidebar and header
// import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const Login = Loadable(lazy(() => import('views/pages/authentication')));
const VisitorRegistration =  Loadable(lazy(() => import('views/pages/authentication/visitor-registration')));


// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  // set login page to the first page in the domain
  children: [
    {
      path: '/',
      element: <Login />
    },

    {
      path: '/login',
      element: <Login />
    },

    {
      path:'/registration-link',
      element: <VisitorRegistration />
    },



  ]
};

export default AuthenticationRoutes;
