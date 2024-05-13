import { Box, Typography, TextField } from '@mui/material'
import React from 'react'
import ParameterizedAutoComplete from 'views/common-section/ParamAutoComplete'
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent'

import RadioButtonsGroup from 'views/common-section/ParamRadioButton'

const EmployeeExitForm = () => {
    const reason=[{
        value:'personal',label:'Employee want to resign'},
        {
            value:'company',label:'Company  decide to terminate'},
    ]


    const discusion =[{
        label:'Yes',value:'yes'
    },
{
    label:'no',value:'No'
}
]
const options = [
    { label: 'Better Opportunity', reason: 'Found a better job opportunity' },
    { label: 'Personal Reasons', reason: 'Leaving due to personal commitments' },
    { label: 'Career Growth', reason: 'Seeking career growth elsewhere' },
    { label: 'Relocation', reason: 'Moving to a different city or country' },
    { label: 'Work-Life Balance', reason: 'Desire for a better work-life balance' },
    { label: 'Company Culture', reason: 'Issues with company culture or values' },
  ];
  
  return (
    <>
      <Box>

        <Typography>What is the reason Of initating the exit?</Typography>
        <RadioButtonsGroup defaultValue={"personal"}  options={reason} />
    
      </Box>

      <Box>
        
        <Typography>What is the reason Of initating the exit?</Typography>
        <RadioButtonsGroup defaultValue={"yes"}  options={discusion} />
    
      </Box>
      <Box>
        
        <Typography>Summary</Typography>
        <TextField
        multiline
        fullWidth
          
        />
    
      </Box>

      <Box>
        
        <Typography>Reasone to resign</Typography>
       <ParameterizedAutoComplete option={options}  customStyle={{width:"60vh !important"}} label={'Select Reason'}  />
    
      </Box>
      <Box>
        
        <Typography>When did employee provide the notice of exit</Typography>
        <ParameterizedDateComponent  />
    
      </Box>
    </>
  )
}

export default EmployeeExitForm
