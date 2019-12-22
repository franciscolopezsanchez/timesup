import { CREATE_PLAYER, REMOVE_PLAYER } from "../actions/player"

const initialState = {
  players: [
    { name: "Jesus", team: 0 },
    { name: "Curro", team: 1 }
  ]
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          { name: action.player_name, team: action.team_id }
        ]
      }

    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(value => {
          return value === action.player_name
        })
      }

    default:
      return state
  }
}
export default players

export const getPlayers = state => state.players.players
