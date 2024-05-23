import React from 'react'
// import Counter1 from 'component/stufee-counter/stufee-counter-1/Counter1'
import totalBookData from './totalBookData'
import Counter3 from 'component/stufee-counter/stufee-counter-3/Counter3'

const TotalBook = () => {
  return (
    <>
      {/* <Counter1 Counter1Data={totalBookData}/> */}
      <Counter3 Counter3Data={totalBookData} />
    </>
  )
}

export default TotalBook
