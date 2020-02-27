import React, {useState, useEffect} from "react"
import {connect} from "react-redux"

import {createRounds} from "../../actions/rounds"
import {getCharacters} from "../../reducers/characters"
import {getPlayers} from "../../reducers/player"
import {getNumberOfRounds} from "../../reducers/game"
import {selectNextPlayer} from "../../actions/turn"

import RoundInstructions from "../roundInstructions"
import TurnView from "../turnView"
import StatsView from "../statsView"

function GameController({
  characters,
  players,
  numberOfRounds,
  createRounds,
  selectNextPlayer,
}) {
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
    selectNextPlayer(players)
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
  players: getPlayers(state),
})

const mapDispatchToProps = dispatch => ({
  createRounds: (numberOfRounds, characters) =>
    dispatch(createRounds(numberOfRounds, characters.characters)),
  selectNextPlayer: players => dispatch(selectNextPlayer(players)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameController)
