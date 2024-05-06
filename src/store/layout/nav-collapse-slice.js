// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   NavCollapse: [],
// };

// const menuNavCollapseSlice = createSlice({
//   name: 'menuNavCollapse',
//   initialState,
//   reducers: {
//     handleMenuNavCollapse: (state, action) => {
//       state.NavCollapse = action.payload;
//     },
//     resetMenuNavCollapse: state => {
//       state.NavCollapse = [];
//     }
    
//   },
// });

// export const {  handleMenuNavCollapse  , resetMenuNavCollapse } = menuNavCollapseSlice.actions;

// export default menuNavCollapseSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Define a function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('menuNavCollapse');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Define a function to save state to local storage
const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('menuNavCollapse', serializedState);
  } catch {
    // Ignore write errors
  }
};

const initialState = loadState() || {
  NavCollapse: [],
};

const menuNavCollapseSlice = createSlice({
  name: 'menuNavCollapse',
  initialState,
  reducers: {
    handleMenuNavCollapse: (state, action) => {
      state.NavCollapse = action.payload;
      saveState(state); // Save state to local storage on every change
    },
    resetMenuNavCollapse: state => {
      state.NavCollapse = [];
      saveState(state); // Save state to local storage on reset
    },
  },
});

export const { handleMenuNavCollapse, resetMenuNavCollapse } = menuNavCollapseSlice.actions;

export default menuNavCollapseSlice.reducer;
