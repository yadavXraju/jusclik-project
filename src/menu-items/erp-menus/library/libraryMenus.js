// icons
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';





const LibraryMenu = {
    id: 'library',
    type: 'group',
    children: [
  
       // Studnet master      
          {
            id: 'manage-library',
            title: 'Manage Library',
            type:'item',
            url: '/erp/library/manage-library',
            icon: PersonOutlineTwoToneIcon,

          },

          {
            id: 'manage-priodicaly',
            title: 'Manage Priodicaly',
            type: 'item',
            url: '/erp/library/manage-priodicaly',
            icon: SettingsTwoToneIcon,
            breadcrumbs: false
          },
         

          
            // User and roles
            {
              id: 'reports',
              title: 'Reports',
              type: 'item',
              url: '/erp/library/reports',
              icon: AdminPanelSettingsTwoToneIcon,
              breadcrumbs: false
            },
           
            {
              id: 'settings',
              title: 'Settings',
              type: 'item',
              url: '/erp/library/Settings',
              icon: SettingsTwoToneIcon,
              breadcrumbs: false
            },
           
 

    ]
  };
  
  export default LibraryMenu;
  