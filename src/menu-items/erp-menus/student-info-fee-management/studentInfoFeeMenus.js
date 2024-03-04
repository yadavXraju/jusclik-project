// icons
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';



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
                icon: GroupsTwoToneIcon,
                children: [

                  {
                     id: 'enquiry',
                     title: 'Enquiry',
                     type: 'item',
                     url: '/erp/student-info-fee/student-master/enquiry',
                     breadcrumbs: false
                   },
    

                   {
                     id: 'registration',
                     title: 'Registration',
                     type: 'item',
                     url: '/erp/student-info-fee/student-master/registration',
                     breadcrumbs: false
                   },

                   {
                    id: 'registration-data',
                    title: 'Registration Data',
                    type: 'item',
                    url: '/erp/student-info-fee/student-master/registration-data',
                    breadcrumbs: false
                  },

                  {
                    id: 'admission-process',
                    title: 'Admission Process',
                    type: 'item',
                    url: '/erp/student-info-fee/student-master/admission-process',
                    breadcrumbs: false
                  },


                  {
                    id: 'provisional',
                    title: 'Provisional',
                    type: 'item',
                    url: '/erp/student-info-fee/student-master/provisional',
                    breadcrumbs: false
                  },
    
                  
                  {
                    id: 'admission',
                    title: 'Admission',
                    type: 'item',
                    url: '/erp/student-info-fee/student-master/admission',
                    breadcrumbs: false
                  },

                                   
                  {
                    id: 'custom-data',
                    title: 'Custom Data',
                    type: 'item',
                    url: '/erp/student-info-fee/student-master/custom-data',
                    breadcrumbs: false
                  },
    
                  {
                    id: 'edit-master-data-field',
                    title: 'Edit Master Data Field',
                    type: 'item',
                    url: '/erp/student-info-fee/student-master/edit-master-data-field',
                    breadcrumbs: false
                  },

                      
                  {
                    id: 'change-enrolment-status',
                    title: 'Change Enrolment Status',
                    type: 'item',
                    url: '/erp/student-info-fee/student-master/change-enrolment-status',
                    breadcrumbs: false
                  },
    
                  {
                    id: 'change-enrolment-number',
                    title: 'Change Enrolment Number',
                    type: 'item',
                    url: '/erp/student-info-fee/student-master/change-enrolment-number',
                    breadcrumbs: false
                  },

                  {
                    id: 'upload-documents',
                    title: 'Upload Documents',
                    type: 'item',
                    url: '/erp/student-info-fee/student-master/upload-document',
                    breadcrumbs: false
                  },


                ]
              },

           // Fee accounting
              {
                id: 'fee-accounting',
                title: 'Fee Accounting ',
                type: 'collapse',
                url: '/erp/student-info-fee/fee-accounting',
                icon: GroupsTwoToneIcon,
                children: [

                  {
                     id: 'invoice-creation',
                     title: 'Invoice Creation',
                     type: 'item',
                     url: '/erp/student-info-fee/fee-accounting/invoice-creation',
                     breadcrumbs: false
                   },
    

                   {
                     id: 'invoice-modification',
                     title: 'Invoice Modification',
                     type: 'item',
                     url: '/erp/student-info-fee/fee-accounting/invoice-modification',
                     breadcrumbs: false
                   },

                   {
                    id: 'fee-transaction-entry',
                    title: 'Fee Transaction Entry',
                    type: 'item',
                    url: '/erp/student-info-fee/fee-accounting/fee-transaction-entry',
                    breadcrumbs: false
                  },

                  {
                    id: 'transport-details-entry',
                    title: 'Transport Details Entry',
                    type: 'item',
                    url: '/erp/student-info-fee/fee-accounting/transport-details-entry',
                    breadcrumbs: false
                  },


                  {
                    id: 'optional-fee-heads-entry',
                    title: 'Optional Fee Heads Entry',
                    type: 'item',
                    url: '/erp/student-info-fee/fee-accounting/optional-fee-heads-entry',
                    breadcrumbs: false
                  },
    
                  
                  {
                    id: 'dishonoured-cheque-entry',
                    title: 'Dishonoured Cheque Entry',
                    type: 'item',
                    url: '/erp/student-info-fee/fee-accounting/dishonoured-cheque-entry',
                    breadcrumbs: false
                  },

                                   
                  {
                    id: 'student-fee-ledger-details',
                    title: ' Student Fee Ledger Details',
                    type: 'item',
                    url: '/erp/student-info-fee/fee-accounting/student-fee-ledger-details',
                    breadcrumbs: false
                  },
    
                  {
                    id: 'head-wise-fee-adjustment-entry',
                    title: 'Head Wise Fee Adjustment Entry',
                    type: 'item',
                    url: '/erp/student-info-fee/fee-accounting/head-wise-fee-adjustment-entry',
                    breadcrumbs: false
                  },

                      
                  {
                    id: 'fee-clearance-entry',
                    title: 'Fee Clearance Entry',
                    type: 'item',
                    url: '/erp/student-info-fee/fee-accounting/fee-clearance-entry',
                    breadcrumbs: false
                  },
    
                  {
                    id: 'security-deposit',
                    title: 'Security Deposit',
                    type: 'item',
                    url: '/erp/student-info-fee/fee-accounting/security-deposit',
                    breadcrumbs: false
                  },

                  {
                    id: 'transfer-fee-entry',
                    title: 'Transfer Fee Entry',
                    type: 'item',
                    url: '/erp/student-info-fee/fee-accounting/transfer-fee-entry',
                    breadcrumbs: false
                  },


                ]
              },

              // tools



              {
                id: 'set-up' ,
                title: 'Set Up',
                type: 'collapse',
                url: '/erp/student-info-fee/setup',
                icon: GroupsTwoToneIcon,
                children: [

                  {
                      id: 'system-data',
                      title: 'System Data',
                      type: 'item',
                      url: '/erp/student-info-fee/setup/system-data',
                      breadcrumbs: false
                    },
    

                ]
              },

              

              // system data

              {
                id: 'tools' ,
                title: 'Tools',
                type: 'collapse',
                url: '/erp/student-info-fee/tools',
                icon: GroupsTwoToneIcon,
                children: [

                  {
                     id: 'gps-bus-tracking',
                     title: 'GPS Bus Tracking',
                     type: 'item',
                     url: '/erp/student-info-fee/tools/gps-bus-tracking',
                     breadcrumbs: false
                   },

                   {
                    id: 'whatshap-conversations',
                    title: 'Whatshap Conversations',
                    type: 'item',
                    url: '/erp/student-info-fee/tools/whatshap-conversations',
                    breadcrumbs: false
                  },
    

                  {
                    id: 'whatshap-delivery-report',
                    title: 'Whatshap Delivery Report',
                    type: 'item',
                    url: '/erp/student-info-fee/tools/whatshap-delivery-report',
                    breadcrumbs: false
                  },


                  {
                    id: 'whatshap-excel-sheet',
                    title: 'Whatshap Excel Sheet',
                    type: 'item',
                    url: '/erp/student-info-fee/tools/whatshap-excel-sheet',
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
                icon: GroupsTwoToneIcon,
                breadcrumbs: false
              },
 

    ]
  };
  
  export default StudentInfoFeeMenu;
  