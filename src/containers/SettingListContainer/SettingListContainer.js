import React from "react"
import { connect } from "react-redux"
import SettingList from "../../components/settingList/SettingList"
import { createPlayer, removePlayer } from "../../actions/settingSelector"
import { getPlayersByTeam } from "../../reducers/player"

const SettingListContainer = ({
	teamId,
	teamName,
	players,
	createPlayer,
	removePlayer
}) => {
	return (
		<SettingList
			teamId={teamId}
			teamName={teamName}
			players={players}
			createPlayer={createPlayer}
			removePlayer={removePlayer}
		/>
	)
}

const mapStateToProps = (state, props) => ({
	players: getPlayersByTeam(state, props.teamId)
})

const mapDispatchToProps = dispatch => ({
	createPlayer: (player_name, team_id) =>
		dispatch(createPlayer(player_name, team_id)),
	removePlayer: player_name => dispatch(removePlayer(player_name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingListContainer)
