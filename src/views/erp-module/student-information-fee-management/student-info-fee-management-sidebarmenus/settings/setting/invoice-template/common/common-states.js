
// this is for dropdown
export const fontFamily = {
  ubuntu: 'Ubuntu',
  openSans: 'Open Sans',
  dejaVuSans: 'DejaVu Sans',
  hind: 'Hind',
  hindMadurai: 'Hind Madurai'
};
export const imagePosition = {
  topLeft: 'Top Left',
  topCenter: 'Top Center',
  topRight: 'Top Right',
  centerLeft: 'Center Left',
  centerCenter: 'Center Center',
  centerRight: 'Center Right',
  bottomLeft: 'Bottom Left',
  bottomCenter: 'Bottom Center',
  bottomRight: 'Bottom Right'
};

// this is for St. Xavier High School
export const templateCompact={
    numberOfCopies:3,
    copy1Name:'Bank Copy',
    copy2Name:'School Copy',
    copy3Name:'Parent Copy',
}
export const commonTemplateContent={
  schoolName: 'ST XAVIER\'S HIGH SCHOOL',
  bankName: 'Union Bank of India ',  
  bankAccNumber: '510101002874465',
  bankIfscCode: 'UBIN0916366',
  admissionNo: 'P00912',
  className: 'I-A',
  name: 'Shraya Kumari',
  mobile: '9845622785',
  fatherName: 'krishna Kumar',
  invoiceNo: '13683',
  invoiceDate: '31-Jan-2024',
  academicYear: '2023-2024',
  feePeriod: 'Feb`24-Mar`24',
  dueDate: '15-Jan-2024',
  tutionFee: '4,900',
  invoiceTotal: '5,900',
  previousBalance: '0',
  netAmountPayable: '5,900',
  lateFee: 0,
  compositeFee: '4,900',
  termsAndConditions:'',
  copyName:['School Copy','Parent Copy','Bank Copy'],
  numberOfCopies:0,
  // optional feilds
  SchoolAddress:'Sohna Dhani Road  Ward No - 01 Sohna Gurugram haryana Sohna - 122103',
  schoolTel:'XXXXXXXXXX',
  email:'123@gmail.com',
  concession:'0',
  copy1Name:'School Copy',
  copy2Name:'Parent Copy',
}
export const templateCompact2={
  schoolAddress:'Sohna Dhani Road Road Ward No -01 Sohna Gurugram haryana Sohna-122103',
  schoolTel:'XXXXXXXXXX',
  email:'123@gmail.com',
  lastPaymentDate:'dd-mm-yyyy',
  concession:'0',
  amount:'',
  copy1Name:'School Copy',
  copy2Name:'Parent Copy',
  date:'dd-mm-yyyy'

}
// compact template 1 default values
export const CompactTemplate1DeafultValues={
general:{
  templateName: 'three copies',
  paperSize: 'a4',
  orientation: 'landscape',
  marginTop: '0',
  marginBottom: '0',
  marginLeft: '0',
  marginRight: '0',
  pdfFont: 'ubuntu',
  labelColor: '#000000',
  fontColor: '#000000',
  fontSize: '12',
  backgroundImage: null,
  imagePosition: 'centerCenter',
  backgroundColorEnable: true,
  backgroundColor: '#ffffff'
}

,
headerFooter:{
  // header props
  headerImage:null,
  headerImagePosition:'topLeft',
  headerBackgroundColor:'#ffffff',
  headerBackgroundColorEnable:true,
  headerApplyToFirestPageOnly:false,
  // footer props
  footerFontSize:'12',
  footerFontColor:'#000000',
  footerImage:null,
  footerImagePosition:'topLeft',
  footerBackgroundColor:'#ffffff',
  footerBackgroundColorEnable:true,
  showPageNumber:true,
  showGeneratedDate:false,
  showGeneratedTime:false,
}

,

tableLayout:{
  borderEnable:true,
  borderColor:'#000000',
//   table header props
  headerFontSize:'12',
  headerBackgroundColorEnable:true,
  headerBackgroundColor:'#ffffff',
  headerFontColor:'#000000',
//   table content props
  itemRowFontSize:'12',
  itemRowBackgroundColorEnable:true,
  itemRowBackgroundColor:'#ffffff',
  itemRowFontColor:'#000000'


}
}

// compact template 4 default values
export const CompactTemplate4DeafultValues={
general:{

  templateName: 'standard',
  paperSize: 'a4',
  orientation: 'portrait',
  marginTop: '0',
  marginBottom: '0',
  marginLeft: '0',
  marginRight: '0',
  pdfFont: 'ubuntu',
  labelColor: '#000000',
  fontColor: '#000000',
  fontSize: '12',
  backgroundImage: null,
  imagePosition: 'centerCenter',
  backgroundColorEnable: true,
  backgroundColor: '#ffffff'

}
,
  headerFooter:{
    // header props
    headerImage:null,
    headerImagePosition:'topLeft',
    headerBackgroundColor:'#ffffff',
    headerBackgroundColorEnable:true,
    headerApplyToFirestPageOnly:false,
    // footer props
    footerFontSize:'12',
    footerFontColor:'#000000',
    footerImage:null,
    footerImagePosition:'topLeft',
    footerBackgroundColor:'#ffffff',
    footerBackgroundColorEnable:true,
    showPageNumber:true,
    showGeneratedDate:false,
    showGeneratedTime:false,
},
tableLayout:{
  borderEnable:true,
  borderColor:'#000000',
//   table header props
  headerFontSize:'12',
  headerBackgroundColorEnable:true,
  headerBackgroundColor:'#3c3d3a',
  headerFontColor:'#ffffff',
//   table content props
  itemRowFontSize:'12',
  itemRowBackgroundColorEnable:true,
  itemRowBackgroundColor:'#ffffff',
  itemRowFontColor:'#000000'


}


}
// compact template 5 default values
export const CompactTemplate5DeafultValues={
  general:{
  
    templateName: 'spreadsheet compact',
    paperSize: 'a4',
    orientation: 'portrait',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    pdfFont: 'ubuntu',
    labelColor: '#000000',
    fontColor: '#000000',
    fontSize: '12',
    backgroundImage: null,
    imagePosition: 'centerCenter',
    backgroundColorEnable: true,
    backgroundColor: '#ffffff'
  
  },
  headerFooter:{
    // header props
    headerImage:null,
    headerImagePosition:'topLeft',
    headerBackgroundColor:'#ffffff',
    headerBackgroundColorEnable:true,
    headerApplyToFirestPageOnly:false,
    // footer props
    footerFontSize:'12',
    footerFontColor:'#000000',
    footerImage:null,
    footerImagePosition:'topLeft',
    footerBackgroundColor:'#ffffff',
    footerBackgroundColorEnable:true,
    showPageNumber:true,
    showGeneratedDate:false,
    showGeneratedTime:false,
},

tableLayout:{
  borderEnable:true,
  borderColor:'#000000',
//   table header props
  headerFontSize:'12',
  headerBackgroundColorEnable:true,
  headerBackgroundColor:'#3c3d3a',
  headerFontColor:'#ffffff',
//   table content props
  itemRowFontSize:'12',
  itemRowBackgroundColorEnable:true,
  itemRowBackgroundColor:'#ffffff',
  itemRowFontColor:'#000000'


}
  

}
