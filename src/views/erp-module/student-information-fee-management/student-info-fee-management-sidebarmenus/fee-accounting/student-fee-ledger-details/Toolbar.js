// Toolbar.js
import React from 'react';
import { Box, Toolbar, Typography, IconButton, Tooltip, Drawer, Button , Grid} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import useDrawer from 'hooks/useDrawer';
import FeeLedgerForms from './Forms';
import WithPrintPdf from 'components/withPrintPdf';

// icon
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PrintTwoToneIcon from '@mui/icons-material/PrintTwoTone';

const EnhancedTableToolbar= React.forwardRef((props,ref)=>{
  const { numSelected, selectedRows, totalNetPay } = props; // Receive totalNetPay as a prop
  const { anchor, toggleDrawer } = useDrawer();
  
  const isAnyPaid = selectedRows.some(row => row.status === 'Paid');

  const PrintButton = () => {
    return (
 
      <Tooltip title="Print">
          <IconButton sx={{background:'rgba(204, 204, 204, 0.33)' , margin:'0 8px' }}>
            <PrintTwoToneIcon sx={{cursor:'pointer'}}/>
         </IconButton>
        </Tooltip>

    );
  };

  return (
    <>
    <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between' , padding:'0 2rem'}}>
       <Typography variant='h4'>Student Fee Ledger Details</Typography>
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

          {/* {numSelected >= 0 ? ( */}
            <>

            <Button onClick={toggleDrawer('top', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
                Create Invoice
            </Button>

              <Tooltip title="Delete">
                <IconButton sx={{background:'rgba(204, 204, 204, 0.33)'}}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Fee Payment">
                {/* Disable the payment button if any row is already paid */}
                <IconButton sx={{background:'rgba(204, 204, 204, 0.33)'}}  onClick={toggleDrawer('right', true)} disabled={isAnyPaid || numSelected==0}>
                  <PaymentTwoToneIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Transfer Entry">
                <IconButton sx={{background:'rgba(204, 204, 204, 0.33)'}}>
                  <ArticleTwoToneIcon />
                </IconButton>
              </Tooltip>

                  <WithPrintPdf  Children={<PrintButton />} ref={ref} />
            </>
    
          {/* )} */}
         </Toolbar>
    </Grid>


      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box  sx={{ width:{xs : '100vw' , sm: 650} , padding: '1rem' }} role='presentation'>
          <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom:'1rem', }}>
            <Typography> Student Fee Ledger </Typography>


            <Button sx={{marginTop:"-6px"}} onClick={toggleDrawer('right', false)}>Close</Button>
          </Box>
          

           <Typography sx={{fontSize:'18px' , pb:3, }}> Total Net Payable : {totalNetPay}</Typography>
          <FeeLedgerForms />
        </Box>
      </Drawer>
    </>
  );
})

export default EnhancedTableToolbar;