import { configureStore } from "@reduxjs/toolkit";
import customizationSlice from "./customization-slice";
import admissionSlice from './student-info-and-fee/student/admission-slice';

const store=configureStore({
    reducer:{
        customization:customizationSlice,
        admission:admissionSlice,
    },
    devTools:true
});

export default store;