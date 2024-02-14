import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';



// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const SubjectTeacherDashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
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

export default SubjectTeacherDashboard ;
