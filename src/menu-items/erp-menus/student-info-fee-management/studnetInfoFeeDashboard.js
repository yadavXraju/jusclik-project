import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';



// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const StudentInfoFeeDashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'student-info-fee-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: 'erp/student-info-fee/dashboard',
      icon:HomeTwoToneIcon ,
      breadcrumbs: false
    },
   

  ]
};

export default StudentInfoFeeDashboard ;
