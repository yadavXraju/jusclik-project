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
  const { numSelected, selectedRows , } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer

  const [formData, setFormData] = useState({
    paymentMode: '',
    paymentCate: '',
    chequeCate: '',
    chequeNo: '',
    micrNo: '',
    bank: '',
    branch: '',
    ddCate: '',
    ddNo: '',
  });

  // Handler function to open drawer
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  // Handler function to close drawer
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  // Generic handleChange function to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Check if any selected row has the status "Paid"
  const isAnyPaid = selectedRows.some(row => row.status === 'Paid');

  // console.log(formData.paymentMode , formData.paymentCate , formData.chequeCate , formData.chequeNo , formData.micrNo , formData.bank , formData.branch , formData.ddCate , formData.ddNo )

  // console.log(totalNetPay)

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
              <IconButton onClick={handleDrawerOpen} disabled={isAnyPaid}>
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
        <Box style={{ width: 650 }}>
          {/* drawer content */}
          <Grid sx={{ padding: '4rem 2rem' }}>
            {/* Payment mode and payment category */}
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '6%' }}>
              {/* Payment mode */}
              <FormControl sx={{ flex: '0 0 47%' }}>
                <InputLabel id="payment-mode">Payment Mode</InputLabel>
                <Select
                  labelId="payment-mode"
                  id="payment-mode"
                  name="paymentMode"
                  value={formData.paymentMode}
                  label="Payment Mode"
                  onChange={handleChange}
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

              {/* Payment category */}
              <FormControl sx={{ flex: '0 0 47%' }}>
                <InputLabel id="payment-cate">Payment Cate</InputLabel>
                <Select
                  labelId="payment-cate"
                  id="payment-cate"
                  name="paymentCate"
                  value={formData.paymentCate}
                  label="Payment Cate"
                  onChange={handleChange}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="HDFC Bank">HDFC Bank</MenuItem>
                  <MenuItem value="SBI">SBI</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Load fields based on payment mode */}
            {formData.paymentMode === 'Cheque' && (
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem', gap: '6%', flexWrap: 'wrap', rowGap: '2rem' }}>
                {/* Cheque category */}
                <FormControl sx={{ flex: '0 0 47%' }}>
                  <InputLabel id="cheque-cate">Cheque Cate</InputLabel>
                  <Select
                    labelId="cheque-cate"
                    id="cheque-cate"
                    name="chequeCate"
                    value={formData.chequeCate}
                    label="Cheque Cate"
                    onChange={handleChange}
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

                {/* Cheque No */}
                <TextField id="outlined-basic" label="Cheque No" name="chequeNo" value={formData.chequeNo} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />

                {/* MICR No */}
                <TextField id="outlined-basic" label="MICR No" name="micrNo" value={formData.micrNo} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />

                {/* Bank */}
                <TextField id="outlined-basic" label="Bank" name="bank" value={formData.bank} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />

                {/* Branch */}
                <TextField id="outlined-basic" label="Branch" name="branch" value={formData.branch} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />
              </Box>
            )}

            {/* Load fields when payment mode is Demand Draft */}
            {formData.paymentMode === 'Demand Draft' && (
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem', gap: '6%' }}>
                {/* Demand Draft category */}
                <FormControl sx={{ flex: '0 0 47%' }}>
                  <InputLabel id="dd-cate">D.D. Cate</InputLabel>
                  <Select
                    labelId="dd-cate"
                    id="dd-cate"
                    name="ddCate"
                    value={formData.ddCate}
                    label="D.D. Cate"
                    onChange={handleChange}
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

                {/* Demand Draft No */}
                <TextField id="outlined-basic" label="D.D No" name="ddNo" value={formData.ddNo} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />
              </Box>
            )}
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}

export default EnhancedTableToolbar;
