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
     headerImage:null,
     headerImagePosition:'topLeft',
     headerBackgroundColor:'#ffffff',
     headerBackgroundColorEnable:true,
     headerApplyToFirestPageOnly:false,
     // footer props
     footerFontSize:'10',
     footerFontColor:'#000000',
     footerImage:null,
     footerImagePosition:'topLeft',
     footerBackgroundColor:'#ffffff',
     footerBackgroundColorEnable:true,
     showPageNumber:true,
     showGeneratedDate:false,
     showGeneratedTime:false,
  },
  table: {
    borderEnable:true,
      borderColor:'#000000',
    //   table header props
      headerFontSize:'9',
      headerBackgroundColorEnable:true,
      headerBackgroundColor:'#ffffff',
      headerFontColor:'#000000',
    //   table content props
      itemRowFontSize:'9',
      itemRowBackgroundColorEnable:true,
      itemRowBackgroundColor:'#ffffff',
      itemRowFontColor:'#000000',
      itemDescriptionFontSize:'8',
      itemDescriptionFontColor:'#333333',
  },
  selectedTemplate:1
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
      updateSelectedTemplate(state,action){
        state.selectedTemplate=action.payload
      }

  },
});
export const {
    updateGeneralProperty,
    updateHeaderFooterProperty,
    updateTableProperty,
    updateSelectedTemplate
  } = invoiceSlice.actions;
  
// Export the reducer itself to be used in combineReducers
export default invoiceSlice.reducer;
