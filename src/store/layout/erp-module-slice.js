// Page Owner : Abhishek
// description : set the role of selected erp module 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    erpModule: {
        role: sessionStorage.getItem('userRole') || '', // Retrieve role from sessionStorage
        url: '',
    },
}

const erpModuleSlice = createSlice({
    name: 'erpModule',
    initialState,
    reducers: {
        handleErpModule: (state, action) => {
            const erpModule = action.payload;
            state.erpModule = erpModule;
            // Save role to sessionStorage
            sessionStorage.setItem('userRole', erpModule.role);
        }
    }
})

export const { handleErpModule } = erpModuleSlice.actions;
export default erpModuleSlice.reducer;
