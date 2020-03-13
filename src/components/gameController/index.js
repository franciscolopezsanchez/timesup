import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import {createRounds} from "../../actions/rounds"
import {getCharacters} from "../../reducers/characters"
import {getPlayers} from "../../reducers/player"
import {getNumberOfRounds, getActualRound} from "../../reducers/game"
import {isRoundFinished} from "../../reducers/game"
import {selectNextPlayer} from "../../actions/turn"
import {selectCharacter} from "../../actions/rounds"
import {initiateRoundStats} from "../../actions/stats"
import {selectLastPlayerPlayed} from "../../actions/turn"

import RoundInstructions from "../roundInstructions"
import TurnView from "../turnView"

function GameController({
  characters,
  players,
  numberOfRounds,
  isRoundFinished,
  createRounds,
  selectNextPlayer,
  selectCharacter,
  initiateRoundStats,
  selectLastPlayerPlayed,
  actualRound,
}) {
  const [playing, setPlaying] = useState(false)

  const startPlayingHandler = () => {
    setPlaying(true)
  }

  const finishPlayingHandler = () => {
    setPlaying(false)
    selectCharacter()
    selectLastPlayerPlayed()
    selectNextPlayer(players)
  }

  useEffect(() => {
    createRounds(numberOfRounds, characters)
    selectNextPlayer(players)
    initiateRoundStats(numberOfRounds, players)
  }, [])

  return (
    <div>
      {isRoundFinished ? (
        <Redirect to={`/stats/${actualRound}`} />
      ) : !playing ? (
        <RoundInstructions startPlaying={startPlayingHandler} />
      ) : (
        <TurnView finishPlaying={finishPlayingHandler} />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  numberOfRounds: getNumberOfRounds(state),
  players: getPlayers(state),
  isRoundFinished: isRoundFinished(state),
  actualRound: getActualRound(state),
})

const mapDispatchToProps = dispatch => ({
  createRounds: (numberOfRounds, characters) =>
    dispatch(createRounds(numberOfRounds, characters.characters)),
  selectNextPlayer: players => dispatch(selectNextPlayer(players)),
  selectCharacter: () => dispatch(selectCharacter()),
  initiateRoundStats: (numberOfRounds, players) =>
    dispatch(initiateRoundStats(numberOfRounds, players)),
  selectLastPlayerPlayed: () => dispatch(selectLastPlayerPlayed()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameController)
