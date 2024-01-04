// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

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
  title: 'sidebarMenu',
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
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'updates',
      title: 'Updates',
      type: 'item',
      url: '/updates',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'timetable',
      title: 'Timetable',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Tabler Icons',
          type: 'item',
          url: '/icons/tabler-icons',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Material Icons',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        }
      ]
    },
    {
        id: 'performance',
        title: 'Performance',
        type: 'item',
        url: '/performance',
        icon: icons.IconShadow,
        breadcrumbs: false
      },

      {
        id: 'fee-school-fee',
        title: 'Fees/school Fee',
        type: 'item',
        url: '/fee-school-fee',
        icon: icons.IconShadow,
        breadcrumbs: false
      },

      {
        id: 'performance',
        title: 'Online Assessment',
        type: 'item',
        url: '/online-assessment',
        icon: icons.IconShadow,
        breadcrumbs: false
      },

      {
        id: 'communication-messages',
        title: 'Communication / Messages',
        type: 'item',
        url: '/communication-messages',
        icon: icons.IconShadow,
        breadcrumbs: false
      },

    {
        id: 'request',
        title: 'Request',
        type: 'collapse',
        icon: icons.IconWindmill,
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
            // external: true,
            // target: '_blank',
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
        icon: icons.IconShadow,
        breadcrumbs: false
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'item',
        url: '/settings',
        icon: icons.IconShadow,
        breadcrumbs: false
      }

  ]
};

export default sidebarMenu;

