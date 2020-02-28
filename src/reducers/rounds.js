import {CREATE_ROUNDS, SELECT_CHARACTER} from "../actions/rounds"

import CreateRoundsRandomizingCharacters from "../helpers/rounds"

const initialState = {
  rounds: [],
  actualCharacterIndex: 0,
}

const rounds = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROUNDS:
      const rounds = CreateRoundsRandomizingCharacters(
        action.numberOfRounds,
        action.characters
      )
      return {...state, rounds: rounds}

    case SELECT_CHARACTER:
      return {...state, actualCharacterIndex: state.actualCharacterIndex + 1}

    default:
      return state
  }
}
export default rounds

export const getNextCharacter = state => {
  const characterIndex = state.rounds.actualCharacterIndex
  return state.rounds.rounds[0][characterIndex].character
}
