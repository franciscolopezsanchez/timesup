import {CREATE_ROUNDS, SELECT_CHARACTER} from "../actions/rounds"

import CreateRoundsRandomizingCharacters from "../helpers/rounds"

const initialState = {
  round: [],
  actualCharacterIndex: 0,
}

const rounds = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROUNDS:
      const round = CreateRoundsRandomizingCharacters(action.characters)
      return {...state, round: round}

    case SELECT_CHARACTER:
      const numberOfCharacters = state.round.length
      const newIndex = (state.actualCharacterIndex + 1) % numberOfCharacters
      return {...state, actualCharacterIndex: newIndex}

    default:
      return state
  }
}
export default rounds

export const getNextCharacter = state => {
  const characterIndex = state.rounds.actualCharacterIndex
  return state.rounds.round[characterIndex]
}
