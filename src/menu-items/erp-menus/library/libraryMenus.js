// icons
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';





const LibraryMenu = {
    id: 'StudentInfoFeeMenu',
    type: 'group',
    children: [
  
       // Studnet master      
          {
            id: 'student-master',
            title: 'Student',
            type: 'collapse',
            url: '/erp/student-info-fee/student-master',
            icon: PersonOutlineTwoToneIcon,
            children: [

              {
                  id: 'enquiry',
                  title: 'Enquiry',
                  type: 'item',
                  url: '/erp/student-info-fee/student-master/enquiry',
                  breadcrumbs: false,
           
                },


                {
                  id: 'registration',
                  title: 'Registration',
                  type: 'item',
                  url: '/erp/student-info-fee/student-master/registration',
                  breadcrumbs: false,
     
                },



              {
                id: 'provisional',
                title: 'Provisional',
                type: 'item',
                url: '/erp/student-info-fee/student-master/provisional',
                breadcrumbs: false,
              },

              
              {
                id: 'admission',
                title: 'Admission',
                type: 'item',
                url: '/erp/student-info-fee/student-master/admission',
                breadcrumbs: false,
              },



              {
                id: 'edit-master-data-field',
                title: 'Edit Master Data Field',
                type: 'item',
                url: '/erp/student-info-fee/student-master/edit-master-data-field',
                breadcrumbs: false,
              },

                  
              {
                id: 'change-enrolment-status',
                title: 'Change Enrolment Status',
                type: 'item',
                url: '/erp/student-info-fee/student-master/change-enrolment-status',
                breadcrumbs: false,
              },

              {
                id: 'change-enrolment-number',
                title: 'Change Enrolment Number',
                type: 'item',
                url: '/erp/student-info-fee/student-master/change-enrolment-number',
                breadcrumbs: false,
              },

              {
                id: 'upload-documents',
                title: 'Upload Documents',
                type: 'item',
                url: '/erp/student-info-fee/student-master/upload-document',
                breadcrumbs: false,
    
              },


            ]
          },

          {
            id: 'setting',
            title: 'Setting',
            type: 'item',
            url: '/erp/student-info-fee/setting',
            icon: SettingsTwoToneIcon,
            breadcrumbs: false
          },
         

          
            // User and roles
            {
              id: 'user-and-roles',
              title: 'User & Roles',
              type: 'item',
              url: '/erp/student-info-fee/user-and-roles',
              icon: AdminPanelSettingsTwoToneIcon,
              breadcrumbs: false
            },
           

 

    ]
  };
  
  export default LibraryMenu;
  