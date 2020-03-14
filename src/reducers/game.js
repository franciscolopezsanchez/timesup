import {START_NEW_ROUND, FINISH_ROUND} from "../actions/game"
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
    case START_NEW_ROUND:
      return {...state, round: ++state.round, game_status: "ROUND_STARTED"}

    case FINISH_ROUND:
      return {...state, game_status: "ROUND_FINISHED"}

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
export const isRoundFinished = state => state.game.game_status === "ROUND_FINISHED"
export const isGameFinished = state => state.game.round > state.game.numberOfRounds
