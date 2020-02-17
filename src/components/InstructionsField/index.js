import React from "react"
import {connect} from "react-redux"

function InstructionsField({round}) {
  return (
    <div>
      <ul>
        <li>{"Ronda " + round}</li>
        <li>Explicación del personaje</li>
        <li>No se puede pasar</li>
        <li>30 segundos por turno</li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  round: state.game.round,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InstructionsField)
