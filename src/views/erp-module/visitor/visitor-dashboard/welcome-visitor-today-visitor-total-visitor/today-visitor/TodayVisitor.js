import React from 'react'
import Counter1 from 'views/common-section/Counter1'
import { TodayVisitorData } from './TodayVisitorData'

const TodayVisitor = () => {
  return (
    <>
          <Counter1 Counter1Data={TodayVisitorData} />
    </>
  )
}

export default TodayVisitor