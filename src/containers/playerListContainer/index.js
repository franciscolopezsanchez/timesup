import React from "react"
import {connect} from "react-redux"
import PlayerList from "../../components/playerList"
import {createPlayer, removePlayer} from "../../actions/player"
import {getPlayersByTeam} from "../../reducers/player"

const PlayerListContainer = ({teamId, teamName, players, createPlayer, removePlayer}) => {
  return (
    <PlayerList
      teamId={teamId}
      teamName={teamName}
      players={players}
      createPlayer={createPlayer}
      removePlayer={removePlayer}
    />
  )
}

const mapStateToProps = (state, props) => ({
  players: getPlayersByTeam(state, props.teamId),
})

const mapDispatchToProps = dispatch => ({
  createPlayer: (player_name, team_id) => dispatch(createPlayer(player_name, team_id)),
  removePlayer: player_name => dispatch(removePlayer(player_name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerListContainer)
