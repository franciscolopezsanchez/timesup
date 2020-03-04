import {CREATE_ROUNDS, SELECT_CHARACTER, REMOVE_CHARACTER} from "../actions/rounds"

import CreateRoundsRandomizingCharacters from "../helpers/rounds"

const initialState = {
  characters: [],
  actualCharacterIndex: 0,
}

const rounds = (state = initialState, action) => {
  const calculateNextIndex = () => {
    const numberOfCharacters = state.characters.length
    const newIndex = (state.actualCharacterIndex + 1) % numberOfCharacters
    return newIndex
  }

  switch (action.type) {
    case CREATE_ROUNDS:
      const characters = CreateRoundsRandomizingCharacters(action.characters)
      return {...state, characters: characters}

    case SELECT_CHARACTER:
      const newIndex = calculateNextIndex()
      return {...state, actualCharacterIndex: newIndex}

    case REMOVE_CHARACTER:
      state.characters.splice(state.actualCharacterIndex, 1)
      const array = state.characters
      let index = state.actualCharacterIndex

      if (state.characters.length === state.actualCharacterIndex) index = 0
      return {...state, characters: array, actualCharacterIndex: index}

    default:
      return state
  }
}
export default rounds

export const getNextCharacter = state => {
  const characterIndex = state.rounds.actualCharacterIndex
  return state.rounds.characters[characterIndex]
}

export const getNumberCharactersLeft = state => {
  return state.rounds.characters.length
}
