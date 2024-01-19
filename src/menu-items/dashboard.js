import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';



// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: 'dashboard',
      icon:HomeTwoToneIcon ,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
