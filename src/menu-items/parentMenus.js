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

// ==============================||All MENU ITEMS Here ||============================== //

const parentMenu = {
  id: 'parent-Menu',
  type: 'group',
  children: [
    {
      id: 'attendance',
      title: 'Attendance',
      type: 'item',
      url: '/parent/attendance',
      icon:CalendarMonthTwoToneIcon,
      breadcrumbs: false
    },
    {
      id: 'assignments',
      title: 'Assignments',
      type: 'item',
      url: '/parent/assignments',
      icon: LibraryBooksTwoToneIcon,
      breadcrumbs: false
    },
    {
      id: 'updates',
      title: 'Updates',
      type: 'item',
      url: '/parent/updates',
      icon: DraftsTwoToneIcon,
      breadcrumbs: false
    },
    {
      id: 'timetable',
      title: 'Timetable',
      type: 'item',
      url: '/parent/timetable',
      icon: AlarmTwoToneIcon,
      breadcrumbs: false
      
    },
    {
        id: 'performance',
        title: 'Performance',
        type: 'item',
        url: '/parent/performance',
        icon:InsertChartTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'school-fee',
        title: 'School Fee',
        type: 'item',
        url: '/parent/school-fee',
        icon: CreditCardTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'digital-learning',
        title: 'Digital Learning',
        type: 'collapse',
        url: '/parent/digital-learning',
        icon: CategoryTwoToneIcon,
        children: [
          {
            id: 'digital-learning-online-assessment',
            title: 'Online Assesment',
            type: 'item',
            url: '/parent/digital-learning/online-assessment',
            breadcrumbs: false,
          },
          {
            id: 'digital-learning-online-class',
            title: 'Online Class',
            type: 'item',
            url: '/parent/digital-learning/online-class',
            breadcrumbs: false,
          }
        ]
      },

      {
        id: 'communication',
        title: 'Communication',
        type: 'collapse',
        url: '/parent/communication',
        icon: MarkUnreadChatAltTwoToneIcon,
        children: [
          {
            id: 'communication-contact-list',
            title: 'Contact List',
            type: 'item',
            url: '/parent/communication/contact-list',
            breadcrumbs: false, 
          },
          {
            id: 'communication-inbox',
            title: 'Inbox',
            type: 'item',
            url: '/parent/communication/inbox',
            breadcrumbs: false,
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
            url: '/parent/request/add-meeting',
            breadcrumbs: false,
          },
          {
            id: 'item-request-gate-pass',
            title: 'Item Request Gate Pass',
            type: 'item',
            url: '/parent/request/item-request-gate-pass',
            breadcrumbs: false,
          }
        ]
      },
      {
        id: 'resources',
        title: 'Resources',
        type: 'item',
        url: '/parent/resources',
        icon:   FolderCopyTwoToneIcon ,
        breadcrumbs: false
      },

      {
        id: 'photo-gallery',
        title: 'Photo Gallery',
        type: 'item',
        url: '/parent/photo-gallery',
        icon:   CameraAltTwoToneIcon,
        breadcrumbs: false
      },
  ]
};

export default parentMenu;
