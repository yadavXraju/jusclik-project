import React from 'react';
import SmsBalanceData from './SmsBalanceData';
import Counter2 from 'views/common-section/stufee-counter/stufee-counter-2/Counter2';
const SmsBalance = () => {
  return (
    <>
     {/* sending data into the couter2 using props */}
      <Counter2 Counter2Data={SmsBalanceData}/>
    </>
  )
}

export default SmsBalance
