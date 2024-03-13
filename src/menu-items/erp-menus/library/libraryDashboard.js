import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';



// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const LibraryDashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'library-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: 'erp/library/dashboard',
      icon:HomeTwoToneIcon ,
      breadcrumbs: false
    },
   

  ]
};

export default LibraryDashboard ;
