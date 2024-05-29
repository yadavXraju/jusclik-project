// ======= Page Owner Vikash =========
// ======= Return Transport Allocation Drawer =========

import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import { Button, Typography, Box, Grid } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';
import SelectList from 'components/ui/custom-input/SelectList';
import ParamMultipleSelect from 'components/ui/custom-input/MultipleSelect';
import TextArea from 'antd/es/input/TextArea';
import TextField from '@mui/material/TextField';
import TransportTimeline from './TransportTimeline';
import ParamStepper from 'components/tabs/Stepper';
import BottomNavbar from 'components/BottomNavbar';
import DrawerLayOut from 'layout/drawer-layout';

const TransportDrawer = () => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();
  const [value, setValue] = useState(0);

  // ========= state for Slab ============
  const [addSlab, setAddSlab] = useState('');
  const SlabOptions = [
    { value: 'Slab1', label: 'Slab 1' },
    { value: 'Slab2', label: 'Slab 2' },
    { value: 'Slab3', label: 'Slab 3' },
    { value: 'Slab4', label: 'Slab 4' },
    { value: 'Slab5', label: 'Slab 5' }
  ];
  const addSlabChange = (event) => {
    setAddSlab(event.target.value);
  };
  // ========= state for Pick route ============
  const [pickRoute, setPickRoute] = useState('');
  const pickRouteOptions = [
    { value: 'Route1', label: 'Route 1' },
    { value: 'Route2', label: 'Route 2' },
    { value: 'Route3', label: 'Route 3' },
    { value: 'Route4', label: 'Route 4' },
    { value: 'Route5', label: 'Route 5' }
  ];
  const PickRouteChange = (event) => {
    setPickRoute(event.target.value);
  };
  // ========= state for Pick stop ============
  const [pickStop, setPickStop] = useState('');
  const pickStopOptions = [
    { value: 'Route1', label: 'Route 1' },
    { value: 'Route2', label: 'Route 2' }
  ];
  const PickStopChange = (event) => {
    setPickStop(event.target.value);
  };
  // ========= state for Drop route ============
  const [dropRoute, setDropRoute] = useState('');
  const dropRouteOptions = [
    { value: 'Route1', label: 'Route 1' },
    { value: 'Route2', label: 'Route 2' },
    { value: 'Route3', label: 'Route 3' },
    { value: 'Route4', label: 'Route 4' },
    { value: 'Route5', label: 'Route 5' }
  ];
  const DropRouteChange = (event) => {
    setDropRoute(event.target.value);
  };
  // ========= state for Drop stop ============
  const [dropStop, setDropStop] = useState('');
  const dropStopOptions = [
    { value: 'Route1', label: 'Route 1' },
    { value: 'Route2', label: 'Route 2' }
  ];
  const DropStopChange = (event) => {
    setDropStop(event.target.value);
  };

  // ========= state for Drop stop ============
  const [enrolmentType, setEnrolmentType] = useState('');
  const enrolmentTypeOption = [
    { value: 'Route1', label: 'Enquiry' },
    { value: 'Route2', label: 'Registration' },
    { value: 'Route1', label: 'Provisional' },
    { value: 'Route2', label: 'Admission' }
  ];
  const enrolmentTypeChange = (event) => {
    setEnrolmentType(event.target.value);
  };

  const [selectedMonth, setSelectedMonth] = React.useState([]);
  // =========== list of students ===========
  const transportMonths = [
    { id: 1, name: 'Apr`25' },
    { id: 2, name: 'May`25' },
    { id: 3, name: 'Jun`25' },
    { id: 4, name: 'Jul`25' },
    { id: 5, name: 'Aug`25' },
    { id: 6, name: 'Sep`25' },
    { id: 7, name: 'Oct`25' },
    { id: 8, name: 'Nov`25' },
    { id: 9, name: 'Dec`25' },
    { id: 10, name: 'Jan`25' },
    { id: 11, name: 'Feb`25' },
    { id: 12, name: 'Mar`25' }
  ];

  const BasicInfo = () => {
    return (
      <>
        <Box>
          <Box p={2} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <SelectList label="Enrolment Type" options={enrolmentTypeOption} value={enrolmentType} onChange={enrolmentTypeChange} />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField id="outlined-basic" label="Admission No." fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic" disabled label="Name" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic" disabled label="Class" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic" disabled label="Address" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic" disabled label="Existing info" fullWidth variant="outlined" />
              </Grid>
            </Grid>
          </Box>

          <Box mt={1} p={2} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
            <Box pb={1}>
              <Typography variant="h4">Transport Details</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ParameterizedDateComponent label="With Effect From" customStyle={{ width: '100%' }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectList label="Fee Slab" options={SlabOptions} value={addSlab} onChange={addSlabChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectList label="Pick Route" options={pickRouteOptions} value={pickRoute} onChange={PickRouteChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectList label="Pick Stop" options={pickStopOptions} value={pickStop} onChange={PickStopChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectList label="Drop Route" options={dropRouteOptions} value={dropRoute} onChange={DropRouteChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectList label="Drop Stop" options={dropStopOptions} value={dropStop} onChange={DropStopChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <ParamMultipleSelect options={transportMonths} label="Select Month" value={selectedMonth} setValue={setSelectedMonth} />
              </Grid>
              <Grid item xs={12} md={6}>
                <ParameterizedDateComponent label="Transport Left Date" customStyle={{ width: '100%' }} />
              </Grid>
              <Grid item xs={12} md={12}>
                <Box p={0.5}>Remarks</Box>
                <TextArea rows={3} placeholder="Enter your text here..." fullWidth variant="outlined" />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </>
    );
  };

  const tabPage = [
    {
      id: 1,
      name: 'Basic Info',
      value: '1',
      component: BasicInfo
    },
    {
      id: 2,
      name: 'Timeline',
      value: '2',
      component: TransportTimeline
    }
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePrev = () => {
    setValue(Math.max(0, value - 1));
  };

  const handleNext = () => {
    setValue(Math.min(tabPage.length - 1, value + 1));
  };

  const handleCancelClick=(e)=>{
   toggleDrawer('right',false)(e);
  }

  const handleSubmitClick=()=>{

  }

  const DrawerBottom = () => {
    return (
      <>
        <BottomNavbar handlePrev={handlePrev} handleNext={handleNext}  
          handleCancelClick={handleCancelClick} handleSubmitClick={handleSubmitClick} 
          tabPageLength={tabPage.length} value={value} setValue={setValue}
          customStyle={{ width: { sm: '100vw', md: '42%' }, bottom: '0', 
          borderRadius: '1px' }}
        />
      </>
    )
  }

  const DrawerBody = () => {
    return (
      <ParamStepper
        variant={'scrollable'}
        tabPage={tabPage}
        showBottomNav={false}
        value={value}
        handleChange={handleChange}
        customtabPanelStyle={{ padding: '0px', marginTop: '4px' }}
        customtabWrapper={{ marginTop: '0px' }}
      />
    )
  }

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
      Add Transport Details
      </Button>
      <DrawerLayOut anchor={anchor} direction={'right'} toggleDrawer={toggleDrawer}
        Title={'Add Transport Details'} Body={<DrawerBody />} customStyles={{width: { sm: '100vw', md: 700 }}} Bottom={<DrawerBottom />} 
      />
    </>
  );
};

export default TransportDrawer;