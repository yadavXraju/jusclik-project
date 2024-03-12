import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {TextField,Tab, Button, Divider ,Card, CardHeader, CardContent,styled, Typography} from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import StudentAddressForm from './StudentAdressForm'
import StudentsOtherDetails from './StudentsOtherDetails'
import StudentsContactPerson from './StudentsContactPerson'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const Mainform = () => {

  

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <>
      <Paper >
        <Box >
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
             > <VisuallyHiddenInput type="file" /></Button>
             <Typography variant="caption" color="initial"  sx={{margin:"2px 4px"}}>Allowed &apos;image/*' 
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
      


      <Divider  sx={{marginTop:"20px"}}/>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Other Details" value="1" />
            <Tab label="Address" value="2" />
            <Tab label="Contact person" value="3" />
            <Tab label="Custom feilds" value="4" />
            <Tab label="Remark" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <StudentsOtherDetails/>
        </TabPanel>
        <TabPanel value="2"><StudentAddressForm/></TabPanel>
        <TabPanel value="3"><StudentsContactPerson/></TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
      </TabContext>
    </Box>
          </Grid>
        </Box>
        <Paper sx={{ position: "fixed", bottom: "0", width: "100%", backgroundColor: "#C0C0C0",zIndex:"3" }}>
    <Box sx={{ background: "#c1c1c1", padding:"20px"}}>
        <Grid container spacing={1}>
            <Button variant="contained" color="primary">
                Submit
            </Button>
            <Button variant="contained" color="secondary">
                Save
            </Button>
        </Grid>
    </Box>
</Paper>
      </Paper>
      
    </>
  )
}

export default Mainform
