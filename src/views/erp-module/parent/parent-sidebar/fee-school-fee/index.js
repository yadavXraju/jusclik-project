import React from 'react'
import MainCard from 'ui-component/cards/MainCard';
//import Feeledger from './Feeledger';
import Feetabs from './Fee_tabs';
import { Box  } from '@mui/system';
import PoliciesCounter from './policiesCounter';
import { useMediaQuery } from '@mui/material';

const Index = () => {
 
  const res2560 = useMediaQuery('(min-width:2000px)');
  const rem = res2560?('16rem'):null;

 



  return (
    <>
    
    <MainCard title="Fee Ledger" >
    <Box sx={{paddingLeft:rem , paddingRight:rem}} >
      <Box pb={3}><PoliciesCounter/></Box>
      <Feetabs/>
      </Box>
    </MainCard>
    
    
    </>
  )
};

export default Index
