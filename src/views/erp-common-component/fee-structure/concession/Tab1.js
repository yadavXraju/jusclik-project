import React,{useState} from 'react'
import SelectList from 'views/common-section/ParamSelectList';
import { Grid , TextField } from '@mui/material';



const Tab1 = () => {
  // ========= state for Attach Slab ============
  const [concessionCategory, setConcessionCategory] = useState('');
  const [approvalId, setApprovalId] = useState('');
//   const [value, setValue] = useState('female');
  const [toBeChargeFrom, setToBeChargeFrom,] = useState('');






  const ToBeChargeFromOptions = [
    { value: 'Old students', label: 'Old students' },
    { value: 'New student', label: 'New student' },
    { value: 'Old student and New student', label: 'Old student and New student' },

  ];


  const ConcessionCategory = (event) => {
    setConcessionCategory(event.target.value);
  };

  const ApprovalId = (event) => {
    setApprovalId(event.target.value);
  };



  const ToBeChargeFrom= (event) => {
    setToBeChargeFrom(event.target.value);
  };

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
  
  return (
    <>
    <Grid  sx={{padding:'16px' , border:'1px solid #ccc' , borderRadius:'5px' , marginTop:'1rem'}}>

      <Grid item xs={12} sx={{paddingBottom:'16px'}} >
             <TextField id="fee-head" value={concessionCategory} label="Concession Category " variant="outlined" onChange={ConcessionCategory} fullWidth />
      </Grid>

      <Grid item xs={12} sx={{paddingBottom:'16px'}} >
             <TextField id="approvalId" value={approvalId} label="Approval Id" variant="outlined" onChange={ApprovalId} fullWidth />
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

export default Tab1