
// new icon
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import AlarmTwoToneIcon from '@mui/icons-material/AlarmTwoTone';
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import MarkUnreadChatAltTwoToneIcon from '@mui/icons-material/MarkUnreadChatAltTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import FolderCopyTwoToneIcon from '@mui/icons-material/FolderCopyTwoTone';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';


// setting userType static for  rendering teacher dashboard 

// const userType = 'Teacher' 


// ==============================||All MENU ITEMS Here ||============================== //

const sidebarMenu = {
  id: 'sidebarMenu',
  type: 'group',
  children: [
    {
      id: 'attendance',
      title: 'Attendance',
      type: 'item',
      url: '/attendance',
      icon:CalendarMonthTwoToneIcon,
      breadcrumbs: false
    },
    {
      id: 'assignments',
      title: 'Assignments',
      type: 'item',
      url: '/assignments',
      icon: LibraryBooksTwoToneIcon,
      breadcrumbs: false
    },
    {
      id: 'updates',
      title: 'Updates',
      type: 'item',
      url: '/updates',
      icon: DraftsTwoToneIcon,
      breadcrumbs: false
    },
    {
      id: 'timetable',
      title: 'Timetable',
      type: 'item',
      url: '/timetable',
      icon: AlarmTwoToneIcon,
      breadcrumbs: false
      
    },
    {
        id: 'performance',
        title: 'Performance',
        type: 'item',
        url: '/performance',
        icon:InsertChartTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'school-fee',
        title: 'School Fee',
        type: 'item',
        url: '/school-fee',
        icon: CreditCardTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'digital-learning',
        title: 'Digital Learning',
        type: 'collapse',
        url: '/digital-learning',
        icon: CategoryTwoToneIcon,
        children: [
          {
            id: 'digital-learning-online-assessment',
            title: 'Online Assesment',
            type: 'item',
            url: '/digital-learning/online-assessment',
            breadcrumbs: false
          },
          {
            id: 'digital-learning-online-class',
            title: 'Online Class',
            type: 'item',
            url: '/digital-learning/online-class',
            breadcrumbs: false
          }
        ]
      },



      {
        id: 'communication',
        title: 'Communication',
        type: 'collapse',
        url: '/communication',
        icon: MarkUnreadChatAltTwoToneIcon,
        children: [
          {
            id: 'communication-contact-list',
            title: 'Contact List',
            type: 'item',
            url: '/communication/contact-list',
            breadcrumbs: false
          },
          {
            id: 'communication-inbox',
            title: 'Inbox',
            type: 'item',
            url: '/communication/inbox',
            breadcrumbs: false
          }
        ]
      },



    {
        id: 'request',
        title: 'Request',
        type: 'collapse',
        icon: AssignmentIndTwoToneIcon,
        children: [
          {
            id: 'request-add-meeting',
            title: 'Add Meeting',
            type: 'item',
            url: '/request/add-meeting',
            breadcrumbs: false
          },
          {
            id: 'item-request-gate-pass',
            title: 'Item Request Gate Pass',
            type: 'item',
            url: '/request/item-request-gate-pass',
            breadcrumbs: false
          }
        ]
      },



      {
        id: 'resources',
        title: 'Resources',
        type: 'item',
        url: '/resources',
        icon:   FolderCopyTwoToneIcon ,
        breadcrumbs: false
      },

      {
        id: 'photo-gallery',
        title: 'Photo Gallery',
        type: 'item',
        url: '/photo-gallery',
        icon:   CameraAltTwoToneIcon,
        breadcrumbs: false
      },


      // class Teacher menus

      {
        id: 'attendance-entry',
        title: 'Attendance Entry',
        type: 'item',
        url: '/attendance-entry',
        icon: CalendarMonthTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'marks-entry-panel',
        title: 'Marks Entry Panel',
        type: 'item',
        url: '/marks-entry-panel',
        icon:   CameraAltTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'time-table-entry',
        title: 'Timetable Entry',
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
        icon:   CameraAltTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'student-homework-upload',
        title: 'Student Homework Upload',
        type: 'item',
        url: '/student-homework-upload',
        icon:   CameraAltTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'circular-upload',
        title: 'Circular Upload',
        type: 'item',
        url: '/circular-upload',
        icon:   CameraAltTwoToneIcon,
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
        icon:   CameraAltTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'leave-application',
        title: 'Leave Application',
        type: 'item',
        url: '/leave-application',
        icon:   CameraAltTwoToneIcon,
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

export default sidebarMenu;

