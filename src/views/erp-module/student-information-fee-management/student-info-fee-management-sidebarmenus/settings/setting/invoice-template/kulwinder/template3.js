import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function template3() {
  return (
    <Box>
  <Paper elevation={2} square={true} sx={{ width: '210mm', height: '297mm', padding: '50px 30px' }}>
   
   
   
   
   
   
    <Grid sx={{ border: '1px solid grey'}}>
      <Grid container spacing={2} sx={{ padding: '10px' }}>
        {/* First Grid item */}
        <Grid item lg={6}>
          <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: '5px' }}>Shauryasoft</Typography>
          <Typography variant="body2" sx={{ marginBottom: '5px' }}>Chandigarh</Typography>
          <Typography variant="body2" sx={{ marginBottom: '5px' }}>India</Typography>
          <Typography variant="body2" sx={{ marginBottom: '5px' }}>sangeeta@shauryasoft.com</Typography>
        </Grid>
        {/* Second Grid item */}
        <Grid item lg={6} sx={{ alignItems: 'right' }}>
          <Typography variant="h2" sx={{ marginBottom: '20px', textAlign: 'right' }}>TAX INVOICE</Typography>
          <Typography variant="body2" sx={{ marginBottom: '5px', textAlign: 'right' }}>Invoice# INV-17</Typography>
        </Grid>
      </Grid>
    </Grid>



    <Grid sx={{ border: '1px solid grey' }}> 
      <Grid container spacing={2} sx={{marginTop:'10px', padding:'10px'}} >
        {/* First Grid item */}
        
        <Grid item lg={6} sx={{borderRight: '1px solid grey'}} >
        <Grid container>
        <Grid item lg={6} >
        

        <Typography variant="body2" sx={{ marginBottom: '5px' }}>Invoice Date</Typography>

        <Typography variant="body2" sx={{ marginBottom: '5px' }}>Terms</Typography>
              <Typography variant="body2" sx={{ marginBottom: '5px' }}>Due Date</Typography>
              <Typography variant="body2" sx={{ marginBottom: '5px' }}>P.O.#</Typography>
         
         </Grid>

         <Grid item lg={6}>
        

         <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: 23/03/2024</Typography>
              <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: Due On Receipt</Typography>
              <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: 23/03/2024</Typography>
              <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: SO-17</Typography>

       
       </Grid>

          </Grid>
        </Grid>
        
        
        
        {/* Second Grid item */}
        <Grid item lg={6} >
        <Grid container>
        <Grid item lg={6}>
        
        <Typography variant="body2" sx={{ marginBottom: '5px' }}>Project Name</Typography>

         </Grid>

         <Grid item lg={6}>
        

         <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: Design project</Typography>

       </Grid>

          </Grid>
        </Grid>
      </Grid>





    </Grid>

    



    <Grid container spacing={2} sx={{ padding:'10px'}} >
        {/* First Grid item */}
        
        <Grid item lg={6}  >

        <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>Bill To</Typography>
        
        </Grid>
        
        
        
        {/* Second Grid item */}
        <Grid item lg={6} >
        <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>Ship To</Typography>
        
        </Grid>
      </Grid>






      <Grid sx={{ border: '1px solid grey' }}> 
      <Grid container spacing={2} sx={{marginTop:'10px', padding:'10px'}} >
        {/* First Grid item */}
        
        <Grid item lg={6} sx={{borderRight: '1px solid grey'}} >
        <Grid container>
        <Grid item lg={6} >
        

        <Typography variant="body2" sx={{ marginBottom: '5px' }}>Invoice Date</Typography>

        <Typography variant="body2" sx={{ marginBottom: '5px' }}>Terms</Typography>
              <Typography variant="body2" sx={{ marginBottom: '5px' }}>Due Date</Typography>
              <Typography variant="body2" sx={{ marginBottom: '5px' }}>P.O.#</Typography>
         
         </Grid>

         <Grid item lg={6}>
        

         <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: 23/03/2024</Typography>
              <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: Due On Receipt</Typography>
              <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: 23/03/2024</Typography>
              <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: SO-17</Typography>

       
       </Grid>

          </Grid>
        </Grid>
        
        
        
        {/* Second Grid item */}
        <Grid item lg={6} >
        <Grid container>
        <Grid item lg={6}>
        
        <Typography variant="body2" sx={{ marginBottom: '5px' }}>Project Name</Typography>

         </Grid>

         <Grid item lg={6}>
        

         <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '5px' }}>: Design project</Typography>

       </Grid>

          </Grid>
        </Grid>
      </Grid>





    </Grid>




 
 
 
  </Paper>
</Box>

  

  )
}

export default template3