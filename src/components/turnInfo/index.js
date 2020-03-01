import React from "react"
import {connect} from "react-redux"
import {getPlayerPlaying} from "../../reducers/game"

function TurnInfo({player}) {
  if (!player) return null
  return <div>{"Comenzará " + player.name + " del Equipo " + player.team}</div>
}

const mapStateToProps = (state, props) => ({
  player: getPlayerPlaying(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TurnInfo)
