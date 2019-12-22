import React from "react"
import "./SettingSelector.css"

function SettingSelector() {
	return (
		<div>
			<p>Número de personajes por jugador</p>
			<input
				type="range"
				min="3"
				max="10"
				value="5"
				onChange={() => null}
			/>
		</div>
	)
}

export default SettingSelector
