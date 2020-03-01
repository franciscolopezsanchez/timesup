import React from "react"
import {connect} from "react-redux"

import {getRightAnswersPerPlayer} from "../../reducers/stats"

function TurnScore({rightAnswers, player}) {
  return <div>{rightAnswers} aciertos</div>
}

const mapStateToProps = (state, props) => ({
  rightAnswers: getRightAnswersPerPlayer(state, props.player),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TurnScore)
