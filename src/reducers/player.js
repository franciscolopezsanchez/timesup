import {CREATE_PLAYER, REMOVE_PLAYER} from "../actions/player"

export const MIN_NUMBER_PLAYERS_PER_TEAM = 2

const initialState = {
  players: [],
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYER:
      return {
        ...state,
        players:
          state.players.filter(player => player.name === action.player_name).length === 0
            ? [
                ...state.players,
                {
                  name: action.player_name,
                  team: action.team_id,
                  team_name: action.team_name,
                },
              ]
            : state.players,
      }

    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(value => {
          return value.name !== action.player_name
        }),
      }

    default:
      return state
  }
}
export default players

export const getPlayersByTeam = (state, teamId) => {
  if (!state || !state.players || !state.players.players) {
    return initialState
  }
  return state.players.players.filter(player => player.team === teamId)
}

export const getNumberOfPlayers = state => state.players.players.length

export const getPlayers = state => state.players.players

export const isMinNumberPlayersAllowed = state => {
  let teams = []
  state.players.players.map(player => {
    if (!teams.includes(player.team)) teams.push(player.team)
  })

  if (!teams.length) return false
  return teams.every(
    team =>
      state.players.players.filter(player => player.team === team).length >=
      MIN_NUMBER_PLAYERS_PER_TEAM
  )
}
