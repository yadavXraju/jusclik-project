import React, { useState } from 'react';
import { Grid, TextField,  Checkbox , FormControlLabel} from '@mui/material';

const Tab1 = () => {
    const [concessionCategory, setConcessionCategory] = useState('');
    const [approvalId, setApprovalId] = useState('');
    const [approvalBased, setApprovalBased] = useState(true);

  
    const ConcessionCategory = (event) => {
      setConcessionCategory(event.target.value);
    };
  
    const ApprovalId = (event) => {
      setApprovalId(event.target.value);
    };
  


    const handleApprovalBased = (event) => {
        setApprovalBased(event.target.checked);
    };
      
//   console.log(approvalBased)

    return (
      <>
        <Grid sx={{ padding: '16px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '1rem' }}>

          <Grid item xs={12} sx={{ paddingBottom: '16px' }}>
            <TextField id="fee-head" value={concessionCategory} label="Concession Category" variant="outlined" onChange={ConcessionCategory} fullWidth />
          </Grid>
  
          <Grid item xs={12} sx={{ padding: '3px 12px' , border:'1px solid #bfc0c2', marginBottom:'20px' ,  borderRadius:'10px'}} >
                <FormControlLabel
                    control={<Checkbox />}
                    checked={approvalBased}
                    onChange={handleApprovalBased}
                    inputProps={{ 'aria-label': 'controlled' }}
                    label="Approval Based" 
               />
          </Grid>

          <Grid item xs={12} >
            <TextField id="approvalId" sx={{ paddingBottom: '16px' }} value={approvalId} label="Approval Id" variant="outlined" onChange={ApprovalId} fullWidth />
          </Grid>
          
        </Grid>
      </>
    );
};

export default Tab1;