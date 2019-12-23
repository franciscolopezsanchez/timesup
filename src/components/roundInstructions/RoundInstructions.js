import React from "react"
import "./RoundInstructions.css"
import Title from "../title/Title"
import InstructionsField from "../instructionsField/InstructionsField"
import TurnInfo from "../turnInfo/TurnInfo"
import {useTranslation} from "react-i18next"
import ActionButton from "../actionButton/ActionButton"
import {Link} from "react-router-dom"

function RoundInstructions() {
	const {t} = useTranslation()

	return (
		<div>
			<Title />
			<InstructionsField />
			<TurnInfo />
			<Link to="/play">
				<ActionButton buttonText={t("Start")} />
			</Link>
		</div>
	)
}

export default RoundInstructions
