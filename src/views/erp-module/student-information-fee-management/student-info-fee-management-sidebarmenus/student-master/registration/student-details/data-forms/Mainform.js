import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FormControlLabel,Radio, TextField,Tab, Button } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import StudentDetailsForm from './StudentDetails'


const Mainform = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper >
        <Box >
          <Grid container spacing={0} sx={{display:"flex",flexDirection:"column",padding:"20px"}}>
            <Grid  item>
               <Typography variant="body1" color="initial">Type :</Typography> 
               <FormControlLabel value="best" control={<Radio />} label="Old" />
               <FormControlLabel value="best" control={<Radio />} label="New" />
            </Grid>
            <Grid  item >
               <Typography variant="body1" color="initial">Primary Contact:</Typography> 
                <TextField  label="First Name" sx={{padding:" 10px"}}/>
                <TextField  label="Middle Name" sx={{padding:" 10px"}}/>
                <TextField  label="Last Name" sx={{padding:" 10px"}}/>
            </Grid>
            <Grid item >
                <Grid container spacing={0}>
                  <Grid item>
                  <Typography variant="body1" color="initial">Adm no.</Typography>
                <TextField  label="First Name" sx={{padding:" 10px"}}/>
                  </Grid>
                  <Grid item>
                  <Typography variant="body1" color="initial">Adm Date.</Typography>
                <TextField  type="date"  sx={{padding:" 10px"}}/>
                    </Grid>
                </Grid>
              
            </Grid>
            <Grid item>
            <Grid container spacing={0}>
                  <Grid item>
                  <Typography variant="body1" color="initial">Class:</Typography>
                <TextField  label="First Name" sx={{padding:" 10px"}}/>
                  </Grid>
                  <Grid item>
                  <Typography variant="body1" color="initial">Section</Typography>
                <TextField    sx={{padding:" 10px"}} label="section"/>
                    </Grid>
                </Grid>
            </Grid>
      
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Primary Detail" value="1" />
            <Tab label="Address" value="2" />
            <Tab label="Contact" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <StudentDetailsForm/>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
          </Grid>
        </Box>
        <Paper sx={{ position: "fixed", bottom: "0", width: "81.1%", backgroundColor: "#C0C0C0",zIndex:"3" }}>
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
