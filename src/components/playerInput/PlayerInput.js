import React, { useState } from "react"

function PlayerInput({ createPlayer }) {
	const [player, setPlayer] = useState("")
	return (
		<div>
			<input
				type="text"
				value={player}
				onChange={e => setPlayer(e.target.value)}
				onBlur={() => {
					createPlayer(player, 0)
					setPlayer("")
				}}
			/>
		</div>
	)
}

export default PlayerInput
