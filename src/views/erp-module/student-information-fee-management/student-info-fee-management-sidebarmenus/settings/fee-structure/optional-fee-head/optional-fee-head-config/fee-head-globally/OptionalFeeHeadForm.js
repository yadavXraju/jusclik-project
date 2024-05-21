import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import ParamDateComponent from 'views/common-section/ParamDateComponent';
import ParamMultipleSelect from 'views/common-section/ParamMultipleSelect';
import { useDispatch, useSelector } from 'react-redux';
import { setFeeHeads, setClass } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';
import OptionalFeeHeadPreview from './OptionalFeeHeadPreview';

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

export default OptionalFeeHeadForm;
