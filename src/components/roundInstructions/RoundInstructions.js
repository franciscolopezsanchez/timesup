import React from "react"
import "./RoundInstructions.css"
import Title from "../title/Title"
import InstructionsField from "../instructionsField/InstructionsField"
import TurnInfo from "../turnInfo/TurnInfo"
import {useTranslation} from "react-i18next"
import ActionButton from "../actionButton/ActionButton"

function RoundInstructions({round, playerPlaying, startRound}) {
	const {t} = useTranslation()

	return (
		<div>
			<Title />
			<InstructionsField round={round} />
			<TurnInfo playerPlaying={playerPlaying} />
			<ActionButton buttonText={t("Start")} handler={startRound} />
		</div>
	)
}

export default RoundInstructions
