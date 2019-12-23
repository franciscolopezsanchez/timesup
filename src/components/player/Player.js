import React from "react"

function Player({ name, removePlayer }) {
	return (
		<div>
			<span>{name}</span>
			<button onClick={() => removePlayer(name)}>X</button>
		</div>
	)
}

export default Player
