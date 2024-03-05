import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import AvatarImage from '../../../../../../../assets/images/avatar.png';

const Student = () => {
  return (
    <Paper variant="outlined" elevation={3} sx={{ padding: '20px', marginBottom: '20px', position: 'relative', backgroundColor: '#f5f5f5' }}>
      <IconButton aria-label="edit" sx={{ position: 'absolute', top: '5px', right: '5px', zIndex: 1 }}>
        <EditIcon />
      </IconButton>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={3} display="flex" alignItems="center">
          <Avatar alt="Student Avatar" src={AvatarImage} sx={{ width: 100, height: 100 }} />
          <Box ml={2}>
            <Typography variant="h5" gutterBottom>
              Sangeeta
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Class XII-B
            </Typography>
            <Typography variant="body1" gutterBottom>
              Age: 12
            </Typography>
            <Typography variant="body1" gutterBottom>
              Joining Date: 13-May-2022
            </Typography>
            <Typography variant="body1" gutterBottom>
              Adm No.: 1213
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box ml={2}>
            <Typography variant="h6" gutterBottom>
              Primary Details
            </Typography>
            <Divider />
            <Box mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    <strong>D.O.B:</strong> 14-July-2000
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>House:</strong> Red
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Contact:</strong> +1234567890
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Address (Residential):</strong> Lorem Ipsum Street, City
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    <strong>Blood Group:</strong> A
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Nationality:</strong> Indian
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Religion:</strong> Hindu
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    <strong>Pay Mode:</strong> Yearly
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Join Class:</strong> 6
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Student;