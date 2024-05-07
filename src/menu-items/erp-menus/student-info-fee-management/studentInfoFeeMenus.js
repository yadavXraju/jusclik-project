// icons
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';

const StudentInfoFeeMenu = {
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

            ]
          },


          // Fee invoice
          {
            id: 'invoice',
            title: 'Invoice',
            type: 'collapse',
            url: '/erp/student-info-fee/fee-invoice', 
            icon: ReceiptLongTwoToneIcon,
            children: [

                {
                  id: 'invoice-modification',
                  title: 'Invoice Modification',
                  type: 'item',
                  url: '/erp/student-info-fee/fee-accounting/invoice-modification',
                  breadcrumbs: false,
                },

                {
                  id: 'student-fee-ledger',
                  title: ' Student Fee Ledger ',
                  type: 'item',
                  url: '/erp/student-info-fee/fee-accounting/student-fee-ledger-details',
                  breadcrumbs: false,
                },

                
              {
                id: 'optional-fee-heads',
                title: 'Optional Fee Heads',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/optional-fee-heads-entry',
                breadcrumbs: false,
              },   


            ]
          },

          // receipt

          {
            id: 'fee-receipt',
            title: 'Fee Receipt ',
            type: 'collapse',
            url: '/erp/student-info-fee/fee-receipt',
            icon: CreditCardTwoToneIcon,
            children: [

              {
                id: 'fee-transaction',
                title: 'Fee Transaction ',
                 type: 'item',
                url: '/erp/student-info-fee/fee-accounting/fee-transaction-entry', 
                breadcrumbs: false,
              },                

              {
                id: 'head-wise-fee-adjustment',
                title: 'Head Wise Fee Adjustment ',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/head-wise-fee-adjustment-entry',
                breadcrumbs: false,
              },

                  
              {
                id: 'fee-clearance',
                title: 'Fee Clearance ',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/fee-clearance-entry',
                breadcrumbs: false,
              },

              {
                id: 'security-deposit',
                title: 'Security Deposit',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/security-deposit',
                breadcrumbs: false,
              },
              ]
            },

          // hostel
          {
            id: 'hostel' ,
            title: 'Hostel',
            type: 'collapse',
            url: '/erp/student-info-fee/hostel',
            icon: MapsHomeWorkTwoToneIcon,
            children: [

              {
                  id: 'dorm-entry',
                  title: ' Dorm Entry',
                  type: 'item',
                  url: '/erp/student-info-fee/hostel/dorm-entry',
                  breadcrumbs: false,
                  // colleagueTitle : SetUpColleagueTitles,
                },
            ]
          },

          // transport

          {
            id: 'transport',
            title: 'Transport',
            type:  'collapse',
            url: '/erp/student-info-fee/transport',
            icon: DirectionsBusTwoToneIcon,
            children : [

              {
                id: 'Bus Details',
                title: 'Bus Details',
                type: 'item',
                url: '/erp/student-info-fee/transport/bus-details',
                breadcrumbs: false,
              },



              {
                id: 'routes-slabs',
                title: 'Routes & Slabs',
                type: 'item',
                url: '/erp/student-info-fee/transport/routes-slabs',
                breadcrumbs: false,
              },


                {
                  id: 'transport-allocation',
                  title: 'Transport Allocation',
                  type: 'item',
                  url: '/erp/student-info-fee/transport/allocation',
                  breadcrumbs: false,
                },

             ]
          },

          // reports
          {
            id: 'reports',
            title: 'Reports',
            type: 'item',
            url: '/erp/student-info-fee/reports',
            icon: DescriptionTwoToneIcon,
            breadcrumbs: false
          },
         

          //  setting
          {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/erp/student-info-fee/settings',
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
  
  export default StudentInfoFeeMenu;
  