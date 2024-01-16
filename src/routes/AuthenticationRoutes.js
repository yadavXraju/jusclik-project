import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
// const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
// const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const Login = Loadable(lazy(() => import('views/pages/authentication/Login')));
const ForgetPassword = Loadable(lazy(() => import('views/pages/authentication/ForgetPassword')));
const OtpLogin = Loadable(lazy(() => import('views/pages/authentication/OtpLogin')));
const SetNewPassword = Loadable(lazy(() => import('views/pages/authentication/SetNewPassword')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    // {
    //   path: '/pages/login/login3',
    //   element: <AuthLogin3 />
    // },
    // {
    //   path: '/pages/register/register3',
    //   element: <AuthRegister3 />
    // },

    {
      path: '/login',
      element: <Login />
    },

    {
      path: '/forgetpassword',
      element: <ForgetPassword  />
    },

    {
      path: '/otplogin',
      element: <OtpLogin  />
    },

    {
      path: '/setnewpassword',
      element: <SetNewPassword  />
    }


  ]
};

export default AuthenticationRoutes;
