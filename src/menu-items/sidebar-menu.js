// assets
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// new icon
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import AlarmTwoToneIcon from '@mui/icons-material/AlarmTwoTone';
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import NoteAltTwoToneIcon from '@mui/icons-material/NoteAltTwoTone';
import MarkUnreadChatAltTwoToneIcon from '@mui/icons-material/MarkUnreadChatAltTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import FolderCopyTwoToneIcon from '@mui/icons-material/FolderCopyTwoTone';




// ==============================|| MENU ITEMS ||============================== //

const sidebarMenu = {
  id: 'sidebarMenu',
  // title: 'sidebarMenu',
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
        id: 'fee-school-fee',
        title: 'Fees/school Fee',
        type: 'item',
        url: '/fee-school-fee',
        icon: CreditCardTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'online-assessment',
        title: 'Online Assessment',
        type: 'item',
        url: '/online-assessment',
        icon:  NoteAltTwoToneIcon,
        breadcrumbs: false
      },

      {
        id: 'communication-messages',
        title: 'Communication / Messages',
        type: 'item',
        url: '/communication-messages',
        icon: MarkUnreadChatAltTwoToneIcon,
        breadcrumbs: false
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
      // {
      //   id: 'settings',
      //   title: 'Settings',
      //   type: 'item',
      //   url: '/settings',
      //   icon: SettingsTwoToneIcon,
      //   breadcrumbs: false
      // },
      {
        id: 'student-profile',
        title: 'Student Profile',
        type: 'item',
        url: '/student-profile',
        icon: PersonOutlineOutlinedIcon,
        breadcrumbs: false
      }

  ]
};

export default sidebarMenu;

