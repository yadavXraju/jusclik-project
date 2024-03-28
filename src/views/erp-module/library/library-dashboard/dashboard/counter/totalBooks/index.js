import React from 'react'
// import Counter1 from 'views/common-section/stufee-counter/stufee-counter-1/Counter1'
import totalBookData from './totalBookData'
import Counter3 from 'views/common-section/stufee-counter/stufee-counter-3/Counter3'

const TotalBook = () => {
  return (
    <>
      {/* <Counter1 Counter1Data={totalBookData}/> */}
      <Counter3 Counter3Data={totalBookData} />
    </>
  )
}

export default TotalBook
