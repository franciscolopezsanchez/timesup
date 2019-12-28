import React from "react"
import "./GameCreation.css"
import Title from "../title/Title"
import PlayerListContainer from "../../containers/playerListContainer/PlayerListContainer"
import SettingListContainer from "../../containers/settingListContainer/SettingListContainer"
import ActionButton from "../actionButton/ActionButton"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import SETTINGS from "../../config-files/settings-config"

function GameCreation() {
	const { t } = useTranslation()

	return (
		<div>
			<Title />
			<PlayerListContainer teamId={0} teamName="Equipo Azul" />
			<PlayerListContainer teamId={1} teamName="Equipo Amarillo" />
			<SettingListContainer settings={SETTINGS} />
			<Link to="/play">
				<ActionButton buttonText={t("Play")} />
			</Link>
		</div>
	)
}

export default GameCreation
