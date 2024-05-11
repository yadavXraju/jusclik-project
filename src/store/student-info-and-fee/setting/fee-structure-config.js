import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  concessionType: {}, 
  concessionFlag:false
};

const feeStructureConfigSlice = createSlice({
  name: 'feeStructureConfig',
  initialState,
  reducers: {
    handleFeeStructureConfig: (state, action) => {
      const id = action.payload;
      state.concessionType[id] = !state.concessionType[id];
    },

  },
});

export const { handleFeeStructureConfig } = feeStructureConfigSlice.actions;
export default feeStructureConfigSlice.reducer;
