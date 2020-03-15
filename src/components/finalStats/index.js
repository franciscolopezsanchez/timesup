import React from "react"
import {connect} from "react-redux"

import {Link} from "react-router-dom"

import {resetGame} from "../../actions/game"
import {resetStats} from "../../actions/stats"
import {resetRounds} from "../../actions/rounds"
import {resetCharacters} from "../../actions/characters"
import {getWinnerTeam} from "../../reducers/stats"

import TeamFinalScore from "../teamFinalScore"
import ActionButton from "../actionButton"

function FinalStats({resetGame, resetStats, resetRounds, resetCharacters,winnerTeam}) {
  return (
    <div>
      <div>AND THE WINNER IS {winnerTeam}</div>
      <TeamFinalScore team={0} />
      <TeamFinalScore team={1} />
      <Link to="/create">
        <ActionButton
          buttonText={"Play again"}
          handler={() => {
            resetGame()
            resetStats()
            resetRounds()
            resetCharacters()
          }}
        />
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  winnerTeam: getWinnerTeam(state),
})

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(resetGame()),
  resetStats: () => dispatch(resetStats()),
  resetRounds: () => dispatch(resetRounds()),
  resetCharacters: () => dispatch(resetCharacters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FinalStats)
