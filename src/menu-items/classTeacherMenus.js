// new icon
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import AlarmTwoToneIcon from '@mui/icons-material/AlarmTwoTone';
import MarkUnreadChatAltTwoToneIcon from '@mui/icons-material/MarkUnreadChatAltTwoTone';
// import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import FingerprintTwoToneIcon from '@mui/icons-material/FingerprintTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import CoPresentTwoToneIcon from '@mui/icons-material/CoPresentTwoTone';
import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import FolderCopyTwoToneIcon from '@mui/icons-material/FolderCopyTwoTone';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import MovingIcon from '@mui/icons-material/Moving';


// ==================== colleagueTitles  ==================== 

//  attndance

const  AttendanceColleagueTitles  = [
  {title : 'Daily Attendance' , url : '/class-teacher/attendance-entry/daily-attendance'}, 
  {title : 'Monthly Attendance' , url : '/class-teacher/attendance-entry/monthly-attendance'}, 
];


//  result

const  ResultColleagueTitles  = [
  {title : 'Marks' , url : '/class-teacher/result/marks-entry'}, 
  {title : 'Co Scholastic' , url : '/class-teacher/result/co-scholastic'}, 
  {title : 'Remark Entry' , url : '/class-teacher/result/remarks-entry'}, 
];




const ClassTeacherMenu = {
    id: 'teacherMenu',
    type: 'group',
    children: [
  
        // class Teacher menus         
               {
                id: 'attendance-entry',
                title: 'Attendance',
                type: 'collapse',
                url: '/class-teacher/attendance-entry',
                icon: CalendarMonthTwoToneIcon,
                children: [

                  {
                    id: 'attendance-daily-attendance',
                     title: 'Daily Attendance',
                     type: 'item',
                     url: '/class-teacher/attendance-entry/daily-attendance',
                     breadcrumbs: false,
                     colleagueTitle : AttendanceColleagueTitles,
                   },
    

                   {
                    id: 'attendance-monthly-attendance',
                     title: 'Monthly Attendance',
                     type: 'item',
                     url: '/class-teacher/attendance-entry/monthly-attendance',
                     breadcrumbs: false,
                     colleagueTitle : AttendanceColleagueTitles,
                   },
    
                ]
              },


              {
                id: 'result',
                title: 'Result',
                type: 'collapse',
                url: '/class-teacher/result',
                icon: DriveFileRenameOutlineTwoToneIcon,
                children: [

                  {
                    id: 'marks-entry-panel',
                     title: 'Marks',
                     type: 'item',
                     url: '/class-teacher/result/marks-entry',
                     breadcrumbs: false,
                     colleagueTitle : ResultColleagueTitles,
                   },
    

                   {
                    id: 'co-scholastic',
                     title: 'Co Scholastic',
                     type: 'item',
                     url: '/class-teacher/result/co-scholastic',
                     breadcrumbs: false,
                     colleagueTitle : ResultColleagueTitles,
                   },

                   {
                    id: 'remark-entry-panel',
                     title: 'Remark Entry',
                     type: 'item',
                     url: '/class-teacher/result/remarks-entry',
                     breadcrumbs: false,
                     colleagueTitle : ResultColleagueTitles,
                   },
    
    
                ]
              },
              
              {
                 id: 'library',
                 title: 'Library',
                 type: 'item',
                 url: '/class-teacher/library',
                 icon:  LocalLibraryTwoToneIcon,
                 breadcrumbs: false
               },



              //  {
              //    id: 'marks-entry-panel',
              //    title: 'Marks',
              //    type: 'item',
              //    url: '/class-teacher/marks-entry-panel',
              //    icon:  DriveFileRenameOutlineTwoToneIcon,
              //    breadcrumbs: false
              //  },

              //  {
              //   id: 'co-scholastic',
              //   title: 'Co Scholastic',
              //   type: 'item',
              //   url: '/class-teacher/co-scholastic',
              //   icon:  DriveFileRenameOutlineTwoToneIcon,
              //   breadcrumbs: false
              // },
            
               {
                 id: 'time-table-entry',
                 title: 'Timetable',
                 type: 'item',
                 url: '/class-teacher/time-table-entry',
                 icon: AlarmTwoToneIcon,
                 breadcrumbs: false
               },


              // {
              //   id: 'time-table-entry',
              //   title: 'Timetable',
              //   type: 'collapse',
              //   url: '/class-teacher/time-table-entry',
              //   icon: AlarmTwoToneIcon,
              //   children: [

              //     {
              //       id: 'class-time-table',
              //        title: 'Class Timetable',
              //        type: 'item',
              //        url: '/class-teacher/time-table-entry/class-timetable',
              //        breadcrumbs: false
              //      },
    

              //      {
              //       id: 'my-time-table',
              //        title: 'My Timetable',
              //        type: 'item',
              //        url: '/class-teacher/time-table-entry/my-timetable',
              //        breadcrumbs: false
              //      },
    
              //   ]
              // },


            
               {
                 id: 'student-allocation',
                 title: 'Student Allocation',
                 type: 'item',
                 url: '/class-teacher/student-allocation',
                 icon:  CoPresentTwoToneIcon,
                 breadcrumbs: false
               },
            
               {
                 id: 'student-homework-upload',
                 title: 'Homework',
                 type: 'item',
                 url: '/class-teacher/student-homework-upload',
                 icon: LibraryBooksTwoToneIcon,
                 breadcrumbs: false
               },
            
               {
                 id: 'circular-upload',
                 title: 'Circular',
                 type: 'item',
                 url: '/class-teacher/circular-upload',
                 icon: DraftsTwoToneIcon,
                 breadcrumbs: false
              },
             
              {
                id: 'upload-resource',
                title: 'Upload Resources',
                type: 'item',
                url: '/class-teacher/upload-resources',
                icon:   FolderCopyTwoToneIcon ,
                breadcrumbs: false
             },

             {
              id: 'upload-photo-gallery',
              title: 'Upload Photo Gallery',
              type: 'item',
              url: '/class-teacher/upload-photo-gallery',
              icon:   FolderCopyTwoToneIcon ,
              breadcrumbs: false
           },


            {
                id: 'teacher-inbox',
                title: 'Inbox',
                type: 'item',
                url: '/class-teacher/inbox',
                icon: MarkUnreadChatAltTwoToneIcon,
                breadcrumbs: false
            },
            
            {
                id: 'biometric-details-or-attendance-details',
                title: 'Biometric Details',
                type: 'item',
                url: '/class-teacher/biometric-details',
                icon:    FingerprintTwoToneIcon,
                breadcrumbs: false
            },

            {
              id: 'expenses-travel',
              title: 'Expense And Travel',
              type: 'item',
              url: '/class-teacher/expenses-travel',
              icon: MovingIcon ,
              breadcrumbs: false
          },

             {
                id: 'leave-application',
                title: 'Leave Application',
                type: 'item',
                url: '/class-teacher/leave-application',
                icon:  DocumentScannerTwoToneIcon,
                breadcrumbs: false
             },
              // {
              //    id: 'api-test',
              //    title: 'API Test',
              //    type: 'item',
              //    url: '/class-teacher/apitest',
              //    icon:   CameraAltTwoToneIcon,
              //    breadcrumbs: false
              //  },


    ]
  };
  
  export default ClassTeacherMenu;
  