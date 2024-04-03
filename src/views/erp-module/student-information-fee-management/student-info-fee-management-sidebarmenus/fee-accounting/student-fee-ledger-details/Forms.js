import React, { useState } from 'react';
import {  Grid, Select, FormControl, MenuItem, InputLabel, TextField } from '@mui/material';

import ParamDateComponent from 'views/common-section/ParamDateComponent';

const FeeLedgerForms = () => {
  const [formData, setFormData] = useState({
    paymentMode: '',
    paymentCate: '',
    chequeCate: '',
    chequeNo: '',
    chqMicrNo: '',
    chqBank: '',
    chqBranch: '',
    chqDate: null,
    ddDate: null,
    ddCate: '',
    ddNo: '',
    ddMicrNo: '',
    ddBank: '',
    ddBranch: ''
  });

  // Generic handleChange function to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate if the field is "chequeNo" or "micrNo" and the value is numeric
    if ((name === 'chequeNo' || name === 'chqMicrNo' || name === 'ddNo' || name === 'ddMicrNo') && isNaN(value)) {
      return; // If not numeric, do not update state
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  console.log(formData.chequeCate, formData?.chqDate);

  return (
    <>
      {/* drawer content */}

      <Grid container spacing={2} sx={{padding:'1rem'}}>
        {/* Payment mode and payment category */}
        <Grid container spacing={2} sx={{paddingBottom:'1rem  '}}>
          {/* Payment mode */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
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
          </Grid>
          {/* Payment category */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
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
          </Grid>
        </Grid>

        {/* Load fields based on payment mode */}
        {formData.paymentMode === 'Cheque' && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {/* Cheque category */}
              <FormControl fullWidth>
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
            </Grid>

            <Grid item xs={12} md={6}>
              {/* Cheque No */}
              <TextField
                id="outlined-basic"
                label="Cheque No"
                name="chequeNo"
                value={formData.chequeNo}
                variant="outlined"
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <ParamDateComponent label="Cheque Date" value={formData.chqDate} name="chqdate" customStyle={{ width: '100%' }} />
            </Grid>

            <Grid item xs={12} md={6}>
              {/* MICR No */}

              <TextField
                id="outlined-basic"
                label="MICR No"
                name="chqMicrNo"
                value={formData.chqMicrNo}
                variant="outlined"
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              {/* Bank */}
              <TextField
                id="outlined-basic"
                label="Bank"
                name="chqBank"
                value={formData.chqBank}
                variant="outlined"
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              {/* Branch */}
              <TextField
                id="outlined-basic"
                label="Branch"
                name="chqBranch"
                value={formData.chqBranch}
                variant="outlined"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
        )}

        {/* Load fields when payment mode is Demand Draft */}
        {formData.paymentMode === 'Demand Draft' && (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {/* Demand Draft category */}
                <FormControl fullWidth>
                  <InputLabel id="dd-cate">D.D. Cate</InputLabel>
                  <Select labelId="dd-cate" id="dd-cate" name="ddCate" value={formData.ddCate} label="D.D. Cate" onChange={handleChange}>
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
              </Grid>

              <Grid item xs={12} md={6}>
                {/* Demand Draft No */}
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="D.D No"
                  name="ddNo"
                  value={formData.ddNo}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                {/* D.D. Date*/}
                <ParamDateComponent label="D.D. Date" name="dddate"  value={formData.ddDate} customStyle={{ width: '100%' }} />
              </Grid>

              <Grid item xs={12} md={6}>
                {/* MICR No */}
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="MICR No"
                  name="ddMicrNo"
                  value={formData.ddMicrNo}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                {/* Bank */}
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Bank"
                  name="ddBank"
                  value={formData.ddBank}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                {/* Branch */}
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Branch"
                  name="ddBranch"
                  value={formData.ddBranch}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default FeeLedgerForms;
