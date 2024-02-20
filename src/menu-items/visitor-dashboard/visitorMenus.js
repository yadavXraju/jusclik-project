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
  