// new icon
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';



const VisitorMenu = {
    id: 'visitorMenu',
    type: 'group',
    children: [
  
        // visitor menus         
               {
                id: 'visitor',
                title: 'Visitor Management',
                type: 'collapse',
                url: '/visitor/visitor-management',
                icon: CalendarMonthTwoToneIcon,
                children: [

                  {
                     id: 'visitor-entry',
                     title: 'Visitor Entry',
                     type: 'item',
                     url: '/visitor/visitor-management/visitor-entry',
                     breadcrumbs: false
                   },
    

                   {
                     id: 'scheduled-visit',
                     title: 'Scheduled Visit',
                     type: 'item',
                     url: '/visitor/visitor-management/scheduled-visit',
                     breadcrumbs: false
                   },
    
                ]
              },

              {
                id: 'dynamic-reports',
                title: 'Dynamic Reports',
                type: 'collapse',
                url: '/visitor/dynamic-reports',
                icon: CalendarMonthTwoToneIcon,
                children: [

                    {
                        id: 'visitor-details',
                        title: 'Visitor Details',
                        type: 'item',
                        url: '/visitor/dynamic-reports/visitor-details',
                        breadcrumbs: false
                      },
    
                      
                  {
                     id: 'black-listed-visitor',
                     title: 'Black Listed Visitor',
                     type: 'item',
                     url: '/visitor/dynamic-reports/black-listed-visitor',
                     breadcrumbs: false
                   },
            
                ]
              },

              {
                id: 'tools',
                title: 'Tools',
                type: 'collapse',
                url: '/visitor/tools',
                icon: CalendarMonthTwoToneIcon,
                children: [

                    {
                        id: 'sms-delivery-report',
                        title: 'SMS Delivery Report',
                        type: 'item',
                        url: '/visitor/tools/sms-delivery-report',
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
  