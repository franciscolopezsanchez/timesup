import React from "react"
import "./RoundInstructions.css"
import Title from "../title/Title"
import InstructionsField from "../instructionsField/InstructionsField"
import TurnInfo from "../turnInfo/TurnInfo"
import ActionButton from '../actionButton/ActionButton'

function RoundInstructions() {
	return (
		<div>
			<Title />
            <InstructionsField />
            <TurnInfo />
            <ActionButton />
		</div>
	)
}

export default RoundInstructions
