import { ReuseableSettings } from 'pages/SettingsLayout'
import React from 'react'
import { SettingData } from './SettingDataLib'

const Setting = () => {
  return (
    <><ReuseableSettings data={SettingData} /></>
  )
}

export default Setting