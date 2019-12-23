import React, {useState} from "react"
import RoundInstructions from "../roundInstructions/RoundInstructions"
import TurnView from "../turnView/TurnView"
import StatsView from "../statsView/StatsView"

function GameController() {
	const [round, setRound] = useState(1)
	const [playing, setPlaying] = useState(false)
	const [playerPlaying, setPlayerPlaying] = useState("CALCULATE PLAYER PLAYING")
	const [roundFinished, setRoundFinished] = useState(false)

	const startRoundHandler = () => {
		setPlaying(true)
	}

	return (
		<div>
			{!playing ? (
				<RoundInstructions
					round={round}
					playerPlaying={playerPlaying}
					startRound={startRoundHandler}
				/>
			) : (
				<TurnView round={round} playerPlaying={playerPlaying} />
			)}
			{roundFinished && <StatsView />}
		</div>
	)
}

export default GameController
