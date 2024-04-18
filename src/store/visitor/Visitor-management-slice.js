
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTab: 0,
};

const configureSlice = createSlice({
  name: 'Visitor Purpose',
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
} = configureSlice.actions;

export default configureSlice.reducer;





