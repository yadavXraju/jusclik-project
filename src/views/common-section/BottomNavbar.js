import { Box, Paper, Button } from '@mui/material';

const BottomNavbar = ({ tabPageLength, value, setValue }) => {
    const handlePrev = () => {
        setValue(Math.max(0, value - 1));
    };

    const handleNext = () => {
        setValue(Math.min(tabPageLength - 1, value + 1));
    };

    const style = {
        BottomNavbar: {
            width: "97.2%",
            display: 'flex',
            justifyContent: "space-between",
            paddingRight: "40px",
            paddingLeft: "20px",
            alignItems: 'center',
            gap: "20px",
            position: "fixed",
            bottom: "110px",
            backgroundColor: "#fafafa",
            height: "60px",
            borderBottom: '1px solid #eee',
            borderTop: '1px solid #eee',
        }
    };

    return (
        <Paper sx={style?.BottomNavbar}>
            <Box sx={{ display: "flex", gap: "20px" }}>
                {value!=0&&<Button variant="contained" sx={{ height: "38px", marginTop: "10px", width: "100px" }} onClick={() => handlePrev()}>
                    Previous
                </Button>}
                {value != tabPageLength - 1 && <Button variant="contained" sx={{ height: "38px", marginTop: "10px", width: "100px" }} onClick={() => handleNext()}>
                    Next
                </Button>}
                {
                   value==tabPageLength-1&&<Button variant="contained" sx={{ height: "38px", marginTop: "10px", width: "100px" }} onClick={() => handleNext()}>
                        Submit
                    </Button>
                }
            </Box>
            <Button variant="outlined" sx={{ height: "38px", marginTop: "10px", width: "100px" }}>
                Cancel
            </Button>
        </Paper>
    )
}

export default BottomNavbar;