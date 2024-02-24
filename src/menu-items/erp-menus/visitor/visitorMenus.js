// icons
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';



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
                     breadcrumbs: false
                   },
    

                   {
                     id: 'scheduled-visit',
                     title: 'Scheduled Visit',
                     type: 'item',
                     url: '/erp/visitor/visitor-management/scheduled-visit',
                     breadcrumbs: false
                   },
    
                ]
              },

              {
                id: 'dynamic-reports',
                title: 'Dynamic Reports',
                type: 'collapse',
                url: '/erp/visitor/dynamic-reports',
                icon: ArticleTwoToneIcon,
                children: [

                    {
                        id: 'visitor-details',
                        title: 'Visitor Details',
                        type: 'item',
                        url: '/erp/visitor/dynamic-reports/visitor-details',
                        breadcrumbs: false
                      },
    
                      
                  {
                     id: 'black-listed-visitor',
                     title: 'Black Listed Visitor',
                     type: 'item',
                     url: '/erp/visitor/dynamic-reports/black-listed-visitor',
                     breadcrumbs: false
                   },
            
                ]
              },

              {
                id: 'tools',
                title: 'Tools',
                type: 'collapse',
                url: '/erp/visitor/tools',
                icon: BuildTwoToneIcon,
                children: [

                    {
                        id: 'sms-delivery-report',
                        title: 'SMS Delivery Report',
                        type: 'item',
                        url: '/erp/visitor/tools/sms-delivery-report',
                        breadcrumbs: false
                      },       
                ]
              },
              
            //   {
            //      id: 'api-test',
            //      title: 'API Test',
            //      type: 'item',
            //      url: '/class-teacher/apitest',
            //      icon:   CameraAltTwoToneIcon,
            //      breadcrumbs: false
            //    },


    ]
  };
  
  export default VisitorMenu;
  