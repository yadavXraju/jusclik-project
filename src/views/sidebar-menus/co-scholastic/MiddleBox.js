import React,{useState} from 'react';
import { Box, Paper, Grid, Typography,Dialog, DialogTitle, DialogContent, DialogActions, Button,useMediaQuery,useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import ActionButton from './ActionButton';
import SwitchButton from './SwitchButton';
import { Tooltip, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function MiddleBox({ isVerticalSwitchOn, onSwitchChange, onTextSelect,onConfirm}) {

  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSwitchChange = (event) => {
    onSwitchChange(event.target.checked);
  };


  // Function to handle Enter key press on TextField vertically
  const handleTextFieldKeyPressVerticaly = (event, rowIndex,columnIndex) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const nextRowIndex = rowIndex + 1;
      const nextColumnIndex = columnIndex;

      if (nextRowIndex < rows.length) {
        // Move to the next row
        const nextInputRef = inputRefs.current[nextRowIndex]?.[nextColumnIndex];
        if (nextInputRef) {
          const inputElement = nextInputRef.querySelector('input');
          if (inputElement) {
            inputElement.focus();
          }
        }
      }
    }
  };

   // Function to handle Enter key press on TextField horizontally
   const handleTextFieldKeyPressHorizontal = (event, rowIndex, columnIndex) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const nextRowIndex = rowIndex + 1;
      const nextColumnIndex = columnIndex + 1;
      
      if (nextColumnIndex < rows.length) {
        // Move to the next column
        const nextInputRef = inputRefs.current[rowIndex]?.[nextColumnIndex];
        if (nextInputRef) {
          const inputElement = nextInputRef.querySelector('input');
          if (inputElement) {
            inputElement.focus();
          }
          return; // Exit the function early to prevent moving to the next row
        }
      }
  
      if (nextRowIndex < rows.length) {
        // Move to the next row if not at the last row
        const nextInputRef = inputRefs.current[nextRowIndex]?.[0];
        if (nextInputRef) {
          const inputElement = nextInputRef.querySelector('input');
          if (inputElement) {
            inputElement.focus();
          }
        }
      }
    }
  };
  
  return (
    <Box>
      <Paper >
        <Grid container rowSpacing={1} direction="row" alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: "10px 0" }}>
        <Grid item xs={12} lg={3} >
            <Item onClick={handleOpenDialog}>
              <Typography variant='h4' justifyContent={isMobile ?'flex-start':'flex-start'} color='primary' display='flex' alignItems='center'  >
                <InfoOutlinedIcon sx={{ marginRight: "5px" }} /> Grading System
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} lg={5} >
            <Item>
              <Typography variant='h4' justifyContent={isMobile ?'flex-start':'center'}  color='primary' display='flex' alignItems={isMobile ?'flex-start':'center'}>
                <InfoOutlinedIcon sx={{ marginRight: "5px" }} /> Enter &apos;AB&apos; for absent, &apos;LV&apos; for leave, &apos;-&apos; for any other reason
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} lg={4} container  justifyContent={isMobile ?'flex-start':'flex-end'}  alignItems="center">
            <Item sx={{padding:"8px 0px"}}>
            <SwitchButton
                           handleVerticalKeyPress={handleTextFieldKeyPressVerticaly}
                           handleHorizontalKeyPress={handleTextFieldKeyPressHorizontal}
                           isVerticalSwitchOn={isVerticalSwitchOn}
                           onSwitchChange={handleSwitchChange}
                       
              />
            </Item>
            <Item sx={{padding:"8px 0px"}}>
             <Tooltip title="Enter Data vertically">
               <IconButton size="small" color='primary'>
                 <InfoOutlinedIcon />
               </IconButton>
             </Tooltip>
             Enter Marks vertically
           </Item>
            <Item >
            <ActionButton onTextSelect={onTextSelect} onConfirm={onConfirm} />
            </Item>
          </Grid>
        </Grid>
      </Paper>

      {/* Dialog for Grading System */}
      <Dialog
  open={openDialog}
  onClose={handleCloseDialog}
  PaperProps={{ sx: { backgroundColor: '#fafafa', width: '500px', borderRadius: '8px' } }}
>
  <DialogTitle sx={{ backgroundColor: '#2196f3', color: '#fff', borderBottom: '1px solid #ccc', textAlign: 'center' }}>Grading System</DialogTitle>
  <DialogContent sx={{ padding: '20px', textAlign: 'center' }}>
    <Typography variant="body1" color="textPrimary" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>A - Outstanding</Typography>
    <Typography variant="body1" color="textPrimary" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>B - Very Good</Typography>
    <Typography variant="body1" color="textPrimary" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>C - Satisfactory</Typography>
    <Typography variant="body1" color="textPrimary" sx={{ fontWeight: 'bold' }}>D - Fair</Typography>
  </DialogContent>
  <DialogActions sx={{ justifyContent: 'center', borderTop: '1px solid #ccc', padding: '10px 20px' }}>
    <Button onClick={handleCloseDialog} color="primary" variant="contained">
      OK
    </Button>
  </DialogActions>
</Dialog>


    </Box>
  );
}

export default MiddleBox;
