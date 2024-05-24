
// owner ------- Sangeeta


import React from 'react';
import { Typography, TextField, FormControlLabel, FormGroup, Switch, Grid, Button } from '@mui/material';
import ParameterizedAutoComplete from 'components/ParamAutoComplete';
import ParameterizedDateComponent from 'components/ParamDateComponent';
import RadioButtonsGroup from 'components/ParamRadioButton';

const EmployeeExitForm = () => {
    const reasons = [
        { value: 'personal', label: 'Employee wants to resign' },
        { value: 'company', label: 'Company decides to terminate' },
    ];

    const discussions = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' }
    ];

    const options = [
        { label: 'Better Opportunity', reason: 'Found a better job opportunity' },
        { label: 'Personal Reasons', reason: 'Leaving due to personal commitments' },
        { label: 'Career Growth', reason: 'Seeking career growth elsewhere' },
        { label: 'Relocation', reason: 'Moving to a different city or country' },
        { label: 'Work-Life Balance', reason: 'Desire for a better work-life balance' },
        { label: 'Company Culture', reason: 'Issues with company culture or values' },
    ];

    const noticePeriod = [
        { value: '1', label: 'Complete Notice Period' },
        { value: '2', label: 'Other Date' }
    ];

    return (
        <Grid container spacing={2}  sx={{mt:2}}>
            <Grid item xs={12}>
                <Typography variant="h5"  sx={{mb:1}}>Reason for Initiating the Exit</Typography>
                <RadioButtonsGroup defaultValue="personal" options={reasons} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{mb:1}}>Discussion Held</Typography>
                <RadioButtonsGroup defaultValue="yes" options={discussions} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{mb:1}}>Summary</Typography>
                <TextField multiline fullWidth />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{mb:1}}>Reason to Resign</Typography>
                <ParameterizedAutoComplete option={options} fullWidth label={'Select Reason'} customStyle={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{mb:1}}>Notice of Exit Provided</Typography>
                <ParameterizedDateComponent fullWidth customStyle={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{mb:1}}>Recommend Last Working Day</Typography>
                <RadioButtonsGroup defaultValue={1} options={noticePeriod} />
            </Grid>
            <Grid item xs={12}>
                
                <FormGroup>
                    <FormControlLabel control={<Switch />} label="OK to rehire?" />
                </FormGroup>
            </Grid>

            <Grid item xs={12}>
          <Button variant="contained" color="primary" sx={{position:"absolute",bottom:"10px",right:"10px"}}>
            Submit
          </Button>
            </Grid>
        </Grid>
    );
};

export default EmployeeExitForm;
