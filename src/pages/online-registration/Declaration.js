// Page owner - Kulwinder Singh
// online Registration 

import React, { useState } from 'react';
import { Grid, Typography, Box, Paper, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Dropdown from 'views/common-section/ParamSelectList';

const Declaration =({handleClick}) => {
    const [selectedDeclare, setSelectedDeclare] = useState('');
    const [declareError, setDeclareError] = useState(false);

    const handleDeclarationChange = (event) => {
      const { value } = event.target; 
      setSelectedDeclare(value);
      setDeclareError(false); 
  };

 

    const handleSubmit = (tab) => {
        if (!selectedDeclare) {
            // If no declaration is selected, set error to true
            setDeclareError(true);
            return; // Exit function if there's an error
        }
           
        handleClick(tab)
    };

    const selectDeclareOptions = [
        { value: 'yes', label: 'Yes' },
       
    ];

    return (
        <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
            <Paper sx={{ height: '86vh' }}>
                <Box sx={{ padding: '2rem' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
                        {' '}
                        STEP 9 : DECLARATION{' '}
                    </Typography>

                    <Divider />
                </Box>

                <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
                    <Grid item xs={4}>
                        <Dropdown
                            label="Declare"
                            options={selectDeclareOptions}
                            value={selectedDeclare}
                            onChange={handleDeclarationChange}
                            error={declareError} // Pass error state to Dropdown component
                            rootStyle={{ marginTop: '20px' }}
                            customStyle={{ '& > div': { background: '#ffffff' } }}
                        />
                    </Grid>

                    <Grid item xs={4}></Grid>

                    <Grid item xs={4}></Grid>
                </Grid>

                <Box sx={{ paddingBottom: '2rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
                    <Button onClick={() => handleSubmit('ten')}variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
                        Save and Next
                    </Button>
                </Box>
            </Paper>
        </Grid>
    );
}

export default Declaration;
