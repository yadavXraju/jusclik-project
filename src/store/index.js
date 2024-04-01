import { configureStore } from "@reduxjs/toolkit";
import customizationSlice from "./customization-slice";

const store=configureStore({
    reducer:{
        customization:customizationSlice
    },
    devTools:true
});

export default store;