import React from 'react';
import CommonConfig from './common-config-component';
import { Button, Grid } from '@mui/material';
import Template from '../kulwinder/template3';
import CompactTemplate from '../harsh/template';
import CompactTemplate2 from '../kulwinder/template2';
import { CompactTemplate4 } from '../harsh/harsh1/template4';
import CompactTemplate5 from '../harsh/harsh2';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
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
        {template == 1 && <CompactTemplate />}
        {template == 2 && <CompactTemplate2 />}
        {template == 3 && <Template />}
        {template == 4 && <CompactTemplate4 />}
        {template == 5 && <CompactTemplate5 />}
      </Grid>
    </Grid >
    </>
  );
};

export default Index;
