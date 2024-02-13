import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';



// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const ClassTeacherDashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'class-teacher-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: 'class-teacher/dashboard',
      icon:HomeTwoToneIcon ,
      breadcrumbs: false
    },
    {
      id: 'subject-teacher-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: 'subject-teacher/dashboard',
      icon:HomeTwoToneIcon ,
      breadcrumbs: false
    }

  ]
};

export default ClassTeacherDashboard ;
