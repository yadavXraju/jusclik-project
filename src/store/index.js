import { configureStore } from "@reduxjs/toolkit";
import customizationSlice from "./customization-slice";
import admissionSlice from './student-info-and-fee/student/admission-slice';
import InvoiceTemplateSlice from "./student-info-and-fee/setting/Invoice-Template-Slice";
import pricingSlice from "./pages/pricing/pricing-slice";

const store=configureStore({
    reducer:{
        customization:customizationSlice,
        admission:admissionSlice,
        invoiceTemplate:InvoiceTemplateSlice,
        pricingSlice: pricingSlice  ,
    },
    devTools:true
});

export default store;