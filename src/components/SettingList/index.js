import React from "react"
import SettingSelector from "../settingSelector/SettingSelector"

function SettingList({settings, onSetSetting}) {
  return settings.map(setting => {
    return (
      <SettingSelector
        key={setting.setting_id}
        id={setting.setting_id}
        text={setting.textKey}
        defaultValue={setting.defaultValue}
        maxValue={setting.maxValue}
        minValue={setting.minValue}
        stepValue={setting.stepValue}
        onSetSetting={onSetSetting}
      />
    )
  })
}

export default SettingList
