// ======= Page Owner Vikash =========
// ======= Student Profile Transport Form =========
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function Transport() {
  return (
    <Card sx={{ border: '1px solid #ccc' }}>
    <Typography sx={{p:2, borderBottom: '1px solid #ccc'}} variant='h5'  component="div">
         Transport Details
    </Typography>
    <Box component="form">
      <CardContent>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField id="outlined-basic" fullWidth disabled label="With Effect From" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
        <TextField id="outlined-basic" fullWidth disabled label="Fee Slab" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth disabled label="Pick Route" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth disabled label="Pick Stop" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth disabled label="Drop Route" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth disabled label="Drop Stop" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth disabled label="Pick up time" variant="outlined" />
        </Grid>
        <Grid item sm={6} xs={12}>
        <TextField id="outlined-basic" fullWidth disabled label="Drop time" variant="outlined" />
        </Grid>
      </Grid>
      </Box>
      </CardContent>
      <CardActions>
      <Button variant="contained">Submit</Button>
      </CardActions>
    </Box>
    </Card>
  );
}