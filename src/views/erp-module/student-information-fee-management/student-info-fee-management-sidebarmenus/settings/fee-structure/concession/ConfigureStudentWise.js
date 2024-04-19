import React,{useState} from 'react';
import {
    Grid,
  } from '@mui/material';
  import SelectList from 'views/common-section/ParamSelectList';

const ConfigureStudentWise = () => {

    const [concessionData, setConcessionData] = useState({
        acadmicYear: '',
        role: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
          setConcessionData((prevData) => ({
            ...prevData,
            [name]: value,
          }));

      };

      
  // Acadmic option
  const AcademicYearOptions = [
    { value: '2024-25', label: '2024-25' },
    { value: '2023-24', label: '2023-24' },
    { value: '2022-23', label: '2022-23' },
    { value: '2021-22', label: '2021-22' }
  ];


  return (
    <>
  
        {/* ===========================  academic year*/}
     <Grid container spacing={2}>
        <Grid lg={4} sx={{ marginBottom: '24px' }}>
        <SelectList label="Academic Year" name="acadmic-year" options={AcademicYearOptions} value={concessionData.acadmicYear} onChange={handleChange}  />
        </Grid>
     </Grid>

    </>
  )
}

export default ConfigureStudentWise