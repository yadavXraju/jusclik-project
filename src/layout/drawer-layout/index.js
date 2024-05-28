import { Box, Typography, Button, Drawer } from '@mui/material';


// direction=left,right,top,bottom
const DrawerLayOut = ({
    anchor,
    direction = 'left',
    toggleDrawer,
    Title,
    Body,
    Bottom,
    customStyles = {},
    CustomBodyStyle={}
}) => {
    const defaultStyles = {
        width: { sm: '100vw', md: 820 },
        padding:2,
        height:'100vh',
        ...customStyles,
    };
   
    const BodyStyle={
        height:'calc(100vh - 140px)',
        overflowY:'auto'
    }
    return (
        <Drawer anchor={direction} open={anchor[direction]} onClose={toggleDrawer(direction, false)}>
            <Box sx={{ ...defaultStyles }} role="presentation">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #ccc',
    
                    }}
                >
                    <Typography variant="h4">{Title}</Typography>
                    <Button onClick={toggleDrawer(direction, false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box sx={{...BodyStyle,...CustomBodyStyle}} className='scrollbar'>
                    {Body}
                </Box>
                <Box sx={{ position: 'fixed', bottom:'0px'}}>{Bottom}</Box>
            </Box>
        </Drawer>
    );
};

export default DrawerLayOut;
