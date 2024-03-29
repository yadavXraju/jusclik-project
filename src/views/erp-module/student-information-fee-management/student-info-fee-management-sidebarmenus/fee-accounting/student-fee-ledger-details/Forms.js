import React, { useState } from 'react';
import {
  Box,
  Grid,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  TextField,

} from '@mui/material';

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
        chqDate:null,
        ddDate:null,
        ddCate: '',
        ddNo: '',
        ddMicrNo: '',
        ddBank: '',
        ddBranch: '',
      });

// Generic handleChange function to update form data
const handleChange = (e) => {

  const { name, value } = e.target;
  // Validate if the field is "chequeNo" or "micrNo" and the value is numeric
  if ((name === 'chequeNo' || name === 'chqMicrNo' || name === 'ddNo' || name === 'ddMicrNo'  ) && isNaN(value)) {
      return; // If not numeric, do not update state
  }
  setFormData((prevData) => ({
      ...prevData,
      [name]: value,
  }));
};

console.log(formData.chequeCate,formData?.chqDate)


// style prop for grid

// const style = {
//     display: 'flex',
//     flexDirection: 'row',
//     marginTop: '2rem',
//     gap: '6%',
//     flexWrap: 'wrap',
//     rowGap: '2rem'
// }
          
  return (
    <>
         {/* drawer content */}


         <Grid sx={{  }}>
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
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '2rem',
                gap: '6%',
                flexWrap: 'wrap',
                rowGap: '2rem'
              }}>
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
                <TextField id="outlined-basic" label="Cheque No" name="chequeNo" value={formData.chequeNo}  variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />

                {/* chq date */}
                {/* <Box onChange={handleChange} sx={{ flex: '0 0 47%' }}>
                <TextField
                            id="outlined-select-option"
                            type="date"
                            fullWidth
                            label="Date"
                            name='date'
                            variant="outlined"
                            value={formData.date}
                        onChange={handleChange} 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                </Box> */}
                
                {/* <ParamDateComponent label="Cheque Date" name="chqdate" onChange={handleChange}   value={formData.chqdate}  customStyle={{ flex: '0 0 47%' }} /> */}

                <ParamDateComponent label="Cheque Date" name="chqdate"  customStyle={{ flex: '0 0 47%' }} />

                {/* MICR No */}
                <TextField id="outlined-basic" label="MICR No" name="chqMicrNo" value={formData.chqMicrNo} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />

                {/* Bank */}
                <TextField id="outlined-basic" label="Bank" name="chqBank" value={formData.chqBank} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />

                {/* Branch */}
                <TextField id="outlined-basic" label="Branch" name="chqBranch" value={formData.chqBranch} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />

             </Box>
            )}

            {/* Load fields when payment mode is Demand Draft */}
            {formData.paymentMode === 'Demand Draft' && (
              <Box sx={{  display: 'flex', flexDirection: 'row', marginTop: '2rem', gap: '6%', flexWrap: 'wrap', rowGap: '2rem' }}>
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

                 {/* D.D. Date*/}
                <ParamDateComponent label="D.D. Date" name="dddate" customStyle={{ flex: '0 0 47%' }} />

                {/* MICR No */}
                <TextField id="outlined-basic" label="MICR No" name="ddMicrNo" value={formData.ddMicrNo} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />


                {/* Bank */}
                <TextField id="outlined-basic" label="Bank" name="ddBank" value={formData.ddBank} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />

                {/* Branch */}
                <TextField id="outlined-basic" label="Branch" name="ddBranch" value={formData.ddBranch} variant="outlined" onChange={handleChange} sx={{ flex: '0 0 47%' }} />

              </Box>
            )}




          </Grid>
    </>
  )
}

export default FeeLedgerForms
