import React from 'react'
import Counter1 from 'views/common-section/stufee-counter/stufee-counter-1/Counter1'
import reservationData from './reservationData'
const Reservation = () => {
  return (
    <>
      <Counter1 Counter1Data={reservationData} />
    </>
  )
}

export default Reservation
