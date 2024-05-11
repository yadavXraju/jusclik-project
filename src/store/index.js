import { configureStore } from "@reduxjs/toolkit";
import customizationSlice from "./customization-slice";
import admissionSlice from './student-info-and-fee/student/admission-slice';
import InvoiceTemplateSlice from "./student-info-and-fee/setting/Invoice-Template-Slice";
import userAndRoleAcess from "./student-info-and-fee/user-and-roles/user-and-roles-slice";
import pricingSlice from "./pages/pricing/pricing-slice";
import customForm from './form-builder/custom-form-slice';
import configureSlice from './visitor/Visitor-management-slice'
import allDataformReducer from "./pages/online-Registration/allDataformSlice";
import leadScoreSlice from "./crm/settings/leadScoreSlice";
import menuNavItemSlice from "./layout/nav-item-slice";
import menuNavCollapseSlice from "./layout/nav-collapse-slice";
import erpModuleSlice from "./layout/erp-module-slice";
import crmConfigureSlice from "./crm/settings/SystemTap-slice";
import EmployeeSlice from "./Hr-Payroll/AddEmployee-slice";
import feeStructureConfigSlice  from "./student-info-and-fee/setting/fee-structure-config";
const store=configureStore({
    reducer:{
        customization:customizationSlice,
        admission:admissionSlice,
        invoiceTemplate:InvoiceTemplateSlice,
        userRoleAcess:userAndRoleAcess,
        pricingSlice: pricingSlice  ,
        customForm:customForm,
        visitorSettingsSlice:configureSlice,
        leadScoreSlice,
        allDataform:allDataformReducer,
        menuNavItemSlice:menuNavItemSlice,
        menuNavCollapseSlice:menuNavCollapseSlice,
        erpModuleSlice : erpModuleSlice,
        crmSettingSlice:crmConfigureSlice,
        feeStructureConfigSlice : feeStructureConfigSlice,
        employeeSlice: EmployeeSlice,
    },
    devTools:true
});

export default store;

