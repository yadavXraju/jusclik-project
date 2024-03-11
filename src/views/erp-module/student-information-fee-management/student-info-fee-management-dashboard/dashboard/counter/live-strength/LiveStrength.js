import React from 'react';
import LiveStrengthData from './LiveStrengthData';
import Counter1 from 'views/common-section/stufee-counter/stufee-counter-1/Counter1';
const LiveStrength = () => {
  return (
    <>
     {/* sending data into the couter1 using props */}
      <Counter1 Counter1Data={LiveStrengthData}/>
    </>
  )
}

export default LiveStrength
