import ReportsLayout from 'pages/ReportsLayout'
import React from 'react'
import { sections } from './ReportsPageData'

const ReportTabs = () => {
  return (
    <ReportsLayout data={sections}/>
  )
}
export default ReportTabs