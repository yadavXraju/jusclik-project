import React from 'react'
import Counter1 from 'views/common-section/stufee-counter/stufee-counter-1/Counter1'
import issuedBookeddata from './issuedbookData'
const  IssuedBook = () => {
  return (
    <>
      <Counter1 Counter1Data={issuedBookeddata}/>
    </>
  )
}

export default IssuedBook
