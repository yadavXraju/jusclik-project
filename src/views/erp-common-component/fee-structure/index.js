import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import { Paper , Box } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from './TabLabel';
import OptionalHead from './OptionalHead/OptionalHead';


// const tableHeadings = [
//     {
//       id: 2,
//       tabHeading: "Fee Head"
//     },
//     {
//       id: 3,
//       tabHeading: "Fee Type"
//     },
//     {
//       id: 4,
//       tabHeading: "Amount"
//     },
//     {
//       id: 5,
//       tabHeading: "To Be Charge From"
//     },

//   ]
  
//   const data = [
//     {
//       "feeHead": "Registration Fee",
//       "feeType": "Supplementary Invoice Only",
//       "Amount": "4000"
//     },
//     {
//       "feeHead": "Late Fee",
//       "feeType": "Supplementary Invoice Only",
//       "Amount": "4000"
//     },
//     {
//       "feeHead": "Tuition Fee",
//       "feeType": "Fee charged one time only",
//       "Amount": "4000"
//     },
//     {
//       "feeHead": "Admission Fee",
//       "feeType": "Fee charged one time only",
//       "Amount": "4000"
//     },

//   ];



const FeeStructure =()=> {

  // for active first item when page load
  const [value, setValue] = useState('1')


  // for change the setvalue into newvalue
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Paper sx={{ padding:'24px' , }}>
          <TabContext value={value} >
            <Box sx={{ borderBottom: 1, borderColor: '#e3e8efad' , }} >
              <TabLabel handleChange={handleChange}  />
            </Box>
       
            <TabPanel value="1" sx={{width:'100%' , padding:'2rem 0'}}><OptionalHead /> </TabPanel>
            <TabPanel value="2" sx={{width:'100%' , padding:'2rem 0'}} >test</TabPanel>

          </TabContext>
      </Paper>

    </Box>
    </>
  );
}

export default FeeStructure


