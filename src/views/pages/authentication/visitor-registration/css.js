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
  padding:'0 10rem',
  '@media (max-width: 1024px)': {
    display: 'none', // Hide the component on small screens (sm viewport)
  },
  },
  parentPaper:{
    backgroundColor: '#ffecec',
    backgroundRepeat: 'no-repeat',
    borderRadius:  '20px 20px 0px 0px',
    padding: '0px 35px',
    '@media (min-width: 767px)': {
      width:'500px', // Hide the component on small screens (sm viewport)
    },
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
  },
  parentPaperHeading:{
    welcome:{
      // color: '#3a3a3a',
      color:'#E64B4C',
      fontSize: { xs: '1rem', md: '1.5rem' },
      fontFamily: 'plus Jakarta sans',
      textAlign: 'center',
      marginBottom: '10px',
      fontWeight:'500' 
    },
    school:{
      // color: '#3a3a3a',
      color:'#E64B4C',
      fontSize: { xs: '20px', md: '2.5rem' },
      fontFamily: 'plus Jakarta sans',
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight:'500' 
    },
    address:{
      // color: '#3a3a3a',
      // color:'#E64B4C',
      color:'#364152b5',
      fontSize: { xs: '1rem', md: '1.5rem' },
      fontFamily: 'plus Jakarta sans', 
      textAlign: 'center', 
      marginBottom: '10px',
      fontWeight:'500' 
    },
    managedBy:{
      //  color: '#3a3a3a',
      // color:'#E64B4C',
      color:'#364152b5',
       fontSize: { xs: '1rem', md: '1rem' }, 
       fontFamily: 'plus Jakarta sans', 
       textAlign: 'center', 
       marginBottom: '10px',
       fontWeight:'500',
    },
  },
  parentPaperBox:{
    paddingTop:'0rem',
    paddingBottom:'3rem',
    '@media (max-width: 600px)': {
      display: 'none', // Hide the component on small screens (sm viewport)
    },
   
  },
  mobilePaper:{
   minHeight:'10rem',
   borderRadius:'12px',
   padding:'0 1rem' ,
   '@media (max-width: 600px)': {
    padding:'1rem',
    margin:'0 1.5rem'
  },
  },
  mobileNumber:{
    borderRadius: '50px', color: '#6b6666'
  },
  mobileLogoImage:{
    margin: '3rem 0',
    '@media (min-width: 1025px)': {
      display:'none'
    },
  },
  button:{
    margin:'1rem auto',
  },
  video:{
    '@media (min-width: 768px)': {
      display:'none'
    },
  },
  displayNoneOnMd:{
    '@media (max-width: 1024px)': {
      display:'none'
    },
  },
  formTextColor:{
    color:'rgba(0, 0, 0, 0.6)'
  }
}
