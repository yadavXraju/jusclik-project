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
// const UtilsTimetable = Loadable(lazy(() => import('views/sidebar-menus/timetable/Timetable')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// components page routing
const Attendance = Loadable(lazy(() => import('views/sidebar-menus/attendance')));
// const Attendance = Loadable(lazy(() => import('views/attendance')));
const Assignments = Loadable(lazy(() => import('views/sidebar-menus/assignments/')));
const Updates = Loadable(lazy(() => import('views/sidebar-menus/updates/')));
const TimeTable = Loadable(lazy(() => import('views/sidebar-menus/timetable/')));
const Performance = Loadable(lazy(() => import('views/sidebar-menus/performance/')));
const SchoolFee = Loadable(lazy(() => import('views/sidebar-menus/fee-school-fee/')));
const OnlineAssessment = Loadable(lazy(() => import('views/sidebar-menus/remote-learning/assessments')));
const OnlineClass = Loadable(lazy(() => import('views/sidebar-menus/remote-learning/online-class')));
const ContactList = Loadable(lazy(() => import('views/sidebar-menus/communication-message/Contact-list')));
const RecentMessage = Loadable(lazy(() => import('views/sidebar-menus/communication-message/Recent-Message')));
const AddMetting = Loadable(lazy(() => import('views/sidebar-menus/request/AddMetting')));
const ItemRequestGatePass = Loadable(lazy(() => import('views/sidebar-menus/request/ItemRequestGatePass')));
const Resources = Loadable(lazy(() => import('views/sidebar-menus/resources/')));
const Setting = Loadable(lazy(() => import('views/sidebar-menus/settings')));
const StudentProfile = Loadable(lazy(() => import('views/sidebar-menus/studentProfile')));
const PhotoGallery = Loadable(lazy(() => import('views/sidebar-menus/photo-gallery')));




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
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-timetable',
    //       element: <UtilsTimetable/>
    //     }
    //   ]
    // },
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
          path: 'school-fee',
          element: <SchoolFee />
        },

        {
          path: 'digital-learning',
          children: [
            {
              path: 'online-assessment',
              element: <OnlineAssessment/>
            }
          ]
        },

        {
          path: 'digital-learning',
          children: [
            {
              path: 'online-class',
              element: <OnlineClass/>
            }
          ]
        },



        // {
        //   path: 'online-assessment',
        //   element: <OnlineAssessment />
        // },

        // {
        //   path: 'online-class',
        //   element: <OnlineClass />
        // },

        
        // {
        //   path: 'communication',
        //   element: <CommunicationMessage />
        // },

        {
          path: 'communication',
          children: [
            {
              path: 'contact-list',
              element: <ContactList/>
            }
          ]
        },


        {
          path: 'communication',
          children: [
            {
              path: 'inbox',
              element: <RecentMessage/>
            }
          ]
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
          path: 'photo-gallery',
          element: <PhotoGallery />
        },

        {
          path: 'settings',
          element: <Setting />
        },

        {
          path: '/student-profile',
          element: <StudentProfile/>
        },


  ]
};

export default MainRoutes;
