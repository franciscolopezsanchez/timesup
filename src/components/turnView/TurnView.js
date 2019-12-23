import React from "react"
import Title from "../title/Title"
import TurnScore from "../turnScore/TurnScore"
import CharacterCard from "../characterCard/CharacterCard"
import TurnTimer from "../turnTimer/TurnTimer"
import ActionButton from "../actionButton/ActionButton"
import {useTranslation} from "react-i18next"

function TurnView() {
	const {t} = useTranslation()

	return (
		<div>
			<Title />
			<TurnScore />
			<CharacterCard />
			<TurnTimer />
			<ActionButton buttonText={t("Right answer")} />
			<ActionButton buttonText={t("Next character")} />
			<ActionButton />
			<ActionButton />
		</div>
	)
}

export default TurnView
