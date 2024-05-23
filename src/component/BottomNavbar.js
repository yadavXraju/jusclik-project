//@page-owner:- Tarun Kumar Pandey
import { Box, Paper, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Bottom Navabr with save and next button

const BottomNavbar = ({ tabPageLength, value, setValue, customStyle, nextBtnText = 'Save and Next',
    SaveNnextCustomStyle, cancelCustomStyle, SubmitCustomStyle }) => {
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
            marginBottom: ''
        },

        SaveNnext: {
            height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px", fontSize: '14px'
        },

        submitBtn: { height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px", fontSize: '14px' },

        cancelBtn: {
            height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px", fontSize: '14px'
        }

    };

    return (
        <Paper sx={{ ...style.BottomNavbar, ...customStyle }}>
            <Box sx={{ display: "flex", gap: "20px" }}>
                {value != tabPageLength - 1 && <Button variant="contained" sx={{ ...style.SaveNnext, ...SaveNnextCustomStyle }} onClick={() => handleNext()}>
                    {nextBtnText}
                </Button>}
                {
                    value == tabPageLength - 1 && <Button variant="contained" sx={{ ...style.submitBtn, ...SubmitCustomStyle }} onClick={() => handleNext()}>
                        Submit
                    </Button>
                }
                {value != 0 && <Button variant="contained" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "20px" }} onClick={() => handlePrev()}>
                    <ChevronLeftIcon />
                </Button>}
            </Box>
            <Button variant="outlined" sx={{ ...style.cancelBtn, ...cancelCustomStyle }}>
                Cancel
            </Button>
        </Paper>
    )
}

export default BottomNavbar;