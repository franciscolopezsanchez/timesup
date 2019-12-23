import React, { useState } from "react"

function PlayerInput({ teamId, createPlayer }) {
	const [player, setPlayer] = useState("")
	return (
		<div>
			<input
				type="text"
				value={player}
				onChange={e => setPlayer(e.target.value)}
				onBlur={() => {
					createPlayer(player, teamId)
					setPlayer("")
				}}
			/>
		</div>
	)
}

export default PlayerInput
