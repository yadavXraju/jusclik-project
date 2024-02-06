import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';



// ==============================|| DASHBOARD MENU ITEMS ||============================== //
let userType = ''; // or 'teacher', or however you determine it

// Define parent dashboard menu
const parentDashboard = [
  {
    id: 'default',
    title: 'Dashboard',
    type: 'item',
    url: 'dashboard',
    icon: HomeTwoToneIcon,
    breadcrumbs: false
  },
];

// Define teacher dashboard menu
const teacherDashboard = [

  {
    id: 'class-teacher-dashboard',
    title: 'Dashboard',
    type: 'item',
    url: 'class-teacher-dashboard',
    icon: HomeTwoToneIcon,
    breadcrumbs: false
  }
];

// Depending on userType, select the appropriate dashboard menu
const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: userType === 'parent' ? parentDashboard : teacherDashboard
};

export default dashboard;