import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, TextField, Card, useMediaQuery } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BottomNavbar from 'components/BottomNavbar';
import ParamStepper from 'components/tabs/Stepper';
import SelectList from 'components/ui/custom-input/SelectList';
import ParamMultipleSelect from 'components/ui/custom-input/MultipleSelect';

const SlabFormDrawer = () => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();
  const [value, setValue] = useState(0);

    const Test = () => {
    return <>Slab Structure</>;
  };

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

  const SlabForm = () => {
    return <>
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
    </>;
  };


  const tabPage = [
    {
      id: 1,
      name: 'Basic Info',
      value: '1',
      component: SlabForm
    },
    {
      id: 2,
      name: 'Slab Structure',
      value: '2',
      component: Test
    }
  ];
  const tabLength = tabPage.length;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
      Add Slab
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{width: { xs: '100vw', sm: 650 }, height:'100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Slab</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* ========== Render Drawer Contant ============ */}
            <Box>
            <ParamStepper
              variant={'scrollable'}
              tabPage={tabPage}
              showBottomNav={false}
              value={value}
              handleChange={handleChange}
              customtabPanelStyle={{ padding: '0px', marginTop: '4px' }}
              customtabWrapper={{ marginTop: '0px' }}
            />
          </Box>
          </Box>
        </Box>
        <BottomNavbar
          tabPageLength={tabLength}
          value={value}
          setValue={setValue}
          customStyle={{width: { sm: '100vw', md: '42%' }, bottom: '0', borderRadius: '1px' }}
        />
      </Drawer>
    </>
  );
};  

export default SlabFormDrawer;