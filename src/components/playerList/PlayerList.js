import React from "react"
import "./PlayerList.css"
import PlayerInput from "../playerInput/PlayerInput"
import Player from "../player/Player"

function PlayerList({ players, createPlayer, removePlayer }) {
	if (!players) return null
	return (
		<div>
			<h3>Equipo Azul</h3>
			<ul>
				{players.map(player => {
					return (
						<li key={player.name}>
							<Player
								name={player.name}
								removePlayer={removePlayer}
							/>
						</li>
					)
				})}
				<li>
					<PlayerInput />
				</li>
			</ul>
		</div>
	)
}

export default PlayerList
