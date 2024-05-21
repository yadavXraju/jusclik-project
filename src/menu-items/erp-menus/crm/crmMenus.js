// Page Owner Abhishek
// Description : CRM Menus

import PermContactCalendarTwoToneIcon from '@mui/icons-material/PermContactCalendarTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

const CrmMenu = {
    id: 'crm-menu',
    type: 'group',
    children: [
      {
        id: 'contact',
        title: 'Contact',
        type: 'item',
        url: '/erp/crm/contact',
        icon: PermContactCalendarTwoToneIcon,
        breadcrumbs: false
      },
      // attendence
      {
        id: 'pipeline',
        title: 'Pipline',
        type: 'item',
        url: '/erp/crm/pipeline',
        icon: AccountTreeTwoToneIcon ,
        breadcrumbs: false
      },
        // report
        {
          id: 'reports',
          title: 'Reports',
          type: 'item',
          url: '/erp/crm/reports',
          icon:  DescriptionTwoToneIcon ,
          breadcrumbs: false
        },


        // setting
          {
            id: 'setting',
            title: 'Settings',
            type: 'item',
            url: '/erp/crm/settings',
            icon: SettingsTwoToneIcon,
            breadcrumbs: false
          },
         

    ]


  };
  
  export default CrmMenu;
  