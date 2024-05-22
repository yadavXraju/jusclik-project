// Page Owner Abhishek
// Description : CRM Dashboard

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const CrmDashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'crm-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: 'erp/crm/dashboard',
      icon:HomeTwoToneIcon ,
      breadcrumbs: false
    },
   

  ]
};

export default CrmDashboard ;
