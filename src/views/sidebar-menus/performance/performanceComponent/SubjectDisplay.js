import React from 'react'
import { Box,Typography ,Paper,Grid} from '@mui/material'

import LinearProgressWithLabel from './SubjectProgress';
function SubjectDisplay({ subject, progress,index ,marks,grade}) {
    const borderColor = index % 2 === 0 ? '#EDE7F6' : '#90CAF9';
  return (
    <>
    <Paper elevation={1} sx={{padding:"10px 20px",borderLeft:`5px solid ${borderColor}`,margin:"10px 20px",borderRadius:"0"}} >
    <Box  mt={2} >
           
            <Grid sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <Grid item>
              <Typography variant="h5">{subject}</Typography>
              <Typography variant="h6">Marks:-{marks}</Typography>
              </Grid>
              <Grid item sx={{textAlign:"right"}}>
              <Typography variant="h6">Grade:-{grade}</Typography>
              <Typography variant="h6">{progress}%</Typography>
              </Grid>
            </Grid>
            
            <Box sx={{width:"100%"}}> <LinearProgressWithLabel value={progress} /></Box>
    </Box>
    </Paper>
   
  </>
  )
}

export default SubjectDisplay