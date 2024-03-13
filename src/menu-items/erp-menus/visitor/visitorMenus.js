// icons
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';



// ==================== colleagueTitles  ==================== 

//  Visitor

const  VisitorColleagueTitles  = [
  {title : 'Visitor Entry' , url : '/erp/visitor/visitor-management/visitor-entry'}, 
  {title : 'Scheduled Visit' , url : '/erp/visitor/visitor-management/scheduled-visit'}, 
];


//  dynamic reports

const  DynamicReportColleagueTitles  = [
  {title : 'Visitor Details' , url : '/erp/visitor/dynamic-reports/visitor-details'}, 
  {title : 'Black Listed Visitor' , url : '/erp/visitor/dynamic-reports/black-listed-visitor'}, 
];


//  Tools

const  ToolsColleagueTitles  = [
  {title : 'SMS Delivery Report' , url : '/erp/visitor/tools/sms-delivery-report'}, 
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
                        breadcrumbs: false,
                        colleagueTitle : DynamicReportColleagueTitles,
                      },
    
                      
                  {
                     id: 'black-listed-visitor',
                     title: 'Black Listed Visitor',
                     type: 'item',
                     url: '/erp/visitor/dynamic-reports/black-listed-visitor',
                     breadcrumbs: false,
                     colleagueTitle : DynamicReportColleagueTitles,
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
                        breadcrumbs: false,
                        colleagueTitle : ToolsColleagueTitles,
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

           //  visitor registration

                  {
                  id: 'visitor-registration',
                  title: 'Visitor Registration',
                  type: 'item',
                  url: '/visitor-registration',
                  icon:  GroupsTwoToneIcon,
                  breadcrumbs: false
                },

    ]
  };

  
  
  export default VisitorMenu;
  