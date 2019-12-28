import React, {useState} from "react"
import "./SettingSelector.css"
import { useTranslation } from "react-i18next"

function SettingSelector({id, text, defaultValue, maxValue, minValue, stepValue, onSetSetting}) {
	const { t } = useTranslation()

	const [selectorValue, setSelectorValue] = useState(defaultValue)

	function handleChange(event){
		setSelectorValue(event.target.value)
		console.log(selectorValue)
		onSetSetting(id, selectorValue)
	}
	return (
		<div>
			<p>{selectorValue + " " + t(text)}</p>
			<input
				type="range"
				min={minValue}
				max={maxValue}
				step={stepValue}
				value={selectorValue}
				onChange={handleChange}
			/>
		</div>
	)
}

export default SettingSelector
