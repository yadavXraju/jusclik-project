// import {
//   Box,
//   Button,
//   FormControl,
//   Grid,
//   MenuItem,
//   Paper,
//   Select,
//   TextField,
// } from '@mui/material';
// import React from 'react';
// import { useState } from 'react';
// import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
// import PrimaryDetail from './enquirycomponent/PrimaryDetail';
// import GardianComponent from './enquirycomponent/GardianComponent';
// import UpperComponent from './enquirycomponent/UpperComponent';
// //sample data



// const Enquiry = () => {
//   const [template, setTemplate] = useState('');



//   const handleChange = (event) => {
//     setTemplate(event.target.value);
//   };



//   return (
//     <Grid container spacing={4} sx={{ marginTop: '20px' }}>
//       <Grid item xs={10}>
//         <Grid item xs={12}>
//           <Grid container>
//             <Grid item xs={12}>
//               <Uppercomponent/>
//             </Grid>
//             <Grid item xs={12} sx={{ marginTop: '10px' }}>
//               <Paper>
//                <PrimaryDetail/>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sx={{ marginTop: '40px' }}>
//              <Gardiancomponent/>
//             </Grid>
//             <Grid item xs={12} sx={{ marginTop: '40px' }}>
//               <Paper>
//                 <h3 style={{ padding: '20px 20px 0px 20px', fontSize: '1.14rem' }}>Sibling Details</h3>
//                 <Grid container sx={{ padding: '25px' }} spacing={3}>
//                   <Grid item xs={4}>
//                     <FormControl fullWidth>
//                       <Select labelId="demo-simple-select-label" id="demo-simple-select" value={template} onChange={handleChange}>
//                         <MenuItem value={1}>Admission</MenuItem>
//                         <MenuItem value={2}>Other</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <TextField id="address-textfield" variant="outlined" fullWidth />
//                   </Grid>
//                 </Grid>
//                 <Grid item  sx={{textAlign:"right", padding:"20px"}}>
//                 <Button variant="contained" color="primary">
//                   Submit
//                 </Button>
//                 </Grid>
                
//               </Paper>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item xs={2}>
//         <Paper>
//           <Grid container spacing={3} sx={{ padding: '25px' }}>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   // endIcon={<PointOfSaleOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Fee Entry
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   // endIcon={<PeopleOutlineOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Fee Details
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   // endIcon={<PeopleOutlineOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Transport Details
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   // endIcon={<PeopleOutlineOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Optional Fee
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   // endIcon={<PeopleOutlineOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Custom Fields
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   // endIcon={<PeopleOutlineOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Enrollment Status
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   // endIcon={<PeopleOutlineOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Upload Docs
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   // endIcon={<PeopleOutlineOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Input Remarks
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   // endIcon={<PeopleOutlineOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Student Details
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   endIcon={<EmailOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Email
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   endIcon={<PrintOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Print
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   endIcon={<FileDownloadOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Import
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   endIcon={<PeopleOutlineOutlinedIcon />}
//                   // onClick={toggleDrawer('right', true)}
//                   fullWidth
//                 >
//                   Guest Login
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default Enquiry;

import React from 'react'
import AdmissionTable from '../admission'

function index() {
  return (
    <div>
      <AdmissionTable/>
    </div>
  )
}

export default index
