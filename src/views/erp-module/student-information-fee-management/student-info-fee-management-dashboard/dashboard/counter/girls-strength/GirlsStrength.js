import React from 'react';
import GirlStrengthData from './GirlStrengthData';
import Counter1 from 'views/common-section/stufee-counter/stufee-counter-1/Counter1';
const GirlStrength = () => {
  return (
    <>
     {/* sending data into the couter1 using props */}
      <Counter1 Counter1Data={GirlStrengthData}/>
    </>
  )
}

export default GirlStrength
