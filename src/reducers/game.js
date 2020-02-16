import {CREATE_GAME} from "../actions/game"

const initialState = {
  round: 0,
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

    default:
      return state
  }
}

export default game
