import React from 'react';
import { Button, Box } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import SelectList from 'components/ui/custom-input/SelectList';
import TextField from '@mui/material/TextField';
import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';

function ExpenseDrawerContent() {
    const [expense, setexpense] = useState('');

  const expenseOptions = [
    { value: 'Bus Travel', label: 'Bus Travel' },
    { value: 'Books', label: 'Books' },  
    { value: 'Tour', label: 'Tour' },
  ];
  return (
    <>
       {/* ========== Leave Application Form =========== */}
       <form>
          <Box sx={{ padding: 2 }}>
            <Box pb={2}>
            <SelectList label="Expense Category" options={expenseOptions} value={expense} setValue={setexpense}  />
            </Box>
            <Box pb={2}>
            <TextField id="outlined-basic" label="Amount" variant="outlined" fullWidth />
            </Box>
            <Box pb={2}>
            <ParameterizedDateComponent label="Expense Date" customStyle={{width:'100%'}}/>
            </Box>
            <Box pb={2}>
              <Box p={0.5}>Note</Box>
              <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
            </Box>
            <Box sx={{ padding: 2 }}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button sx={{ alignSelf: 'flex-end' }}>Cancal</Button>
            </Box>
          </Box>
        </form>
    </>
  );
}

export default ExpenseDrawerContent;
