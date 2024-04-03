// icons
// import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';



// ==================== colleagueTitles  ==================== 

//  Visitor

const  VisitorColleagueTitles  = [
  {title : 'Visitor Entry' , url : '/erp/visitor/visitor-management/visitor-entry'}, 
  {title : 'Scheduled Visit' , url : '/erp/visitor/visitor-management/scheduled-visit'}, 
];


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
                     colleagueTitle : VisitorColleagueTitles,
                   },
    

                   {
                     id: 'scheduled-visit',
                     title: 'Scheduled Visit',
                     type: 'item',
                     url: '/erp/visitor/visitor-management/scheduled-visit',
                     breadcrumbs: false,
                     colleagueTitle : VisitorColleagueTitles,
                   },
    
                ]
              },
       //  reports
              {
                id: 'reports',
                title: 'Reports',
                type:'item',
                url: '/erp/visitor/reports',
                icon: AdminPanelSettingsTwoToneIcon,
              },
              //  settings
              {
                id: 'settings',
                title: 'Settings',
                type:'item',
                url: '/erp/visitor/settings',
                icon: SettingsTwoToneIcon,
              },

              // {
              //   id: 'tools',
              //   title: 'Tools',
              //   type: 'collapse',
              //   url: '/erp/visitor/tools',
              //   icon: BuildTwoToneIcon,
              //   children: [

              //       {
              //           id: 'sms-delivery-report',
              //           title: 'SMS Delivery Report',
              //           type: 'item',
              //           url: '/erp/visitor/tools/sms-delivery-report',
              //           breadcrumbs: false,
              //           colleagueTitle : ToolsColleagueTitles,
              //         },       
              //   ]
              // },
              
      
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
  