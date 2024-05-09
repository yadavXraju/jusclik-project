import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const parentDashboard = {
  id: 'parent-dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: 'parent/dashboard',
      icon:HomeTwoToneIcon ,
      breadcrumbs: false
    },

  ]
};

export default  parentDashboard;
