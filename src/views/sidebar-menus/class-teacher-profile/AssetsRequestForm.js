import React from 'react';
import { TextField } from '@mui/material';
import { Box, Button } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
import { Autocomplete } from '@mui/material';

function AssetsRequestForm() {
    const [selectedStudent, setSelectedStudent] = React.useState(null);

  const handleChange = (event, value) => {
    setSelectedStudent(value);
  };

  // ========== List of students ===========
const students = [
    { id: 1, name: 'Suraj' },
    { id: 2, name: 'Abhishek' },
    { id: 3, name: 'Sangeeta' },
    { id: 4, name: 'Amit' },
    { id: 5, name: 'Ruby' },
  ];

  return (
    <>
      <Box>
        <form>
          <Box pt={2}>
            <Autocomplete
              id="student-autocomplete"
              options={students}
              freeSolo
              getOptionLabel={(student) => student.name}
              value={selectedStudent}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} variant="outlined" size="small" label="Assets Name" placeholder="Search" />}
            />
          </Box>
          <Box pb={2}>
            <Box p={0.5}>Describe Your Requirement in Detail</Box>
            <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
          </Box>
          <Box sx={{ padding: 2 }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default AssetsRequestForm;
