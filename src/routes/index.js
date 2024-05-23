// Page Owner Abhishek
// Description : Routes Layout for with sidebar[ MainRoutes ] and without sidebar [ AuthenticationRoutes ]

import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([ AuthenticationRoutes , MainRoutes]);
}
