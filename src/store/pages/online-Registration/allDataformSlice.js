import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  mobile: '',
  student_name: '',
  session: '',
  class: '',
  dob: null,
};

const allDataformSlice = createSlice({
  name: 'allDataform',
  initialState,
  reducers: {
    updateAllDataform: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateAllDataform } = allDataformSlice.actions;
export default allDataformSlice.reducer;