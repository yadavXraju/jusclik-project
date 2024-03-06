// icons
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import RecentActorsTwoToneIcon from '@mui/icons-material/RecentActorsTwoTone';
import PhonelinkSetupTwoToneIcon from '@mui/icons-material/PhonelinkSetupTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import ConfirmationNumberTwoToneIcon from '@mui/icons-material/ConfirmationNumberTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';

// colleagueTitles

const StudnetMasterColleagueTitles = {
  0: 'Enquiry',
  1: 'Registration',
  2: 'Registration Data',
  3: 'Admission Process',
  4: 'Provisional',
  5: 'Admission',
  6: 'Custom Data',
  7: 'Edit Master Data Field',
  8: 'Edit Master Data Field',
  9: 'Change Enrolment Status',
  10: 'Change Enrolment Number',
  11: 'Upload Documents',
};

const StudentInfoFeeMenu = {
    id: 'StudentInfoFeeMenu',
    type: 'group',
    children: [
  
       // Studnet master      
          {
            id: 'student-master',
            title: 'Student Master',
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
                  childOf : 'student-master',
                  colleagueTitle : StudnetMasterColleagueTitles,
                },

                {
                id: 'registration-data',
                title: 'Registration Data',
                type: 'item',
                url: '/erp/student-info-fee/student-master/registration-data',
                breadcrumbs: false,
                childOf : 'student-master',
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              {
                id: 'admission-process',
                title: 'Admission Process',
                type: 'item',
                url: '/erp/student-info-fee/student-master/admission-process',
                breadcrumbs: false,
                childOf : 'student-master',
                colleagueTitle : StudnetMasterColleagueTitles,
              },


              {
                id: 'provisional',
                title: 'Provisional',
                type: 'item',
                url: '/erp/student-info-fee/student-master/provisional',
                breadcrumbs: false,
                childOf : 'student-master',
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              
              {
                id: 'admission',
                title: 'Admission',
                type: 'item',
                url: '/erp/student-info-fee/student-master/admission',
                breadcrumbs: false,
                childOf : 'student-master',
                colleagueTitle : StudnetMasterColleagueTitles,
              },

                                
              {
                id: 'custom-data',
                title: 'Custom Data',
                type: 'item',
                url: '/erp/student-info-fee/student-master/custom-data',
                breadcrumbs: false,
                childOf : 'student-master',
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              {
                id: 'edit-master-data-field',
                title: 'Edit Master Data Field',
                type: 'item',
                url: '/erp/student-info-fee/student-master/edit-master-data-field',
                breadcrumbs: false,
                childOf : 'student-master',
                colleagueTitle : StudnetMasterColleagueTitles,
              },

                  
              {
                id: 'change-enrolment-status',
                title: 'Change Enrolment Status',
                type: 'item',
                url: '/erp/student-info-fee/student-master/change-enrolment-status',
                breadcrumbs: false,
                childOf : 'student-master',
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              {
                id: 'change-enrolment-number',
                title: 'Change Enrolment Number',
                type: 'item',
                url: '/erp/student-info-fee/student-master/change-enrolment-number',
                breadcrumbs: false,
                childOf : 'student-master',
                colleagueTitle : StudnetMasterColleagueTitles,
              },

              {
                id: 'upload-documents',
                title: 'Upload Documents',
                type: 'item',
                url: '/erp/student-info-fee/student-master/upload-document',
                breadcrumbs: false,
                childOf : 'student-master',
                colleagueTitle : StudnetMasterColleagueTitles,
              },


            ]
          },

        // Fee accounting
          {
            id: 'fee-accounting',
            title: 'Fee Accounting ',
            type: 'collapse',
            url: '/erp/student-info-fee/fee-accounting',
            icon: RecentActorsTwoToneIcon,
            children: [

              {
                  id: 'invoice-creation',
                  title: 'Invoice Creation',
                  type: 'item',
                  url: '/erp/student-info-fee/fee-accounting/invoice-creation',
                  breadcrumbs: false,
                  childOf: 'fee-accounting'
                },


                {
                  id: 'invoice-modification',
                  title: 'Invoice Modification',
                  type: 'item',
                  url: '/erp/student-info-fee/fee-accounting/invoice-modification',
                  breadcrumbs: false,
                  childOf: 'fee-accounting'
                },

                {
                id: 'fee-transaction-entry',
                title: 'Fee Transaction Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/fee-transaction-entry',
                breadcrumbs: false,
                childOf: 'fee-accounting'
              },

              {
                id: 'transport-details-entry',
                title: 'Transport Details Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/transport-details-entry',
                breadcrumbs: false,
                childOf: 'fee-accounting'
              },


              {
                id: 'optional-fee-heads-entry',
                title: 'Optional Fee Heads Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/optional-fee-heads-entry',
                breadcrumbs: false,
                childOf: 'fee-accounting'
              },

              
              {
                id: 'dishonoured-cheque-entry',
                title: 'Dishonoured Cheque Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/dishonoured-cheque-entry',
                breadcrumbs: false,
                childOf: 'fee-accounting'
              },

                                
              {
                id: 'student-fee-ledger-details',
                title: ' Student Fee Ledger Details',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/student-fee-ledger-details',
                breadcrumbs: false,
                childOf: 'fee-accounting'
              },

              {
                id: 'head-wise-fee-adjustment-entry',
                title: 'Head Wise Fee Adjustment Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/head-wise-fee-adjustment-entry',
                breadcrumbs: false,
                childOf: 'fee-accounting'
              },

                  
              {
                id: 'fee-clearance-entry',
                title: 'Fee Clearance Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/fee-clearance-entry',
                breadcrumbs: false,
                childOf: 'fee-accounting'
              },

              {
                id: 'security-deposit',
                title: 'Security Deposit',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/security-deposit',
                breadcrumbs: false,
                childOf: 'fee-accounting'
              },

              {
                id: 'transfer-fee-entry',
                title: 'Transfer Fee Entry',
                type: 'item',
                url: '/erp/student-info-fee/fee-accounting/transfer-fee-entry',
                breadcrumbs: false,
                childOf: 'fee-accounting'
              },


            ]
          },

          // set up
          {
            id: 'set-up' ,
            title: 'Set Up',
            type: 'collapse',
            url: '/erp/student-info-fee/setup',
            icon: PhonelinkSetupTwoToneIcon,
            children: [

              {
                  id: 'system-data',
                  title: 'System Data',
                  type: 'item',
                  url: '/erp/student-info-fee/setup/system-data',
                  breadcrumbs: false,
                  childOf : 'set-up',
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
                  breadcrumbs: false
                },

                {
                id: 'whatsapp-conversations',
                title: 'Whatsapp Conversations',
                type: 'item',
                url: '/erp/student-info-fee/tools/whatsapp-conversations',
                breadcrumbs: false
              },


              {
                id: 'whatsapp-delivery-report',
                title: 'Whatsapp Delivery Report',
                type: 'item',
                url: '/erp/student-info-fee/tools/whatsapp-delivery-report',
                breadcrumbs: false
              },


              {
                id: 'whatsapp-excel-sheet',
                title: 'Whatsapp Excel Sheet',
                type: 'item',
                url: '/erp/student-info-fee/tools/whatsapp-excel-sheet',
                breadcrumbs: false
              },



            ]
          },

           // post support ticket

            {
              id: 'post-support-ticket',
              title: 'Post Support Ticket',
              type: 'item',
              url: '/erp/student-info-fee/post-support-ticket',
              icon: ConfirmationNumberTwoToneIcon,
              breadcrumbs: false
            },

            // User and roles
            {
              id: 'user-and-roles',
              title: 'User & Roles',
              type: 'item',
              url: '/erp/student-info-fee/user-and-roles',
              icon: AccountBalanceWalletTwoToneIcon,
              breadcrumbs: false
            },
           
 

    ]
  };
  
  export default StudentInfoFeeMenu;
  