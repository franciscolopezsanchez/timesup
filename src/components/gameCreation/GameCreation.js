import React from "react"
import "./GameCreation.css"
import Title from "../title/Title"
import PlayerListContainer from "../../containers/playerListContainer/PlayerListContainer"
import SettingList from "../settingList/SettingList"
import ActionButton from "../actionButton/ActionButton"

function GameCreation() {
	return (
		<div>
			<Title />
			<PlayerListContainer />
			<PlayerListContainer />
			<SettingList />
			<ActionButton />
		</div>
	)
}

export default GameCreation
