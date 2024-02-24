// import React from 'react'
// import FormControl from '@mui/material/FormControl';
// import { FormLabel, Paper,Button } from '@mui/material';
// import Grid from '@mui/system/Unstable_Grid/Grid';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// const subjects = [
//   { value: "1", label: "English", teachers: ["ruby"], classes: [{ class: "V", section: "A" }, { class: "V", section: "B" }, { class: "IX", section: "B" }, { class: "XII", section: "B" }] },
//   { value: "2", label: "Hindi", teachers: [], classes: [{ class: "V", section: "A" }, { class: "XI", section: "B" }, { class: "IX", section: "C" }] },
//   { value: "3", label: "Punjabi", teachers: [], classes: [{ class: "V", section: "A" }, { class: "XI", section: "B" }, { class: "IX", section: "C" }] },
//   { value: "5", label: "Science", teachers: ["ruby"], classes: [{ class: "V", section: "A" }, { class: "X", section: "B" }, { class: "IX", section: "A" }, { class: "XII", section: "C" }] },
// ];


// const BlackListedVisitor = () => {
//   // const [selectedValue, setSelectedValue] = useState({
//   //   "":"",
//   //   "":""
//   // });

//   return (
//     <Grid>
//       <Grid xs>
//         <Paper>
//           <FormControl sx={{ width: '100%' }}>
//             <FormLabel>Report Title</FormLabel>
//             <lable></lable>
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={subjects}
//               sx={{ width: 300 }}
//               onChange={(event, newValue) => {
//                 setSelectedValue(newValue);
//               }}
//               renderInput={(params) => <TextField {...params} label="" />}
//             />
//           </FormControl>
//           <FormControl sx={{ width: '100%' }}>
//             <FormLabel sx={{ mt: "20px" }}>Select Action</FormLabel>
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={subjects}
//               sx={{ width: 300 }}
//               renderInput={(params) => <TextField {...params} label="" />}
//             />
//           </FormControl>
//           <Button sx={{color: '#fff',marginTop:'1rem' }} variant="contained"  onClick={() => navigate('/parent/student-profile')}>
//           Submit
//         </Button>
//         </Paper>
//       </Grid>
//     </Grid >
//   )
// }

// export default BlackListedVisitor



const BlackListedVisitor = () => {
  return (
    <>
      black listed visitor
    </>
  )
}

export default BlackListedVisitor;