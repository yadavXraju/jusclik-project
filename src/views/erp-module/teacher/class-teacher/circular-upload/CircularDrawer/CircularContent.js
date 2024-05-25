import * as React from 'react';
import {  Grid } from '@mui/material';
import CircularDate from './CircularDate';
import HomeReplyBox from 'views/erp-module/teacher/class-teacher/Student-homework-upload/HomeWorkDrawer/HomeReplyBox';
import HomeYoutubeLink from 'views/erp-module/teacher/class-teacher/Student-homework-upload/HomeWorkDrawer/HomeYoutubeLink';
import CircularTopic from './CircularTopic';
import HomeworkTemplate from 'views/erp-module/teacher/class-teacher/Student-homework-upload/HomeWorkDrawer/HomeworkTemplate';
import CircularCategory from './CircularCategory';
import CirclarSelectClass from './CircularSelectClass';
import { CommonDropZone } from 'components/upload-file/DropZone';

const CircularContent = () => {
  const [selectedFile,setSelectedFile]=React.useState(null)
  const stateHandler=(_,value)=>setSelectedFile(value)
  return (
    <>
       <Grid>
     <Grid item sx={{ paddingLeft: '7px', paddingRight: '7px', paddingTop: '10px' }} xs={12}>
      <CircularDate label="Circular Date:" />
       </Grid>
       <Grid item xs={12} sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
        <CircularCategory />
       </Grid>
       <Grid item xs={12} sx={{ paddingTop: '6px' }}>
         <CirclarSelectClass />
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: '6px' }}>
          <CircularTopic />
       </Grid>
        <Grid item xs={12} sx={{ paddingTop: '6px' }}>
         <HomeworkTemplate />
        </Grid>
        <Grid item xs={12}>
          <HomeReplyBox />
        </Grid>
        <Grid item xs={12}>
          <CommonDropZone stateHandler={stateHandler} selectedFile={selectedFile} updatekey={'_'} />
        </Grid>
       <Grid item sx={{ paddingLeft: '10px', paddingRight: '8px' }} xs={12}>
          <HomeYoutubeLink />
       </Grid>
      </Grid>
    </>
  )
}

export default CircularContent