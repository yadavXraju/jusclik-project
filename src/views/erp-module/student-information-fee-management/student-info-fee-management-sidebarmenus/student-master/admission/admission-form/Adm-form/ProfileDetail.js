import React, { useEffect } from 'react';
import { Grid, TextField, Card, useMediaQuery, Typography } from '@mui/material';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import EditableTable from './EditableTable';

function ProfileDetail({ setStudentDetail, setEditItem }) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const fieldDetails = [
    { id: 1, section: 'Admission Details', details: { key: 'AdmNo', label: 'Admission No.', type: 'text' } },
    { id: 2, section: 'Admission Details', details: { key: 'admDate', label: 'Admission Date', type: 'date' } },
    { id: 3, section: 'Admission Details', details: { key: 'joiningClass', label: 'Joining Class', type: 'text' } },
    { id: 4, section: 'Admission Details', details: { key: 'joiningDate', label: 'Joining Date', type: 'date' } },
    { id: 5, section: 'Student Details', details: { key: 'stdName', label: 'First Name', type: 'text' } },
    { id: 6, section: 'Student Details', details: { key: 'stdMiddleName', label: 'Middle Name', type: 'text' } },
    { id: 7, section: 'Student Details', details: { key: 'stdLastName', label: 'Last Name', type: 'text' } },
    { id: 8, section: 'Student Details', details: { key: 'gender', label: 'Gender', type: 'text' } },
    { id: 9, section: 'Student Details', details: { key: 'dob', label: 'D.O.B', type: 'date' } },
    { id: 10, section: 'Student Details', details: { key: 'age', label: 'Age', type: 'text' } },
    { id: 11, section: 'Student Details', details: { key: 'aadhaarNo', label: 'Aadhaar No.', type: 'text' } },
    { id: 12, section: 'Student Details', details: { key: 'penNo', label: 'PEN No.', type: 'text' } },
    { id: 13, section: 'Class Details', details: { key: 'class', label: 'Class', type: 'text' } },
    { id: 14, section: 'Class Details', details: { key: 'section', label: 'Section', type: 'text' } },
    { id: 15, section: 'Fee Details', details: { key: 'category', label: 'Category', type: 'text' } },
    { id: 16, section: 'Fee Details', details: { key: 'payMode', label: 'Pay Mode', type: 'text' } },
    { id: 17, section: 'Fee Details', details: { key: 'concession', label: 'Concession', type: 'text' } }
  ];

  const groupedFields = {};
  fieldDetails.forEach((field) => {
    groupedFields[field.section] = groupedFields[field.section] || [];
    groupedFields[field.section].push(field);
  });

  // Initialize admissionDetails state based on setEditItem
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
      {/* Render sections and their fields */}
      {Object.entries(groupedFields).map(([section, fields]) => (
        <Card key={section} sx={{ padding: '10px', mb: 3 }}>
          <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
            {section}
          </Typography>
          <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
            {fields.map((field) => (
              <Grid item xs={12} sm={12} md={6} lg={section === 'Student Details' ? 4 : 6} key={field.id}>
                {field.details.type === 'date' ? (
                  <ParameterizedDateComponent
                    customStyle={{ width: '100%' }}
                    value={admissionDetails[field.details.key]}
                    onChange={(date) => handleInputChange(field.details.key, date)}
                    label={field.details.label}
                  />
                ) : (
                  <TextField
                    size={isMobile ? 'small' : 'normal'}
                    id={`outlined-${field.details.key}`}
                    value={admissionDetails[field.details.key]}
                    onChange={(e) => handleInputChange(field.details.key, e.target.value)}
                    onLoad={() => console.log('vikash poonia')}
                    fullWidth
                    label={field.details.label}
                    variant="outlined"
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Card>
      ))}
      {/* Sibling Details */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Sibling Details
        </Typography>

        <EditableTable />
      </Card>
    </>
  );
}

export default ProfileDetail;

















// import React, { useEffect } from 'react';
// import { Grid, TextField, Card, useMediaQuery, Typography } from '@mui/material';
// import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
// import EditableTable from './EditableTable';

// function ProfileDetail({ setStudentDetail, setEditItem }) {
//   const isMobile = useMediaQuery('(max-width: 767px)');

//   const fieldDetails = [
//     { key: 'AdmNo', label: 'Admission No.', type: 'text', section: 'Admission Details' },
//     { key: 'admDate', label: 'Admission Date', type: 'date', section: 'Admission Details' },
//     { key: 'joiningClass', label: 'Joining Class', type: 'text', section: 'Admission Details' },
//     { key: 'joiningDate', label: 'Joining Date', type: 'date', section: 'Admission Details' },

//     { key: 'stdName', label: 'First Name', type: 'text', section: 'Student Details' },
//     { key: 'stdMiddleName', label: 'Middle Name', type: 'text', section: 'Student Details' },
//     { key: 'stdLastName', label: 'Last Name', type: 'text', section: 'Student Details' },
//     { key: 'gender', label: 'Gender', type: 'text', section: 'Student Details' },
//     { key: 'dob', label: 'D.O.B', type: 'date', section: 'Student Details' },
//     { key: 'age', label: 'Age', type: 'text', section: 'Student Details' },
//     { key: 'aadhaarNo', label: 'Aadhaar No.', type: 'text', section: 'Student Details' },
//     { key: 'penNo', label: 'PEN No.', type: 'text', section: 'Student Details' },

//     { key: 'class', label: 'Class', type: 'text', section: 'Class Details' },
//     { key: 'section', label: 'Section', type: 'text', section: 'Class Details' },

//     { key: 'category', label: 'Category', type: 'text', section: 'Fee Details' },
//     { key: 'payMode', label: 'Pay Mode', type: 'text', section: 'Fee Details' },
//     { key: 'concession', label: 'Concession', type: 'text', section: 'Fee Details' }
//     // Add more fields as needed
//   ];

//   const groupedFields = {};
//   fieldDetails.forEach((field) => {
//     groupedFields[field.section] = groupedFields[field.section] || [];
//     groupedFields[field.section].push(field);
//   });

//   // Initialize admissionDetails state based on setEditItem
//   const [admissionDetails, setAdmissionDetails] = React.useState(() => {
//     const initialState = {
//       stdName: '',
//       AdmNo: '',
//       admDate: '',
//       dob: '',
//       stdCategory: '',
//       joiningClass: '',
//       joiningDate: '',
//     };

//     if (setEditItem) {
//       initialState.stdName = setEditItem.StudentName || '';
//       initialState.AdmNo = setEditItem.AdmNo || '';
//       initialState.admDate = setEditItem.AdmDate || null;
//       initialState.dob = setEditItem.DOB || null;
//       initialState.stdCategory = setEditItem.Studentcategory || '';
//       initialState.joiningClass = setEditItem.class || '';
//       initialState.joiningDate = setEditItem.joiningDate || '';
//     }

//     return initialState;
//   });

//   useEffect(() => {
//     if (setEditItem) {
//       setAdmissionDetails((prevState) => ({
//         ...prevState,
//         stdName: setEditItem.StudentName || '',
//         AdmNo: setEditItem.AdmNo || '',
//         admDate: setEditItem.AdmDate || null,
//         dob: setEditItem.DOB || null,
//         stdCategory: setEditItem.Studentcategory || '',
//         joiningClass: setEditItem.class || '',
//         joiningDate: setEditItem.joiningDate || ''
//       }));
//     }
//   }, [setEditItem]);

//   useEffect(() => {
//     if (setEditItem) {
//       handleInputChange('stdName', setEditItem.StudentName || '');
//     }
//   }, [setEditItem]);

//   const handleInputChange = (fieldName, value) => {
//     setAdmissionDetails((prevState) => ({
//       ...prevState,
//       [fieldName]: value
//     }));
//     if (fieldName === 'stdName') {
//       setStudentDetail('firstName', value);
//     }else if (fieldName === 'stdMiddleName'){
//       setStudentDetail('middleName', value);
//     }else if (fieldName === 'stdLastName'){
//       setStudentDetail('lastName', value);
//     }
//   };

//   return (
//     <>
//       {/* Render sections and their fields */}
//       {Object.entries(groupedFields).map(([section, fields]) => (
//         <Card key={section} sx={{ padding: '10px', mb: 3 }}>
//           <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
//             {section}
//           </Typography>
//           <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
//             {fields.map((field) => (
//               <Grid item xs={12} sm={12} md={6} lg={section === 'Student Details' ? 4 : 6} key={field.key}>
//                 {field.type === 'date' ? (
//                   <ParameterizedDateComponent
//                     customStyle={{ width: '100%' }}
//                     value={admissionDetails[field.key]}
//                     onChange={(date) => handleInputChange(field.key, date)}
//                     label={field.label}
//                   />
//                 ) : (
//                   <TextField
//                     size={isMobile ? 'small' : 'normal'}
//                     id={`outlined-${field.key}`}
//                     value={admissionDetails[field.key]}
//                     onChange={(e) => handleInputChange(field.key, e.target.value)}
//                     onLoad={() => console.log('vikash poonia')}
//                     fullWidth
//                     label={field.label}
//                     variant="outlined"
//                   />
//                 )}
//               </Grid>
//             ))}
//           </Grid>
//         </Card>
//       ))}
//       {/* Sibling Details */}
//       <Card sx={{ padding: '10px' }}>
//         <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
//           Sibling Details
//         </Typography>

//         <EditableTable />
//       </Card>
//     </>
//   );
// }

// export default ProfileDetail;

















// import React, { useEffect } from 'react';
// import { Grid, TextField, Card, useMediaQuery, Typography } from '@mui/material';
// import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
// import EditableTable from './EditableTable';
// // import InputLabel from '@mui/material/InputLabel';
// // import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// // import Select from '@mui/material/Select';

// function ProfileDetail({ setStudentDetail, setEditItem }) {
//   const isMobile = useMediaQuery('(max-width: 767px)');
//   console.log(setEditItem);

//   const [admissionDetails, setAdmissionDetails] = React.useState({
//     stdName: '',
//     AdmNo: '',
//     admDate: '',
//     dob: '',
//     stdCategory: '',
//     joiningClass: '',
//     joiningDate: ''
//   });

//   useEffect(() => {
//     // Check if setEditItem is available and set the initial values accordingly
//     if (setEditItem) {
//       setAdmissionDetails({
//         firstName: setEditItem.StudentName || '',
//         AdmNo: setEditItem.AdmNo || '',
//         admDate: setEditItem.AdmDate || null,
//         dob: setEditItem.DOB || null,
//         stdCategory: setEditItem.Studentcategory || '',
//         joiningClass: setEditItem.class || '',
//         joiningDate: setEditItem.joiningDate || ''
//       });
//     }
//   }, [setEditItem]);

//   const handleInputChange = (fieldName, value) => {
//     // setAdmissionDetails((prevDetails) => ({
//     //   ...prevDetails,
//     //   [fieldName]: value
//     // }));
//     // {fieldName === "firstName" && setStudentDetail("firstName",value)}
//     const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

//     setAdmissionDetails((prevDetails) => ({
//       ...prevDetails,
//       [fieldName]: capitalizedValue
//     }));
//     {fieldName === "firstName" && setStudentDetail("firstName",value)}
//   };

//   return (
//     <>
//       {/* Admission Details */}
//       <Card sx={{ padding: '10px' }}>
//         <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
//           Admission Details
//         </Typography>
//         <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
//           <Grid item xs={12} sm={12} lg={6}>
//             {/* <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" value={ setEditItem.AdmNo || ''} fullWidth label="Admission No." variant="outlined" /> */}
//             <TextField
//               size={isMobile ? 'small' : 'normal'}
//               id="outlined-basic"
//               value={admissionDetails.AdmNo}
//               onChange={(e) => handleInputChange('AdmNo', e.target.value)}
//               fullWidth
//               label="Admission No."
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} lg={6}>
//             <ParameterizedDateComponent
//               customStyle={{ width: '100%' }}
//               value={admissionDetails.admDate}
//               onChange={(date) => handleInputChange('admDate', date)}
//               label={'Admission Date'}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} lg={6}>
//             <TextField
//               size={isMobile ? 'small' : 'normal'}
//               value={admissionDetails.joiningClass}
//               onChange={(e) => handleInputChange('joiningClass', e.target.value)}
//               id="outlined-basic"
//               fullWidth
//               label="Joining Class"
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} lg={6}>
//             <ParameterizedDateComponent customStyle={{ width: '100%' }} label={'Joining Date'} />
//           </Grid>
//         </Grid>
//       </Card>
//       {/* Primary Contact */}
//       <Card sx={{ padding: '10px' }}>
//         <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
//           Student Details
//         </Typography>
//         <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField
//               size={isMobile ? 'small' : 'normal'}
//               id="outlined-basic"
//               fullWidth
//               label="First Name"
//               variant="outlined"
//               value={admissionDetails.firstName}
//               onChange={(e) => handleInputChange('firstName', e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField
//               size={isMobile ? 'small' : 'normal'}
//               id="outlined-basic"
//               fullWidth
//               label="Middle Name"
//               variant="outlined"
//               onChange={(e) => setStudentDetail('middleName', e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField
//               size={isMobile ? 'small' : 'normal'}
//               id="outlined-basic"
//               fullWidth
//               label="Last Name"
//               variant="outlined"
//               onChange={(e) => setStudentDetail('lastName', e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Gender" variant="outlined" />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <ParameterizedDateComponent
//               customStyle={{ width: '100%' }}
//               value={admissionDetails.dob}
//               onChange={(date) => handleInputChange('dob', date)}
//               label={'D.O.B.'}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" type="number" fullWidth label="Age" variant="outlined" />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Aadhaar No." variant="outlined" />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="PEN No." variant="outlined" />
//           </Grid>
//         </Grid>
//       </Card>

//       {/* Class Detail */}
//       <Card sx={{ padding: '10px' }}>
//         <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
//           Class Details
//         </Typography>
//         <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
//           <Grid item xs={12} sm={12} lg={6}>
//             <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Class" variant="outlined" />
//           </Grid>
//           <Grid item xs={12} sm={12} lg={6}>
//             <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Section" variant="outlined" />
//           </Grid>
//         </Grid>
//       </Card>

//       {/* Other Detail */}
//       <Card sx={{ padding: '10px' }}>
//         <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
//           Fee Details
//         </Typography>
//         <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField
//               size={isMobile ? 'small' : 'normal'}
//               id="outlined-basic"
//               fullWidth
//               label="Category"
//               variant="outlined"
//               value={admissionDetails.stdCategory}
//               onChange={(e) => handleInputChange('stdCategory', e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Pay Mode" variant="outlined" />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={4}>
//             <TextField size={isMobile ? 'small' : 'normal'} id="outlined-basic" fullWidth label="Concession" variant="outlined" />
//           </Grid>
//         </Grid>
//       </Card>

//       {/* Sibling Details */}
//       <Card sx={{ padding: '10px' }}>
//         <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
//           Sibling Details
//         </Typography>

//         <EditableTable />
//       </Card>
//     </>
//   );
// }

// export default ProfileDetail;
