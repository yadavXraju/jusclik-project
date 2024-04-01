import { createSlice } from '@reduxjs/toolkit';
import config from 'config';


let initialThemeColor = 'rgb(94, 53, 177)';
if (localStorage.getItem('themeColor'))
  initialThemeColor = JSON.parse(localStorage.getItem('themeColor'));

let initialThemeColorV2 = 'rgb(30, 136, 229)';
if (localStorage.getItem('themeColorV2'))
  initialThemeColorV2 = JSON.parse(localStorage.getItem('themeColorV2'));

let initialFontFamily = config.fontFamily
if (localStorage.getItem('fontFamily'))
  initialFontFamily = JSON.parse(localStorage.getItem('fontFamily'));

let intialborderRadius = config.borderRadius
if (localStorage.getItem('borderRadius'))
  intialborderRadius = JSON.parse(localStorage.getItem('borderRadius'));

const initialState = {
  isOpen: [],
  defaultId: 'default',
  fontFamily:initialFontFamily,
  borderRadius:intialborderRadius ,
  opened: true,
  themeColor: initialThemeColor,
  themeColorV2: initialThemeColorV2
};

const customizationSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    menuOpen: (state, action) => {
      const { id } = action.payload;
      state.isOpen = [id];
    },
    setMenu: (state, action) => {
      state.opened = action.payload.opened;
    },
    setFontFamily: (state, action) => {
      const newFontFamily = action.payload.fontFamily;
      state.fontFamily = newFontFamily;
      localStorage.setItem('fontFamily',JSON.stringify(newFontFamily));
    },
    setBorderRadius: (state, action) => {
      const newBorderRadius = action.payload.borderRadius;
      state.borderRadius = newBorderRadius;
      localStorage.setItem('borderRadius', JSON.stringify(newBorderRadius));
    },
    setColorTheme: (state, action) => {
      const newThemeColor = action.payload.themeColor;
      state.themeColor = newThemeColor;
      localStorage.setItem('themeColor', JSON.stringify(newThemeColor));
    },
    setColorThemeV2: (state, action) => {
      const newThemeColorV2 = action.payload.themeColorV2;
      state.themeColorV2 = newThemeColorV2;
      localStorage.setItem('themeColorV2', JSON.stringify(newThemeColorV2));
    },
  },
});


export const {
  menuOpen,
  setMenu,
  setFontFamily,
  setBorderRadius,
  setColorTheme,
  setColorThemeV2,
} = customizationSlice.actions;

export default customizationSlice.reducer;
