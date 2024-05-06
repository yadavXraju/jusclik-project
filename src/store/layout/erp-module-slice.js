import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    erpModule: {
        role: '',
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

            // Save state to local storage
            localStorage.setItem('erpModuleState', JSON.stringify(state));
        }
    }
})

export const { handleErpModule } = erpModuleSlice.actions;
export default erpModuleSlice.reducer;
