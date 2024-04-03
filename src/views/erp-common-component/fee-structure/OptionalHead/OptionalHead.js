import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import { Paper , Box } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from './TabLabel';
import CreateFeeHead from './CreateFeeHeads';


const OptionalHead =()=> {

  // for active first item when page load
  const [value, setValue] = useState('1')


  // for change the setvalue into newvalue
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1' }}  >
      <Paper sx={{ display:'flex' , }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: '#e3e8efad' }}>
              <TabLabel handleChange={handleChange}/>
            </Box>
       
            <TabPanel value="1" sx={{width:'100%',padding:'0 2rem' }}> <CreateFeeHead /> </TabPanel>
            <TabPanel value="2" sx={{width:'100%',padding:'0 2rem' }} >test</TabPanel>

          </TabContext>
      </Paper>

    </Box>
    </>
  );
}

export default OptionalHead


