import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

export default function Credentials() {
  return (
    <Card sx={{ border: '1px solid #ccc' }}>
      <Typography sx={{ p: 2, borderBottom: '1px solid #ccc' }} variant='h5' component="div">
        Credentials
      </Typography>
      <Box component="form">
        <CardContent>
          <FormControl disabled variant="standard" fullWidth>
            <InputLabel htmlFor="namefield">User Name</InputLabel>
            <Input
              id="namefield"
              value={"vikash"}
              endAdornment={
                <InputAdornment sx={{paddingBottom: '10px'}} position="end">
                  <Button size='small' variant="contained">Change User Name</Button>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl disabled variant="standard" fullWidth>
            <InputLabel htmlFor="namefield">Password</InputLabel>
            <Input
              id="namefield"
              endAdornment={
                <InputAdornment sx={{paddingBottom: '10px'}} position="end">
                  <Button size='small' variant="contained">Reset Password</Button>
                </InputAdornment>
              }
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="contained">Submit</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
