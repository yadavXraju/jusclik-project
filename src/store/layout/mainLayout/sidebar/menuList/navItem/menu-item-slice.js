import { createSlice } from '@reduxjs/toolkit';

const intialMenuItem ={
  item:""
}

const initialState = {
  menuItem: intialMenuItem,
};

const menuItemSlice = createSlice({
  name: 'menuItem',
  initialState,
  reducers: {
    handleMenu:(state,action)=>{

       const item=action.payload;
      //  console.log(action.payload)
       state.menuItem.item=item;
    }
  }
});


export const {
    handleMenu
} = menuItemSlice.actions;

export default menuItemSlice.reducer;