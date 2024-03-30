// Toolbar.js

import React from 'react';
import { Box, Toolbar, Typography, IconButton, Tooltip, Drawer, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import useDrawer from 'hooks/useDrawer';
import FeeLedgerForms from './Forms';

function EnhancedTableToolbar(props) {
  const { numSelected, selectedRows, totalNetPay } = props; // Receive totalNetPay as a prop
  const { anchor, toggleDrawer } = useDrawer();

  const isAnyPaid = selectedRows.some(row => row.status === 'Paid');


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
              {/* Disable the payment button if any row is already paid */}
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
          <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom:'1rem', }}>
            <Typography>Quick Search {totalNetPay}</Typography>
            <Button sx={{marginTop:"-6px"}} onClick={toggleDrawer('right', false)}>Close</Button>
          </Box>
          <FeeLedgerForms />
        </Box>
      </Drawer>
    </>
  );
}

export default EnhancedTableToolbar;