import {CREATE_GAME, START_NEW_ROUND} from "../actions/game"
import {SELECT_NEXT_PLAYER, SELECT_LAST_PLAYER_PLAYED} from "../actions/turn"
import GetNextPlayer from "../helpers/turn"

const initialState = {
  round: 0,
  numberOfRounds: 3,
  player: null,
  last_player: null,
  game_status: null,
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return {...state, game_status: "CREATED"}

    case START_NEW_ROUND:
      return {...state, round: ++state.round}

    case SELECT_NEXT_PLAYER:
      const nextPlayer = GetNextPlayer(action.players, state.last_player)
      return {...state, player: nextPlayer}

    case SELECT_LAST_PLAYER_PLAYED:
      return {...state, last_player: state.player}

    default:
      return state
  }
}

export default game

export const getNumberOfRounds = state => state.game.numberOfRounds
export const getPlayerPlaying = state => state.game.player
export const getActualRound = state => state.game.round
