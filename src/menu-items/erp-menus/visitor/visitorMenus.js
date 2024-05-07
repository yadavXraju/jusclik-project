// icons
// import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

const VisitorMenu = {
    id: 'visitorMenu',
    type: 'group',
    children: [
  
        // visitor menus         
               {
                id: 'visitor',
                title: 'Visitor Management',
                type: 'collapse',
                url: '/erp/visitor/visitor-management',
                icon: GroupsTwoToneIcon,
                children: [

                  {
                     id: 'visitor-entry',
                     title: 'Visitor Entry',
                     type: 'item',
                     url: '/erp/visitor/visitor-management/visitor-entry',
                     breadcrumbs: false,
                   },
    

                   {
                     id: 'scheduled-visit',
                     title: 'Scheduled Visit',
                     type: 'item',
                     url: '/erp/visitor/visitor-management/scheduled-visit',
                     breadcrumbs: false,
                   },
                ]
              },
       //  reports
              {
                id: 'reports',
                title: 'Reports',
                type:'item',
                url: '/erp/visitor/reports',
                icon: DescriptionTwoToneIcon,
              },
              //  settings
              {
                id: 'settings',
                title: 'Settings',
                type:'item',
                url: '/erp/visitor/settings',
                icon: SettingsTwoToneIcon,
              },

      
           //  visitor registration

                {
                  id: 'registration-link',
                  title: 'Registration Link',
                  type: 'item',
                  url: '/registration-link',
                  icon:  GroupsTwoToneIcon,
                  breadcrumbs: false
                },

    ]
  };

  
  
  export default VisitorMenu;
  