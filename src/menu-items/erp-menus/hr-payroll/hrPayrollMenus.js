// icons

import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

const HrPayRollMenu = {
    id: 'hr-payrollMenu',
    type: 'group',
    children: [
  
        // report
        {
          id: 'reports',
          title: 'Reports',
          type: 'item',
          url: '/erp/hr-payroll/reports',
          icon:  DescriptionTwoToneIcon ,
          breadcrumbs: false
        },


        // setting
          {
            id: 'setting',
            title: 'Settings',
            type: 'item',
            url: '/erp/hr-payroll/settings',
            icon: SettingsTwoToneIcon,
            breadcrumbs: false
          },
         

    ]
  };
  
  export default HrPayRollMenu;
  