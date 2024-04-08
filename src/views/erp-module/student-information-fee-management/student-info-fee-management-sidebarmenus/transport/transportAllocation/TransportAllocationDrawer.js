import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, Grid } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import SelectList from 'views/common-section/ParamSelectList';
import { useState } from 'react';

const TransportDrawer = () => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();
//   const [data, setData] = useState({
//     test : ''
//   }       
//   )
// ========= state for Slab ============
const [addSlab, setAddSlab] = useState('');
const SlabOptions = [
  { value: 'Slab1', label: 'Slab 1' },
  { value: 'Slab2', label: 'Slab 2' },
  { value: 'Slab3', label: 'Slab 3' },
  { value: 'Slab4', label: 'Slab 4' },
  { value: 'Slab5', label: 'Slab 5' },
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
  { value: 'Route5', label: 'Route 5' },
];
const PickRouteChange = (event) => {
    setPickRoute(event.target.value);
};
// ========= state for Pick stop ============
const [pickStop, setPickStop] = useState('');
const pickStopOptions = [
  { value: 'Route1', label: 'Route 1' },
  { value: 'Route2', label: 'Route 2' },
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
  { value: 'Route5', label: 'Route 5' },
];
const DropRouteChange = (event) => {
    setDropRoute(event.target.value);
};
// ========= state for Drop stop ============
const [dropStop, setDropStop] = useState('');
const dropStopOptions = [
  { value: 'Route1', label: 'Route 1' },
  { value: 'Route2', label: 'Route 2' },
];
const DropStopChange = (event) => {
    setDropStop(event.target.value);
};


  return (
    <>
      <Button onClick={toggleDrawer('top', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Add Transport Details
      </Button>
      <Drawer anchor={'top'} open={anchor.top} onClose={toggleDrawer('top', false)}>
        <Box sx={{ width: '100%', height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Transport Details</Typography>
            <Button onClick={toggleDrawer('top', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box pt={3} sx={{ width:'50%' }}>
            {/* ========== Render Drawer Content ============ */}
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ParameterizedDateComponent label="With Effect From" customStyle={{width:'100%'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                <SelectList
                  label="Fee Slab"
                  options={SlabOptions}
                  value={addSlab}
                  onChange={addSlabChange}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <SelectList
                  label="Pick Route"
                  options={pickRouteOptions}
                  value={pickRoute}
                  onChange={PickRouteChange}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <SelectList
                  label="Pick Stop"
                  options={pickStopOptions}
                  value={pickStop}
                  onChange={PickStopChange}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <SelectList
                  label="Drop Route"
                  options={dropRouteOptions}
                  value={dropRoute}
                  onChange={DropRouteChange}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <SelectList
                  label="Drop Stop"
                  options={dropStopOptions}
                  value={dropStop}
                  onChange={DropStopChange}
                />
                </Grid>
                
              </Grid>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default TransportDrawer;
