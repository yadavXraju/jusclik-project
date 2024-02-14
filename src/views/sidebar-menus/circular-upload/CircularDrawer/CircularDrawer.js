
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Grid from '@mui/system/Unstable_Grid/Grid';
import CircularDate from './CircularDate';
import HomeReplyBox from 'views/sidebar-menus/Student-homework-upload/HomeReplyBox';
import HomeWorkDragDrop from 'views/sidebar-menus/Student-homework-upload/HomeWorkDragDrop';
import HomeYoutubeLink from 'views/sidebar-menus/Student-homework-upload/HomeYoutubeLink';
import CircularTopic from './CircularTopic';
import HomeworkTemplate from 'views/sidebar-menus/Student-homework-upload/HomeworkTemplate';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';


export default function CircularDrawer() {
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
            sx={{ width: 650, padding: 2 }}
            role="presentation"
        >
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end', marginBottom:'15px' }}>
               <CancelTwoToneIcon/>
            </Button>
           
        <Grid >
          <Grid item sx={{paddingLeft:'7px',paddingRight:'7px'}}>
            <CircularDate label="Circular Date:" />
          </Grid>
          <Grid item>
            <CircularTopic/>
          </Grid>
          <Grid item>
            <HomeworkTemplate/>
          </Grid>
          <Grid item>
            <HomeReplyBox/>
          </Grid>
          <Grid item>
            <HomeWorkDragDrop/>
          </Grid>
          <Grid item sx={{paddingLeft:'10px', paddingRight:'8px'}}>
            <HomeYoutubeLink/>
          </Grid>
          </Grid>
            <form>

                <Box sx={{ padding: 2, display:"flex", justifyContent:'center' }}>
                    <Button type="submit" variant="contained"  >
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>New Circular</Button>
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