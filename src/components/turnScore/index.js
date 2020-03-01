import React from "react"
import {connect} from "react-redux"

import {getRightAnswersPerPlayer} from "../../reducers/stats"
import {getPlayerPlaying} from "../../reducers/game"

function TurnScore({rightAnswers, playerPlaying}) {
  return <div>{rightAnswers} aciertos</div>
}

const mapStateToProps = (state, props) => ({
  rightAnswers: getRightAnswersPerPlayer(state, props.playerPlaying),
  playerPlaying: getPlayerPlaying(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TurnScore)
