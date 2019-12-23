import React from "react"
import "./GameCreation.css"
import Title from "../title/Title"
import PlayerListContainer from "../../containers/playerListContainer/PlayerListContainer"
import SettingList from "../settingList/SettingList"
import ActionButton from "../actionButton/ActionButton"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

function GameCreation() {
	const { t } = useTranslation()

	return (
		<div>
			<Title />
			<PlayerListContainer teamId={0} teamName="Equipo Azul" />
			<PlayerListContainer teamId={1} teamName="Equipo Amarillo" />
			<SettingList />
			<Link to="/play">
				<ActionButton buttonText={t("Play")} />
			</Link>
		</div>
	)
}

export default GameCreation
