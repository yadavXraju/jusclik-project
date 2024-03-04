import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-dashboard')));


// student master

const Enquiry = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/enquiry')));

const Registration = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/registration')));

const RegistrationData =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/registration-data')));

const AdmissionProcess =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/admission-process')));

const Provisional =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/provisional')));

const Admission =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/admission')));

const CustomeData =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/custom-data')));

const EditMasterDataField =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/edit-master-data-field')));


const ChangeEnrolmentStatus =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/change-enrolment-status')));

const ChangeEnrolmentNumber =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/change-enrolment-number')));

const UploadDocument =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/upload-document')));


// Fee accounting

const InvoiceCreation =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/invoice-creation')));


const InvoiceModification =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/invoice-modification')));

const FeeTransactionEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/fee-transaction-entry')));


const TransportDetailsEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/transport-details-entry')));


const OptionalFeeHeadsEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/optional-fee-heads-entry')));


const DishonouredChequeEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/dishonoured-cheque-entry')));


const StudentFeeLedgerDetails =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/student-fee-ledger-details')));

const HeadWiseFeeAdjustmentEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/headwise-fee-adjustment-entry')));

const FeeClearanceEntry=  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/fee-clearance-entry')));

const SecurityDeposit=  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/security-deposit')));

const TransferFeeEntry=  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/transfer-fee-entry')));


// system data

const SystemData = Loadable(lazy(() => import('views/erp-module/erp-common-item/setup/system-data')));


// tools
const GpsBusTracking =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/tool/gps-bus-tracking')));


const WhatshapConversations =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/tool/gps-bus-tracking')));


const WhatshapDeliveryReport =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/tool/whatshap-delivery-report')));



const WhatshapExcelSheet =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/tool/whatshap-excel-sheet')));



// post support ticket

const PostSupportTicket =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/post-support-ticket')));




// ==============================|| Visitor MENUS ||============================== //

const StudentInfoFeeRoutes = [
  {
    path: '/erp/student-info-fee',
    children: [
      { 
        path: 'dashboard', 
        element: <DashboardDefault />
       },

      //  collapse menus


      // student master

       {
        path: 'student-master',
        children: [
          { 
            path: 'enquiry', 
            element: <Enquiry /> 
          },

          {
            path: 'registration',
            element: <Registration />
         },

         {
          path: 'registration-data',
          element: <RegistrationData />
       },

        {
          path: 'admission-process',
          element: <AdmissionProcess />
       },


       {
        path: 'provisional',
        element: <Provisional />
      },

      {
        path: 'admission',
        element: <Admission />
     },


      {
        path: 'custom-data',
        element: <CustomeData />
      },

      {
        path: 'edit-master-data-field',
        element: <EditMasterDataField />
      },

      {
        path: 'change-enrolment-status',
        element: <ChangeEnrolmentStatus />
      },

      {
        path: 'change-enrolment-number',
        element: <ChangeEnrolmentNumber />
      },

      {
        path: 'upload-document',
        element: <UploadDocument />
      },

        ]
      },


          // Fee Acounting

          {
            path: 'fee-accounting',
            children: [
              { 
                path: 'invoice-creation', 
                element: <InvoiceCreation /> 
              },
    
              {
                path: 'invoice-modification',
                element: <InvoiceModification />
             },
    
             {
              path: 'fee-transaction-entry',
              element: <FeeTransactionEntry />
           },
    
            {
              path: 'transport-details-entry',
              element: <TransportDetailsEntry />
           },
    
    
           {
            path: 'optional-fee-heads-entry',
            element: <OptionalFeeHeadsEntry />
          },
    
          {
            path: 'dishonoured-cheque-entry',
            element: <DishonouredChequeEntry />
         },
    
    
          {
            path: 'student-fee-ledger-details',
            element: <StudentFeeLedgerDetails />
          },
    
          {
            path: 'head-wise-fee-adjustment-entry',
            element: <HeadWiseFeeAdjustmentEntry />
          },
    
          {
            path: 'fee-clearance-entry',
            element: <FeeClearanceEntry />
          },
    
          {
            path: 'security-deposit',
            element: <SecurityDeposit />
          },
    
          {
            path: 'transfer-fee-entry',
            element: <TransferFeeEntry />
          },
    
            ]
          },



            // setup

            {
              path: 'setup',
              children: [
                { 
                  path: 'system-data', 
                  element: <SystemData /> 
                },
      
      
              ]
            },

            // tools

            {
              path: 'tools',
              children: [
                { 
                  path: 'gps-bus-tracking', 
                  element: <GpsBusTracking /> 
                },

                { 
                  path: 'whatshap-conversations', 
                  element: <WhatshapConversations /> 
                },


                { 
                  path: 'whatshap-delivery-report', 
                  element: <WhatshapDeliveryReport /> 
                },


                { 
                  path: 'whatshap-excel-sheet', 
                  element: <WhatshapExcelSheet /> 
                },
      
      
              ]
            },

            // post support

            { 
              path: 'post-support-ticket', 
              element: <PostSupportTicket /> 
            },
  

    ]
  }
];

export default  StudentInfoFeeRoutes;
