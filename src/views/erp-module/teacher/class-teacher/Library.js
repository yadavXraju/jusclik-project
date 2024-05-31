// sangeeta

import React from 'react';
import { Box, Paper, Button, Grid } from '@mui/material';
import CustomTextField from 'components/ui/custom-input/TextField';

const Library = () => {

  const[libraryInfo,setLibraryInfo] =React.useState({
    accessionNo:'',
    title:'',
    
    
  })

  const handleChange= (e)=>{
    const{name,value}=e.target;
    setLibraryInfo({...libraryInfo,[name]:value})
  }

  return (
    <div style={{ backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box>
        <Paper elevation={3} sx={{ padding: '20px', backgroundColor: 'white' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomTextField   label="Accession No" name='accessionNo'  onchange={handleChange}  customStyle={{width:"100%"}} />
              {/* <TextField label="Accession No" variant="outlined" fullWidth /> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <CustomTextField   label="Title" name='title'  onchange={handleChange} customStyle={{width:"100%"}}  />
              {/* <TextField label="Title" variant="outlined" fullWidth /> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <CustomTextField   label="Author" name='author'  onchange={handleChange}  customStyle={{width:"100%"}} />
              {/* <TextField label="Author" variant="outlined" fullWidth /> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <CustomTextField   label="Publisher" name='publisher'  onchange={handleChange}  customStyle={{width:"100%"}}  />
              {/* <TextField label="Publisher" variant="outlined" fullWidth /> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <CustomTextField label="Year"   name='year'  onchange={handleChange}    customStyle={{width:"100%"}}/>
              {/* <TextField label="Year" variant="outlined" fullWidth /> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <CustomTextField  label="Subject"  name='subject'  onchange={handleChange} customStyle={{width:"100%"}}  />
              {/* <TextField label="Subject" variant="outlined" fullWidth /> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <CustomTextField    label="Medium" name='medium'  onchange={handleChange}  customStyle={{width:"100%"}}  />
              {/* <TextField label="Medium" variant="outlined" fullWidth /> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <CustomTextField   label="Status"  name='status'  onchange={handleChange} customStyle={{width:"100%"}}  />
              {/* <TextField label="Status" variant="outlined" fullWidth /> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <CustomTextField   label="Book Required Date" name='bookRequiredDate'  onchange={handleChange}  customStyle={{width:"100%"}}  />
              {/* <TextField label="Book Required Date" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} /> */}
            </Grid>
            <Grid item xs={12} >
            <CustomTextField   label="Remaks" name='remark'  onchange={handleChange} customStyle={{width:"100%"}} multiline={true}  rows={3}/>
              {/* <TextField label="Remarks" variant="outlined" multiline rows={4} fullWidth /> */}
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Submit
          </Button>
        </Paper>
      </Box>
    </div>
  );
};

export default Library;
