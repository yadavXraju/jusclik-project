// page owner : Abhishek
// Description :  Authentication Routes

import { lazy } from 'react';
import Loadable from 'components/ui/Loadable';


const Login = Loadable(lazy(() => import('pages/authentication/login')));
const VisitorRegistration =  Loadable(lazy(() => import('pages/authentication/visitor-registration')));
const Registration =  Loadable(lazy(() => import('pages/CustomerRegistration')));
const OnlineRegistration =  Loadable(lazy(() => import('pages/online-registration')));
const Pricing =  Loadable(lazy(() => import('pages/JusklikPricing')));


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
