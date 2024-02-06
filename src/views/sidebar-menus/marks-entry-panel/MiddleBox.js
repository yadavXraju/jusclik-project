
import { Box, Paper,Avatar,Grid,Typography} from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import ActionButton from './ActionButton';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function MiddleBox() {
  return (
    <>
   <Box>
    <Paper sx={{ mb: 1, display:'flex', justifyContent:'space-between' }}>
    <Grid container rowSpacing={1} direction="row" justifyContent="Center" alignItems="Center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{margin:"20px 0"}}>
            <Grid item>
              <Item>
                <Typography variant='h4' color='#364152' display='flex' alignItems='center'>
                  <Avatar sx={{ width: 30, height: 30, backgroundColor: '#e2526b', color: '#000000', marginRight: '6px', fontSize: '16px' }}>A</Avatar>
                  Absent</Typography>
              </Item>
            </Grid>
            <Grid item >
              <Item>
                <Typography variant='h4' color='#364152' display='flex' alignItems='center'>
                  <Avatar sx={{ width: 30, height: 30, backgroundColor: '#eeb058', color: '#000000', marginRight: '6px', fontSize: '16px' }}>L</Avatar>
                  Leave</Typography>
              </Item>
            </Grid>

          </Grid>
          <Grid sx={{marginRight:'60px', marginTop:'6px'}}>
            <Item>
              <ActionButton/>
            </Item>
          </Grid>
    </Paper>
   </Box>
    </>
  )
}

export default MiddleBox
