import React  from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


const MotherDetail = () => {




  return (
    <Paper variant="outlined" elevation={3} sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#f5f5f5', position: 'relative' }}>
      <IconButton aria-label="edit"  sx={{ position: 'absolute', top: '5px', right: '5px', zIndex: 1 }}>
        <EditIcon />
      </IconButton>
      <Typography variant="h6" gutterBottom>
        Mother &aposs Details
      </Typography>
      <Divider />
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant="subtitle1" gutterBottom>
              Name:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Ms. Jane Doe
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              DOB:
            </Typography>
            <Typography variant="body1" gutterBottom>
              February 1, 1980
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Occupation:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Teacher
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Education:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Bachelor &apos;s Degree
            </Typography>
            {/* Add other mother details here */}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" gutterBottom>
              Aadhaar No:
            </Typography>
            <Typography variant="body1" gutterBottom>
              9876 5432 1098
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              PAN:
            </Typography>
            <Typography variant="body1" gutterBottom>
              XYZW5678G
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Address (O):
            </Typography>
            <Typography variant="body1" gutterBottom>
              456 Education Avenue, City
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Email:
            </Typography>
            <Typography variant="body1" gutterBottom>
              jane.doe@example.com
            </Typography>
            {/* Add more mother details here */}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" gutterBottom>
              Company:
            </Typography>
            <Typography variant="body1" gutterBottom>
              XYZ School
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Designation:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Teacher
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Phone:
            </Typography>
            <Typography variant="body1" gutterBottom>
              +9876543210
            </Typography>
            {/* Add more mother details here */}
          </Grid>
        </Grid>
      </Box>
      
    </Paper>
  )

};

export default MotherDetail;
