import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Grid } from '@mui/material';

const FatherDetail = () => {
  return (
    <div>
  <Paper variant="outlined" elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
  <IconButton aria-label="edit" sx={{ position: 'absolute', top: '5px', right: '5px', zIndex: 1 }}>
        <EditIcon />
      </IconButton>
      <Box>
        <Typography variant="h6" gutterBottom>
          Fathers Detail
        </Typography>
        <Divider />
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
            <Typography variant="subtitle1" gutterBottom>
                Name:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Mr. John Doe
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                DOB:
              </Typography>
              <Typography variant="body1" gutterBottom>
                January 1, 1990
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Education:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Bachelor &apos; s in Computer Science
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Email:
            </Typography>
            <Typography variant="body1" gutterBottom>
              jane.doe@example.com
            </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" gutterBottom>
                PAN:
              </Typography>
              <Typography variant="body1" gutterBottom>
                ABCDE1234F
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Company:
              </Typography>
              <Typography variant="body1" gutterBottom>
                XYZ Corporation
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Address (Office):
              </Typography>
              <Typography variant="body1" gutterBottom>
                123 Main Street, City, Country
              </Typography>
            </Grid>
            <Grid item xs={4}>

              <Typography variant="subtitle1" gutterBottom>
                Occupation:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Software Engineer
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Aadhaar No:
              </Typography>
              <Typography variant="body1" gutterBottom>
                1234 5678 9012
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Designation:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Senior Software Engineer
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
    </div>
  )
}

export default FatherDetail
