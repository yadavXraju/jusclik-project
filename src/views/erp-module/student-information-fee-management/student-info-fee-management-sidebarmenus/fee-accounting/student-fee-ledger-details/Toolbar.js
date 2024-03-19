import React, { useState } from 'react';
import {
  alpha,
  Box,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Drawer,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  TextField
} from '@mui/material';

// icons
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';

// Drawer and action

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer
  const [paymentMode, setPaymentMode] = useState('');
  const [paymentCate, setPaymentCate] = useState('');
  const [chequeCate, setChequeCate] = useState('');
  const [chequeNo, setChequeNo] = useState('');
  const [micrNo, setMicrNo] = useState('');
  const [bank, setBank] = useState('');
  const [branch, setBranch] = useState('');


  const [ddCate, setDdCate] = useState('');
  const [ddNo, setDdNo] = useState('');


  // Handler function to open drawer
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  // Handler function to close drawer
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

 console.log(paymentMode , paymentCate , chequeCate , chequeNo);
  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
          })
        }}
      >
        {numSelected > 0 ? (
          <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
            {/* Nutrition */}
          </Typography>
        )}

        {/* actions */}
        {numSelected > 0 ? (
          <>
            {/* delete */}
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>

            {/* fee payment with onClick handler to open drawer */}
            <Tooltip title="Fee Payment">
              <IconButton onClick={handleDrawerOpen}>
                <PaymentTwoToneIcon />
              </IconButton>
            </Tooltip>

            {/* Transfer Entry */}
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

      {/* Right Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <Box style={{ width: 650 }} onKeyDown={(e) => {
          if (e.target.tagName.toLowerCase() !== 'input') {
            handleDrawerClose();
          }
        }}>
          {/* drawer content */}
           <Grid sx={{padding: '4rem 2rem' ,}}>

             {/* payment mode and payment Category */}
              <Box sx={{ display: 'flex', flexDirection: 'row',  flexWrap:'wrap' , gap:'6%' }}>
                {/* form  */}
                <FormControl sx={{flex:'0 0 47%' }}>
                  {/* payment mode */}
                  <InputLabel id="payment-mode">Payment Mode</InputLabel>
                  <Select
                    labelId="payment-mode"
                    id="payment-mode"
                    value={paymentMode}
                    label="Payment Mode"
                    onChange={(e) => setPaymentMode(e.target.value)}
                  >
                    <MenuItem value="Cheque">Cheque</MenuItem>
                    <MenuItem value="Demand Draft">Demand Draft</MenuItem>
                    <MenuItem value="Adj Entry">Adj Entry</MenuItem>
                    <MenuItem value="Credit/Debit Card">Credit/Debit Card</MenuItem>
                    <MenuItem value="NEFT/RTGS/IMPS">NEFT/RTGS/IMPS</MenuItem>
                    <MenuItem value="Online Payment">Online Payment</MenuItem>
                    <MenuItem value="SMS Pay">SMS Pay</MenuItem>
                    <MenuItem value="UPI Pay">UPI Pay</MenuItem>
                    <MenuItem value="Any Other Mode">Any Other Mode</MenuItem>
                  </Select>
                </FormControl>

                {/* payment cate */}
                <FormControl sx={{ flex:'0 0 47%' }}>
                  <InputLabel id="payment-cate">Payment Cate</InputLabel>
                  <Select
                    labelId="payment-cate"
                    id="payment-cate"
                    value={paymentCate}
                    label="Payment Cate"
                    onChange={(e) => setPaymentCate(e.target.value)}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="HDFC Bank">HDFC Bank</MenuItem>
                    <MenuItem value="SBI">SBI</MenuItem>
                  </Select>
                </FormControl>

              </Box>

              {/* load field when pay mode is cheque*/}
              {paymentMode === 'Cheque' && (
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem', gap: '6%' , flexWrap:'wrap' , rowGap:'2rem' }}>

                {/* Cheque cat */}

                <FormControl sx={{ flex: '0 0 47%' }}>
                  <InputLabel id="cheque-cate">Cheque Cate</InputLabel>
                  <Select
                    labelId="cheque-cate"
                    id="cheque-cate"
                    value={chequeCate}
                    label="Cheque Cate"
                    onChange={(e) => setChequeCate(e.target.value)}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="Transfer">Transfer</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Clearing">Clearing</MenuItem>
                    <MenuItem value="Bounced">Bounced</MenuItem>
                    <MenuItem value="Accepted">Accepted</MenuItem>
                    <MenuItem value="Pendin">Pending</MenuItem>
                    <MenuItem value="Transfer">Transfer</MenuItem>
                  </Select>
                </FormControl>

                {/* cheque no */}
                <TextField id="outlined-basic" label="Cheque No" value={chequeNo} variant="outlined" onChange={(e)=> setChequeNo(e.target.value)} sx={{ flex: '0 0 47%' }} />


                {/* micr no */}
                <TextField id="outlined-basic" label="MICR No" value={micrNo} variant="outlined" onChange={(e)=> setMicrNo(e.target.value)} sx={{ flex: '0 0 47%' }} />

                  {/* bank */}
                  <TextField id="outlined-basic" label="Bank" value={bank} variant="outlined" onChange={(e)=> setBank(e.target.value)} sx={{ flex: '0 0 47%' }} />

                  {/* micr no */}
                  <TextField id="outlined-basic" label="Branch" value={branch} variant="outlined" onChange={(e)=> setBranch(e.target.value)} sx={{ flex: '0 0 47%' }} />

              </Box>
                )}


              {/* load field when pay mode is demand draft */}

              {paymentMode === 'Demand Draft' && (
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem', gap: '6%' }}>

                {/* Demand Draft cat */}

                <FormControl sx={{ flex: '0 0 47%' }}>
                  <InputLabel id="dd-cate">D.D. Cate</InputLabel>
                  <Select
                    labelId="dd-cate"
                    id="dd-cate"
                    value={ddCate}
                    label="D.D. Cate"
                    onChange={(e) => setDdCate(e.target.value)}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="Transfer">Transfer</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Clearing">Clearing</MenuItem>
                    <MenuItem value="Bounced">Bounced</MenuItem>
                    <MenuItem value="Accepted">Accepted</MenuItem>
                    <MenuItem value="Pendin">Pending</MenuItem>
                    <MenuItem value="Transfer">Transfer</MenuItem>
                  </Select>
                </FormControl>

                {/* cheque no */}
                <TextField id="outlined-basic" label="D.D No" value={ddNo} variant="outlined" onChange={(e)=> setDdNo(e.target.value)} sx={{ flex: '0 0 47%' }} />

               
              </Box>
                )}

            </Grid>
        </Box>
      </Drawer>
    </>
  );
}

export default EnhancedTableToolbar;
