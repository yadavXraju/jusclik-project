// ======= Page Owner Vikash =========
// ======= Return Transport Routes Form =========
import React, { useState } from 'react';
import { Box, TextField, Typography, useMediaQuery, Grid, Card } from '@mui/material';
import SelectList from 'components/ParamSelectList';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RadioButtonsGroup from 'components/ParamRadioButton';
import ParamTime from 'components/ParamTime';
import ParamMultipleSelect from 'components/ParamMultipleSelect';
import ParameterizedDateComponent from 'components/ParamDateComponent';

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
  const statusChange = (event) => {
    setStatusValue(event.target.value);
  };

  // ========= state for Attach Bus ============
  const [addBus, setAddBus] = useState('');
  const busOptions = [
    { value: 'Bus1', label: 'Bus 1' },
    { value: 'Bus2', label: 'Bus 2' }
  ];
  const addBusChange = (event) => {
    setAddBus(event.target.value);
  };

  // ========= state for Attach Slab ============
  const [addSlab, setAddSlab] = useState('');
  const SlabOptions = [
    { value: 'Slab1', label: 'Slab 1' },
    { value: 'Slab2', label: 'Slab 2' }
  ];
  const slabChange = (event) => {
    setAddSlab(event.target.value);
  };

  const [schedule, setSchedule] = useState('alldays');
  const scheduleOptions = [
    { value: 'alldays', label: 'All days' },
    { value: 'onetime', label: 'One Time' },
    { value: 'days', label: 'Days' }
  ];
  const handleChange = (event) => {
    setSchedule(event.target.value);
  };

  const [selectedStudents, setSelectedStudents] = React.useState([]);
  // =========== list of students ===========
  const students = [
    { id: 1, name: 'I' },
    { id: 2, name: 'II' },
    { id: 3, name: 'III' },
    { id: 4, name: 'VII' }
  ];

  const [selectedDay, setSelectedDays] = React.useState([]);
  // =========== list of students ===========
  const Days = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' },
  ];

  return (
    <>
      <Card
        className="scrollbar"
        sx={{ border: '1px solid #ccc', height: 'calc(100vh - 180px)', overflowY: 'scroll', p: 2, borderRadius: '5px' }}
      >
        <Box>
          <Box pb={2}>
            <TextField id="outlined-basic" size={isMobile ? 'small' : 'normal'} fullWidth label="Route Name" variant="outlined" />
          </Box>
          <Box pb={2}>
            <SelectList
              label="Status"
              options={statusOptions}
              value={statusValue}
              onChange={statusChange}
              size={isMobile ? 'small' : 'normal'}
            />
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
                  onChange={addBusChange}
                  size={isMobile ? 'small' : 'normal'}
                />
              </Grid>
              <Grid mt={1} item xs={12} md={6}>
                <TextField id="outlined-basic" size={isMobile ? 'small' : 'normal'} fullWidth label="Seating Capacity" variant="outlined" />
              </Grid>
            </Grid>
          </Box>

          <Box pb={2}>
            <Typography variant="h4">
              Schedule <InfoOutlinedIcon sx={{ fontSize: '14px', color: '#746a6a' }} />{' '}
            </Typography>
            <RadioButtonsGroup defaultValue={schedule} onChange={handleChange} options={scheduleOptions} />
            {
              schedule === 'onetime' && (
                <>
                  <Box p={2} sx={{border:'1px solid #ccc', borderRadius:'5px'}}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                      <ParameterizedDateComponent label="Start Date" customStyle={{width:'100%'}}/>
                      </Grid>
                      <Grid item xs={6}>
                      <ParameterizedDateComponent label="End Date" customStyle={{width:'100%'}} />
                      </Grid>
                    </Grid>
                  </Box>
                </>
              )

            }
            {
              schedule === 'days' && (
                <>
                  <Box p={2} sx={{border:'1px solid #ccc', borderRadius:'5px'}}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                      <ParamMultipleSelect options={Days} label="Select Day" value={selectedDay} setValue={setSelectedDays} />
                      </Grid>
                    </Grid>
                  </Box>
                </>
              )
            }
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
              Attach Slab <InfoOutlinedIcon sx={{ fontSize: '14px', color: '#746a6a' }} />{' '}
            </Typography>
            <Box mt={1}>
              <SelectList
                label="Attach Slab"
                options={SlabOptions}
                value={addSlab}
                onChange={slabChange}
                size={isMobile ? 'small' : 'normal'}
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
