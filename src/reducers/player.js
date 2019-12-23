import { CREATE_PLAYER, REMOVE_PLAYER } from "../actions/player"

const initialState = {
  players: []
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYER:
      return {
        ...state,
        players:
          state.players.filter(player => player.name === action.player_name)
            .length === 0
            ? [
                ...state.players,
                { name: action.player_name, team: action.team_id }
              ]
            : state.players
      }

    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(value => {
          return value.name !== action.player_name
        })
      }

    default:
      return state
  }
}
export default players

export const getPlayersByTeam = (state, teamId) =>
  state.players.players.filter(player => player.team === teamId)
