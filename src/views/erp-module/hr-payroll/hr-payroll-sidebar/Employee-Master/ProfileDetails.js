import React, { useEffect } from 'react';
import { Grid, TextField, Card, useMediaQuery, Typography } from '@mui/material';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

const ProfileDetail = ({ setStudentDetail, setEditItem, EmployeeFields }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  
  const [employeeDetails, setEmployeeDetails] = React.useState(() => {
    const initialState = {
      employeeId: '',
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      joiningDate: '',
      designation: '',
      department: '',
      email: '',
      mobile: '',
    };
    
    return initialState;
  });

  useEffect(() => {
    if (setEditItem) {
      setEmployeeDetails((prevState) => ({
        ...prevState,
        employeeId: setEditItem.employeeId || '',
        firstName: setEditItem.firstName || '',
        lastName: setEditItem.lastName || null,
        gender: setEditItem.gender || null,
        dob: setEditItem.dob || '',
        joiningDate: setEditItem.doj || '',
        designation: setEditItem.designation || '',
        department: setEditItem.department || '',
        email: setEditItem.email || '',
        mobile: setEditItem.mobile || '',
      }));
    }
  }, [setEditItem]);

  useEffect(() => {
    if (setEditItem) {
      handleInputChange('stdName', setEditItem.StudentName || '');
    }
  }, [setEditItem]);

  const handleInputChange = (fieldName, value) => {
    setEmployeeDetails((prevState) => ({
      ...prevState,
      [fieldName]: value
    }));
    if (fieldName === 'stdName') {
      setStudentDetail('firstName', value);
    } else if (fieldName === 'stdMiddleName') {
      setStudentDetail('middleName', value);
    } else if (fieldName === 'stdLastName') {
      setStudentDetail('lastName', value);
    }
  };

  const toCamelCase = (str) => {
    // Remove dots from the string
    const stringCamelCase = str.replace(/\./g, '').toLowerCase();
  
    return stringCamelCase.replace(/\s(.)/g, function(match, group1) {
      return group1.toUpperCase();
    })
  };


  return (
    <>
      {EmployeeFields && EmployeeFields.map((field) => (
        <Card key={field} sx={{ padding: '10px', mb: 3 }}>
          <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
            {field.name}
          </Typography>
          <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
            {
              field&&field?.subSection.map((item)=>
             <>
              <Grid item xs={12} sm={12} md={6} lg={field.name === 'Employee Details' ? 4 : 6} key={item.id}>
                {item.type === 'date' ? (
                  <ParameterizedDateComponent
                    customStyle={{ width: '100%' }}
                    // value={employeeDetails[item.name]}
                    value={employeeDetails[toCamelCase(item.name) || '']}
                    // onChange={(date) => handleInputChange(field.name, date)}
                    label={item.name}
                  />
                ) : (
                  <TextField
                    size={isMobile ? 'small' : 'normal'}
                    id={`outlined-${field?.id}`}
                    value={employeeDetails[toCamelCase(item.name) || '']}
                    onChange={(e) => handleInputChange(toCamelCase(item.name), e.target.value)}
                    onLoad={() => console.log('Tarun Panday')}
                    fullWidth
                    label={item.name}
                    variant="outlined"
                  />
                )}
              </Grid>
              {console.log(toCamelCase(item.name))}
             </>
            )}
          </Grid>
        </Card>
      ))}
    </>
  );
}

export default ProfileDetail;