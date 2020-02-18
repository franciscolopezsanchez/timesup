import React, {useState} from "react"

import RoundInstructions from "../roundInstructions"
import TurnView from "../turnView"
import StatsView from "../statsView"

function GameController() {
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
          playerPlaying={playerPlaying}
          startPlaying={startPlayingHandler}
        />
      ) : (
        <TurnView playerPlaying={playerPlaying} finishPlaying={finishPlayingHandler} />
      )}
      {roundFinished && <StatsView />}
    </div>
  )
}

export default GameController
