import React from 'react';
import BoysStrengthData from './BoysStrengthData';
import Counter2 from 'views/common-section/stufee-counter/stufee-counter-2/Counter2';
const BoyStrength = () => {
  return (
    <>
     {/* sending data into the couter1 using props */}
      <Counter2 Counter2Data={BoysStrengthData}/>
    </>
  )
}

export default BoyStrength
