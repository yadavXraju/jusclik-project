// Page Owner Abhishek
// Description : Hr Payroll Dashboard Menu


import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';


const HrPayRollMenu = {
    id: 'hr-payrollMenu',
    type: 'group',
    children: [
  // employee master
      {
        id: 'employee',
        title: 'Employee',
        type: 'collapse',
        url: '/erp/hr-payroll/employee',
        icon: BadgeTwoToneIcon,
        children: [
          {
            id: 'employee-master',
            title: 'Employee Master',
            type: 'item',
            url: '/erp/hr-payroll/employee/employee-master',
            breadcrumbs: false
          },

          {
            id: 'on-boarding',
            title: 'On Boarding',
            type: 'item',
            url: '/erp/hr-payroll/settings/employee-on-boarding',
            breadcrumbs: false
          },

          {
            id: 'exits',
            title: 'Exits',
            type: 'item',
            url: '/erp/hr-payroll/employee/exits',
            breadcrumbs: false
          },

          {
            id: 'expense-and-travel',
            title: 'Expense & Travel',
            type: 'item',
            url: '/erp/hr-payroll/employee/expense-and-travel',
            breadcrumbs: false
          },

          {
            id: 'document',
            title: 'Document',
            type: 'item',
            url: '/erp/hr-payroll/employee/document',
            breadcrumbs: false
          },

          {
            id: 'assets',
            title: 'Assets',
            type: 'item',
            url: '/erp/hr-payroll/employee/assets',
            breadcrumbs: false
          },
          
        ]
      },
      // attendence
      {
        id: 'attendance',
        title: 'Attendance',
        type: 'item',
        url: '/erp/hr-payroll/attendance',
        icon: CalendarMonthTwoToneIcon,
        breadcrumbs: false
      },

      // leave application
      {
        id: 'leave-application',
        title: 'Leave Application',
        type: 'item',
        url: '/erp/hr-payroll/leave-application',
        icon: DocumentScannerTwoToneIcon,
        breadcrumbs: false
      },
       // pay roll
        {
          id: 'pay-roll',
          title: 'Payroll',
          type: 'item',
          url: '/erp/hr-payroll/payroll',
          icon: PaymentTwoToneIcon,
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
