// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

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
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'assignments',
      title: 'Assignments',
      type: 'item',
      url: '/assignments',
      icon:  AssignmentOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'updates',
      title: 'Updates',
      type: 'item',
      url: '/updates',
      icon: TipsAndUpdatesOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'timetable',
      title: 'Timetable',
      type: 'item',
      url: '/timetable',
      icon: TableViewOutlinedIcon,
      breadcrumbs: false
      
    },
    {
        id: 'performance',
        title: 'Performance',
        type: 'item',
        url: '/performance',
        icon: PollOutlinedIcon,
        breadcrumbs: false
      },

      {
        id: 'fee-school-fee',
        title: 'Fees/school Fee',
        type: 'item',
        url: '/fee-school-fee',
        icon: HistoryEduOutlinedIcon,
        breadcrumbs: false
      },

      {
        id: 'online-assessment',
        title: 'Online Assessment',
        type: 'item',
        url: '/online-assessment',
        icon:  AssessmentOutlinedIcon,
        breadcrumbs: false
      },

      {
        id: 'communication-messages',
        title: 'Communication / Messages',
        type: 'item',
        url: '/communication-messages',
        icon: ChatOutlinedIcon,
        breadcrumbs: false
      },

    {
        id: 'request',
        title: 'Request',
        type: 'collapse',
        icon: RateReviewOutlinedIcon,
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
        icon:  AccountTreeOutlinedIcon,
        breadcrumbs: false
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'item',
        url: '/settings',
        icon: SettingsOutlinedIcon,
        breadcrumbs: false
      }

  ]
};

export default sidebarMenu;

