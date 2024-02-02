import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// dashboard routing
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
const AddMetting = Loadable(lazy(() => import('views/sidebar-menus/request/AddMetting')));
const ItemRequestGatePass = Loadable(lazy(() => import('views/sidebar-menus/request/ItemRequestGatePass')));
const Resources = Loadable(lazy(() => import('views/sidebar-menus/resources')));
const StudentProfile = Loadable(lazy(() => import('views/sidebar-menus/studentProfile')));
const PhotoGallery = Loadable(lazy(() => import('views/sidebar-menus/photo-gallery')));
const EmailMsg = Loadable(lazy(() => import('views/sidebar-menus/communication-message/MailBox/EmailMssg')));


// Class Teacher  Dashboard Menus
const ClassTeacherDashboard = Loadable(lazy(() => import('views/class-teacher-dashboard/')));
 const AttendanceEntry = Loadable(lazy(() => import('views/sidebar-menus/attendance-entry')));
 const MarksEntryPanel = Loadable(lazy(() => import('views/sidebar-menus/marks-entry-panel')));
 const RemarksEntryPanel = Loadable(lazy(() => import('views/sidebar-menus/remarks-entry-panel')));
 const TimeTableEntry = Loadable(lazy(() => import('views/sidebar-menus/time-table-entry')));
 const StudentAllocation = Loadable(lazy(() => import('views/sidebar-menus/student-allocation')));
 const StudentHomeWorkUpload = Loadable(lazy(() => import('views/sidebar-menus/Student-homework-upload')));
 const CircularUpload = Loadable(lazy(() => import('views/sidebar-menus/circular-upload')));
 const TeacherInbox = Loadable(lazy(() => import('views/sidebar-menus/teacher-inbox')));
 const  BiometricDetailsOrAttendanceDetails = Loadable(lazy(() => import('views/sidebar-menus/biometric-details-attendance-details')));
 const  LeaveApplication = Loadable(lazy(() => import('views/sidebar-menus/leave-application')));
 const  ApiTest = Loadable(lazy(() => import('views/sidebar-menus/ApiTest.js')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '/dashboard',
          element: <DashboardDefault />
        }
      ]
    },

    // Class Teacher  dashboard


    {
      path: 'class-teacher-dashboard',
      children: [
        {
          path: '/class-teacher-dashboard',
          element: <ClassTeacherDashboard />
        }
      ]
    },


    // Class Teacher  dashboard

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
          path: 'communication/inbox/message',
          element: <EmailMsg />
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
          path: '/student-profile',
          element: <StudentProfile/>
        },



        // Class Teacher  Dashboard Menus

  
        {
          path: '/attendance-entry',
          element: <AttendanceEntry/>
        },

        
        {
          path: '/marks-entry-panel',
          element: <MarksEntryPanel/>
        },

        {
          path: '/remarks-entry-panel',
          element: <RemarksEntryPanel/>
        },

        {
          path: '/remarks-entry-panel',
          element: <RemarksEntryPanel/>
        },

        {
          path: '/time-table-entry',
          element: <TimeTableEntry/>
        },

        {
          path: '/student-allocation',
          element: <StudentAllocation/>
        },

        {
          path: '/student-homework-upload',
          element: <StudentHomeWorkUpload/>
        },

        {
          path: '/circular-upload',
          element: <CircularUpload/>
        },

        {
          path: '/inbox',
          element: <TeacherInbox/>
        },


        {
          path: '/biometric-details',
          element: <BiometricDetailsOrAttendanceDetails/>
        },
        

        {
          path: '/leave-application',
          element: <LeaveApplication/>
        },

        {
          path: '/apitest',
          element: <ApiTest/>
        },

       

        


  ]
};

export default MainRoutes;
