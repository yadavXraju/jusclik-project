
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTab: 0,
};

const crmConfigureSlice = createSlice({
  name: 'Lead Classification',
  initialState,
  reducers: {
    handleConfigure:(state,action)=>{
        console.log(action);
        const selectedTab=action.payload;
       state.selectedTab=selectedTab
    }
  }
});



export const {
    handleConfigure
} = crmConfigureSlice.actions;

export default crmConfigureSlice.reducer;




