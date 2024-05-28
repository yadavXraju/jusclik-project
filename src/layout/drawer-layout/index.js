import { Box, Typography, Button,Drawer} from '@mui/material';

const DrawerLayOut = ({ Title, Body, Bottom, toggleDrawer }) => {
    return (
        <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
            <Box p-2>
                <Box sx={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', borderBottom: '1px solid #ccc'
                }}>
                    <Typography variant="h4">{Title}</Typography>
                    <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                        Close
                    </Button>
                </Box>
                <Box>
                    {Body}
                </Box>
                <Box sx={{ position: 'fixed', bottom: '0px' }}>
                    {Bottom}
                </Box>
            </Box>
        </Drawer>
    )
}

export default DrawerLayOut;