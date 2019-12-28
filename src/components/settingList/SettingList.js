import React from "react"
import SettingSelector from "../settingSelector/SettingSelector"
import "./SettingList.css"
import SETTINGS from "../../settings-config"

function SettingList() {

	return (
		SETTINGS.map(setting => {
			return <SettingSelector 
						text={setting.text}
						defaultValue={setting.defaultValue} 
						maxValue={setting.maxValue} 
						minValue={setting.minValue}
						stepValue={setting.stepValue} />
		})
	)
}

export default SettingList
