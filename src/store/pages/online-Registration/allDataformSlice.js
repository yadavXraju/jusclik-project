// allDataformSlice.js
import { createSlice } from '@reduxjs/toolkit';

const InitialStateForm = {
  email: '',
  mobile: '',
  student_name: '',
  session: '',
  class: '',
  dob: null,
};

const initialState = {
  InitialStateForm  : InitialStateForm,
}

const allDataformSlice = createSlice({
  name: 'allDataform',
  initialState,
  reducers: {
    updateAllDataform: (state, action) => {
      const {student_name} = action.payload;
      state.InitialStateForm.student_name = student_name
    },
  },
});

export const { updateAllDataform } = allDataformSlice.actions;
export default allDataformSlice.reducer;
