import React from 'react'
// import Counter1 from 'views/common-section/stufee-counter/stufee-counter-1/Counter1'
import reservationData from './reservationData'
import Counter3 from 'views/common-section/stufee-counter/stufee-counter-3/Counter3'
const Reservation = () => {
  return (
    <>
      {/* <Counter1 Counter1Data={reservationData} /> */}
      <Counter3 Counter3Data={reservationData} />
    </>
  )
}

export default Reservation
