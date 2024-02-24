import * as React from 'react';
import { Box, Drawer, Button, Grid, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CircularDate from './CircularDate';
import HomeReplyBox from 'views/sidebar-menus/Student-homework-upload/HomeWorkDrawer/HomeReplyBox';
import HomeWorkDragDrop from 'views/sidebar-menus/Student-homework-upload/HomeWorkDrawer/HomeWorkDragDrop';
import HomeYoutubeLink from 'views/sidebar-menus/Student-homework-upload/HomeWorkDrawer/HomeYoutubeLink';
import CircularTopic from './CircularTopic';
import HomeworkTemplate from 'views/sidebar-menus/Student-homework-upload/HomeWorkDrawer/HomeworkTemplate';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CircularCategory from './CircularCategory';
import CirclarSelectClass from './CircularSelectClass';

export default function CircularDrawer() {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const form = (
    <Box sx={{ width: { xs: '100vw', sm: '650px' }, padding: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <Typography variant="h4">Upload Circular</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          <CancelTwoToneIcon />
          Close
        </Button>
      </Box>
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
          <HomeWorkDragDrop />
        </Grid>
        <Grid item sx={{ paddingLeft: '10px', paddingRight: '8px' }} xs={12}>
          <HomeYoutubeLink />
        </Grid>
      </Grid>
      <form>
        <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>
        New Circular
      </Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {form}
      </Drawer>
    </div>
  );
}
