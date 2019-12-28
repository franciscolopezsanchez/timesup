import React, {useState} from "react"
import "./SettingSelector.css"

function SettingSelector({text, defaultValue, maxValue, minValue, stepValue}) {
	const [selectorValue, setSelectorValue] = useState(defaultValue)

	function handleChange(event){
		setSelectorValue(event.target.value)
	}
	return (
		<div>
			<p>{selectorValue + " " + text}</p>
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
