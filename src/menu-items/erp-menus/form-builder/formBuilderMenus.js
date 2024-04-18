// icons
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

const FormBuilderMenus = {
    id: 'forms',
    type: 'group',
    children: [
  // employee master
      {
        id: 'forms',
        title: 'Builder',
        type: 'item',
        url: '/erp/forms',
        icon: HandymanTwoToneIcon,
        breadcrumbs: false
      },

      //  approval
      {
        id: 'approval',
        title: 'Approval',
        type: 'item',
        url: '/erp/forms/approval',
        icon: VerifiedUserTwoToneIcon,
        breadcrumbs: false
      },

        // report
        {
          id: 'reports',
          title: 'Reports',
          type: 'item',
          url: '/erp/forms/reports',
          icon:  DescriptionTwoToneIcon ,
          breadcrumbs: false
        },

        // setting
          {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/erp/forms/settings',
            icon: SettingsTwoToneIcon,
            breadcrumbs: false
          },

    ]


  };
  
  export default FormBuilderMenus;
  