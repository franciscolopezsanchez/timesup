import React from "react"
import SettingSelector from "../settingSelector/SettingSelector"
import "./SettingList.css"

function SettingList({settings}) {

	return (
		settings.map(setting => {
			return <SettingSelector 
						text={setting.textKey}
						defaultValue={setting.defaultValue} 
						maxValue={setting.maxValue} 
						minValue={setting.minValue}
						stepValue={setting.stepValue} />
		})
	)
}

export default SettingList
