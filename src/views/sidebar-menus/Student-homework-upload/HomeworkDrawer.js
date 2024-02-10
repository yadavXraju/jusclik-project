import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Grid from '@mui/system/Unstable_Grid/Grid';
import HomeDate from './HomeDate';
import HomeCategory from './HomeCategory';
import HomeworkTopic from './HomeworkTopic';
import HomeworkTemplate from './HomeworkTemplate'
import HomeReplyBox from './HomeReplyBox'
export default function HomeworkDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const form = (
      <Box
        sx={{ width: 650, padding: 2 }} // Adjust width as needed
        role="presentation"
      >
        <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
          Close
        </Button>
        <Grid item xs={12} sm={6}>
          <Grid item style={{ padding: '5px 10px' }}>
            <HomeDate label="Homework Date:" />
          </Grid>
          <Grid item style={{ padding: '5px 10px' }}>
            <HomeDate label="Submission Date:" />
          </Grid>
          <Grid item style={{ padding: '5px 10px' }}>
            <HomeCategory />
          </Grid>
          <Grid item>
            <HomeworkTopic /> 
          </Grid>
          <Grid item>
            <HomeworkTemplate /> 
          </Grid>
          <Grid>
          <HomeReplyBox/>
          </Grid>
        </Grid>
      </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>Send Homework</Button>
            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}
            >
                {form}
            </Drawer>
        </div>
    );
}
