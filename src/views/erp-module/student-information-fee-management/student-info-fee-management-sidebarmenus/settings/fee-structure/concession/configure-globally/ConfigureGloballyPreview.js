import React, { useState } from 'react';
import {
  Grid, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Checkbox, TextField,
  Box, Typography, Button, styled,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import SelectList from 'components/ui/custom-input/SelectList';
import { configGlobally, setFeeHeads } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';

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

const ConfigureGloballyPreview = ({ customStyle, clearStates }) => {
  const dispatch = useDispatch();
  const [concessionTypes, setConcessionTypes] = useState([]);
  const [amounts, setAmounts] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [selectAllConcessionTypeChecked, setSelectAllConcessionTypeChecked] = useState(false);
  const [selectAllAmountChecked, setSelectAllAmountChecked] = useState(false);
  const [checkedConcessionType, setCheckedConcessionType] = useState('');
  const [checkedAmount, setCheckedAmount] = useState('');
  const feeHead = useSelector((state) => state.configGloballyFormSlice.feeHeads);
  const classes = useSelector((state) => state.configGloballyFormSlice.classes);
  const concessionTypeOptions = useSelector((state) => state.configGloballyFormSlice.concessionTypeOptions);

  const handleConcessionType = (index, value) => {
    const newConcessionTypes = [...concessionTypes];
    newConcessionTypes[index] = value;
    setConcessionTypes(newConcessionTypes);
  };

  const handleAmount = (index, value) => {
    const newAmounts = [...amounts];
    newAmounts[index] = value;
    setAmounts(newAmounts);
  };

  const handleSelectAllConcessionType = () => {
    const newSelectAllConcessionTypeChecked = !selectAllConcessionTypeChecked;
    setSelectAllConcessionTypeChecked(newSelectAllConcessionTypeChecked);

    const newCheckboxStates = { ...checkboxStates };
    feeHead.forEach((_, index) => {
      newCheckboxStates[index] = {
        ...newCheckboxStates[index],
        concessionTypeChecked: newSelectAllConcessionTypeChecked,
      };
    });
    setCheckboxStates(newCheckboxStates);
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

  const handleCheckedConcessionType = (e) => {
    setCheckedConcessionType(e.target.value);
  };

  const handleCheckedAmount = (e) => {
    setCheckedAmount(e.target.value);
  };

  const handleConcessionTypeCheckboxValue = (index) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        concessionTypeChecked: !prevState[index]?.concessionTypeChecked,
      },
    }));
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
    concessionType: concessionTypes[index] || '',
    amount: amounts[index] || '',
    CheckboxConcessionTypeValue: checkboxStates[index]?.concessionTypeChecked || false,
    CheckboxAmountValue: checkboxStates[index]?.amountChecked || false,
  }));

  const handleSubmit = () => {
    // Create new arrays for concession types and amounts based on current state
    const newConcessionTypes = [...concessionTypes];
    const newAmounts = [...amounts];
  
    // Iterate over each item in the PreviewData
    PreviewData.forEach((rowData, index) => {
      // Check if the concession type checkbox is checked for the current row
      if (checkboxStates[index]?.concessionTypeChecked) {
        // If there is a checked concession type value, update the corresponding index in newConcessionTypes
        if (checkedConcessionType !== '') {
          newConcessionTypes[index] = checkedConcessionType;
        }
      }
      // Check if the amount checkbox is checked for the current row
      if (checkboxStates[index]?.amountChecked) {
        // If there is a checked amount value, update the corresponding index in newAmounts
        if (checkedAmount !== '') {
          newAmounts[index] = checkedAmount;
        }
      }
    });
  
    // Update the state with the new concession types and amounts
    setConcessionTypes(newConcessionTypes);
    setAmounts(newAmounts);
  };
  
  const handleSave = () => {
    dispatch(configGlobally(PreviewData));
    dispatch(setFeeHeads([]));
    setConcessionTypes([]);
    setAmounts([]);
    setCheckboxStates({});
    clearStates();
    setCheckedConcessionType('');
    setCheckedAmount('');
  };

  return (
    <>
      <Grid item xs={12} lg={8} sx={{ position: 'relative' }}>
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
          <Table sx={{ width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ display: 'flex' }}>
                <TableCell sx={{ flex: '0 0 10%' }}>Sr No.</TableCell>
                <TableCell sx={{ flex: '0 0 20%' }}>Fee Head</TableCell>
                <TableCell sx={{ flex: '0 0 35%' }}>
                  <Checkbox
                    checked={selectAllConcessionTypeChecked}
                    onChange={handleSelectAllConcessionType}
                  />
                  Concession Type
                </TableCell>
                <TableCell sx={{ flex: '0 0 35%' }}>
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
                  <TableCell sx={{ flex: '0 0 10%' }}>{rowData.srNo}</TableCell>
                  <TableCell sx={{ flex: '0 0 20%' }}>{rowData.feeHead}</TableCell>
                  <TableCell sx={{ display: 'flex', flex: '0 0 35%' }}>
                    <Checkbox
                      checked={rowData.CheckboxConcessionTypeValue}
                      onChange={() => handleConcessionTypeCheckboxValue(index)}
                    />
                    <SelectList
                      hiddenLabel
                      name={`concessionType_${rowData.id}`}
                      id={`concessionType_${rowData.id}`}
                      options={concessionTypeOptions}
                      value={rowData.concessionType}
                      onChange={(e) => handleConcessionType(index, e.target.value)}
                      customStyle={{
                        borderRadius: '0 !important',
                        '& fieldset': {
                          borderRadius: '0 !important',
                          border: 'none !important',
                        },
                        '& .MuiSelect-select': {
                          background: '#fff',
                          border: '1px solid #ccc',
                          padding: '12px',
                          borderRadius: '0',
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ display: 'flex', flex: '0 0 35%' }}>
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
              {/* concession type */}
              <Box sx={{ display: 'flex', width: '35%', alignItems: 'center', gap: '10px' }}>
                <Typography sx={{ flex: '0 0 116px' }}>Concession Type</Typography>
                <SelectList
                  hiddenLabel
                  name="selectConcessionType"
                  id='selectConcessionType'
                  options={concessionTypeOptions}
                  value={checkedConcessionType}
                  onChange={handleCheckedConcessionType}
                  customStyle={{
                    borderRadius: '0 !important',
                    '& fieldset': {
                      borderRadius: '0 !important',
                      border: 'none !important',
                    },
                    '& .MuiSelect-select': {
                      background: '#fff',
                      border: '1px solid #ccc',
                      padding: '12px',
                      borderRadius: '0',
                    }
                  }}
                />
              </Box>
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

export default ConfigureGloballyPreview;
