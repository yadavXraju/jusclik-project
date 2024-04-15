import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const HrPayRollDashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'hr-payroll-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: 'erp/hr-payroll/dashboard',
      icon:HomeTwoToneIcon ,
      breadcrumbs: false
    },
   

  ]
};

export default HrPayRollDashboard ;
