
import { createSlice } from '@reduxjs/toolkit';

const intialPricingData ={
    planName:""
}

const initialState = {
  pricingData: intialPricingData,
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    handleSavePricing:(state,action)=>{
       const {planName}=action.payload;
       state.pricingData.planName=planName
    }
  }
});


export const {
  handleSavePricing
} = pricingSlice.actions;

export default pricingSlice.reducer;





