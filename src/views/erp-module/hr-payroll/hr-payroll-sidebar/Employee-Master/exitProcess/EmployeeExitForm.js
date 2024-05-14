import React from 'react';
import { Typography, TextField, FormControlLabel, FormGroup, Switch, Grid } from '@mui/material';
import ParameterizedAutoComplete from 'views/common-section/ParamAutoComplete';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import RadioButtonsGroup from 'views/common-section/ParamRadioButton';

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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Reason for Initiating the Exit</Typography>
                <RadioButtonsGroup defaultValue="personal" options={reasons} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Discussion Held</Typography>
                <RadioButtonsGroup defaultValue="yes" options={discussions} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Summary</Typography>
                <TextField multiline fullWidth />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Reason to Resign</Typography>
                <ParameterizedAutoComplete option={options} fullWidth label={'Select Reason'} customStyle={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Notice of Exit Provided</Typography>
                <ParameterizedDateComponent fullWidth customStyle={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Recommend Last Working Day</Typography>
                <RadioButtonsGroup defaultValue={1} options={noticePeriod} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">OK to Rehire</Typography>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="OK to rehire?" />
                </FormGroup>
            </Grid>
        </Grid>
    );
};

export default EmployeeExitForm;
