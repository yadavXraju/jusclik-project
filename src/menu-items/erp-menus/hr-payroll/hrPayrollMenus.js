// icons

import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';


const HrPayRollMenu = {
    id: 'hr-payrollMenu',
    type: 'group',
    children: [
  // employee master
      {
        id: 'employee-master',
        title: 'Employee Master',
        type: 'item',
        url: '/erp/hr-payroll/employee-master',
        icon: BadgeOutlinedIcon,
        breadcrumbs: false
      },
      // salary
      {
        id: 'salary',
        title: 'Salary',
        type: 'item',
        url: '/erp/hr-payroll/salary',
        icon: SettingsTwoToneIcon,
        breadcrumbs: false
      },
      // attendence
      {
        id: 'attendence',
        title: 'Attendence',
        type: 'item',
        url: '/erp/hr-payroll/attendence',
        icon: CalendarMonthTwoToneIcon,
        breadcrumbs: false
      },
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
  