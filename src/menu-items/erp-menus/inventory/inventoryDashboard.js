import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';



// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const InventoryDashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'inventory-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: 'erp/inventory/dashboard',
      icon:HomeTwoToneIcon ,
      breadcrumbs: false
    },
   

  ]
};

export default InventoryDashboard ;
