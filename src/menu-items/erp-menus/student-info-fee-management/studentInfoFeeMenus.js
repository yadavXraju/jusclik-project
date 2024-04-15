// icons
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';

// ==================== colleagueTitles  ==================== 

// student master
const StudnetMasterColleagueTitles = [
 {title : 'Enquiry' , url : '/erp/student-info-fee/student-master/enquiry'}, 
 {title : 'Registration' , url : '/erp/student-info-fee/student-master/registration'}, 
 {title :  'Provisional' , url : '/erp/student-info-fee/student-master/provisional'}, 
 {title :  'Admission' , url : '/erp/student-info-fee/student-master/admission'}, 
];


// Fee receipt

const FeeReceiptColleagueTitles = [
  {title : 'Fee Transaction ' , url : '/erp/student-info-fee/fee-accounting/fee-transaction-entry'}, 
  {title :  'Head Wise Fee Adjustment ' , url : '/erp/student-info-fee/fee-accounting/head-wise-fee-adjustment-entry'}, 
  {title :  'Fee Clearance ' , url : '/erp/student-info-fee/fee-accounting/fee-clearance-entry'}, 
  {title :  'Security Deposit' , url : '/erp/student-info-fee/fee-accounting/security-deposit'}, 
];


// invoice modification

const InvoiceModificationColleagueTitles = [
  {title : 'Invoice Modification' , url : '/erp/student-info-fee/fee-accounting/invoice-modification'}, 
  {title :  'Student Fee Ledger ' , url : '/erp/student-info-fee/fee-accounting/student-fee-ledger-details'}, 
  {title :  'Optional Fee Heads ' , url : '/erp/student-info-fee/fee-accounting/optional-fee-heads-entry'}, 

];


// transport

const TransportColleagueTitles = [
  {title :  'Bus Details ' , url : '/erp/student-info-fee/transport/bus-details'}, 
  {title : 'Routes & Slabs' , url : '/erp/student-info-fee/transport/routes-slabs'}, 
  {title :  'Transport Allocation' , url : '/erp/student-info-fee/transport/allocation'}, 

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
              //   id: 'edit-master-data-field',
              //   title: 'Edit Master Data Field',
              //   type: 'item',
              //   url: '/erp/student-info-fee/student-master/edit-master-data-field',
              //   breadcrumbs: false,
              //   colleagueTitle : StudnetMasterColleagueTitles,
              // },

                  
              // {
              //   id: 'change-enrolment-status',
              //   title: 'Change Enrolment Status',
              //   type: 'item',
              //   url: '/erp/student-info-fee/student-master/change-enrolment-status',
              //   breadcrumbs: false,
              //   colleagueTitle : StudnetMasterColleagueTitles,
              // },

              // {
              //   id: 'change-enrolment-number',
              //   title: 'Change Enrolment Number',
              //   type: 'item',
              //   url: '/erp/student-info-fee/student-master/change-enrolment-number',
              //   breadcrumbs: false,
              //   colleagueTitle : StudnetMasterColleagueTitles,
              // },

              // {
              //   id: 'upload-documents',
              //   title: 'Upload Documents',
              //   type: 'item',
              //   url: '/erp/student-info-fee/student-master/upload-document',
              //   breadcrumbs: false,
              //   colleagueTitle : StudnetMasterColleagueTitles,
              // },


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
                  colleagueTitle : InvoiceModificationColleagueTitles,
                },

                {
                  id: 'student-fee-ledger',
                  title: ' Student Fee Ledger ',
                  type: 'item',
                  url: '/erp/student-info-fee/fee-accounting/student-fee-ledger-details',
                  breadcrumbs: false,
                  colleagueTitle : InvoiceModificationColleagueTitles,
                },

                
              {
                id: 'optional-fee-heads',
                title: 'Optional Fee Heads',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/optional-fee-heads-entry',
                breadcrumbs: false,
                colleagueTitle : InvoiceModificationColleagueTitles,
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
                colleagueTitle : FeeReceiptColleagueTitles,
              },



                  

              {
                id: 'head-wise-fee-adjustment',
                title: 'Head Wise Fee Adjustment ',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/head-wise-fee-adjustment-entry',
                breadcrumbs: false,
                colleagueTitle : FeeReceiptColleagueTitles,
              },

                  
              {
                id: 'fee-clearance',
                title: 'Fee Clearance ',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/fee-clearance-entry',
                breadcrumbs: false,
                colleagueTitle : FeeReceiptColleagueTitles,
              },

              {
                id: 'security-deposit',
                title: 'Security Deposit',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/security-deposit',
                breadcrumbs: false,
                colleagueTitle : FeeReceiptColleagueTitles,
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
                colleagueTitle : TransportColleagueTitles,
              },



              {
                id: 'routes-slabs',
                title: 'Routes & Slabs',
                type: 'item',
                url: '/erp/student-info-fee/transport/routes-slabs',
                breadcrumbs: false,
                colleagueTitle : TransportColleagueTitles,
              },


                {
                  id: 'transport-allocation',
                  title: 'Transport Allocation',
                  type: 'item',
                  url: '/erp/student-info-fee/transport/allocation',
                  breadcrumbs: false,
                  colleagueTitle : TransportColleagueTitles,
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
  