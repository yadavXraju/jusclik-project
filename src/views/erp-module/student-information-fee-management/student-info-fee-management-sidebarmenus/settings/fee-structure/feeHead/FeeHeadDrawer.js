import React,{useState} from 'react'
import SelectList from 'component/ParamSelectList';
import { Grid , TextField } from '@mui/material';



const FeeHeadDrawer = () => {
  // ========= state for Attach Slab ============
  const [feeHead, setFeeHead] = useState('');
  const [periodicity, setperiodicity] = useState('');
  const [feeType, setFeeType] = useState('');
  const [toBeChargeFrom, setToBeChargeFrom] = useState('');




  const PeriodicityOptions = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Quarterly ', label: 'Quarterly ' },
    { value: 'Half Yearly', label: 'Half Yearly' },
    { value: 'Annually', label: 'Annually' },

  ];

  const FeeTypeOptions = [
    { value: 'Supplementary', label: 'Supplementary' },
    { value: 'One time ', label: 'One time ' },
    { value: 'Half Yearly', label: 'Optional Fee Head' },

  ];

  const ToBeChargeFromOptions = [
    { value: 'Old students', label: 'Old students' },
    { value: 'New student', label: 'New student' },
    { value: 'Old student and New student', label: 'Old student and New student' },

  ];


  const FeeHead = (event) => {
    setFeeHead(event.target.value);
  };


  const Periodicity = (event) => {
    setperiodicity(event.target.value);
  };

  const FeeType= (event) => {
    setFeeType(event.target.value);
  };

  const ToBeChargeFrom= (event) => {
    setToBeChargeFrom(event.target.value);
  };
  
  return (
    <>
    <Grid  sx={{padding:'16px' , border:'1px solid #ccc' , borderRadius:'5px' , marginTop:'1rem'}}>

      <Grid item xs={12} sx={{paddingBottom:'16px'}} >
             <TextField id="fee-head" value={feeHead} label="Fee Head" variant="outlined" onChange={FeeHead} fullWidth />
        </Grid>


        <Grid item xs={12} sx={{paddingBottom:'16px'}} >
            <SelectList 
                label="Periodicity"
                options={ PeriodicityOptions}
                value={periodicity}
                onChange={Periodicity}
            />
        </Grid>

        <Grid item xs={12} sx={{paddingBottom:'16px'}} >
            <SelectList 
                label="Fee Type"
                options={FeeTypeOptions}
                value={feeType}
                onChange={FeeType}
            />
        </Grid>

        <Grid item xs={12} sx={{paddingBottom:'16px'}} >
            <SelectList 
                label="To be charged from"
                options={ToBeChargeFromOptions}
                value={toBeChargeFrom}
                onChange={ToBeChargeFrom}
            />
        </Grid>

    </Grid>
    </>
  )
}

export default FeeHeadDrawer