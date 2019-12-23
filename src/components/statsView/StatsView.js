import React from "react"
import Title from "../title/Title"
import TeamScore from "../teamScore/TeamScore"
import ActionButton from "../actionButton/ActionButton"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

function StatsView() {
	const {t} = useTranslation()

	return (
		<div>
			<Title />
			<TeamScore />
			<TeamScore />
			<Link to="/play">
				<ActionButton buttonText={t("Next Round")} />
			</Link>
		</div>
	)
}

export default StatsView
