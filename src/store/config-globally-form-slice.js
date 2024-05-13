import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feeHeads: [],
    amount : '',
    classes : [],
    configGlobally:[],

      // fee  head options
 feeHeadOptions : [
    { id: 1, name: 'Late Fee' },
    { id: 2, name: 'SRD Charges' },
    { id: 3, name: 'Admission Fee ' },
    { id: 4, name: 'Caution Money' },
    { id: 5, name: 'Security Charges' },
    { id: 6, name: 'Composite Fee' },
    { id: 7, name: 'Science Fee' },
    { id: 8, name: 'Chemistry Lab Charges' },
    { id: 9, name: 'Tuition Fee' }
  ],
  
  // class options
   classesOptions : [
    { id: 0, name: 'All' },
    { id: 1, name: 'kg' },
    { id: 2, name: 'Nursery' },
    { id: 3, name: 'I ' },
    { id: 6, name: 'II ' },
    { id: 9, name: 'III A' },
    { id: 10, name: 'III B' },
    { id: 12, name: 'IV A' },
    { id: 13, name: 'IV B' },
    { id: 15, name: 'V A' },
    { id: 16, name: 'V B' },
    { id: 17, name: 'V C' },
    { id: 18, name: 'VI A' },
    { id: 19, name: 'VI B' },
    { id: 20, name: 'VI C' },
    { id: 21, name: 'VII A' },
    { id: 22, name: 'VII B' },
    { id: 23, name: 'VII C' },
    { id: 24, name: 'VIII A' },
    { id:25, name: 'VIII B' },
    { id: 26, name: 'VIII C' },
    { id: 27, name: 'IX A' },
    { id: 28, name: 'IX B' },
    { id: 29, name: 'IX C' },
    { id: 30, name: 'X' },
    { id: 31, name: 'X A' },
    { id: 32, name: 'X B' },
    { id: 33, name: 'X C' },
  ],

// concession type
    concessionTypeOptions : [
    { value: 'Percentage wise concession', label: 'Percentage wise concession' },
    { value: 'Rate wise concession', label: 'Rate wise concession' },
    { value: 'Exception charges', label: 'Exception charges' },
    { value: 'Non chargeable fee', label: 'Non chargeable fee' }
    ],
}; 

const configGloballySlice = createSlice({
    name: 'configGlobally',
    initialState,
    reducers: {
        setFeeHeads : (state, action) => {
            state.feeHeads = action.payload;
            state.amount = action.payload;
        },
        setClass: (state, action) => {
            state.classes = action.payload;
        },
        configGlobally: (state, action) => {
            state.configGlobally = action.payload;
        },
    },
});

export const { setFeeHeads , setClass ,  configGlobally } = configGloballySlice.actions;
export default configGloballySlice.reducer;
