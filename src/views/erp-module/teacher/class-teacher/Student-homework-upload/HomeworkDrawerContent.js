import * as React from 'react';
import {Box,Grid , TextField , Stack , Button } from '@mui/material';
import HomeCategory from './HomeCategory';
import HomeworkTemplate from './HomeworkTemplate';
import HomeReplyBox from './HomeReplyBox';
import { CommonDropZone } from 'components/upload-file/DropZone';
import HomeYoutubeLink from './HomeYoutubeLink';
// =========== home date start
function HomeDate({label}) {

  return (
 <>
   <TextField
      id="outlined-select-option"
      type="date"
      fullWidth
      label={label}
      sx={{margin:"10px"}}
      InputLabelProps={{
        shrink: true,
      }}
    />
 </>
  )
}
// =========== home date end

// =========== home drawer start
export function HomeDrawerSubmit() {
  return (
    <Stack spacing={2} direction="row" sx={{display:'flex', justifyContent:'center'}}>
      <Button variant="contained">Submit</Button>
    </Stack>
  );
}
// =========== home drawer end

// =========== Home workTopic start
export  function HomeworkTopic() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' }, paddingLeft:'4px', paddingRight:'8px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Topic" variant="outlined" />
  
    </Box>
  );
}
// =========== Home workTopic end

function HomeworkDrawerContent() {
  const [selectedFile,setSelectedFile]=React.useState(null)
   const stateHandler=(_,value)=>setSelectedFile(value)
  const isMobile = window.innerWidth < 600;
  return (
    <>
      <Box>
        <Grid
          container
          spacing={1}
          justifyContent="space-around"
          sx={{ paddingLeft: isMobile ? '4px' : '5px', paddingRight: isMobile ? '11px' : '11px', paddingTop: '12px' }}
        >
          <Grid item xs={12} sm={6}>
            <HomeDate label="Homework Date:" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HomeDate label="Submission Date:" />
          </Grid>
        </Grid>
        <Grid item sx={{ paddingTop: '12px' }}>
          <HomeCategory />
        </Grid>
        <Grid container spacing={1} sx={{ paddingTop: '11px' }}>
          <Grid item xs={12}>
            <HomeworkTopic />
          </Grid>
          <Grid item xs={12}>
            <HomeworkTemplate />
          </Grid>
          <Grid item xs={12}>
            <HomeReplyBox />
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: isMobile ? '30px' : '0px' }}>
          <CommonDropZone stateHandler={stateHandler} selectedFile={selectedFile} updatekey={'_'} />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: isMobile ? '10px' : '10px', paddingRight: isMobile ? '11px' : '8px', paddingTop: '5px' }}>
          <HomeYoutubeLink />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '20px' }}>
          <HomeDrawerSubmit />
        </Grid>
      </Box>
    </>
  );
}

export default HomeworkDrawerContent;