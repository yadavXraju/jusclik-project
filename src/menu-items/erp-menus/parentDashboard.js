// Page Owner Abhishek
// Description : Parent Dashboard Menu Items

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

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
