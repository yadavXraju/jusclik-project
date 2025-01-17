import React from 'react';
import RightDrawer from './TempRightDrawer';
import useDrawer from 'hooks/useDrawer';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

const ShowVisitorButton = () => {
   const {anchor,toggleDrawer}=useDrawer();
    
    return (
        <>
            <Button variant="contained" color="secondary" endIcon={<PeopleOutlineOutlinedIcon />}
                sx={{marginTop:"15px",width:"150px"}}
                onClick={toggleDrawer('right', true)}
            >
                Show Visitors
            </Button>
            <Drawer anchor={"right"} open={anchor.right} onClose={toggleDrawer('right', false)}>
                 <RightDrawer />
            </Drawer>
        </>
    )
}

export default ShowVisitorButton;