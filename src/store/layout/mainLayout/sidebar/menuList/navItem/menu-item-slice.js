
import { createSlice } from '@reduxjs/toolkit';

const intialMenuItem ={
    id:""
}

const initialState = {
  menuItem: intialMenuItem,
};

const menuItemSlice = createSlice({
  name: 'menuItem',
  initialState,
  reducers: {
    handleMenuItem:(state,action)=>{

       const id=action.payload;
       console.log(action.payload)
       state.menuItem.id=id;
    }
  }
});


export const {
    handleMenuItem
} = menuItemSlice.actions;

export default menuItemSlice.reducer;





