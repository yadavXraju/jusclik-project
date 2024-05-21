import React, { useState } from 'react';
import {
  Grid, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Checkbox, TextField,
  Box, Typography, Button, styled,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { OptionalFeeHeadConfigGlobally , setFeeHeads } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';



// Styled component for visually hidden input
export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const style = {
  BottomNavbar: {
    width: '100%',
    display: 'flex',
    paddingRight: "40px",
    paddingLeft: "40px",
    alignItems: 'center',
    gap: "20px",
    position: "fixed",
    bottom: "0px",
    backgroundColor: "#fafafa",
    height: "60px",
    borderBottom: '1px solid #eee',
    borderTop: '1px solid #eee',
    zIndex: '999',
  }
};

const OptionalFeeHeadPreview = ({ customStyle, clearStates }) => {
  const dispatch = useDispatch();
  const [amounts, setAmounts] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [selectAllAmountChecked, setSelectAllAmountChecked] = useState(false);
  const [checkedAmount, setCheckedAmount] = useState('');
  const feeHead = useSelector((state) => state.configGloballyFormSlice.feeHeads);
  const classes = useSelector((state) => state.configGloballyFormSlice.classes);


  const handleAmount = (index, value) => {
    const newAmounts = [...amounts];
    newAmounts[index] = value;
    setAmounts(newAmounts);
  };

  const handleSelectAllAmount = () => {
    const newSelectAllAmountChecked = !selectAllAmountChecked;
    setSelectAllAmountChecked(newSelectAllAmountChecked);

    const newCheckboxStates = { ...checkboxStates };
    feeHead.forEach((_, index) => {
      newCheckboxStates[index] = {
        ...newCheckboxStates[index],
        amountChecked: newSelectAllAmountChecked,
      };
    });
    setCheckboxStates(newCheckboxStates);
  };

  const handleCheckedAmount = (e) => {
    setCheckedAmount(e.target.value);
  };

  const handleAmountCheckboxValue = (index) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        amountChecked: !prevState[index]?.amountChecked,
      },
    }));
  };

  const PreviewData = feeHead?.map((head, index) => ({
    id: index,
    srNo: index + 1,
    feeHead: head.name,
    classes: classes.map((item) => item.name),
    amount: amounts[index] || '',
    CheckboxAmountValue: checkboxStates[index]?.amountChecked || false,
  }));

  const handleSubmit = () => {
    const newAmounts = [...amounts];
  
    PreviewData.forEach((rowData, index) => {
      if (checkboxStates[index]?.amountChecked) {
        if (checkedAmount !== '') {
          newAmounts[index] = checkedAmount;
        }
      }
    });
    setAmounts(newAmounts);
  };
  
  const handleSave = () => {
    dispatch(OptionalFeeHeadConfigGlobally(PreviewData));
    dispatch(setFeeHeads([]));
    setAmounts([]);
    setCheckboxStates({});
    clearStates();
    setCheckedAmount('');
  };

  return (
    <>
      <Grid item xs={12} lg={8} sx={{ position: 'relative' }}>
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
          <Table sx={{ width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ display: 'flex' }}>
                <TableCell sx={{ flex: '0 0 20%' }}>Sr No.</TableCell>
                <TableCell sx={{ flex: '0 0 40%' }}>Fee Head</TableCell>
                <TableCell sx={{ flex: '0 0 40%' }}>
                  <Checkbox
                    checked={selectAllAmountChecked}
                    onChange={handleSelectAllAmount}
                  />
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className='scrollbar' sx={{ display: 'flex', maxHeight: '300px', flexDirection: 'column', overflowY: 'auto', paddingBottom: '20px', minHeight: '120px' }}>
              {PreviewData?.map((rowData, index) => (
                <TableRow key={rowData.id} sx={{ display: 'flex', '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell sx={{ flex: '0 0 20%' }}>{rowData.srNo}</TableCell>
                  <TableCell sx={{ flex: '0 0 40%' }}>{rowData.feeHead}</TableCell>
                  <TableCell sx={{ display: 'flex', flex: '0 0 40%' }}>
                    <Checkbox
                      checked={rowData.CheckboxAmountValue}
                      onChange={() => handleAmountCheckboxValue(index)}
                    />
                    <TextField
                      hiddenLabel
                      name={`amount_${rowData.id}`}
                      id={`amount_${rowData.id}`}
                      value={rowData.amount}
                      onChange={(e) => handleAmount(index, e.target.value)}
                      fullWidth
                      type='number'
                      sx={{
                        borderRadius: '0 !important',
                        '& input': {
                          padding: '12px',
                          background: '#fff',
                        },
                        '& fieldset': {
                          borderRadius: '0',
                          border: '1px solid #ccc',
                        },
                        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                        "input[type=number]": {
                          MozAppearance: "textfield",
                        },
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <Box sx={{ paddingLeft: '18px', alignItems: 'center', gap: '30px', mb: '12px', display: 'flex', paddingTop: '20px', borderTop: '1px solid rgba(224, 224, 224, 1)' }}>

              {/* amount */}
              <Box sx={{ display: 'flex', width: '28%', alignItems: 'center', gap: '10px' }}>
                <Typography>Amount</Typography>
                <TextField
                  hiddenLabel
                  name="amount"
                  id='amount'
                  value={checkedAmount}
                  onChange={handleCheckedAmount}
                  fullWidth
                  type='number'
                  sx={{
                    borderRadius: '0 !important',
                    '& input': {
                      padding: '12px',
                      background: '#fff',
                    },
                    '& fieldset': {
                      borderRadius: '0',
                      border: '1px solid #ccc',
                    },
                    "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                    "input[type=number]": {
                      MozAppearance: "textfield",
                    },
                  }}
                />
              </Box>

              <Box sx={{ marginLeft: 'auto', paddingRight: '30px' }}>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
              </Box>
            </Box>

            <Box sx={{ padding: '10px 10px 10px 30px', borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
              <Typography variant='h5' sx={{ lineHeight: '34px' }}>
                Class:
                {classes.map((item) => item.name).join(',')}
              </Typography>
            </Box>

          </Table>
        </TableContainer>
      </Grid>

      {/* bottom nav */}
      <Paper sx={{ ...style.BottomNavbar, ...customStyle }}>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button variant="contained" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px" }} onClick={() => handleSave(PreviewData)}>
            Save
          </Button>

          <Button variant="outlined" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px" }}>
            Cancel
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default OptionalFeeHeadPreview;
