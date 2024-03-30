import React from 'react';
import CommonConfig from './common-config-component';
import { Grid, Paper } from '@mui/material';
import   Template  from '../kulwinder/template3';
import { useState } from 'react';
// import { general,headerFooter,tableLayout } from '../../common/common-states';
import { general,headerFooter,tableLayout } from '../common/common-states';  
import CompactTemplate from '../harsh/template';
import CompactTemplate2 from '../kulwinder/template2';
import {CompactTemplate4} from '../harsh/harsh1/template4';
import CompactTemplate5 from '../harsh/harsh2';

const Index = () => {
  // we need to define states here for common config component and pass it as prop to both so that any change in that component will reflect on our template 
  // we can also change/modify the states that are template specific here only
  // we can achieve that by importing constants from our "commonStates.js" file
  // we need to modify every templte so that it works on our state and not on the constant

  // we can pass the state for every tab as an object and destructure it in other side
  
  // states
  const [generalSettings,setGeneralSettings]=useState(general)
  const [headerFooterSettings,setHeaderFooterSettings]=useState(headerFooter)
  const [tableSettings, setTableSettings] = useState(tableLayout);
  // states and handlers
  const generalSettingsStates=[generalSettings,setGeneralSettings]
  const headerFooterSettingsStates=[headerFooterSettings,setHeaderFooterSettings]
  const tableSettingsStates=[tableSettings, setTableSettings]
  console.log("GENERAL SETTINGS");
  console.log(generalSettings);
  console.log("HEADER FOOTER SETTINGS");
  console.log(headerFooterSettings);
  console.log("TABLE SETTINGS");
  console.log(tableSettings);
  // all settings
  const settings=[generalSettingsStates,headerFooterSettingsStates,tableSettingsStates]
  const states=[generalSettings,headerFooterSettings,tableSettings]
  // temporary logic for rendring template
  let template=5

  return (
    <>
    <Grid container spacing={4}>
      <Grid item md={5 }>
      <Paper sx={{width:'100%',height:'auto',padding:' 2rem 0rem'}}>
        <CommonConfig settings={settings}/>
      </Paper>
      </Grid>
      {/* <Grid md={1}></Grid> */}
      <Grid item md={7}>
        {template==1&&<CompactTemplate states={states}/>}
        {template==2&&<CompactTemplate2 states={states}/>}
        {template==3&&<Template states={states}/>}
        {template==4&&<CompactTemplate4 states={states}/>}
        {template==5&&<CompactTemplate5 states={states}/>}
              
      </Grid>
    </Grid>
    </>
  );
};

export default Index;
