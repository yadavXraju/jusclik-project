import { ReuseableSettings } from 'pages/ReuseableSettingsLayout'
import React from 'react'
import { SettingData } from './SettingDataBuilder'
const Setting = () => {
  return (
    <><ReuseableSettings data={SettingData} /></>
  )
}

export default Setting