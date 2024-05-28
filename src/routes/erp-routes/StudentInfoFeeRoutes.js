// Page Owner Abhishek
// Description : Stufee Routes

import { lazy } from 'react';
import Loadable from 'components/ui/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/dashboard')));


// student master
const Enquiry = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-master/enquiry')));
const Registration = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-master/registration')));
const AdmissionProcess =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-master/admission-process')));
const Provisional =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-master/provisional')));
const Admission =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-master/admission')));

// dynamic routes end 
const AdmissionForm =Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-master/admission/admission-form')));
const EditMasterDataField =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-master/EditMasterDataField')));
const ChangeEnrolmentStatus =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-master/ChangeEnrolmentStatus')));
const ChangeEnrolmentNumber =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-master/ChangeEnrolmentNumber')));

// Fee invoice
const InvoiceModification =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/fee-accounting/new-invoice-modification')));
const StudentFeeLedgerDetails =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/fee-accounting/student-fee-ledger-details')));
const OptionalFeeHeadsEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/fee-accounting/new-optional-fee-heads-entry')));

// fee receipt
const FeeTransactionEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/fee-accounting/new-fee-transaction-entry')));
const HeadWiseFeeAdjustmentEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/fee-accounting/new-headwise-fee-adjustment-entry')));
const FeeClearanceEntry=  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/fee-accounting/new-fee-clearance-entry')));
const SecurityDeposit=  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/fee-accounting/new-security-deposit')));

// hostel
const DormEntry=  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/new-hostel/dorm-entry')));


// transport
const RoutesAndSlabs =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/transport/routes-slabs')));
const BusDetails =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/transport/bus-details')));
// dynamic routes
const BusDetailsPreveiw =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/transport/bus-details/Preview')));
// dynamic routes
const TransportAllocation =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/transport/transportAllocation')));
const TransportAllocationPreview =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/transport/transportAllocation/TransportPreview')));

// setings
const SystemData = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/settings/system-data')));
const FeeStructure = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/settings/fee-structure')));
const WithdrawalChecklist = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/settings/withdrawal-checklist')));


// reports
const Reports = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/reports/')));
const EnquiryReport =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/reports/enquiry')));



// setting

const Settings =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/settings/setting/setting-stufee')));
// student details and forms

const TransactionNoSeries =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/settings/transaction-no-series')));

// dashboard payroll
const DashboardPayroll =  Loadable(lazy(() => import('pages/getting-started')));
// user details and roles
const UserDetailsRoles =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/user-and-roles')));
// invoice template
const InvoiceTemplate =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/settings/setting/invoice-template')));
const Template =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/settings/setting/invoice-template/templates')));

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

         //  payroll dashboard

         { 
          path: 'dashboard-payroll', 
          element: <DashboardPayroll /> 
        },


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
          path: 'admission-process',
          element: <AdmissionProcess />
       },
       {
        path: 'provisional',
        element: <Provisional />
      },
     {
      path: 'admission',
      children: [
        {
          path : '',
          element : <Admission />
        },

    ]
    },
     {
      path: 'admission-form',
      element: <AdmissionForm />
    },
 


      // {
      //   path: 'custom-data',
      //   element: <CustomeData />
      // },

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


        ]
      },

      // hostel

      {
        path: 'hostel',
        children: [

          { 
            path: 'dorm-entry', 
            element: <DormEntry/> 
          },


        ]
      },

   // reports
      { 
         path: 'reports', 
         children:[
          {
            path:'',
            element: <Reports/>,
          },
          {
          path:'enquiry',
          element:<EnquiryReport />
          },
         ]
       },

    // Fee Acounting
    {
      path: 'fee-accounting',
      children: [

        {
          path: 'invoice-modification',
          element: <InvoiceModification />
        },

        {
        path: 'fee-transaction-entry',
        element: <FeeTransactionEntry />
      },



      {
      path: 'optional-fee-heads-entry',
      element: <OptionalFeeHeadsEntry />
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


      ]
    },
      // transport
      {
        path: 'transport',
        children: [

          { 
            path: 'routes-slabs', 
            element: <RoutesAndSlabs /> 
          },



          {
            path: 'bus-details',
            children: [
              {
                path : '',
                element :  <BusDetails/>
              },
      
              {
                path : ':id',
                element : <BusDetailsPreveiw/>
              },
          ]
          },



        {
          path: 'allocation',
          children: [
            {
              path : '',
              element :  <TransportAllocation/>
            },
    
            {
              path : ':id',
              element : <TransportAllocationPreview/>
            },
        ]
        },

        ]
        },

        // settings
        {
          path: 'settings',
          children: [

            { 
              path: '', 
              element: <Settings /> 
            },

            { 
              path: 'system-data', 
              element: <SystemData /> 
            },                
            {
              path:'invoice-template',
              children :[
                {
                  path:'',
                  element : <InvoiceTemplate />
                } ,

                {
                  path:'template',
                  element : <Template />
                } ,

              ]
            },
            {
                path: 'fee-structure',
                element : <FeeStructure />
            },
            {
              path: 'withdrawal-checklist',
              element : <WithdrawalChecklist />
            },
            {
              path: 'transaction-number-series',
              element : <TransactionNoSeries />
            },
            
          ]
        },

          // user and roles

          { 
            path: 'user-and-roles', 
            element: <UserDetailsRoles /> 
          },



    ]
  }
];

export default  StudentInfoFeeRoutes;
