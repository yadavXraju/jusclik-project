import React from 'react'
import { Grid, Typography, Box, Paper, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Dropdown from 'views/common-section/ParamSelectList';

function Declaration() {

    const SelectDeclareOptions = [
        {value:'yes' , label:'Yes'},
        {value:'no' , label:'No'},
    ]
  return (
    <>

<>
      <Grid item xs={10}  sx={{ paddingTop: '0 !important', paddingRight: '4rem'  }}>
        <Paper sx={{height:'86vh'}}>
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 9 : DECLARATION{' '}
            </Typography>

            
            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>

            <Dropdown
                label="Declare"
                options={SelectDeclareOptions}
            
                rootStyle={{ marginTop: '20px' }}
                customStyle={{ '& > div': { background: '#ffffff' } }}
              />
              
              {/* <Box sx={{ paddingBottom: '2rem', paddingTop: '3rem' }}>
            <Button onClick={() => handleSubmit('three')} variant="contained" sx={{ height: '38px', width: '144px' }}>
              Save and Next
            </Button>
          </Box> */}

            </Grid>

            <Grid item xs={4}>
              
            </Grid>

            <Grid item xs={4}>
              
            </Grid>
          </Grid>

          <Box sx={{ paddingBottom: '2rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('three')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
    
    </>
  )
}

export default Declaration