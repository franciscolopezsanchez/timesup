import React from "react"

function Player({ name, removePlayer }) {
	if (!name) return null
	return (
		<div className="player">
			<span>{name}</span>
			<button onClick={() => removePlayer(name)}>X</button>
		</div>
	)
}

export default Player
