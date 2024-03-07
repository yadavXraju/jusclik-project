// icons
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';

// ==================== colleagueTitles  ==================== 

// student master
const StudnetMasterColleagueTitles = [
 {title : 'Enquiry' , url : '/erp/student-info-fee/student-master/enquiry'}, 
 {title : 'Registration' , url : '/erp/student-info-fee/student-master/registration'}, 
 {title : 'Registration Data' , url : '/erp/student-info-fee/student-master/registration-data'}, 
 {title : 'Admission Process' , url : '/erp/student-info-fee/student-master/admission-process'}, 
 {title :  'Provisional' , url : '/erp/student-info-fee/student-master/provisional'}, 
 {title :  'Admission' , url : '/erp/student-info-fee/student-master/admission'}, 
 {title :  'Custom Data' , url : '/erp/student-info-fee/student-master/custom-data'}, 
 {title :  'Edit Master Data Field' , url : '/erp/student-info-fee/student-master/edit-master-data-field'}, 
 {title :  'Change Enrolment Number' , url : '/erp/student-info-fee/student-master/change-enrolment-number'}, 
 {title :  'Change Enrolment Status' , url : '/erp/student-info-fee/student-master/change-enrolment-status'}, 
 {title :   'Upload Documents' , url : '/erp/student-info-fee/student-master/upload-document'}, 
];


// Fee Accounting

const FeeAccountingColleagueTitles = [
  {title : 'Invoice Creation' , url : '/erp/student-info-fee/fee-accounting/invoice-creation'}, 
  {title : 'Invoice Modification' , url : '/erp/student-info-fee/fee-accounting/invoice-modification'}, 
  {title : 'Fee Transaction Entry' , url : '/erp/student-info-fee/fee-accounting/fee-transaction-entry'}, 
  {title : 'Transport Details Entry' , url : '/erp/student-info-fee/fee-accounting/transport-details-entry'}, 
  {title :  'Optional Fee Heads Entry' , url : '/erp/student-info-fee/fee-accounting/optional-fee-heads-entry'}, 
  {title :  'Dishonoured Cheque Entry' , url : '/erp/student-info-fee/fee-accounting/dishonoured-cheque-entry'}, 
  {title :  'Student Fee Ledger Details' , url : '/erp/student-info-fee/fee-accounting/student-fee-ledger-details'}, 
  {title :  'Head Wise Fee Adjustment Entry' , url : '/erp/student-info-fee/fee-accounting/head-wise-fee-adjustment-entry'}, 
  {title :  'Fee Clearance Entry' , url : '/erp/student-info-fee/fee-accounting/fee-clearance-entry'}, 
  {title :  'Security Deposit' , url : '/erp/student-info-fee/fee-accounting/security-deposit'}, 
  {title :   'Transfer Fee Entry' , url : '/erp/student-info-fee/fee-accounting/transfer-fee-entry'}, 
];


//  setting
const  SetUpColleagueTitles  = [
  {title : 'Setting' , url : '/erp/student-info-fee/settings/setting'}, 
  {title : 'System Data' , url : '/erp/student-info-fee/settings/system-data'}, 
];


//  tools
const  ToolsColleagueTitles  = [
  {title : 'GPS Bus Tracking' , url : '/erp/student-info-fee/tools/gps-bus-tracking'}, 
  {title : 'Whatsapp Conversations' , url : '/erp/student-info-fee/tools/whatsapp-conversations'}, 
  {title : 'Whatsapp Delivery Report' , url : '/erp/student-info-fee/tools/whatsapp-delivery-report'}, 
  {title : 'Whatsapp Excel Sheet' , url : '/erp/student-info-fee/tools/whatsapp-excel-sheet'}, 
];



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
                  colleagueTitle : StudnetMasterColleagueTitles,
                },


                {
                  id: 'registration',
                  title: 'Registration',
                  type: 'item',
                  url: '/erp/student-info-fee/student-master/registration',
                  breadcrumbs: false,
                  colleagueTitle : StudnetMasterColleagueTitles,
                },

                {
                id: 'registration-data',
                title: 'Registration Data',
                type: 'item',
                url: '/erp/student-info-fee/student-master/registration-data',
                breadcrumbs: false,
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              {
                id: 'admission-process',
                title: 'Admission Process',
                type: 'item',
                url: '/erp/student-info-fee/student-master/admission-process',
                breadcrumbs: false,
                colleagueTitle : StudnetMasterColleagueTitles,
              },


              {
                id: 'provisional',
                title: 'Provisional',
                type: 'item',
                url: '/erp/student-info-fee/student-master/provisional',
                breadcrumbs: false,
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              
              {
                id: 'admission',
                title: 'Admission',
                type: 'item',
                url: '/erp/student-info-fee/student-master/admission',
                breadcrumbs: false,
                colleagueTitle : StudnetMasterColleagueTitles,
              },

                                
              {
                id: 'custom-data',
                title: 'Custom Data',
                type: 'item',
                url: '/erp/student-info-fee/student-master/custom-data',
                breadcrumbs: false,
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              {
                id: 'edit-master-data-field',
                title: 'Edit Master Data Field',
                type: 'item',
                url: '/erp/student-info-fee/student-master/edit-master-data-field',
                breadcrumbs: false,
                colleagueTitle : StudnetMasterColleagueTitles,
              },

                  
              {
                id: 'change-enrolment-status',
                title: 'Change Enrolment Status',
                type: 'item',
                url: '/erp/student-info-fee/student-master/change-enrolment-status',
                breadcrumbs: false,
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              {
                id: 'change-enrolment-number',
                title: 'Change Enrolment Number',
                type: 'item',
                url: '/erp/student-info-fee/student-master/change-enrolment-number',
                breadcrumbs: false,
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              {
                id: 'upload-documents',
                title: 'Upload Documents',
                type: 'item',
                url: '/erp/student-info-fee/student-master/upload-document',
                breadcrumbs: false,
                colleagueTitle : StudnetMasterColleagueTitles,
              },


            ]
          },

        // Fee accounting
          {
            id: 'fee-accounting',
            title: 'Fee ',
            type: 'collapse',
            url: '/erp/student-info-fee/fee-accounting',
            icon: CreditCardTwoToneIcon,
            children: [

              {
                  id: 'invoice-creation',
                  title: 'Invoice Creation',
                  type: 'item',
                  url: '/erp/student-info-fee/fee-accounting/invoice-creation',
                  breadcrumbs: false,
                  colleagueTitle : FeeAccountingColleagueTitles,
                },


                {
                  id: 'invoice-modification',
                  title: 'Invoice Modification',
                  type: 'item',
                  url: '/erp/student-info-fee/fee-accounting/invoice-modification',
                  breadcrumbs: false,
                  colleagueTitle : FeeAccountingColleagueTitles,
                },

                {
                id: 'fee-transaction-entry',
                title: 'Fee Transaction Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/fee-transaction-entry',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },

              {
                id: 'transport-details-entry',
                title: 'Transport Details Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/transport-details-entry',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },


              {
                id: 'optional-fee-heads-entry',
                title: 'Optional Fee Heads Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/optional-fee-heads-entry',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },

              
              {
                id: 'dishonoured-cheque-entry',
                title: 'Dishonoured Cheque Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/dishonoured-cheque-entry',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },

                                
              {
                id: 'student-fee-ledger-details',
                title: ' Student Fee Ledger Details',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/student-fee-ledger-details',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },

              {
                id: 'head-wise-fee-adjustment-entry',
                title: 'Head Wise Fee Adjustment Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/head-wise-fee-adjustment-entry',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },

                  
              {
                id: 'fee-clearance-entry',
                title: 'Fee Clearance Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/fee-clearance-entry',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },

              {
                id: 'security-deposit',
                title: 'Security Deposit',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/security-deposit',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },

              {
                id: 'transfer-fee-entry',
                title: 'Transfer Fee Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/transfer-fee-entry',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },


            ]
          },

          
          // hostel
          {
            id: 'hostel' ,
            title: 'Hostel',
            type: 'collapse',
            url: '/erp/student-info-fee/setup',
            icon: MapsHomeWorkTwoToneIcon,
            children: [

              {
                  id: 'dorm -entry',
                  title: ' Dorm Entrya',
                  type: 'item',
                  url: '/erp/student-info-fee/hostel/dorm -entry',
                  breadcrumbs: false,
                  // colleagueTitle : SetUpColleagueTitles,
                },


            ]
          },

           // reports

          {
            id: 'reports' ,
            title: 'Reports',
            type: 'collapse',
            url: '/erp/student-info-fee/reports',
            icon: DescriptionTwoToneIcon,
            children: [

              {
                  id: 'invoice-printing',
                  title: 'Invoice Printing',
                  type: 'item',
                  url: '/erp/student-info-fee/reports/invoice-printing',
                  breadcrumbs: false,
                  // colleagueTitle : SetUpColleagueTitles,
                },


            ]
          },

       // search

          {
            id: 'search' ,
            title: 'Search',
            type: 'collapse',
            url: '/erp/student-info-fee/search',
            icon: FindInPageTwoToneIcon,
            children: [

              {
                  id: 'enquiry',
                  title: 'Enquiry',
                  type: 'item',
                  url: '/erp/student-info-fee/search/enquiry',
                  breadcrumbs: false,
                  // colleagueTitle : SetUpColleagueTitles,
                },


            ]
          },

          // tools
          {
            id: 'tools' ,
            title: 'Tools',
            type: 'collapse',
            url: '/erp/student-info-fee/tools',
            icon: BuildTwoToneIcon,
            children: [

              {
                  id: 'gps-bus-tracking',
                  title: 'GPS Bus Tracking',
                  type: 'item',
                  url: '/erp/student-info-fee/tools/gps-bus-tracking',
                  breadcrumbs: false,
                  colleagueTitle : ToolsColleagueTitles,
                },

                {
                id: 'whatsapp-conversations',
                title: 'Whatsapp Conversations',
                type: 'item',
                url: '/erp/student-info-fee/tools/whatsapp-conversations',
                breadcrumbs: false,
                colleagueTitle : ToolsColleagueTitles,
              },


              {
                id: 'whatsapp-delivery-report',
                title: 'Whatsapp Delivery Report',
                type: 'item',
                url: '/erp/student-info-fee/tools/whatsapp-delivery-report',
                breadcrumbs: false,
                colleagueTitle : ToolsColleagueTitles,
              },


              {
                id: 'whatsapp-excel-sheet',
                title: 'Whatsapp Excel Sheet',
                type: 'item',
                url: '/erp/student-info-fee/tools/whatsapp-excel-sheet',
                breadcrumbs: false,
                colleagueTitle : ToolsColleagueTitles,
              },



            ]
          },


     // set up
          {
            id: 'setting' ,
            title: 'Settings',
            type: 'collapse',
            url: '/erp/student-info-fee/settings',
            icon: SettingsTwoToneIcon,
            children: [

              {
                id: 'setting',
                title: 'Setting',
                type: 'item',
                url: '/erp/student-info-fee/settings/setting',
                breadcrumbs: false,
                colleagueTitle : SetUpColleagueTitles,
              },


              {
                id: 'system-data',
                title: 'System Data',
                type: 'item',
                url: '/erp/student-info-fee/settings/system-data',
                breadcrumbs: false,
                colleagueTitle : SetUpColleagueTitles,
              },



            ]
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
  