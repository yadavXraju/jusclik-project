import { configureStore } from "@reduxjs/toolkit";
import customizationSlice from "./customization-slice";
import admissionSlice from './student-info-and-fee/student/admission-slice';
import InvoiceTemplateSlice from "./student-info-and-fee/setting/Invoice-Template-Slice";
import userAndRoleAcess from "./student-info-and-fee/user-and-roles/user-and-roles-slice";
import pricingSlice from "./pages/pricing/pricing-slice";

const store=configureStore({
    reducer:{
        customization:customizationSlice,
        admission:admissionSlice,
        invoiceTemplate:InvoiceTemplateSlice,
        userRoleAcess:userAndRoleAcess,
        pricingSlice: pricingSlice  ,
    },
    devTools:true
});

export default store;

