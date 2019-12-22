import React from "react"
import "./GameCreation.css"
import Title from "../title/Title"
import PlayerList from "../playerList/PlayerList"
import SettingList from "../settingList/SettingList"

function GameCreation() {
	return (
		<div>
			<Title />
			<PlayerList />
			<PlayerList />
			<SettingList />
		</div>
	)
}

export default GameCreation
