import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';

// minimal layout for  without sidebar and header
// import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const Login = Loadable(lazy(() => import('views/pages/authentication/Login')));
const ForgetPassword = Loadable(lazy(() => import('views/pages/authentication/ForgetPassword')));
const VerifyNumber = Loadable(lazy(() => import('views/pages/authentication/VerifyNumber')));
const SetNewPassword = Loadable(lazy(() => import('views/pages/authentication/SetNewPassword')));
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
      path: '/forgetpassword',
      element: <ForgetPassword />
    },

    {
      path: '/verifynumber',
      element: <VerifyNumber />
    },

    {
      path: '/setnewpassword',
      element: <SetNewPassword />
    },

    {
      path:'/visitor-registration',
      element: <VisitorRegistration />
    }
  ]
};

export default AuthenticationRoutes;
