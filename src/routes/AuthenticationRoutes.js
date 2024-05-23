import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';


// minimal layout for  without sidebar and header
// import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const Login = Loadable(lazy(() => import('pages/authentication')));
const VisitorRegistration =  Loadable(lazy(() => import('pages/authentication/visitor-registration')));
const Registration =  Loadable(lazy(() => import('pages/registartion')));
const OnlineRegistration =  Loadable(lazy(() => import('pages/online-registration')));
const Pricing =  Loadable(lazy(() => import('pages/pricing')));


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
    {
      path:'/registration',
      element: <Registration />
    },
    {
      path:'/online-registration',
      element: <OnlineRegistration />
    },
    {
      path:'/pricing',
      element: <Pricing/>
    },
    
  ]
};

export default AuthenticationRoutes;
