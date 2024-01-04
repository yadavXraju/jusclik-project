import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const UtilsTimetable = Loadable(lazy(() => import('views/utilities/Timetable')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// components page routing
<<<<<<< HEAD
const Attendance = Loadable(lazy(() => import('views/sidebar-menus/attendance')));
=======
const Attendance = Loadable(lazy(() => import('views/attendance')));
const Assignments = Loadable(lazy(() => import('views/sidebar-menus/assignments/')));
const Updates = Loadable(lazy(() => import('views/sidebar-menus/updates/')));
const TimeTable = Loadable(lazy(() => import('views/sidebar-menus/timetable/')));
const Performance = Loadable(lazy(() => import('views/sidebar-menus/performance/')));
const SchoolFee = Loadable(lazy(() => import('views/sidebar-menus/fee-school-fee/')));
const OnlineAssessment = Loadable(lazy(() => import('views/sidebar-menus/assessments')));
const CommunicationMessage = Loadable(lazy(() => import('views/sidebar-menus/communication-message/')));
const AddMetting = Loadable(lazy(() => import('views/sidebar-menus/request/AddMetting')));
const ItemRequestGatePass = Loadable(lazy(() => import('views/sidebar-menus/request/ItemRequestGatePass')));
const Resources = Loadable(lazy(() => import('views/sidebar-menus/resources/')));
const Setting = Loadable(lazy(() => import('views/sidebar-menus/settings')));


>>>>>>> 10c1c6139b26434051870ea2390f7b3b20d5eb17
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-timetable',
          element: <UtilsTimetable/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
    ,
        {
          path: 'attendance',
          element: <Attendance />
        },
<<<<<<< HEAD
=======

        {
          path: 'assignments',
          element: <Assignments />
        },
        {
          path: 'timetable',
          element: <TimeTable />
        },

        {
          path: 'updates',
          element: <Updates />
        },

        {
          path: 'performance',
          element: <Performance />
        },

        {
          path: 'fee-school-fee',
          element: <SchoolFee />
        },

        {
          path: 'online-assessment',
          element: <OnlineAssessment />
        },

        {
          path: 'communication-messages',
          element: <CommunicationMessage />
        },

        {
          path: 'request',
          children: [
            {
              path: 'add-meeting',
              element: <AddMetting />
            }
          ]
        },

        {
          path: 'request',
          children: [
            {
              path: 'item-request-gate-pass',
              element: <ItemRequestGatePass/>
            }
          ]
        },

        {
          path: 'resources',
          element: <Resources />
        },
    
        {
          path: 'settings',
          element: <Setting />
        },

>>>>>>> 10c1c6139b26434051870ea2390f7b3b20d5eb17
  ]
};

export default MainRoutes;
