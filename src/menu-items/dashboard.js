// assets
import { IconDashboard } from '@tabler/icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometer } from '@fortawesome/free-solid-svg-icons';

// const DashboardIcon = () => <FontAwesomeIcon icon={faTachometer} />;

// const icons = {
//   dashboardIcon : DashboardIcon,
// }

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Home',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
        // icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
