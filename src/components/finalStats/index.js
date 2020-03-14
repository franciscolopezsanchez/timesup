import React from "react"
import {connect} from "react-redux"

import {Link} from "react-router-dom"

import {resetGame} from "../../actions/game"
import {resetStats} from "../../actions/stats"
import {resetRounds} from "../../actions/rounds"

import ActionButton from "../actionButton"

function FinalStats({resetGame, resetStats, resetRounds}) {
  return (
    <div>
      <div>TODO: Show Final Stats</div>
      <Link to="/create">
        <ActionButton
          buttonText={"Play again"}
          handler={() => {
            resetGame()
            resetStats()
            resetRounds()
          }}
        />
      </Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(resetGame()),
  resetStats: () => dispatch(resetStats()),
  resetRounds: () => dispatch(resetRounds()),
})

export default connect(null, mapDispatchToProps)(FinalStats)
