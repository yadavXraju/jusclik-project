import React from 'react'
import Button from '@mui/material/Button';
import { Grid,Paper, TextField, Card, CardContent, CardHeader, Typography } from '@mui/material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';


function ProfileDetail() {
  return (
    <>
        <Grid container spacing={1} sx={{ flexDirection: 'column', padding: '20px' }}>
          {/* upload image */}
        <Grid item>
          <Grid container  xs={12} md={12}>
            <Grid item md={4}>
            <Paper>
          <Card>
            <CardHeader title="Upload Image"  sx={{padding:"10px 5px"}} />
            <CardContent  sx={{padding:"0px 5px",display:"flex",alignItems:"flex-end",'&:last-child': { pb: 0 }}}  >
            <Button
             component="label"
             role={undefined}
             color="secondary"
              variant="outlined"
             tabIndex={-1}
             startIcon={< AddAPhotoOutlinedIcon/>}
            sx={{ height:"100px",width:"100px",borderRadius:"50%" }}
             > </Button>
             <Typography variant="caption" color="initial"  sx={{margin:"2px 4px"}}>Allowed &apos;image/*&apos; 
                                                    *.png, *.jpeg, *.jpg, *.gif</Typography>
            </CardContent>
          </Card>
        </Paper>
            </Grid>
                      {/* Admission Details */}
    <Grid item md={8}>
        <Paper>
          <Card>
            <CardHeader title="A .Admission Details"  sx={{padding:"10px 5px"}} />
    
            <CardContent   sx={{padding:"0px 5px",'&:last-child': { pb: 0 }}}>
              <Grid container spacing={1}>
                <Grid item xs={4} md={6}>
                  
                  <TextField label="Adm no." variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4} md={6}>
                 
                  <TextField type="date" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4} md={6}>
                
                  <TextField type="date" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
          </Grid>
    
      </Grid>

      {/* Primary Contact */}
      <Grid item>
        <Paper>
          <Card>
            <CardHeader title="B. Primary Contact"  sx={{padding:"10px 5px"}} />
            <CardContent   sx={{padding:"0px 5px",'&:last-child': { pb: 0 }}}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <TextField label="First Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Middle Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Last Name" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      {/* Personal Detail */}
      <Grid item>
        <Paper>
          <Card>
            <CardHeader title="C. Personal Details"  sx={{padding:"10px 5px"}} />
            <CardContent  sx={{padding:"0px 5px",'&:last-child': { pb: 0 }}}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
             
                  <TextField label="Gender" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
                 
                  <TextField type="date" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
                 
                  <TextField label="Age" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>

      {/* Joining Date & Age */}
      <Grid item>
        <Paper>
          <Card>
            <CardHeader title="D. Class details"   sx={{padding:"10px 5px"}}/>
          
            <CardContent   sx={{padding:"0px 5px",'&:last-child': { pb: 0 }}}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                
                  <TextField label="Class" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
                 
                  <TextField variant="outlined" fullWidth label="Section" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      {/* Email & Contact */}
      <Grid item>
        <Paper>
          <Card>
            <CardHeader title="E. Contact details"  sx={{padding:"10px 5px"}} />
        
            <CardContent  sx={{padding:"0px 5px",'&:last-child': { pb: 0 }}}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                 
                  <TextField label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
               
                  <TextField label="Mobile" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      </Grid>
    </>
  )
}

export default ProfileDetail
