import React from 'react'
import MainCard from 'ui-component/cards/MainCard';
//import Feeledger from './Feeledger';
import Feetabs from './Fee_tabs';
import { Box } from '@mui/system';
import PoliciesCounter from './policiesCounter';

const index = () => {
  return (
    <>
    <MainCard title="Fee Ledger" >
      <Box pb={3}><PoliciesCounter/></Box>
      <Feetabs/>
    </MainCard>
    </>
  )
};

export default index
