// ======= Page Owner Vikash =========
// ======= Return Slab Form =========
import React, {useState} from 'react';
import { Box, TextField, useMediaQuery, Card } from '@mui/material';
import SelectList from 'components/ParamSelectList';
import ParamMultipleSelect from 'components/ParamMultipleSelect';

function SlabForm() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  // ========= state for Attach Slab ============
  const [academicYear, setAcademicYear] = useState('');
  const AcademicYearOptions = [
    { value: 'Slab1', label: '2009-2010' },
    { value: 'Slab2', label: '2010-2011' },
    { value: 'Slab1', label: '2011-2012' },
    { value: 'Slab2', label: '2012-2013' },
    { value: 'Slab1', label: '2014-2015' },
    { value: 'Slab2', label: '2015-2016' },
    { value: 'Slab1', label: '2016-2017' },
    { value: 'Slab2', label: '2017-2018' },
  ];
  const AcademicYearChange = (event) => {
    setAcademicYear(event.target.value);
  };

  const [selectedStudents, setSelectedStudents] = React.useState([]);
  // =========== list of students ===========
  const students = [
    { id: 1, name: 'I' },
    { id: 2, name: 'II' },
    { id: 3, name: 'III' },
    { id: 4, name: 'VII' },
    { id: 5, name: 'X' },
    { id: 6, name: 'XII' },
  ];

  const [selectedMonth, setSelectedMonth] = React.useState([]);
  // =========== list of students ===========
  const months = [
    { id: 1, name: 'I' },
    { id: 2, name: 'II' },
    { id: 3, name: 'III' },
    { id: 4, name: 'VII' },
    { id: 5, name: 'X' },
    { id: 6, name: 'XII' },
  ];


  return (
    <>
      <Card sx={{border:'1px solid #ccc', p:2, borderRadius:'5px'}}>
        <Box>
          <Box pb={2}>
            <TextField id="outlined-basic" size={isMobile ? 'small' : 'normal'} fullWidth label="Slab Name" variant="outlined" />
          </Box>
          <Box pb={2}>
            <SelectList 
            label="Academic Year Upto"
            options={AcademicYearOptions}
            value={academicYear}
            onChange={AcademicYearChange}
            size={isMobile ? 'small' : 'normal'}
            />
          </Box>
          <Box pb={2}>
          <ParamMultipleSelect options={students} label="Classes" value={selectedStudents} setValue={setSelectedStudents} />
          </Box>
          <Box pb={2}>
          <ParamMultipleSelect options={months} label="Select Month" value={selectedMonth} setValue={setSelectedMonth} />
          </Box>
          <Box pb={2}>
            <TextField id="outlined-basic" size={isMobile ? 'small' : 'normal'} fullWidth type='number' label="Amount" variant="outlined" />
          </Box>
          
        </Box>
      </Card>
    </>
  );
}

export default SlabForm;
