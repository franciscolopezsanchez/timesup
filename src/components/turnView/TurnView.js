import React from "react"
import Title from "../title/Title"
import TurnScore from "../turnScore/TurnScore"
import CharacterCard from "../characterCard/CharacterCard"
import Timer from "../timer/Timer"
import ActionButton from "../actionButton/ActionButton"
import {useTranslation} from "react-i18next"

function TurnView({finishPlaying}) {
	const {t} = useTranslation()

	return (
		<div>
			<Title />
			<TurnScore />
			<CharacterCard />
			<Timer seconds={3} handler={finishPlaying} />
			<ActionButton buttonText={t("Right answer")} />
			<ActionButton buttonText={t("Next character")} />
		</div>
	)
}

export default TurnView
