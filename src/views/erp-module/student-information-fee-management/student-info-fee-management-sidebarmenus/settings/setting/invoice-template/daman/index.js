import React from 'react';
import CommonConfig from './common-config-component';
import { Grid, Paper } from '@mui/material';
import   Template  from '../kulwinder/template3';

import CompactTemplate from '../harsh/template';
import CompactTemplate2 from '../kulwinder/template2';
import {CompactTemplate4} from '../harsh/harsh1/template4';
import CompactTemplate5 from '../harsh/harsh2';
import { useSelector } from 'react-redux';

const Index = () => {
  
  // states
  const generalSettings= useSelector(state=>state.invoiceTemplate.general)
  const headerFooterSettings=useSelector(state=>state.invoiceTemplate.headerFooter)
  const tableSettings=useSelector(state=>state.invoiceTemplate.table)



  // temporary logic for rendring template
  let template=1
  return (
    <>
    <Grid container spacing={4}>
      <Grid item md={5 }>
      <Paper sx={{width:'100%',height:'auto',padding:' 2rem 0rem'}}>
        <CommonConfig/>
      </Paper>
      </Grid>
      <Grid item md={7}>
        {template==1&&<CompactTemplate/>}
        {template==2&&<CompactTemplate2/>}
        {template==3&&<Template/>}
        {template==4&&<CompactTemplate4/>}
        {template==5&&<CompactTemplate5/>}
              
      </Grid>
    </Grid>
    </>
  );
};

export default Index;
