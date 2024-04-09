import React from 'react';
import { Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {Template1} from './template1';
import {Template2} from './template2';
import {Template3} from './template3';
import {Template4} from './template4';
import {Template5} from './template5';

import CommonConfig from '../common/common-config-component';
const Index = () => {
  // temporary logic for rendring template
  const template = useSelector(state => state.invoiceTemplate.selectedTemplate)
  const navigate = useNavigate()
  
  let sx = {};
  if (template == 1) {
    sx.width = "calc(100vw - 500px)";
    sx.overflowX = "auto";
  }
  return (
    <>
      <Button onClick={() => navigate('/erp/student-info-fee/settings/invoice-template')} sx={{ position: 'absolute', right: 0, marginTop: '-4rem', marginRight: '2rem' }}>Close</Button>
      <Grid container spacing={4}>
        <Grid item md={4}>
            <CommonConfig />
        </Grid>
        <Grid item md={8} sx={sx}>
        {template == 1 && <Template1/>}
        {template == 2 && <Template2/>}
        {template == 3 && <Template3/>}
        {template == 4 && <Template4/>}
        {template == 5 && <Template5/>}
      </Grid>
    </Grid >
    </>
  );
};

export default Index;
