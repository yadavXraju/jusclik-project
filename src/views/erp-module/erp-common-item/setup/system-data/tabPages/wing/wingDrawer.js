import React from 'react';
import useDrawer from 'hooks/useDrawer';
import {Button, Typography, Box} from '@mui/material';
import TextField from '@mui/material/TextField';

const MargeDrawer = () => {
   const{toggleDrawer}=useDrawer();
  return (
    <>   
      <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Marge</Typography>
          <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
         <Box>
         <form>
          <Box sx={{ padding: 2 }}>
            <Box pb={2}>
            <TextField id="outlined-basic" label="Marge" variant="outlined" fullWidth />
            </Box>
            <Box pb={2}>
            <TextField id="outlined-basic" label="Amount" variant="outlined" fullWidth />
            </Box>
            <Box pb={2}>
            <TextField id="outlined-basic" label="Class" variant="outlined" fullWidth />
            </Box>
            <Box sx={{ padding: 2 }}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button sx={{ alignSelf: 'flex-end' }}>Cancal</Button>
            </Box>
          </Box>
        </form>
         </Box>
      </Box>
    </>
  );
};
export default  MargeDrawer