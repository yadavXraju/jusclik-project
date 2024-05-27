// Page owner : Abhishek negi
// description : Optional fee head globally

import React, { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Grid, TextField } from '@mui/material';
import ParamFeeStructureConfig from 'components/table-data-grid/FeeStructureConfig';
import ParamDateComponent from 'components/ui/custom-input/DateComponent';
import ParamMultipleSelect from 'components/ui/custom-input/MultipleSelect';
import { OptionalFeeHeadConfigGlobally } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';
import { setFeeHeads, setClass } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';
import OptionalFeeHeadPreview from 'views/erp-module/student-information-fee-management/settings/fee-structure/optional-fee-head/OptionalFeeHeadPreview';

// ========== optonal fee head form start
const OptionalFeeHeadForm = () => {
  const [applicableFromDate, setApplicableFromDate] = useState('');
  const [uptoDate, setUptoDate] = useState('');
  const [feeHead, setFeeHead] = useState([]);
  const [classes, setClasses] = useState([]);
  const [remark, setRemark] = useState('');
  const dispatch = useDispatch();
  const feeHeadOptions = useSelector((state) => state.configGloballyFormSlice.feeHeadOptions);
  const classesOptions = useSelector((state) => state.configGloballyFormSlice.classesOptions);

  const handleRemark = (e) => {
    setRemark(e.target.value);
  };

  dispatch(setFeeHeads(feeHead));
  dispatch(setClass(classes));

  const clearStates = () => {
    setFeeHead([]);
    setClasses([]);
    setRemark('');
    setUptoDate('');
    setApplicableFromDate('');
  };


  return (
    <>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={2} sx={{ borderRadius: '12px', margin: '0', width: '100%', border: '1px solid rgba(224, 224, 224, 1)', padding: '1rem 1rem 1rem 0px' }}>

          {/* ===========================  applicable from date*/}
          <Grid item xs={12} md={6} sx={{ marginBottom: '5px' }}>
            <ParamDateComponent label="Applicable From Date" name="applicableFromDate" value={applicableFromDate} customStyle={{ width: '100%' }}
            onChange={(date) => setApplicableFromDate(date.format('DD-MM-YYYY'))} 
              />
          </Grid>

          {/* ===========================  up to date*/}
          <Grid item xs={12} md={6} sx={{ marginBottom: '5px' }}>
            <ParamDateComponent label="Upto Date" name="uptoDate" value={uptoDate} customStyle={{ width: '100%' }}  
            onChange={(date) => setUptoDate(date.format('DD-MM-YYYY'))} 
            />
          </Grid>

          {/* ===========================  fee head */}
          <Grid item xs={12} md={12} sx={{ marginBottom: '5px', flexWrap: 'nowrap' }}>
            <ParamMultipleSelect
              options={feeHeadOptions}
              label="Fee Head"
              value={feeHead}
              setValue={setFeeHead}
            />
          </Grid>

          {/* ===========================  Class */}
          <Grid item xs={12} md={12} sx={{ marginBottom: '5px' }}>
            <ParamMultipleSelect
              options={classesOptions}
              label="Class"
              value={classes}
              setValue={setClasses} />
          </Grid>

          {/* ===========================  remarks*/}
          <Grid item xs={12} md={12} sx={{ marginBottom: '5px' }}>
            <TextField
              id="remarks"
              name="remarks"
              value={remark}
              label="Remarks"
              variant="outlined"
              onChange={handleRemark}
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      <OptionalFeeHeadPreview clearStates={clearStates}/>
    </>
  )
}
// ========== optonal fee head form end

const OptionalFeeHeadGlobally = () => {

    const dispatch = useDispatch();
    const configGloballyData = useSelector((state) => state.configGloballyFormSlice.OptionalFeeHeadConfigGlobally); 
  
  
    const handleSaveRow = (updatedRow) => {
      // Map through the current data and update the row with the matching ID
      const updatedData = configGloballyData.map((row) => (row.id === updatedRow.id ? updatedRow : row));
      // Dispatch the updated data to the Redux store
      dispatch(OptionalFeeHeadConfigGlobally(updatedData));
    };
  
    // Handler function to delete a row
    const handleDeleteRow = (rowToDelete) => {
      // Filter out the row to be deleted based on its ID
      const updatedData = configGloballyData.filter((row) => row.id !== rowToDelete.id);
      // Dispatch the updated data to the Redux store
      dispatch(OptionalFeeHeadConfigGlobally(updatedData));
    };
  
  
    const tableHeadings = [
      { id: 'srNo', tabHeading: 'Sr No.' },
      { id: 'feeHead', tabHeading: 'Fee Head' },
      { id: 'classes', tabHeading: 'Class' },
      { id: 'amount', tabHeading: 'Amount' },
    ];
  
    // Prepare data for the ParamFeeStructureConfig component
    const data = configGloballyData.map((item, index) => ({
      id: item.id,
      srNo: index + 1, // Add 1 to index for Sr No.
      feeHead: item.feeHead,
      classes: Array.isArray(item.classes) ? item.classes.join(', ') : item.classes, // Convert array of classes to string
      amount: item.amount,
    }));

  return (
    <>
      <ParamFeeStructureConfig
      data={data}
      tableHeadings={tableHeadings}
      onSaveRow={handleSaveRow}
      onDeleteRow={handleDeleteRow}
      tablColumnWidth={{flex:'0 0 20%'}}
    >
       <OptionalFeeHeadForm />
      </ParamFeeStructureConfig>
    </>
  )
}

export default OptionalFeeHeadGlobally