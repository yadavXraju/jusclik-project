// assets
// import { IconDashboard } from '@tabler/icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometer } from '@fortawesome/free-solid-svg-icons';

// const DashboardIcon = () => <FontAwesomeIcon icon={faTachometer} />;

// const icons = {
//   dashboardIcon : DashboardIcon,
// }
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

// constant
// const icons = { IconDashboard };

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
      url: '/dashboard/default',
      icon:HomeTwoToneIcon ,
        // icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
