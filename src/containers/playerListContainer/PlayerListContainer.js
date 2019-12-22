import React from "react"
import { connect } from "react-redux"
import PlayerList from "../../components/playerList/PlayerList"
import { createPlayer, removePlayer } from "../../actions/player"
import { getPlayers } from "../../reducers/player"

const PlayerListContainer = ({ players, charactersURLs }) => {
	return <PlayerList players={players} />
}

const mapStateToProps = (state, props) => ({
	players: getPlayers(state)
})

const mapDispatchToProps = dispatch => ({
	createPlayer: (player_name, team_id) =>
		dispatch(createPlayer(player_name, team_id)),
	removePlayer: player_name => dispatch(removePlayer(player_name))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerListContainer)
