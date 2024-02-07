// new icon
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import AlarmTwoToneIcon from '@mui/icons-material/AlarmTwoTone';
import MarkUnreadChatAltTwoToneIcon from '@mui/icons-material/MarkUnreadChatAltTwoTone';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import FingerprintTwoToneIcon from '@mui/icons-material/FingerprintTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import CoPresentTwoToneIcon from '@mui/icons-material/CoPresentTwoTone';
import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';


const teacherMenu = {
    id: 'teacherMenu',
    type: 'group',
    children: [
  
        // class Teacher menus
  
            {
                id: 'attendance-entry',
                 title: 'Attendance',
                 type: 'item',
                 url: '/attendance-entry',
                 icon: CalendarMonthTwoToneIcon,
                 breadcrumbs: false
               },
            
               {
                 id: 'marks-entry-panel',
                 title: 'Marks',
                 type: 'item',
                 url: '/marks-entry-panel',
                 icon:  DriveFileRenameOutlineTwoToneIcon,
                 breadcrumbs: false
               },
            
               {
                 id: 'time-table-entry',
                 title: 'Timetable',
                 type: 'item',
                 url: '/time-table-entry',
                 icon: AlarmTwoToneIcon,
                 breadcrumbs: false
               },
            
               {
                 id: 'student-allocation',
                 title: 'Student Allocation',
                 type: 'item',
                 url: '/student-allocation',
                 icon:  CoPresentTwoToneIcon,
                 breadcrumbs: false
               },
            
               {
                 id: 'student-homework-upload',
                 title: 'Homework',
                 type: 'item',
                 url: '/student-homework-upload',
                 icon: LibraryBooksTwoToneIcon,
                 breadcrumbs: false
               },
            
               {
                 id: 'circular-upload',
                 title: 'Circular',
                 type: 'item',
                 url: '/circular-upload',
                 icon: DraftsTwoToneIcon,
                 breadcrumbs: false
              },
             
            {
                id: 'teacher-inbox',
                title: 'Inbox',
                type: 'item',
                url: '/inbox',
                icon: MarkUnreadChatAltTwoToneIcon,
                breadcrumbs: false
            },
            
            {
                id: 'biometric-details-or-attendance-details',
                title: 'Biometric Details or Attendance Details',
                type: 'item',
                url: '/biometric-details',
                icon:    FingerprintTwoToneIcon,
                breadcrumbs: false
            },
            
             {
                id: 'leave-application',
                title: 'Leave Application',
                type: 'item',
                url: '/leave-application',
                icon:  DocumentScannerTwoToneIcon,
                breadcrumbs: false
             },
              {
                 id: 'api-test',
                 title: 'API Test',
                 type: 'item',
                 url: '/apitest',
                 icon:   CameraAltTwoToneIcon,
                 breadcrumbs: false
               },
  
  
    ]
  };
  
  export default teacherMenu;
  