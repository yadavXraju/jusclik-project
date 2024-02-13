import React from 'react';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// Class Teacher  Dashboard Menus
const ClassTeacherDashboard = Loadable(lazy(() => import('views/class-teacher-dashboard/')));
const DailyAttendance = Loadable(lazy(() => import('views/sidebar-menus/attendance-entry')));
const MonthlyAttendance = Loadable(lazy(() => import('views/sidebar-menus/monthly-attendance')));
const MarksEntryPanel = Loadable(lazy(() => import('views/sidebar-menus/marks-entry-panel')));
const RemarksEntryPanel = Loadable(lazy(() => import('views/sidebar-menus/remarks-entry-panel')));
const TimeTableEntry = Loadable(lazy(() => import('views/sidebar-menus/time-table-entry')));
const StudentAllocation = Loadable(lazy(() => import('views/sidebar-menus/student-allocation')));
const StudentHomeWorkUpload = Loadable(lazy(() => import('views/sidebar-menus/Student-homework-upload')));
const CircularUpload = Loadable(lazy(() => import('views/sidebar-menus/circular-upload')));
const TeacherInbox = Loadable(lazy(() => import('views/sidebar-menus/teacher-inbox')));
const BiometricDetailsOrAttendanceDetails = Loadable(lazy(() => import('views/sidebar-menus/biometric-details-attendance-details')));
const LeaveApplication = Loadable(lazy(() => import('views/sidebar-menus/leave-application')));
const ApiTest = Loadable(lazy(() => import('views/sidebar-menus/ApiTest')));

// Class Teacher Routes
const SubjectTeacherRoutes = [

    {
        path: '/class-teacher',
        children: [

      { 
        path: 'dashboard', 
        element: <ClassTeacherDashboard />
        },
        

        {
            path: 'attendance',
            children: [
            {
                path: 'daily-attendance',
                element: <DailyAttendance />
            },
            {
                path: 'monthly-attendance',
                element: <MonthlyAttendance />
            },
            ]
        },
        {
            path: 'marks-entry-panel',
            element: <MarksEntryPanel />
        },
        {
            path: 'remarks-entry-panel',
            element: <RemarksEntryPanel />
        },
        {
            path: 'remarks-entry-panel',
            element: <RemarksEntryPanel />
        },
        {
            path: 'time-table-entry',
            element: <TimeTableEntry />
        },
        {
            path: 'student-allocation',
            element: <StudentAllocation />
        },
        {
            path: 'student-homework-upload',
            element: <StudentHomeWorkUpload />
        },
        {
            path: 'circular-upload',
            element: <CircularUpload />
        },
        {
            path: 'inbox',
            element: <TeacherInbox />
        },
        {
            path: 'biometric-details',
            element: <BiometricDetailsOrAttendanceDetails />
        },
        {
            path: 'leave-application',
            element: <LeaveApplication />
        },
        {
            path: 'apitest',
            element: <ApiTest />
        },
    ]
}
];

export default SubjectTeacherRoutes;
