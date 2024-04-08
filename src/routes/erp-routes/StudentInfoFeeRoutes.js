import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
const DashboardDefault = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-dashboard')));


// student master

const Enquiry = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/enquiry')));

const Registration = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/registration')));

// const RegistrationData =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/registration-data')));

const AdmissionProcess =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/admission-process')));

const Provisional =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/provisional')));

const Admission =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/admission')));

// admission dynamic routes

const AdmissionDynamicRoutes =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/admission/dynamic-admission-routes')));
// dynamic routes end 


const AdmissionForm =Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/admission/admission-form')));
// const CustomeData =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/custom-data')));

const EditMasterDataField =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/edit-master-data-field')));


const ChangeEnrolmentStatus =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/change-enrolment-status')));

const ChangeEnrolmentNumber =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/change-enrolment-number')));

const UploadDocument =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/upload-document')));


// Fee invoice

const InvoiceModification =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/invoice-modification')));


const StudentFeeLedgerDetails =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/student-fee-ledger-details')));


const OptionalFeeHeadsEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/optional-fee-heads-entry')));

// fee receipt

const FeeTransactionEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/fee-transaction-entry')));


const HeadWiseFeeAdjustmentEntry =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/headwise-fee-adjustment-entry')));

const FeeClearanceEntry=  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/fee-clearance-entry')));


const SecurityDeposit=  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/fee-accounting/security-deposit')));

// hostel

const DormEntry=  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/hostel/dorm-entry')));


// transport


const RoutesAndSlabs =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/transport/routes-slabs')));


const BusDetails =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/transport/bus-details')));
// dynamic routes

const BusDetailsPreveiw =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/transport/bus-details/Preview')));
// dynamic routes


const TransportAllocation =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/transport/transportAllocation')));


const TransportAllocationPreview =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/transport/transportAllocation/transportPreview')));

// setings

const SystemData = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/system-data')));
const FeeStructure = Loadable(lazy(() => import('views/erp-common-component/fee-structure')));


// reports
const Reports = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/reports/')));
// const InvoicePrinting = Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/reports/invoice-printing')));
const EnquiryReport =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/reports/enquiry')));

const EnquiryRegister =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/reports/register')));

// tools
const GpsBusTracking =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/tool/gps-bus-tracking')));


const WhatshapConversations =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/tool/gps-bus-tracking')));


const WhatshapDeliveryReport =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/tool/whatsapp-delivery-report')));



const WhatshapExcelSheet =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/tool/whatsapp-excel-sheet')));

// setting

const Setting =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/setting')));

// student details and forms

const StudentDetails =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/registration/student-details')));

const FatherDetailsForm =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/registration/student-details/data-forms/FatherDetails')));


const MotherDetailsForm =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/registration/student-details/data-forms/MotherDetails')));



const StudentDetailsForm =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/student-master/registration/student-details/data-forms/StudentDetails')));



// dashboard payroll


const DashboardPayroll =  Loadable(lazy(() => import('views/common-section/dashboard-payroll')));


// user details and roles
const UserDetailsRoles =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/user-and-roles')));

// invoice template
const InvoiceTemplate =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/setting/invoice-template')));

// temp routes will be deleted

const Daman =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/setting/invoice-template/daman')));

const Kulwinder =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/setting/invoice-template/kulwinder')));

const Kulwinder2 =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/setting/invoice-template/kulwinder/template3')));


const Harsh =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/setting/invoice-template/harsh')));

const Harsh1 =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/setting/invoice-template/harsh/harsh1')));

const Harsh2 =  Loadable(lazy(() => import('views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/settings/setting/invoice-template/harsh/harsh2')));

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
          // student details main
          { 
            path: 'registration/student-details', 
            element: <StudentDetails /> 
          },
           // father details
          { 
            path: 'registration/father-details-form', 
            element: <FatherDetailsForm/> 
          },
          // mother details       
          { 
            path: 'registration/mother-details-form', 
            element: <MotherDetailsForm /> 
          },
          //  student details       
          { 
            path: 'registration/student-details-form', 
            element: <StudentDetailsForm /> 
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

        {
          path : ':id',
          element : <AdmissionDynamicRoutes/>
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

      {
        path: 'upload-document',
        element: <UploadDocument />
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

          {
            path:'register',
            element:<EnquiryRegister />
            }

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

            // setting
            { 
              path: 'setting', 
              element: <Setting /> 
            },


            {
              path: 'settings',
              children: [

                // { 
                //   path: 'setting', 
                //   element: <Setting /> 
                // },

                { 
                  path: 'system-data', 
                  element: <SystemData /> 
                },

                 
                {
                  path:'invoice-template',
                  element : <InvoiceTemplate />
                },

                {
                   path: 'fee-structure',
                   element : <FeeStructure />
                },
                
                  // temp routes
        
                  { 
                    path: 'daman', 
                    element: <Daman/> 
                  },

                  { 
                    path: 'kulwinder', 
                    element: <Kulwinder /> 
                  },    

                  { 
                    path: 'kulwinder2', 
                    element: <Kulwinder2 /> 
                  },    

                  { 
                    path: 'harsh', 
                    element: <Harsh /> 
                  },
                
                  { 
                    path: 'harsh1', 
                    element: <Harsh1 /> 
                  },

                  { 
                    path: 'harsh2', 
                    element: <Harsh2 /> 
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
                  path: 'whatsapp-conversations', 
                  element: <WhatshapConversations /> 
                },


                { 
                  path: 'whatsapp-delivery-report', 
                  element: <WhatshapDeliveryReport /> 
                },


                { 
                  path: 'whatsapp-excel-sheet', 
                  element: <WhatshapExcelSheet /> 
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
