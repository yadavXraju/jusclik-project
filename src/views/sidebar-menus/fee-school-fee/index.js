import React from 'react'
import MainCard from 'ui-component/cards/MainCard';
import Feeledger from './Feeledger';
import Feetabs from './Fee_tabs';
import { Box } from '@mui/system';
import UrlPage from 'views/navigation-for-pages';

const index = () => {
  return (
    <>
    <UrlPage/>
    <MainCard title="Fee Ledger" >
      <Box pb={3}><Feeledger/></Box>
      <Feetabs/>
    </MainCard>
    </>
  )
}

export default index
