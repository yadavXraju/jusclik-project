// icons

import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';




const InventoryMenu = {
    id: 'StudentInfoFeeMenu',
    type: 'group',
    children: [
        // report
        {
          id: 'reports',
          title: 'Reports',
          type: 'item',
          url: '/erp/inventory/reports',
          icon:  DescriptionTwoToneIcon ,
          breadcrumbs: false
        },


        // setting
          {
            id: 'setting',
            title: 'Settings',
            type: 'item',
            url: '/erp/inventory/settings',
            icon: SettingsTwoToneIcon,
            breadcrumbs: false
          },
         

    ]
  };
  
  export default InventoryMenu;
  