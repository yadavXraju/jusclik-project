import React, { useEffect } from 'react';
import { Grid, TextField, Card, useMediaQuery, Typography } from '@mui/material';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import EditableTable from './SiblingDetails';

const ProfileDetail = ({ setStudentDetail, setEditItem, studentFields, type }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  const [admissionDetails, setAdmissionDetails] = React.useState(() => {
    const initialState = {
      stdName: '',
      AdmNo: '',
      admDate: '',
      dob: '',
      stdCategory: '',
      joiningClass: '',
      joiningDate: ''
    };

    if (setEditItem) {
      initialState.stdName = setEditItem.StudentName || '';
      initialState.AdmNo = setEditItem.AdmNo || '';
      initialState.admDate = setEditItem.AdmDate || null;
      initialState.dob = setEditItem.DOB || null;
      initialState.stdCategory = setEditItem.Studentcategory || '';
      initialState.joiningClass = setEditItem.class || '';
      initialState.joiningDate = setEditItem.joiningDate || '';
    }

    return initialState;
  });

  useEffect(() => {
    if (setEditItem) {
      setAdmissionDetails((prevState) => ({
        ...prevState,
        stdName: setEditItem.StudentName || '',
        AdmNo: setEditItem.AdmNo || '',
        admDate: setEditItem.AdmDate || null,
        dob: setEditItem.DOB || null,
        stdCategory: setEditItem.Studentcategory || '',
        joiningClass: setEditItem.class || '',
        joiningDate: setEditItem.joiningDate || ''
      }));
    }
  }, [setEditItem]);

  useEffect(() => {
    if (setEditItem) {
      handleInputChange('stdName', setEditItem.StudentName || '');
    }
  }, [setEditItem]);

  const handleInputChange = (fieldName, value) => {
    setAdmissionDetails((prevState) => ({
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

  return (
    <>
      {studentFields&&studentFields.map((field) => (
        <Card key={field} sx={{ padding: '10px', mb: 3 }}>
          <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
            {field.name}
          </Typography>
          <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
            {
              field&&field?.subSection.map((item)=>
              <Grid item xs={12} sm={12} md={6} lg={field.name === 'Student Details' ? 4 : 6} key={item.id}>
                {item.type === 'date' ? (
                  <ParameterizedDateComponent
                    customStyle={{ width: '100%' }}
                    value={admissionDetails[field.name]}
                    onChange={(date) => handleInputChange(field.name, date)}
                    label={item.name}
                  />
                ) : (
                  <TextField
                    size={isMobile ? 'small' : 'normal'}
                    id={`outlined-${field?.id}`}
                    value={admissionDetails[field.name]}
                    onChange={(e) => handleInputChange(field.type, e.target.value)}
                    onLoad={() => console.log('vikash poonia')}
                    fullWidth
                    label={item.name}
                    variant="outlined"
                  />
                )}
              </Grid>
            )}
          </Grid>
        </Card>
      ))}
      {/* Sibling Details */}
       {type=="Primary Details"&&<Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Sibling Details
        </Typography>
        <EditableTable />
      </Card> }
    </>
  );
}

export default ProfileDetail;

















