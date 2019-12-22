
import React from "react"
import "./GameCreation.css"
import Title from "../title/Title"
import PlayerList from "../playerList/PlayerList"
import SettingList from "../settingList/SettingList"
import ActionButton from '../actionButton/ActionButton'

function GameCreation() {
	return (
		<div>
			<Title />
			<PlayerList />
			<PlayerList />
			<SettingList />
            <ActionButton/>
		</div>
	)
}

export default GameCreation
