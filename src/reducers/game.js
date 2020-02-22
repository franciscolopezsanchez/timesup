import {CREATE_GAME, START_NEW_ROUND} from "../actions/game"

const initialState = {
  round: 0,
  numberOfRounds: 3,
  player: null,
  team: null,
  last_player: null,
  last_team: null,
  game_status: null,
}

const game = (state = initialState, {type, payload}) => {
  switch (type) {
    case CREATE_GAME:
      return {...state, game_status: "CREATED"}

    case START_NEW_ROUND:
      return {...state, round: ++state.round}

    default:
      return state
  }
}

export default game

export const getNumberOfRounds = state => state.numberOfRounds
