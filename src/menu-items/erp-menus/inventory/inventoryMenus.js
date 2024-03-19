// icons

import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';




const InventoryMenu = {
    id: 'StudentInfoFeeMenu',
    type: 'group',
    children: [
  
       // Studnet master      
          // {
          //   id: 'student-master',
          //   title: 'Student',
          //   type: 'collapse',
          //   url: '/erp/student-info-fee/student-master',
          //   icon: PersonOutlineTwoToneIcon,
          //   children: [

          //     {
          //         id: 'enquiry',
          //         title: 'Enquiry',
          //         type: 'item',
          //         url: '/erp/student-info-fee/student-master/enquiry',
          //         breadcrumbs: false,
            
          //       },

          //   ]
          // },

        // report
        {
          id: 'reports',
          title: 'Reports',
          type: 'item',
          url: '/erp/inventory/reports',
          icon:  DescriptionTwoToneIcon ,
          breadcrumbs: false
        },


        // setting
          {
            id: 'setting',
            title: 'Settings',
            type: 'item',
            url: '/erp/inventory/settings',
            icon: SettingsTwoToneIcon,
            breadcrumbs: false
          },
         

    ]
  };
  
  export default InventoryMenu;
  