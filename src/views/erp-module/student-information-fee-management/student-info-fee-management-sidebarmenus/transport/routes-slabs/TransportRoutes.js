import React, { useState } from 'react';
import { Box, TextField, Typography, useMediaQuery, Grid, Card } from '@mui/material';
import SelectList from 'views/common-section/ParamSelectList';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RadioButtonsGroup from 'views/common-section/ParamRadioButton';
import ParamTime from 'views/common-section/ParamTime';
import ParamMultipleSelect from 'views/common-section/ParamMultipleSelect';

function TransportRoutes() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const [statusValue, setStatusValue] = useState('');
  // Define your options array
  const statusOptions = [
    {
      value: 'Active',
      label: (
        <>
          <FiberManualRecordRoundedIcon sx={{ fontSize: 16, color: 'Green' }} /> Active
        </>
      )
    },
    { value: 'option2', label: 'Option 2' }
  ];

  // ========= state for Attach Bus ============
  const [addBus, setAddBus] = useState('');
  const busOptions = [
    { value: 'Bus1', label: 'Bus 1' },
    { value: 'Bus2', label: 'Bus 2' }
  ];

  // ========= state for Attach Slab ============
  const [addSlab, setAddSlab] = useState('');
  const SlabOptions = [
    { value: 'Slab1', label: 'Slab 1' },
    { value: 'Slab2', label: 'Slab 2' }
  ];

  const [gender, setGender] = useState('female');
  const genderOptions = [
    { value: 'onetime', label: 'One Time' },
    { value: 'alldays', label: 'All days' },
    { value: 'days', label: 'Days' }
  ];

  const [selectedStudents, setSelectedStudents] = React.useState([]);
  // =========== list of students ===========
  const students = [
    { id: 1, name: 'I' },
    { id: 2, name: 'II' },
    { id: 3, name: 'III' },
    { id: 4, name: 'VII' },
  ];

  return (
    <>
      <Card sx={{border:'1px solid #ccc', p:2}}>
        <Box>
          <Box pb={2}>
            <TextField id="outlined-basic" size={isMobile ? 'small' : 'normal'} fullWidth label="Route Name" variant="outlined" />
          </Box>
          <Box pb={2}>
            <SelectList
              label="Status"
              options={statusOptions}
              value={statusValue}
              setValue={setStatusValue}
              size={isMobile ? 'small' : 'normal'}
              // customSytle={{ width: '30%' }}
            />
          </Box>
          <Box pb={2}>
            <Typography variant="h4">
              Schedule <InfoOutlinedIcon sx={{ fontSize: '14px', color: '#746a6a' }} />{' '}
            </Typography>
            <RadioButtonsGroup defaultValue={gender} setValue={setGender} options={genderOptions} />
          </Box>
          <Box pb={2}>
            <Typography variant="h4">Pick Route </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ParamTime label="Start Time" />
              </Grid>
              <Grid item xs={12} md={6}>
                <ParamTime label="End Time" />
              </Grid>
            </Grid>
          </Box>

          <Box pb={2}>
            <Typography variant="h4">Drop Route </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ParamTime label="Start Time" />
              </Grid>
              <Grid item xs={12} md={6}>
                <ParamTime label="End Time" />
              </Grid>
            </Grid>
          </Box>

          <Box pb={2}>
            <Typography variant="h4">
              Attach Bus <InfoOutlinedIcon sx={{ fontSize: '14px', color: '#746a6a' }} />{' '}
            </Typography>
            <Grid container spacing={2}>
              <Grid mt={1} item xs={12} md={6}>
                <SelectList
                  label="Attach Bus"
                  options={busOptions}
                  value={addBus}
                  setValue={setAddBus}
                  size={isMobile ? 'small' : 'normal'}
                  // customSytle={{ width: '30%' }}
                />
              </Grid>
              <Grid mt={1} item xs={12} md={6}>
                <TextField id="outlined-basic" size={isMobile ? 'small' : 'normal'} fullWidth label="Seating Capacity" variant="outlined" />
              </Grid>
            </Grid>
          </Box>

          <Box pb={2}>
            <Typography variant="h4">
              Attach Slab <InfoOutlinedIcon sx={{ fontSize: '14px', color: '#746a6a' }} />{' '}
            </Typography>
            <Box>
              <SelectList
                label="Attach Slab"
                options={SlabOptions}
                value={addSlab}
                setValue={setAddSlab}
                size={isMobile ? 'small' : 'normal'}
                // customSytle={{ width: '30%' }}
              />
            </Box>
          </Box>

          <Box pb={2}>
            <Typography variant="h4">
              Classes <InfoOutlinedIcon sx={{ fontSize: '14px', color: '#746a6a' }} />{' '}
            </Typography>
            <Box mt={1}>
              <ParamMultipleSelect options={students} label="Classes" value={selectedStudents} setValue={setSelectedStudents} />
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default TransportRoutes;
