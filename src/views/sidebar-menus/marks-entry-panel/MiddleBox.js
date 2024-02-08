import React from 'react';
import { Box, Paper, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ActionButton from './ActionButton';
import SwitchButton from './SwitchButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MiddleBox({ isVerticalSwitchOn, onSwitchChange }) {
  // Function to handle Enter key press on TextField vertically
  const handleTextFieldKeyPressVerticaly = (event, rowIndex, cellIndex) => {
    if (event.key === 'Enter') {
      const nextRowIndex = rowIndex + 1;
      const nextInput = document.getElementById(`textfield-${nextRowIndex}-${cellIndex}-${rows[nextRowIndex].admissionNo}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  // Function to handle Enter key press on TextField horizontally
  const handleTextFieldKeyPressHorizontal = (event, rowIndex, cellIndex) => {
    if (event.key === 'Enter') {
      const nextCellIndex = cellIndex + 1;
      const nextInput = document.getElementById(`textfield-${rowIndex}-${nextCellIndex}-${rows[rowIndex].admissionNo}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <>
      <Box>
        <Paper sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Grid lg={12} container rowSpacing={1} direction="row" justifyContent="Center" alignItems="Center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: "10px 0" }}>
            <Grid item lg={6}>
              <Item>
                <Typography variant='h4' color='primary' display='flex' alignItems='center'>
                  <InfoOutlinedIcon sx={{marginRight:"5px"}} />  Enter  &apos;AB&apos; for absent, &apos;LV&apos; for leave, &apos;-&apos; for any other reason 
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Grid lg={6}  sx={{ marginRight: '60px', marginTop: '6px', display: "flex", justifyContent: "space-around", alignItems: 'center' }}>
            <Item>
              <SwitchButton
                handleVerticalKeyPress={handleTextFieldKeyPressVerticaly}
                handleHorizontalKeyPress={handleTextFieldKeyPressHorizontal}
                isVerticalSwitchOn={isVerticalSwitchOn}
                onSwitchChange={onSwitchChange}
              />
            </Item>
            <Item>
              <ActionButton />
            </Item>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}

export default MiddleBox;

