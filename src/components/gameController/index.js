import React, {useState, useEffect} from "react"
import {connect} from "react-redux"

import {createRounds} from "../../actions/rounds"
import {getCharacters} from "../../reducers/characters"
import {getPlayers} from "../../reducers/player"
import {getNumberOfRounds} from "../../reducers/game"
import {selectNextPlayer} from "../../actions/turn"
import {selectCharacter} from "../../actions/rounds"
import {initiateRoundStats} from "../../actions/stats"

import RoundInstructions from "../roundInstructions"
import TurnView from "../turnView"
import StatsView from "../statsView"

function GameController({
  characters,
  players,
  numberOfRounds,
  createRounds,
  selectNextPlayer,
  selectCharacter,
  initiateRoundStats,
}) {
  const [playing, setPlaying] = useState(false)
  const [roundFinished, setRoundFinished] = useState(false)

  const startPlayingHandler = () => {
    setPlaying(true)
  }

  const finishPlayingHandler = () => {
    setPlaying(false)
    selectCharacter()
  }

  useEffect(() => {
    createRounds(numberOfRounds, characters)
    selectNextPlayer(players)
    initiateRoundStats(numberOfRounds, players)
  }, [])

  return (
    <div>
      {!playing ? (
        <RoundInstructions startPlaying={startPlayingHandler} />
      ) : (
        <TurnView finishPlaying={finishPlayingHandler} />
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
  selectCharacter: () => dispatch(selectCharacter()),
  initiateRoundStats: (numberOfRounds, players) =>
    dispatch(initiateRoundStats(numberOfRounds, players)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameController)
