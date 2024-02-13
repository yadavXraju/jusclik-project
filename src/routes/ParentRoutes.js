import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// const SamplePage = Loadable(lazy(() => import('views/sample-page')));
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
const AddMeeting = Loadable(lazy(() => import('views/sidebar-menus/request/AddMetting')));
const ItemRequestGatePass = Loadable(lazy(() => import('views/sidebar-menus/request/ItemRequestGatePass')));
const Resources = Loadable(lazy(() => import('views/sidebar-menus/resources')));
const StudentProfile = Loadable(lazy(() => import('views/sidebar-menus/studentProfile')));
const PhotoGallery = Loadable(lazy(() => import('views/sidebar-menus/photo-gallery')));
const EmailMsg = Loadable(lazy(() => import('views/sidebar-menus/communication-message/MailBox/EmailMssg')));

// ==============================|| PARENT MENUS ||============================== //

const ParentRoutes = [
  {
    path: '/parent',
    children: [
      { 
        path: 'dashboard', 
        element: <DashboardDefault />
       },

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
            element: <OnlineAssessment /> 
          },

          {
            path: 'online-class',
            element: <OnlineClass />
         }
        ]
      },

      {
        path: 'communication',
        children: [
          { 
            path: 'contact-list', 
            element: <ContactList /> 
         },
          {
             path: 'inbox',
             element: <RecentMessage />
         },

          { 
            path: 'inbox/message',
             element: <EmailMsg />
         }
        ]
      },

      {
        path: 'request',
        children: [
          {
             path: 'add-meeting', 
             element: <AddMeeting /> 
         },

          {
            path: 'item-request-gate-pass', 
            element: <ItemRequestGatePass />
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
        path: 'student-profile',
        element: <StudentProfile /> 
    }
    ]
  }
];

export default ParentRoutes;
