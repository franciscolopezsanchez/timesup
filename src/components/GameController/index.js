import React, {useState} from "./node_modules/react"
import RoundInstructions from "../roundInstructions/RoundInstructions"
import TurnView from "../turnView/TurnView"
import StatsView from "../statsView/StatsView"

function GameController() {
  const [round, setRound] = useState(1)
  const [playing, setPlaying] = useState(false)
  const [playerPlaying, setPlayerPlaying] = useState("CALCULATE PLAYER PLAYING")
  const [roundFinished, setRoundFinished] = useState(false)

  const startPlayingHandler = () => {
    setPlaying(true)
  }

  const finishPlayingHandler = () => {
    setPlaying(false)
  }

  return (
    <div>
      {!playing ? (
        <RoundInstructions
          round={round}
          playerPlaying={playerPlaying}
          startPlaying={startPlayingHandler}
        />
      ) : (
        <TurnView
          round={round}
          playerPlaying={playerPlaying}
          finishPlaying={finishPlayingHandler}
        />
      )}
      {roundFinished && <StatsView />}
    </div>
  )
}

export default GameController
