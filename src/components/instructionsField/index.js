import React from "react"
import {connect} from "react-redux"

import {getActualRound} from "../../reducers/game"
import {getSecondsPerTurn} from "../../reducers/setting"

function InstructionsField({round, secondsPerTurn}) {
  return (
    <div>
      <ul>
        <li>{"Ronda " + round}</li>
        <li>Explicación del personaje</li>
        <li>No se puede pasar</li>
        <li>{secondsPerTurn + " segundos por turno"}</li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  round: getActualRound(state),
  secondsPerTurn: getSecondsPerTurn(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InstructionsField)
