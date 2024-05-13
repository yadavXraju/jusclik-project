import { createSlice } from '@reduxjs/toolkit';
// Initial state for the invoice slice
const initialState = {
  general: {
    templateName: '',
    paperSize: 'a5',
    orientation: 'portrait',
    marginTop: '2',
    marginBottom: '2',
    marginLeft: '1',
    marginRight: '1',
    pdfFont: 'ubuntu',
    labelColor: '#333333',
    fontColor: '#333333',
    fontSize: '12',
    backgroundImage: null,
    imagePosition: 'centerCenter',
    backgroundColorEnable: true,
    backgroundColor: '#ffffff'
  },
  headerFooter: {
    // header props
    headerImage: null,
    headerImagePosition: 'topLeft',
    headerBackgroundColor: '#ffffff',
    headerBackgroundColorEnable: true,
    headerApplyToFirestPageOnly: false,
    // footer props
    footerFontSize: '10',
    footerFontColor: '#000000',
    footerImage: null,
    footerImagePosition: 'topLeft',
    footerBackgroundColor: '#ffffff',
    footerBackgroundColorEnable: true,
    showPageNumber: true,
    showGeneratedDate: false,
    showGeneratedTime: false
  },
  table: {
    borderEnable: true,
    borderColor: '#000000',
    //   table header props
    headerFontSize: '14',
    headerBackgroundColorEnable: true,
    headerBackgroundColor: '#ffffff',
    headerFontColor: '#000000',
    //   table content props
    itemRowFontSize: '12',
    itemRowBackgroundColorEnable: true,
    itemRowBackgroundColor: '#ffffff',
    itemRowFontColor: '#000000',
    itemDescriptionFontSize: '8',
    itemDescriptionFontColor: '#333333'
  },
  selectedTemplate: 4,
  defaultTemplate: null,
  defaultLables:[
    { label: 'Admission No:', value: 'P00912' ,enable:true},
    { label: "Student's Name:", value: 'Shraya Kumari' ,enable:true},
    { label: 'Class:', value: 'I-A' ,enable:true},
  ],
  labels: [
    
    { label: "Father's Name:", value: 'krishna Kumar' ,enable:true},
    { label: 'Tel(M):', value: 'XXXXXXXXXX' ,enable:true},
    { label: 'Email:', value: '123@gmail.com' ,enable:true},
    { label: 'Invoice No:[SS*]:', value: '13683' ,enable:true},
    { label: 'Invoice Date:', value: '31-Jan-2024' ,enable:true},
    { label: 'Academic Year:', value: '2023-2024' ,enable:true},
    { label: 'Fee Period:', value: 'Feb`24-Mar`24' ,enable:true},
    { label: 'Due Date:', value: '15-Jan-2024' ,enable:true},
    { label: 'Net Amount Payable:', value: '5,900',enable:true },
    { label: 'Address:', value: 'Sohna Dhani Road Road Ward No -01 Sohna Gurugram haryana Sohna-122103' ,enable:true},
  ],
  termsAndConditions:'<p>Your School\'s Terms and Conditions will be displayed here. You can add it in the Invoice Preferences page under Settings.</p>'
};

// Create a slice using createSlice from Redux Toolkit
const invoiceSlice = createSlice({
  name: 'invoice', // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer functions to update general properties
    updateGeneralProperty(state, action) {
      console.log(action.payload);
      const { key, value } = action.payload;
      state.general[key] = value;
    },
    // Reducer functions to update headerFooter properties
    updateHeaderFooterProperty(state, action) {
      const { key, value } = action.payload;
      state.headerFooter[key] = value;
    },
    // Reducer functions to update table properties
    updateTableProperty(state, action) {
      const { key, value } = action.payload;
      state.table[key] = value;
    },
    updateSelectedTemplate(state, action) {
      state.selectedTemplate = action.payload;
    },
    updateLabels(state, action) {      
      state.labels = action.payload;
    },
    updateTermsAndConditions(state,action){
      state.termsAndConditions=action.payload
    }

  }
});
export const { updateGeneralProperty, updateHeaderFooterProperty, updateTableProperty, updateSelectedTemplate, updateLabels,updateTermsAndConditions } = invoiceSlice.actions;

// Export the reducer itself to be used in combineReducers
export default invoiceSlice.reducer;
