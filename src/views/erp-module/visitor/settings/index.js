import { ReuseableSettings } from 'pages/SettingsLayout'
import React from 'react'
import { SettingData } from './SettingVisitor'
const Setting = () => {
  return (
    <><ReuseableSettings data={SettingData} /></>
  )
}

export default Setting