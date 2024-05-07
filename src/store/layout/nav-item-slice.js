// import { createSlice } from '@reduxjs/toolkit';

// const initialMenuNavItem = {
//   NavItem: ""
// }

// const initialState = {
//   menuNavItem: initialMenuNavItem,
// };

// const menuNavItemSlice = createSlice({
//   name: 'menuNavItem',
//   initialState,
//   reducers: {
//     handleMenuNavItem: (state, action) => {
//       const NavItem = action.payload;
//       state.menuNavItem.NavItem = NavItem;
//     },
//     resetMenuNavItem: state => {
//       state.menuNavItem = initialMenuNavItem; 
//     }
//   }
// });

// export const { handleMenuNavItem, resetMenuNavItem } = menuNavItemSlice.actions;

// export default menuNavItemSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialMenuNavItem = {
  NavItem: ""
}

// Define a function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('menuNavItem');
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
    localStorage.setItem('menuNavItem', serializedState);
  } catch {
    // Ignore write errors
  }
};

const initialState = loadState() || {
  menuNavItem: initialMenuNavItem,
};

const menuNavItemSlice = createSlice({
  name: 'menuNavItem',
  initialState,
  reducers: {
    handleMenuNavItem: (state, action) => {
      const NavItem = action.payload;
      state.menuNavItem.NavItem = NavItem;
      saveState(state); // Save state to local storage on every change
    },
    resetMenuNavItem: state => {
      state.menuNavItem = initialMenuNavItem; 
      saveState(state); // Save state to local storage on reset
    }
  }
});

export const { handleMenuNavItem, resetMenuNavItem } = menuNavItemSlice.actions;

export default menuNavItemSlice.reducer;
