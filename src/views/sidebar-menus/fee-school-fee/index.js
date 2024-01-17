import React from 'react'
import MainCard from 'ui-component/cards/MainCard';
import Feeledger from './Feeledger';
import Feetabs from './Fee_tabs';

const index = () => {
  return (
    <MainCard title="Fee Ledger" >
      <Feeledger/>
      <Feetabs/>
    </MainCard>
  )
}

export default index
