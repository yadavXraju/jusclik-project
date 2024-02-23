// icons
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';



const StudentInfoFeeMenu = {
    id: 'StudentInfoFeeMenu',
    type: 'group',
    children: [
  
        // Studnet information and fee  menus         
               {
                id: 'student-master',
                title: 'Student Master',
                type: 'collapse',
                url: '/erp/student-info-fee/student-master',
                icon: GroupsTwoToneIcon,
                children: [

                  {
                     id: 'enquiry',
                     title: 'Enquiry',
                     type: 'item',
                     url: '/erp/student-info-fee/student-master/enquiry',
                     breadcrumbs: false
                   },
    

                   {
                     id: 'registration',
                     title: 'Registration',
                     type: 'item',
                     url: '/erp/student-info-fee/student-master/registration',
                     breadcrumbs: false
                   },
    
                ]
              },



    ]
  };
  
  export default StudentInfoFeeMenu;
  