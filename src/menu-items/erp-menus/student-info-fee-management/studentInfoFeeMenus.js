// icons
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';

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

              //   {
              //   id: 'registration-data',
              //   title: 'Registration Data',
              //   type: 'item',
              //   url: '/erp/student-info-fee/student-master/registration-data',
              //   breadcrumbs: false,
              //   colleagueTitle : StudnetMasterColleagueTitles,
              // },

              // {
              //   id: 'admission-process',
              //   title: 'Admission Process',
              //   type: 'item',
              //   url: '/erp/student-info-fee/student-master/admission-process',
              //   breadcrumbs: false,
              //   colleagueTitle : StudnetMasterColleagueTitles,
              // },


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

                                
              // {
              //   id: 'custom-data',
              //   title: 'Custom Data',
              //   type: 'item',
              //   url: '/erp/student-info-fee/student-master/custom-data',
              //   breadcrumbs: false,
              //   colleagueTitle : StudnetMasterColleagueTitles,
              // },

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


          // Fee invoice
          {
            id: 'invoice',
            title: 'Invoice',
            type: 'collapse',
            url: '/erp/student-info-fee/fee-invoice', //change
            icon: ReceiptLongTwoToneIcon,
            children: [

                {
                  id: 'invoice-modification',
                  title: 'Invoice Modification',
                  type: 'item',
                  url: '/erp/student-info-fee/fee-accounting/invoice-modification',
                  breadcrumbs: false,
                  colleagueTitle : FeeAccountingColleagueTitles,
                },

                {
                  id: 'student-fee-ledger',
                  title: ' Student Fee Ledger ',
                  type: 'item',
                  url: '/erp/student-info-fee/fee-accounting/student-fee-ledger-details',
                  breadcrumbs: false,
                  colleagueTitle : FeeAccountingColleagueTitles,
                },

                
              {
                id: 'optional-fee-heads',
                title: 'Optional Fee Heads',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/optional-fee-heads-entry',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
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
                url: '/erp/student-info-fee/fee-accounting/fee-transaction-entry',  //change
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },



                  

              {
                id: 'head-wise-fee-adjustment',
                title: 'Head Wise Fee Adjustment ',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/head-wise-fee-adjustment-entry',
                breadcrumbs: false,
                colleagueTitle : FeeAccountingColleagueTitles,
              },

                  
              {
                id: 'fee-clearance',
                title: 'Fee Clearance ',
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
            type: 'item',
            url: '/erp/student-info-fee/transport',
            icon: DirectionsBusTwoToneIcon,
            breadcrumbs: false
          },

          {
            id: 'reports',
            title: 'Reports',
            type: 'item',
            url: '/erp/student-info-fee/reports',
            icon: DescriptionTwoToneIcon,
            breadcrumbs: false
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


          //  setting
          {
            id: 'setting',
            title: 'Setting',
            type: 'item',
            url: '/erp/student-info-fee/setting',
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
  