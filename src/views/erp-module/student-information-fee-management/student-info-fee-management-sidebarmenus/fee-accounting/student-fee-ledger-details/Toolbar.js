import React from 'react';
import {
  Box,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Drawer,
  Button,
} from '@mui/material';

// icons
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import useDrawer from 'hooks/useDrawer';
import FeeLedgerForms from './Forms';


// Drawer and action
function EnhancedTableToolbar(props) {
  const { numSelected, selectedRows ,} = props;
  const { anchor, toggleDrawer } = useDrawer(); // Using the useDrawer hook for managing drawer state


  const isAnyPaid = selectedRows.some(row => row.status === 'Paid');

  // console.log(totalNetPay);

  return (
    <>
      <Toolbar sx={{justifyContent:'end'}}>
        {numSelected > 0 ? (
          <Typography variant="subtitle1" component="div">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle" component="div">
            {/* Nutrition */}
          </Typography>
        )}

        {numSelected > 0 ? (
          <>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Fee Payment">
              <IconButton onClick={toggleDrawer('right', true)} disabled={isAnyPaid}>
                <PaymentTwoToneIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Transfer Entry">
              <IconButton>
                <ArticleTwoToneIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            {/* No actions */}
          </>
        )}
      </Toolbar>

      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box style={{ width: 650 }}  sx={{ padding: '1rem' }}>
          {/* drawer content */}
          <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom:'1rem', }}>
                <Typography>Student Fee Ledger</Typography>
                <Button sx={{marginTop:"-6px"}} onClick={toggleDrawer('right', false)}>Close</Button>
          </Box>

          <FeeLedgerForms />
        </Box>
      </Drawer>
    </>
  );
}

export default EnhancedTableToolbar;

  
 