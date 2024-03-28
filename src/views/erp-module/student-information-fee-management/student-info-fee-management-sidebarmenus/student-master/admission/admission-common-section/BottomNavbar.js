import { Box, Paper, Button,Drawer} from '@mui/material';
import useDrawer from 'hooks/useDrawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CustomFields from './CustomFields';

const BottomNavbar = ({ tabPageLength, value, setValue, customStyle = {} }) => {
    const {anchor,toggleDrawer}=useDrawer();
    const handlePrev = () => {
        setValue(Math.max(0, value - 1));
    };

    const handleNext = () => {
        setValue(Math.min(tabPageLength - 1, value + 1));
    };

    const style = {
        BottomNavbar: {
            width: '100%',
            display: 'flex',
            justifyContent:"space-between",
            paddingRight: "40px",
            paddingLeft: "20px",
            alignItems: 'center',
            gap: "20px",
            position: "fixed",
            bottom: "0px",
            backgroundColor: "#fafafa",
            height: "60px",
            borderBottom: '1px solid #eee',
            borderTop: '1px solid #eee',
            zIndex: '999',
        }
    };

    return (
        <Paper sx={{ ...style.BottomNavbar, ...customStyle }}>
            <Box sx={{ display: "flex", gap: "20px" }}>
                {value != tabPageLength - 1 && <Button variant="contained" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px" }} onClick={() => handleNext()}>
                    Save and Next
                </Button>}
                {
                    value == tabPageLength - 1 && <Button variant="contained" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px" }} onClick={() => handleNext()}>
                        Submit
                    </Button>
                }
                {value != 0 && <Button variant="contained" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "20px" }} onClick={() => handlePrev()}>
                    <ChevronLeftIcon />
                </Button>}
                <Button variant="outlined" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px" }}>
                    Cancel
                </Button>
            </Box>
            <Button variant="text" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px" }} onClick={toggleDrawer("right",true)}>
                Customize Fields
            </Button>
            <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer(false)}>
              <CustomFields customFieldDrawer={toggleDrawer} />    
            </Drawer>
        </Paper>
    )
}

export default BottomNavbar;