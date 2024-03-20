import React from 'react';
import CommonConfig from './common-config-component';
import { Paper } from '@mui/material';
import { useState } from 'react';

const Index = () => {
  const [state, setState] = useState({
    general: {
      templateName: '',
      paperSize: 'a5',
      orientation: 'portrait',
      marginTop: '0.7',
      marginBottom: '0.7',
      marginLeft: '0.55',
      marginRight: '0.4',
      pdfFont: 'ubuntu',
      labelColor: '#333333',
      fontColor: '#333333',
      fontSize: '9',
      backgroundImage: null,
      imagePosition: 'centerCenter',
      backgroundColorEnable: true,
      backgroundColor: '#ffffff'
    },
    headerFooter: {},
    transactionDetails: {},
    table: {},
    total: {},
    otherDetails: {}
  });


 

  return (
    <>
      <Paper>
        <CommonConfig state={state} setState={setState} />
      </Paper>
    </>
  );
};

export default Index;
