import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// Class Teacher  Dashboard Menus
const ClassTeacherDashboard = Loadable(lazy(() => import('views/class-teacher-dashboard/')));
const DailyAttendance = Loadable(lazy(() => import('views/sidebar-menus/attendance-entry')));
const MonthlyAttendance = Loadable(lazy(() => import('views/sidebar-menus/monthly-attendance')));
const MarksEntryPanel = Loadable(lazy(() => import('views/sidebar-menus/marks-entry-panel')));
const Scholastic = Loadable(lazy(() => import('views/sidebar-menus/co-scholastic')));
const RemarksEntryPanel = Loadable(lazy(() => import('views/sidebar-menus/remarks-entry-panel')));
const TimeTableEntry  = Loadable(lazy(() => import('views/sidebar-menus/time-table-entry')));
const Library =  Loadable(lazy(()=> import('views/sidebar-menus/library')))
// const ClassTimeTable = Loadable(lazy(() => import('views/sidebar-menus/time-table-entry/class-time-table')));
// const MyTimeTable = Loadable(lazy(() => import('views/sidebar-menus/time-table-entry/my-time-table')));
const StudentAllocation = Loadable(lazy(() => import('views/sidebar-menus/student-allocation')));
const StudentHomeWorkUpload = Loadable(lazy(() => import('views/sidebar-menus/Student-homework-upload')));
const CircularUpload = Loadable(lazy(() => import('views/sidebar-menus/circular-upload')));
const UploadResources = Loadable(lazy(() => import('views/sidebar-menus/Upload-Resources')));
const TeacherInbox = Loadable(lazy(() => import('views/sidebar-menus/teacher-inbox')));
const BiometricDetailsOrAttendanceDetails = Loadable(lazy(() => import('views/sidebar-menus/biometric-details-attendance-details')));
const LeaveApplication = Loadable(lazy(() => import('views/sidebar-menus/leave-application')));
const UploadPhotoGallery = Loadable(lazy(() => import('views/sidebar-menus/upload-photogallery')));
const TeacherProfile = Loadable(lazy(() => import('views/sidebar-menus/class-teacher-profile')));
const ApiTest = Loadable(lazy(() => import('views/sidebar-menus/ApiTest')));
const ExpenseAndTravel = Loadable(lazy(() => import('views/sidebar-menus/expenses-and-travel')));





// Class Teacher Routes
const CommonRoutes = [

    {
        path: '/class-teacher',
        children: [

      { 
        path: 'dashboard', 
        element: <ClassTeacherDashboard />
        },

        {
            path: 'teacher-profile',
            element: <TeacherProfile />
        },

  


    ]
}
];

export default CommonRoutes;
