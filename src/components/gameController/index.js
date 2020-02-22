import React, {useState, useEffect} from "react"
import {connect} from "react-redux"

import {createRounds} from "../../actions/rounds"
import {getCharacters} from "../../reducers/characters"
import {getNumberOfRounds} from "../../reducers/game"

import RoundInstructions from "../roundInstructions"
import TurnView from "../turnView"
import StatsView from "../statsView"

function GameController({characters, numberOfRounds, createRounds}) {
  const [playing, setPlaying] = useState(false)
  const [playerPlaying, setPlayerPlaying] = useState("CALCULATE PLAYER PLAYING")
  const [roundFinished, setRoundFinished] = useState(false)

  const startPlayingHandler = () => {
    setPlaying(true)
  }

  const finishPlayingHandler = () => {
    setPlaying(false)
  }

  useEffect(() => {
    createRounds(numberOfRounds, characters)
  })

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

const mapStateToProps = (state, props) => ({
  characters: getCharacters(state),
  numberOfRounds: getNumberOfRounds(state),
})

const mapDispatchToProps = dispatch => ({
  createRounds: (numberOfRounds, characters) =>
    dispatch(createRounds(numberOfRounds, characters.characters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameController)
