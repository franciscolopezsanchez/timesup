import React from "react"
import {connect} from "react-redux"
import {getPlayerPlaying} from "../../reducers/game"

function TurnInfo({player}) {
  if (!player) return null
  return <div>{"Juega " + player.name + " del Equipo " + player.team_name}</div>
}

const mapStateToProps = (state, props) => ({
  player: getPlayerPlaying(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TurnInfo)
