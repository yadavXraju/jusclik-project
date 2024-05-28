import { Box, Paper, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const BottomNavbar = ({
  tabPageLength,
  handlePrev,
  handleNext,
  handleCancelClick,
  handleSubmitClick,
  value,
  customStyle = {},
  nextBtnText = 'Save and Next',
  submitBtnText = 'Submit',
  cancelBtnText = 'Cancel'
}) => {
  const defaultStyle = {
    BottomNavbar: {
      width: '100%',
      display: 'flex',
      paddingRight: '40px',
      paddingLeft: '20px',
      alignItems: 'center',
      gap: '20px',
      position: 'fixed',
      bottom: '0px',
      backgroundColor: '#fafafa',
      height: '60px',
      borderBottom: '1px solid #eee',
      borderTop: '1px solid #eee',
      zIndex: '999',
      marginBottom: ''
    },
    SaveNnext: {
      height: '38px',
      marginTop: 'auto',
      marginBottom: 'auto',
      width: '144px',
      fontSize: '14px'
    },
    cancelBtn: {
      height: '38px',
      marginTop: 'auto',
      marginBottom: 'auto',
      width: '55px',
      fontSize: '14px'
    }
  };

  return (
    <Paper sx={{ ...defaultStyle.BottomNavbar, ...customStyle }}>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        {value !== tabPageLength - 1 && (
          <Button variant="contained" sx={{ ...defaultStyle.SaveNnext }} onClick={handleNext}>
            {nextBtnText}
          </Button>
        )}
        {value === tabPageLength - 1 && (
          <Button variant="contained" sx={{ ...defaultStyle.SaveNnext }} onClick={handleSubmitClick}>
            {submitBtnText}
          </Button>
        )}
        {value !== 0 && (
          <Button variant="contained" sx={{ ...defaultStyle.cancelBtn }} onClick={handlePrev}>
            <ChevronLeftIcon />
          </Button>
        )}
      </Box>
      <Button variant="outlined" sx={{ ...defaultStyle.cancelBtn }} onClick={handleCancelClick}>
        {cancelBtnText}
      </Button>
    </Paper>
  );
};

export default BottomNavbar;
