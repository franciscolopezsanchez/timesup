import React from "react"
import {connect} from "react-redux"

import {Link} from "react-router-dom"

import {resetGame} from "../../actions/game"
import {resetStats} from "../../actions/stats"

import ActionButton from "../actionButton"

function FinalStats({resetGame, resetStats}) {
  return (
    <div>
      <div>TODO: Show Final Stats</div>
      <Link to="/create">
        <ActionButton
          buttonText={"Play again"}
          handler={() => {
            resetGame()
            resetStats()
          }}
        />
      </Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(resetGame()),
  resetStats: () => dispatch(resetStats()),
})

export default connect(null, mapDispatchToProps)(FinalStats)
