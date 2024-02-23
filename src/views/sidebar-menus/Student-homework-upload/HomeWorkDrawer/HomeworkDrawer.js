import * as React from 'react';
import {Box,Button,Grid,Drawer, Typography} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HomeDate from './HomeDate';
import HomeCategory from './HomeCategory';
import HomeworkTopic from './HomeworkTopic';
import HomeworkTemplate from './HomeworkTemplate';
import HomeReplyBox from './HomeReplyBox';
import HomeWorkDragDrop from './HomeWorkDragDrop';
import HomeYoutubeLink from './HomeYoutubeLink';
import HomeDrawerSubmit from './HomeDrawerSubmit';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

export default function HomeworkDrawer() {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const isMobile = window.innerWidth < 600;

  const form = (
    <Box
      sx={{ width: isMobile ? '100%' : 650, padding: 2 }} // Adjust width as needed for larger screens
      role="presentation"
    >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant='h4'>Homework</Typography>
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          <CancelTwoToneIcon />
          Close
        </Button>
      </Box>
      <Grid container spacing={1} justifyContent="space-around" sx={{ paddingLeft: isMobile ? '4px' : '5px', paddingRight: isMobile ? '11px' : '11px', paddingTop:'12px' }}>
        <Grid item xs={12} sm={6}>
          <HomeDate label="Homework Date:" />
        </Grid>
        <Grid item xs={12} sm={6} >
          <HomeDate label="Submission Date:" />
        </Grid>
      </Grid>
      <Grid item sx={{paddingTop:'12px'}}>
      <HomeCategory />
      </Grid>
      <Grid container spacing={1} sx={{paddingTop:'11px'}}>
        <Grid item xs={12} >
          <HomeworkTopic />
        </Grid>
        <Grid item xs={12}>
          <HomeworkTemplate />
        </Grid>
        <Grid item xs={12}>
          <HomeReplyBox />
        </Grid>
        <Grid item xs={12}>
          <HomeWorkDragDrop />
        </Grid>
      </Grid>
        <Grid item xs={12} sx={{ paddingLeft: isMobile ? '10px' : '10px', paddingRight: isMobile ? '11px' : '8px' , paddingTop:'5px'}}>
          <HomeYoutubeLink />
        </Grid>
        <Grid item xs={12} sx={{ marginTop:'20px'}}>
          <HomeDrawerSubmit />
        </Grid>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Send Homework
      </Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {form}
      </Drawer>
    </div>
  );
}
