import React from 'react'
import{ Paper,Grid,Typography} from '@mui/material'

function Heading() {
  return (
    <Paper elevation={2} style={{ marginBottom: 20, padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
    <Grid container spacing={2} xs={12} alignItems="center">
        <Grid item xs={4} md={3}>
           <Typography variant="h5" color="primary">SUBJECT</Typography>
        </Grid>
        <Grid item xs={4} md={7}>
           <Typography variant="h5" color="primary">TOPIC</Typography>
        </Grid>
        <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: "center" }}>
           <Typography variant="h5" color="primary">ACTION</Typography>
        </Grid>
    </Grid>
  </Paper>
  )
}

export default Heading