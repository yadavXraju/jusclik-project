import React from 'react'
// import Counter1 from 'component/stufee-counter/stufee-counter-1/Counter1'
import issuedBookeddata from './issuedbookData'
import Counter3 from 'component/stufee-counter/stufee-counter-3/Counter3'
const  IssuedBook = () => {
  return (
    <>
      {/* <Counter1 Counter1Data={issuedBookeddata}/> */}
      <Counter3 Counter3Data={issuedBookeddata}/>
    </>
  )
}

export default IssuedBook
