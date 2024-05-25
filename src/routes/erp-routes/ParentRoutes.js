import { lazy } from 'react';
import Loadable from 'components/ui/Loadable';

// project imports
const Dashboard = Loadable(lazy(() => import('views/erp-module/parent/dashboard')));
// component page routing
const Attendance = Loadable(lazy(() => import('views/erp-module/parent/attendance')));
const Assignments = Loadable(lazy(() => import('views/erp-module/parent/assignments')));
const Updates = Loadable(lazy(() => import('views/erp-module/parent/updates')));
const TimeTable = Loadable(lazy(() => import('views/erp-module/parent/timetable')));
const Performance = Loadable(lazy(() => import('views/erp-module/parent/performance')));
const SchoolFee = Loadable(lazy(() => import('views/erp-module/parent/fee-school-fee')));
const OnlineAssessment = Loadable(lazy(() => import('views/erp-module/parent/remote-learning/assessments')));
const OnlineClass = Loadable(lazy(() => import('views/erp-module/parent/remote-learning/online-class')));
const ContactList = Loadable(lazy(() => import('views/erp-module/parent/communication-message/Contact-list')));
const RecentMessage = Loadable(lazy(() => import('views/erp-module/parent/communication-message/Recent-Message')));
const AddMeeting = Loadable(lazy(() => import('views/erp-module/parent/request/AddMetting')));
const ItemRequestGatePass = Loadable(lazy(() => import('views/erp-module/parent/request/ItemRequestGatePass')));
const Resources = Loadable(lazy(() => import('views/erp-module/parent/resources')));
const StudentProfile = Loadable(lazy(() => import('views/erp-module/parent/dashboard/studentProfile')));
const PhotoGallery = Loadable(lazy(() => import('views/erp-module/parent/photo-gallery')));
const EmailMsg = Loadable(lazy(() => import('views/erp-module/parent/communication-message/MailBox/EmailMssg')));

// ==============================|| PARENT MENUS ||============================== //

const ParentRoutes = [
  {
    path: '/parent',
    children: [
      { 
        path: 'dashboard', 
        element: <Dashboard />
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
