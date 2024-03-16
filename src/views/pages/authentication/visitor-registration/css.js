// Define custom styles for the Select component
export const styles = {
  select: {
    '&:before': {
      borderBottom: 'none' // Remove the underline
    },
    '&:after': {
      borderBottom: 'none' // Remove the underline after selection
    }
  }
};
export const css = {
  horizontalCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  vericalCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: '#fff',
    color: '#364152b5',
    borderRadius: '50px',
    border: '1px solid #c4c4c4',
    width: '130px',
    height: '56px',
    fontSize: '15px',
    fontFamily: 'plus Jakarta sans',
    '&:hover': {
      backgroundColor: '#e64b4c',
      color: '#fff'
    },
  },
  marginAuto: {
    margin: 'auto'
  },
  countrySelect: {
    borderRadius: '50px',
    fontSize: '15px',
    fontFamily: 'plus Jakarta sans',
    backgroundColor: '#ffffff',
    width: '25rem'
  },
  parentContainer:{
    minWidth:'80%'
  },
  imageContainer:{backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  height: '100vh',
  padding:'0 10rem'
  },
  parentPaper:{
    backgroundColor: '#ffecec',
    backgroundRepeat: 'no-repeat',
    borderRadius:  '20px 20px 0px 0px',
    padding: '0px 35px',
    width:'500px',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
  },
  parentPaperHeading:{
    welcome:{
      color: '#3a3a3a',
      fontSize: { xs: '1rem', md: '1.5rem' },
      fontFamily: 'plus Jakarta sans',
      textAlign: 'center', marginBottom: '10px' 
    },
    school:{
      color: '#3a3a3a',
      fontSize: { xs: '20px', md: '3rem' },
      fontFamily: 'plus Jakarta sans',
      textAlign: 'center',
      marginBottom: '20px' 
    },
    address:{
      color: '#3a3a3a',
      fontSize: { xs: '1rem', md: '1.5rem' },
      fontFamily: 'plus Jakarta sans', 
      textAlign: 'center', 
      marginBottom: '10px' 
    },
    managedBy:{
       color: '#3a3a3a', 
       fontSize: { xs: '1rem', md: '1rem' }, 
       fontFamily: 'plus Jakarta sans', 
       textAlign: 'center', 
       marginBottom: '10px' 
    },
  },
  parentPaperBox:{
    paddingTop:'6rem',
    paddingBottom:'3rem'
  },
  mobilePaper:{
   minHeight:'10rem',
   borderRadius:'12px',
   padding:'0 1rem' 
  },
  hideSpinButtons: {
    '& input[type="number"]::-webkit-inner-spin-button, & input[type="number"]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type="number"]': {
      '-moz-appearance': 'textfield',
    },
  },

}