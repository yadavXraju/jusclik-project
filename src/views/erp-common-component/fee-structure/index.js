import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import { Paper , Box } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from './TabLabel';
import ReusableTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';


const tableHeadings = [
    {
      id: 2,
      tabHeading: "Periodicity"
    },
    {
      id: 3,
      tabHeading: "Type"
    },
    {
      id: 4,
      tabHeading: "Amount"
    },
    {
      id: 5,
      tabHeading: "To Be Charge From"
    },
    {
      id: 6,
      tabHeading: "Registration Fee"
    },
    {
        id: 7,
        tabHeading: "Tuition Fee"
    },
      {
        id: 8,
        tabHeading: "To be charge from"
      },
  ]
  
  const data = [
    {
      "wing": "A",
      "createdBy": "John Doe",
      "createdOn": "2024-03-05"
    },
    {
      "wing": "B",
      "createdBy": "Jane Smith",
      "createdOn": "2024-03-06"
    },
    {
      "wing": "C",
      "createdBy": "Alice Johnson",
      "createdOn": "2024-03-07"
    },
    {
      "wing": "D",
      "createdBy": "Bob Brown",
      "createdOn": "2024-03-08"
    },
    {
      "wing": "E",
      "createdBy": "Emma Wilson",
      "createdOn": "2024-03-09"
    }
  ];



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
      <Paper sx={{display:'flex' , padding:'24px'}}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: '#e3e8efad' }}>
              <TabLabel handleChange={handleChange}/>
            </Box>
       
            <TabPanel value="1" sx={{width:'100%'}}><ReusableTable  columns={tableHeadings} data={data}/> </TabPanel>
            <TabPanel value="2" sx={{width:'100%'}} >test</TabPanel>

          </TabContext>
      </Paper>

    </Box>
    </>
  );
}

export default FeeStructure


